import { NextResponse } from "next/server";
import { deleteJson } from "@/lib/server/blob";
import { currentAccount, newId, progressKey, saveAccount, toPublic } from "@/lib/server/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const acc = await currentAccount();
  if (!acc) return NextResponse.json({ error: "Not logged in." }, { status: 401 });
  const body = await request.json();
  const name = String(body.name ?? "").trim();
  const avatar = String(body.avatar ?? "🙂").slice(0, 8);
  if (name.length < 1 || name.length > 30)
    return NextResponse.json({ error: "Name must be 1-30 characters." }, { status: 400 });
  if (acc.profiles.length >= 8)
    return NextResponse.json({ error: "Maximum of 8 profiles per family." }, { status: 400 });
  const profile = { id: newId("prof"), name, avatar, createdAt: Date.now() };
  acc.profiles.push(profile);
  await saveAccount(acc);
  return NextResponse.json({ account: toPublic(acc), profile });
}

export async function PATCH(request: Request) {
  const acc = await currentAccount();
  if (!acc) return NextResponse.json({ error: "Not logged in." }, { status: 401 });
  const body = await request.json();
  const profile = acc.profiles.find((p) => p.id === body.id);
  if (!profile) return NextResponse.json({ error: "Profile not found." }, { status: 404 });
  if (typeof body.name === "string" && body.name.trim()) profile.name = body.name.trim().slice(0, 30);
  if (typeof body.avatar === "string" && body.avatar) profile.avatar = body.avatar.slice(0, 8);
  await saveAccount(acc);
  return NextResponse.json({ account: toPublic(acc) });
}

export async function DELETE(request: Request) {
  const acc = await currentAccount();
  if (!acc) return NextResponse.json({ error: "Not logged in." }, { status: 401 });
  const body = await request.json();
  const idx = acc.profiles.findIndex((p) => p.id === body.id);
  if (idx === -1) return NextResponse.json({ error: "Profile not found." }, { status: 404 });
  const [removed] = acc.profiles.splice(idx, 1);
  await saveAccount(acc);
  await deleteJson(progressKey(acc.id, removed.id));
  return NextResponse.json({ account: toPublic(acc) });
}
