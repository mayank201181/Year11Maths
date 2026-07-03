import { NextResponse } from "next/server";
import { readJson, writeJson } from "@/lib/server/blob";
import {
  AccountRecord,
  familyIndexKey,
  hashSecret,
  newId,
  normaliseFamilyName,
  saveAccount,
  setSessionCookie,
  toPublic,
} from "@/lib/server/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const familyName = String(body.familyName ?? "").trim();
    const password = String(body.password ?? "");
    const pin = String(body.pin ?? "");
    if (familyName.length < 2 || familyName.length > 40)
      return NextResponse.json({ error: "Family name must be 2-40 characters." }, { status: 400 });
    if (password.length < 6)
      return NextResponse.json({ error: "Password must be at least 6 characters." }, { status: 400 });
    if (!/^\d{4,6}$/.test(pin))
      return NextResponse.json({ error: "Parent PIN must be 4-6 digits." }, { status: 400 });

    const key = normaliseFamilyName(familyName);
    if (key.length < 2)
      return NextResponse.json({ error: "Family name needs some letters or numbers." }, { status: 400 });
    const existing = await readJson<{ accountId: string }>(familyIndexKey(key));
    if (existing)
      return NextResponse.json({ error: "That family name is taken — try logging in instead." }, { status: 409 });

    const acc: AccountRecord = {
      id: newId("acc"),
      familyName,
      familyNameKey: key,
      passwordHash: hashSecret(password),
      pinHash: hashSecret(pin),
      profiles: [],
      createdAt: Date.now(),
    };
    await saveAccount(acc);
    await writeJson(familyIndexKey(key), { accountId: acc.id });
    await setSessionCookie(acc.id);
    return NextResponse.json({ account: toPublic(acc) });
  } catch (err) {
    console.error("signup failed", err);
    return NextResponse.json({ error: "Something went wrong — please try again." }, { status: 500 });
  }
}
