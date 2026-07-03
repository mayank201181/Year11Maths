import { NextResponse } from "next/server";
import { currentAccount, toPublic } from "@/lib/server/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const acc = await currentAccount();
  if (!acc) return NextResponse.json({ account: null }, { status: 401 });
  return NextResponse.json({ account: toPublic(acc) });
}
