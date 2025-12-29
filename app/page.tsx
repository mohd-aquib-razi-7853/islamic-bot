"use client";
import ChatBotDemo from "@/components/Chatbot";
import React from "react";
import {
  BookOpen,
  Star,
  Users,
  Shield,
  MessageSquare,
  Book,
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section - Centered at top */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-r from-emerald-500 to-teal-600 mb-4">
            <Book className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold  mb-3 bg-linear-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
            Islamic Assistant
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Your trusted companion for Islamic knowledge, guidance, and answers
          </p>
        </header>

        {/* Main Content - Chat on Right, Info on Left */}
        <main className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Side - Information & Features */}
          <div className="w-full lg:w-2/3">
            {/* Welcome Card */}
            <div className="bg-linear-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-lg border border-emerald-100 p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold text-emerald-800 mb-3 flex items-center gap-3">
                <Star className="w-6 h-6 text-emerald-600" />
                Welcome to Your Islamic Guide
              </h2>
              <p className="text-slate-700 mb-4">
                This AI-powered assistant is designed to provide accurate,
                respectful, and authentic information about Islam. Whether
                you&apos;re seeking knowledge about the Quran, Hadith, Islamic
                practices, or spiritual guidance, I&apos;m here to help.
              </p>
              <div className="flex items-center gap-2 text-emerald-700">
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">
                  Trusted by thousands of Muslims worldwide
                </span>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Quran Section */}
              <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-emerald-100">
                    <Book className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    Quranic Guidance
                  </h3>
                </div>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Verse explanations & Tafsir
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Surah insights & themes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Memorization techniques
                  </li>
                </ul>
              </div>

              {/* Hadith Section */}
              <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-teal-100">
                    <BookOpen className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    Hadith Knowledge
                  </h3>
                </div>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                    Authenticity verification
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                    Explanation & context
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                    Practical applications
                  </li>
                </ul>
              </div>
            </div>

            {/* Detailed Topics */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                What You Can Ask
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                    <div className="p-2 rounded-md bg-emerald-100">
                      <span className="text-emerald-600 font-semibold">Q</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800">
                        Quranic Studies
                      </h4>
                      <p className="text-sm text-slate-600">
                        Verses, interpretations, translations
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                    <div className="p-2 rounded-md bg-teal-100">
                      <span className="text-teal-600 font-semibold">H</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800">
                        Hadith Sciences
                      </h4>
                      <p className="text-sm text-slate-600">
                        Authenticity, explanations, chain analysis
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                    <div className="p-2 rounded-md bg-blue-100">
                      <span className="text-blue-600 font-semibold">F</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800">
                        Fiqh & Rulings
                      </h4>
                      <p className="text-sm text-slate-600">
                        Islamic jurisprudence, legal opinions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                    <div className="p-2 rounded-md bg-purple-100">
                      <span className="text-purple-600 font-semibold">S</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800">
                        Spiritual Guidance
                      </h4>
                      <p className="text-sm text-slate-600">
                        Tazkiyah, duas, spiritual growth
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                    <div className="p-2 rounded-md bg-amber-100">
                      <span className="text-amber-600 font-semibold">I</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800">
                        Islamic History
                      </h4>
                      <p className="text-sm text-slate-600">
                        Prophets, companions, civilizations
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                    <div className="p-2 rounded-md bg-rose-100">
                      <span className="text-rose-600 font-semibold">D</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800">
                        Daily Practices
                      </h4>
                      <p className="text-sm text-slate-600">
                        Prayer, fasting, charity, etiquette
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-8">
              <div className="bg-linear-to-r from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-5 h-5 text-slate-600" />
                  <h4 className="font-semibold text-slate-800">
                    Important Disclaimer
                  </h4>
                </div>
                <p className="text-slate-600">
                  This assistant provides information based on authentic Islamic
                  sources. While we strive for accuracy, for critical matters
                  requiring legal or personal rulings, please consult qualified
                  scholars. The responses should be used as educational guidance
                  and not as a substitute for professional Islamic scholarship.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Chatbot */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                {/* Chat Header */}
                <div className="bg-linear-to-r from-emerald-600 to-teal-600 p-5 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-full bg-white/20">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">Chat with Assistant</h2>
                      <p className="text-emerald-100 text-sm">
                        Real-time Islamic guidance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></div>
                      <span>Online</span>
                    </div>
                    <span className="text-emerald-200">•</span>
                    <span>24/7 Available</span>
                  </div>
                </div>

                {/* Chat Container */}
                <div className="h-full ">
                  <ChatBotDemo />
                </div>

                {/* Quick Actions */}
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-200">
          <div className="text-center">
            <p className="text-slate-600 mb-2">
              May Allah guide us all to the straight path
            </p>
            <p className="text-emerald-700 font-arabic text-xl mb-4">
              ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ
            </p>
            <div className="flex justify-center items-center gap-6 mt-6">
              <a
                href="#"
                className="text-slate-600 hover:text-emerald-600 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-emerald-600 text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-emerald-600 text-sm"
              >
                Contact Us
              </a>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              © {new Date().getFullYear()} Islamic Assistant. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
