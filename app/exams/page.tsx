"use client";

import Link from "next/link";
import { EXAMS } from "@/lib/exam";
import { useStore } from "@/lib/store";

export default function ExamsPage() {
  const { progress } = useStore();
  return (
    <main className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">🏆 Mock Exams</h1>
        <p className="text-slate-500 text-sm mt-1">
          Full cross-topic exams that ramp up just like the real Edexcel IGCSE papers. Do them under timed
          conditions for the true experience.
        </p>
      </div>
      {EXAMS.map((exam) => {
        const papers = [...exam.mcqPapers, ...exam.qaPapers];
        const done = papers.filter((p) => progress.awarded[p.id] !== undefined).length;
        return (
          <div key={exam.id} className="card p-5">
            <div className="flex items-center gap-3">
              <span className="text-3xl">📄</span>
              <div>
                <h2 className="font-bold text-slate-800">{exam.title}</h2>
                <p className="text-sm text-slate-500">{exam.blurb}</p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {papers.length} papers · {done} completed
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-2 mt-4">
              {papers.map((p) => {
                const isMcq = exam.mcqPapers.some((x) => x.id === p.id);
                const inFlight = !!progress.papers[p.id];
                const stars = progress.awarded[p.id];
                return (
                  <Link
                    key={p.id}
                    href={`/exams/${exam.id}/${p.id}`}
                    className="rounded-xl border border-slate-200 p-3 hover:border-indigo-300 hover:shadow-sm transition flex items-center gap-2.5"
                  >
                    <span className="text-xl">{isMcq ? "🔤" : "✍️"}</span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-slate-700 truncate">{p.title.replace(`${exam.title} — `, "")}</p>
                      <p className="text-xs text-slate-400">
                        {p.questions.length} questions
                        {inFlight && " · ▶ resume"}
                        {stars !== undefined && !inFlight && ` · ${stars} ⭐`}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
}
