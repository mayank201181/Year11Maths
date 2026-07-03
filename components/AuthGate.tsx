"use client";

import { useState } from "react";
import { useStore } from "@/lib/store";

export default function AuthGate() {
  const { signup, login } = useStore();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [familyName, setFamilyName] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const err =
      mode === "signup" ? await signup(familyName, password, pin) : await login(familyName, password);
    if (err) setError(err);
    setBusy(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="card w-full max-w-md p-8">
        <div className="text-center mb-6">
          <div className="text-5xl mb-2">🦉</div>
          <h1 className="text-2xl font-bold text-slate-900">Year 11 Maths Lab</h1>
          <p className="text-slate-500 mt-1 text-sm">
            Edexcel IGCSE Higher · guides, papers &amp; challenges
          </p>
        </div>

        <div className="flex rounded-xl bg-slate-100 p-1 mb-6">
          {(["login", "signup"] as const).map((m) => (
            <button
              key={m}
              onClick={() => {
                setMode(m);
                setError(null);
              }}
              className={`flex-1 py-2 rounded-lg text-sm font-semibold transition ${
                mode === m ? "bg-white shadow text-indigo-700" : "text-slate-500"
              }`}
            >
              {m === "login" ? "Log in" : "Create family account"}
            </button>
          ))}
        </div>

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Family name</label>
            <input
              className="input"
              value={familyName}
              onChange={(e) => setFamilyName(e.target.value)}
              placeholder="e.g. The Sharmas"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Password</label>
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={mode === "signup" ? "At least 6 characters" : "Your password"}
              required
              minLength={6}
            />
          </div>
          {mode === "signup" && (
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">
                Parent PIN <span className="text-slate-400">(4-6 digits, for the parent dashboard)</span>
              </label>
              <input
                className="input"
                inputMode="numeric"
                pattern="\d{4,6}"
                value={pin}
                onChange={(e) => setPin(e.target.value.replace(/\D/g, "").slice(0, 6))}
                placeholder="e.g. 2468"
                required
              />
            </div>
          )}
          {error && <p className="text-sm text-red-600 bg-red-50 rounded-lg p-2.5">{error}</p>}
          <button className="btn btn-primary w-full py-2.5" disabled={busy}>
            {busy ? "One moment…" : mode === "signup" ? "Create account" : "Log in"}
          </button>
        </form>
        <p className="text-xs text-slate-400 text-center mt-4">
          One account for the whole family — each learner gets their own profile and progress, synced
          across devices.
        </p>
      </div>
    </main>
  );
}
