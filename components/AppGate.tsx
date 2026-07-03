"use client";

import { useStore } from "@/lib/store";
import AuthGate from "./AuthGate";
import ProfilePicker from "./ProfilePicker";
import Header from "./Header";
import Mascot from "./Mascot";

export default function AppGate({ children }: { children: React.ReactNode }) {
  const { status } = useStore();

  if (status === "loading") {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl animate-bounce">🦉</div>
          <p className="text-slate-500 mt-3 text-sm">Warming up the whiteboard…</p>
        </div>
      </main>
    );
  }
  if (status === "anon") return <AuthGate />;
  if (status === "no-profile") return <ProfilePicker />;

  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto px-4 pb-24 pt-6">{children}</div>
      <Mascot />
    </>
  );
}
