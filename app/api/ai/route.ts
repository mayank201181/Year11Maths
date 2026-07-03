import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { currentAccount } from "@/lib/server/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

const SYSTEM_PROMPT = `You are "Professor Pi", a warm, encouraging maths tutor inside a revision app for a UK Year 11 student preparing for Edexcel IGCSE Maths (Higher tier).

Teaching style — Art of Problem Solving, strictly:
- If the student poses a problem, NEVER give the full solution straight away. Ask one guiding question back, or give only the single next hint. Only give a full worked solution if they clearly say they give up or ask to see it after trying.
- Praise specific good reasoning, not just correct answers. If they made a mistake, treat it as useful data: find the exact step where it went wrong and nudge them there.
- Derive, don't decree: when explaining a rule, show where it comes from in one or two lines, or with a tiny example.
- Prefer the elegant route and say why it's elegant. Name problem-solving strategies out loud ("try small cases", "work backwards", "draw a diagram").
- Keep answers short (usually under 150 words), age-appropriate, plain-text maths only (x², √, π, fractions as a/b — never LaTeX).
- Stay on maths and study skills. If asked about anything else, cheerfully steer back to maths.
- British English, IGCSE terminology.`;

export async function POST(request: Request) {
  const acc = await currentAccount();
  if (!acc) return NextResponse.json({ error: "Not logged in." }, { status: 401 });
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: "The AI tutor isn't switched on yet — ask a grown-up to add the API key." },
      { status: 503 }
    );
  }
  try {
    const body = await request.json();
    const context = typeof body.context === "string" ? body.context.slice(0, 4000) : "";
    const rawMessages = Array.isArray(body.messages) ? body.messages.slice(-12) : [];
    const messages = rawMessages
      .filter(
        (m: { role?: string; content?: string }) =>
          (m.role === "user" || m.role === "assistant") && typeof m.content === "string"
      )
      .map((m: { role: "user" | "assistant"; content: string }) => ({
        role: m.role,
        content: m.content.slice(0, 2000),
      }));
    if (messages.length === 0)
      return NextResponse.json({ error: "Nothing to answer." }, { status: 400 });

    const client = new Anthropic();
    const model = process.env.AI_MODEL || "claude-opus-4-8";
    const response = await client.messages.create({
      model,
      max_tokens: 800,
      system: context ? `${SYSTEM_PROMPT}\n\nCurrent topic context:\n${context}` : SYSTEM_PROMPT,
      messages,
    });
    const text = response.content
      .filter((b) => b.type === "text")
      .map((b) => (b.type === "text" ? b.text : ""))
      .join("");
    return NextResponse.json({ reply: text });
  } catch (err) {
    if (err instanceof Anthropic.RateLimitError) {
      return NextResponse.json(
        { error: "Professor Pi is a bit busy — try again in a minute." },
        { status: 429 }
      );
    }
    console.error("ai route failed", err);
    return NextResponse.json({ error: "Professor Pi hit a snag — try again." }, { status: 500 });
  }
}
