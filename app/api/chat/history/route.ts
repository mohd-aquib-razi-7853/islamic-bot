import { supabase } from "@/lib/supabase";
import { getClientIp } from "@/lib/getClientIp";
import { CACHE_ONE_YEAR } from "next/dist/lib/constants";

export async function GET() {
  const ipAddress = await getClientIp();

  // Get user by IP
  const { data: user } = await supabase
    .from("users")
    .select("id")
    .eq("ip_address", ipAddress)
    .single();

  if (!user) {
    return Response.json({ messages: [] });
  }

  // Get the latest chat for this user
  const { data: chat } = await supabase
    .from("chats")
    .select("id")
    .eq("user_id", user.id)
    .order("updated_at", { ascending: false })
    .limit(1)
    .single();

  if (!chat) {
    return Response.json({ messages: [] });
  }

  // Get all messages for this chat
  const { data: messages, error } = await supabase
    .from("messages")
    .select("*")
    .eq("chat_id", chat.id)
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Error loading messages:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ messages: messages || [], chatId: chat.id });
}
