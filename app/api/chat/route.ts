import { convertToModelMessages, streamText } from "ai";
import { supabase } from "@/lib/supabase";
import { google } from "@ai-sdk/google";
import { getClientIp } from "@/lib/getClientIp";

export async function POST(req: Request) {
  const {
    messages,
    isNewMessage,
  }: { messages: any[]; isNewMessage?: boolean } = await req.json();

  // Get user's IP address
  const ipAddress = await getClientIp();

  // Get or create user based on IP
  let userId: string;
  let chatId: string;

  const { data: existingUser } = await supabase
    .from("users")
    .select("id")
    .eq("ip_address", ipAddress)
    .single();

  if (existingUser) {
    userId = existingUser.id;
  } else {
    // Create new user
    const { data: newUser, error: userError } = await supabase
      .from("users")
      .insert({ ip_address: ipAddress })
      .select()
      .single();

    if (userError || !newUser) {
      console.error("Error creating user:", userError);
      return new Response("Error creating user", { status: 500 });
    }

    userId = newUser.id;
  }

  // Get or create active chat for this user
  const { data: existingChat } = await supabase
    .from("chats")
    .select("id")
    .eq("user_id", userId)
    .order("updated_at", { ascending: false })
    .limit(1)
    .single();

  if (existingChat) {
    chatId = existingChat.id;
  } else {
    // Create new chat - extract title from first message
    const firstMessage = messages[0];
    let titleText = "New Chat";

    if (typeof firstMessage === "string") {
      titleText = firstMessage;
    } else if (firstMessage && typeof firstMessage === "object") {
      // Extract text from parts array
      if (firstMessage.parts && Array.isArray(firstMessage.parts)) {
        const textPart = firstMessage.parts.find((p: any) => p.type === "text");

        titleText = textPart?.text || firstMessage.content || "New Chat";
      } else {
        titleText = firstMessage.content || "New Chat";
      }
    }

    const { data: newChat, error: chatError } = await supabase
      .from("chats")
      .insert({
        user_id: userId,
        title: String(titleText).slice(0, 50),
      })
      .select()
      .single();

    if (chatError || !newChat) {
      console.error("Error creating chat:", chatError);
      return new Response("Error creating chat", { status: 500 });
    }

    chatId = newChat.id;
  }

  // Only store the user message if it's a new message
  if (isNewMessage !== false) {
    const lastMessage = messages[messages.length - 1];

    // Extract text content properly from UIMessage
    let messageContent = "";

    if (typeof lastMessage === "string") {
      messageContent = lastMessage;
    } else if (lastMessage && typeof lastMessage === "object") {
      // Check if message has parts array
      if (lastMessage.parts && Array.isArray(lastMessage.parts)) {
        const textPart = lastMessage.parts.find((p:any) => p.type === "text");
        messageContent = textPart?.text || "";
      } else if (lastMessage.content) {
        // Fallback to content property
        messageContent =
          typeof lastMessage.content === "string" ? lastMessage.content : "";
      }
    }

    // Only store if we have content and it's a user message
    if (messageContent && lastMessage.role === "user") {
      await supabase.from("messages").insert({
        chat_id: chatId,
        role: "user",
        content: messageContent, // Store as plain text string
      });
    }
  }

  const result = streamText({
    model: google("gemini-2.5-flash"),
    messages: await convertToModelMessages(messages),
    system:
      "You are a practice muslim agent. You have advance knowledge in Quran, Hadidh,history of Islam, Fiq and a scholar in Acient Arabic language ",
    async onFinish({ text }) {
      // Store assistant response as plain string
      await supabase.from("messages").insert({
        chat_id: chatId,
        role: "assistant",
        content: text,
      });

      // Update chat timestamp
      await supabase
        .from("chats")
        .update({ updated_at: new Date().toISOString() })
        .eq("id", chatId);
    },
  });

  return result.toUIMessageStreamResponse({
    headers: {
      "X-Chat-Id": chatId,
      "X-User-Id": userId,
    },
  });
}
