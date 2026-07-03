import { NextRequest, NextResponse } from "next/server";
import { readJson, writeJson } from "@/lib/server/blob";
import { currentAccount, progressKey } from "@/lib/server/auth";
import { emptyProgress, type ProgressDoc } from "@/lib/profileTypes";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const acc = await currentAccount();
  if (!acc) return NextResponse.json({ error: "Not logged in." }, { status: 401 });
  const profileId = request.nextUrl.searchParams.get("profileId") ?? "";
  if (!acc.profiles.some((p) => p.id === profileId))
    return NextResponse.json({ error: "Profile not found." }, { status: 404 });
  const doc = (await readJson<ProgressDoc>(progressKey(acc.id, profileId))) ?? emptyProgress();
  return NextResponse.json({ progress: doc });
}

export async function POST(request: NextRequest) {
  const acc = await currentAccount();
  if (!acc) return NextResponse.json({ error: "Not logged in." }, { status: 401 });
  const body = await request.json();
  const profileId = String(body.profileId ?? "");
  if (!acc.profiles.some((p) => p.id === profileId))
    return NextResponse.json({ error: "Profile not found." }, { status: 404 });
  const doc = body.progress as ProgressDoc;
  if (!doc || doc.version !== 1)
    return NextResponse.json({ error: "Bad progress document." }, { status: 400 });
  // Last-write-wins guarded by updatedAt so a stale device can't clobber newer work.
  const key = progressKey(acc.id, profileId);
  const existing = await readJson<ProgressDoc>(key);
  if (existing && existing.updatedAt > doc.updatedAt) {
    return NextResponse.json({ progress: existing, stale: true });
  }
  await writeJson(key, doc);
  return NextResponse.json({ ok: true });
}
