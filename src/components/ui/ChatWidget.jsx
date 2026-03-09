"use client";

import React, { useState, useRef, useEffect } from "react";
import { FiSend, FiMic } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Hi there! I'm TechNova AI. You can talk to me in any language. Ask anything — SEO, tech, business, or anything else!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply || "Something went wrong, try again.",
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "❌ Sorry, I couldn't connect to the server.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  // Voice recognition
  const handleVoiceInput = () => {
    const recognition =
      typeof window !== "undefined" &&
        window.SpeechRecognition
        ? new window.SpeechRecognition()
        : window.webkitSpeechRecognition
          ? new window.webkitSpeechRecognition()
          : null;

    if (recognition) {
      recognition.lang = "en-US";
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
      };
      recognition.start();
    } else {
      alert("Speech recognition not supported in this browser.");
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-50 bg-gradient-to-r from-purple-500 to-blue-500 p-[2px] rounded-full shadow-xl hover:scale-105 transition"
      >
        <div className="bg-white dark:bg-zinc-900 p-1.5 rounded-full">
          <Image
            src="/ai-bot.png"
            alt="AI Bot"
            width={48}
            height={48}
            className="rounded-full animate-pulse"
          />
        </div>
      </button>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-36 right-6 w-96 max-h-[75vh] rounded-2xl border border-white/10 shadow-2xl z-50 flex flex-col overflow-hidden animate-fade-in bg-gradient-to-br from-purple-400/30 via-blue-300/30 to-white/10 dark:from-purple-800/30 dark:via-blue-800/20 dark:to-zinc-800/20 backdrop-blur-xl">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 p-4 text-center flex flex-col items-center justify-center">
            <Image
              src="/logo.png"
              alt="TechNovaVista"
              width={120}
              height={30}
              className="object-contain mb-1"
            />
            <span className="text-white text-sm font-semibold tracking-wide">
              TechNova AI
            </span>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 text-sm text-gray-800 dark:text-white">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-xl max-w-[85%] text-sm leading-relaxed whitespace-pre-line ${msg.role === "user"
                  ? "bg-blue-100 dark:bg-blue-700 self-end ml-auto text-right"
                  : "bg-gray-200 dark:bg-zinc-700 self-start mr-auto"
                  }`}
              >
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="flex items-center border-t border-white/10 dark:border-zinc-700 px-3 py-2 bg-white/40 dark:bg-zinc-800/40 backdrop-blur-sm">
            <input
              type="text"
              className="flex-1 bg-transparent text-sm text-gray-900 dark:text-white focus:outline-none"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            {isLoading ? (
              <AiOutlineLoading3Quarters className="animate-spin text-blue-500 ml-2" />
            ) : (
              <>
                <button
                  onClick={handleVoiceInput}
                  className="text-purple-500 hover:text-purple-700 transition mr-2"
                >
                  <FiMic size={18} />
                </button>
                <button
                  onClick={sendMessage}
                  className="text-blue-500 hover:text-blue-700 transition"
                >
                  <FiSend size={18} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
