import { NextResponse } from "next/server";
import OpenAI from "openai";

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Make sure this is set in Vercel env vars
});

// Handle POST requests from the chat frontend
export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request: 'messages' array required" },
        { status: 400 }
      );
    }

    // Send conversation to OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // you can swap for "gpt-4o" if you want full power
      messages: messages,
    });

    const reply = response.choices[0]?.message?.content || "";

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch response from OpenAI" },
      { status: 500 }
    );
  }
}
