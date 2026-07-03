"use client";

import { useRef, useState } from "react";

interface Msg {
  role: "user" | "assistant";
  content: string;
}

const PRESETS: { label: string; prompt: string }[] = [
  { label: "Explain simply", prompt: "Can you explain this idea really simply, like I'm hearing it for the first time?" },
  { label: "Give an example", prompt: "Can you give me one worked example of this, step by step?" },
  { label: "Why does it work?", prompt: "Why does this method actually work? Where does it come from?" },
  { label: "Give me a hint", prompt: "I'm stuck — please give me just one small hint, not the answer." },
];

export default function AskAI({ context, compact = false }: { context: string; compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const send = async (text: string) => {
    const content = text.trim();
    if (!content || busy) return;
    const next: Msg[] = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next, context }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) {
        setError(data?.error ?? "Professor Pi hit a snag — try again.");
      } else {
        setMessages([...next, { role: "assistant", content: data.reply }]);
      }
    } catch {
      setError("You seem to be offline.");
    }
    setBusy(false);
    setTimeout(() => scrollRef.current?.scrollTo({ top: 99999, behavior: "smooth" }), 50);
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className={`btn btn-ghost ${compact ? "text-sm py-1.5" : ""}`}
      >
        🦉 Ask Professor Pi
      </button>
    );
  }

  return (
    <div className="card p-4 mt-2">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-slate-800">🦉 Professor Pi</h3>
        <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-slate-600" aria-label="Close">
          ✕
        </button>
      </div>
      <div ref={scrollRef} className="max-h-64 overflow-y-auto space-y-2 mb-3">
        {messages.length === 0 && (
          <p className="text-sm text-slate-500">
            Ask me anything about this topic — I&apos;ll guide you to the answer rather than just handing it over!
          </p>
        )}
        {messages.map((m, i) => (
          <div
            key={i}
            className={`text-sm rounded-xl p-2.5 whitespace-pre-wrap ${
              m.role === "user" ? "bg-indigo-50 text-indigo-900 ml-6" : "bg-slate-50 text-slate-700 mr-6"
            }`}
          >
            {m.content}
          </div>
        ))}
        {busy && <div className="text-sm text-slate-400 animate-pulse">Professor Pi is thinking…</div>}
        {error && <p className="text-sm text-red-600 bg-red-50 rounded-lg p-2">{error}</p>}
      </div>
      <div className="flex flex-wrap gap-1.5 mb-2">
        {PRESETS.map((p) => (
          <button
            key={p.label}
            onClick={() => send(p.prompt)}
            disabled={busy}
            className="text-xs font-medium bg-slate-100 hover:bg-slate-200 rounded-full px-2.5 py-1 text-slate-600"
          >
            {p.label}
          </button>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="flex gap-2"
      >
        <input
          className="input text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question…"
        />
        <button className="btn btn-primary text-sm" disabled={busy || !input.trim()}>
          Send
        </button>
      </form>
    </div>
  );
}
