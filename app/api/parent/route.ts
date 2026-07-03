import { NextResponse } from "next/server";
import { readJson } from "@/lib/server/blob";
import { currentAccount, progressKey, verifySecret } from "@/lib/server/auth";
import { emptyProgress, type ProgressDoc } from "@/lib/profileTypes";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const acc = await currentAccount();
  if (!acc) return NextResponse.json({ error: "Not logged in." }, { status: 401 });
  const body = await request.json();
  const pin = String(body.pin ?? "");
  if (!verifySecret(pin, acc.pinHash))
    return NextResponse.json({ error: "Wrong PIN." }, { status: 403 });
  const learners = await Promise.all(
    acc.profiles.map(async (p) => {
      const doc = (await readJson<ProgressDoc>(progressKey(acc.id, p.id))) ?? emptyProgress();
      return { profile: p, progress: doc };
    })
  );
  return NextResponse.json({ learners });
}
