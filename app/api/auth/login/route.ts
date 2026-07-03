import { NextResponse } from "next/server";
import { readJson } from "@/lib/server/blob";
import {
  AccountRecord,
  accountKey,
  familyIndexKey,
  normaliseFamilyName,
  setSessionCookie,
  toPublic,
  verifySecret,
} from "@/lib/server/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const familyName = String(body.familyName ?? "").trim();
    const password = String(body.password ?? "");
    const idx = await readJson<{ accountId: string }>(familyIndexKey(normaliseFamilyName(familyName)));
    const acc = idx ? await readJson<AccountRecord>(accountKey(idx.accountId)) : null;
    if (!acc || !verifySecret(password, acc.passwordHash))
      return NextResponse.json({ error: "Family name or password is wrong." }, { status: 401 });
    await setSessionCookie(acc.id);
    return NextResponse.json({ account: toPublic(acc) });
  } catch (err) {
    console.error("login failed", err);
    return NextResponse.json({ error: "Something went wrong — please try again." }, { status: 500 });
  }
}
