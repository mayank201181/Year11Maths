"use client";

import Link from "next/link";
import { useState } from "react";
import { useStore } from "@/lib/store";
import { rankFor } from "@/lib/ranks";

export default function Header() {
  const { profile, progress, deselectProfile, logout, syncState, dueReviewIds } = useStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const rank = rankFor(progress.stars);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200 no-print">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2 font-bold text-slate-900 shrink-0">
          <span className="text-2xl">🦉</span>
          <span className="hidden sm:inline">Year 11 Maths Lab</span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2 text-sm font-medium text-slate-600 mx-auto">
          <Link href="/" className="px-2.5 py-1.5 rounded-lg hover:bg-slate-100">
            Topics
          </Link>
          <Link href="/exams" className="px-2.5 py-1.5 rounded-lg hover:bg-slate-100">
            Mock Exams
          </Link>
          <Link href="/review" className="px-2.5 py-1.5 rounded-lg hover:bg-slate-100 relative">
            Review
            {dueReviewIds.length > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-rose-500 text-white text-[10px] font-bold rounded-full min-w-4 h-4 px-1 flex items-center justify-center">
                {dueReviewIds.length}
              </span>
            )}
          </Link>
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <span
            className="hidden sm:flex items-center gap-1 text-sm font-semibold text-amber-600 bg-amber-50 rounded-full px-2.5 py-1"
            title={`${rank.emoji} ${rank.name}`}
          >
            ⭐ {progress.stars}
          </span>
          {progress.streak.current > 0 && (
            <span className="hidden sm:flex items-center gap-1 text-sm font-semibold text-orange-600 bg-orange-50 rounded-full px-2.5 py-1">
              🔥 {progress.streak.current}
            </span>
          )}
          {syncState === "offline" && (
            <span className="text-xs text-slate-400" title="Progress saved on this device; will sync when online.">
              ⚠︎ offline
            </span>
          )}
          <div className="relative">
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="text-2xl leading-none p-1 rounded-full hover:bg-slate-100"
              aria-label="Profile menu"
            >
              {profile?.avatar ?? "🙂"}
            </button>
            {menuOpen && (
              <div
                className="absolute right-0 mt-2 card p-2 w-48 text-sm"
                onMouseLeave={() => setMenuOpen(false)}
              >
                <div className="px-3 py-2 text-slate-500">
                  {profile?.name} · {rank.emoji} {rank.name}
                </div>
                <Link
                  href="/certificate"
                  className="block px-3 py-2 rounded-lg hover:bg-slate-100"
                  onClick={() => setMenuOpen(false)}
                >
                  🏅 Certificate
                </Link>
                <Link
                  href="/parent"
                  className="block px-3 py-2 rounded-lg hover:bg-slate-100"
                  onClick={() => setMenuOpen(false)}
                >
                  👨‍👩‍👧 Parent dashboard
                </Link>
                <button
                  className="block w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100"
                  onClick={() => {
                    setMenuOpen(false);
                    deselectProfile();
                  }}
                >
                  🔄 Switch learner
                </button>
                <button
                  className="block w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-500"
                  onClick={() => logout()}
                >
                  🚪 Log out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
