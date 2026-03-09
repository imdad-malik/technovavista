import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { message } = await req.json();

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct",
        messages: [
          { role: "system", content: "You are TechNova AI, a friendly assistant." },
          { role: "user", content: message },
        ],
      }),
    });

    const data = await response.json();

    return NextResponse.json({
      reply: data.choices?.[0]?.message?.content || "No response.",
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ reply: "⚠️ Could not connect to AI server." });
  }
}
