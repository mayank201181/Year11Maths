"use client";

import { useState } from "react";
import { useStore } from "@/lib/store";

const AVATARS = ["🦊", "🐼", "🦄", "🐯", "🐸", "🦁", "🐙", "🦉", "🐨", "🚀", "🌟", "🎧"];

export default function ProfilePicker() {
  const { account, addProfile, editProfile, removeProfile, selectProfile, logout } = useStore();
  const [adding, setAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(AVATARS[0]);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  if (!account) return null;
  const editing = account.profiles.find((p) => p.id === editingId) ?? null;
  const formOpen = adding || editing !== null;

  const openAdd = () => {
    setAdding(true);
    setEditingId(null);
    setName("");
    setAvatar(AVATARS[Math.floor(Math.random() * AVATARS.length)]);
    setError(null);
  };

  const openEdit = (id: string) => {
    const p = account.profiles.find((x) => x.id === id);
    if (!p) return;
    setEditingId(id);
    setAdding(false);
    setName(p.name);
    setAvatar(p.avatar);
    setError(null);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const err = editing ? await editProfile(editing.id, name, avatar) : await addProfile(name, avatar);
    setBusy(false);
    if (err) {
      setError(err);
      return;
    }
    setAdding(false);
    setEditingId(null);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="card w-full max-w-lg p-8">
        <h1 className="text-2xl font-bold text-center text-slate-900">Who&apos;s studying?</h1>
        <p className="text-center text-sm text-slate-500 mt-1 mb-6">{account.familyName}</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {account.profiles.map((p) => (
            <div key={p.id} className="relative group">
              <button
                onClick={() => selectProfile(p.id)}
                className="card w-full p-4 flex flex-col items-center gap-2 hover:border-indigo-400 hover:shadow-md transition"
              >
                <span className="text-4xl">{p.avatar}</span>
                <span className="font-semibold text-slate-800">{p.name}</span>
              </button>
              <button
                onClick={() => openEdit(p.id)}
                className="absolute top-1.5 right-1.5 text-xs bg-slate-100 hover:bg-slate-200 rounded-full px-2 py-1 opacity-0 group-hover:opacity-100 transition"
                aria-label={`Edit ${p.name}`}
              >
                ✏️
              </button>
            </div>
          ))}
          {!formOpen && (
            <button
              onClick={openAdd}
              className="w-full p-4 rounded-2xl border-2 border-dashed border-slate-300 text-slate-400 hover:border-indigo-400 hover:text-indigo-500 transition flex flex-col items-center gap-2"
            >
              <span className="text-3xl">＋</span>
              <span className="font-semibold text-sm">Add learner</span>
            </button>
          )}
        </div>

        {formOpen && (
          <form onSubmit={submit} className="mt-6 border-t border-slate-200 pt-5 space-y-4">
            <h2 className="font-semibold text-slate-800">{editing ? `Edit ${editing.name}` : "New learner"}</h2>
            <input
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First name"
              required
              maxLength={30}
            />
            <div className="flex flex-wrap gap-2">
              {AVATARS.map((a) => (
                <button
                  type="button"
                  key={a}
                  onClick={() => setAvatar(a)}
                  className={`text-2xl p-1.5 rounded-xl border-2 transition ${
                    avatar === a ? "border-indigo-500 bg-indigo-50" : "border-transparent hover:bg-slate-100"
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
            {error && <p className="text-sm text-red-600 bg-red-50 rounded-lg p-2.5">{error}</p>}
            <div className="flex gap-2 items-center">
              <button className="btn btn-primary" disabled={busy}>
                {editing ? "Save" : "Add"}
              </button>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => {
                  setAdding(false);
                  setEditingId(null);
                }}
              >
                Cancel
              </button>
              {editing && account.profiles.length > 0 && (
                <button
                  type="button"
                  className="ml-auto text-sm text-red-500 hover:text-red-700"
                  onClick={async () => {
                    if (confirm(`Delete ${editing.name}'s profile and all their progress? This can't be undone.`)) {
                      await removeProfile(editing.id);
                      setEditingId(null);
                    }
                  }}
                >
                  Delete profile
                </button>
              )}
            </div>
          </form>
        )}

        <div className="text-center mt-8">
          <button onClick={logout} className="text-sm text-slate-400 hover:text-slate-600">
            Log out of {account.familyName}
          </button>
        </div>
      </div>
    </main>
  );
}
