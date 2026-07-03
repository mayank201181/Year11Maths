"use client";

import Link from "next/link";
import { useStore } from "@/lib/store";
import { rankFor } from "@/lib/ranks";
import { TOPICS } from "@/lib/topics";

export default function CertificatePage() {
  const { profile, progress } = useStore();
  const rank = rankFor(progress.stars);
  const guidesRead = TOPICS.filter((t) => progress.guidesRead[t.id]).length;
  const totals = Object.values(progress.analytics.perTopic).reduce(
    (acc, t) => ({ answered: acc.answered + t.answered, correct: acc.correct + t.correct }),
    { answered: 0, correct: 0 }
  );

  return (
    <main className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4 no-print">
        <Link href="/" className="text-sm text-slate-400 hover:text-slate-600">
          ← Back
        </Link>
        <button onClick={() => window.print()} className="btn btn-primary">
          🖨 Print certificate
        </button>
      </div>

      <div className="bg-white border-8 border-double border-indigo-300 rounded-lg p-10 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400">Year 11 Maths Lab</p>
        <h1 className="text-3xl font-bold text-slate-900 mt-3">Certificate of Achievement</h1>
        <p className="text-slate-500 mt-6">This certifies that</p>
        <p className="text-4xl font-bold text-indigo-700 mt-2">
          {profile?.avatar} {profile?.name}
        </p>
        <p className="text-slate-500 mt-6 leading-relaxed">
          has earned the rank of
          <br />
          <span className="text-2xl font-bold text-slate-800">
            {rank.emoji} {rank.name}
          </span>
        </p>
        <div className="flex justify-center gap-10 mt-8 text-sm text-slate-600">
          <div>
            <p className="text-2xl font-bold text-amber-500">⭐ {progress.stars}</p>
            <p>stars earned</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-indigo-500">{totals.answered}</p>
            <p>questions answered</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-emerald-500">
              {guidesRead}/{TOPICS.length}
            </p>
            <p>guides completed</p>
          </div>
        </div>
        <p className="text-xs text-slate-400 mt-10">
          Edexcel IGCSE Mathematics (Higher) · awarded {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} · signed, Professor Pi 🦉
        </p>
      </div>
    </main>
  );
}
