// Family-account auth: scrypt-hashed password + parent PIN, HMAC-signed session
// cookie. One account (family) -> many learner profiles.
import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { readJson, writeJson } from "./blob";
import type { AccountPublic, Profile } from "../profileTypes";

export interface AccountRecord {
  id: string;
  familyName: string;
  familyNameKey: string; // normalised, unique
  passwordHash: string; // salt:hash hex
  pinHash: string;
  profiles: Profile[];
  createdAt: number;
}

const COOKIE = "y11m_session";
const SESSION_DAYS = 90;

function secret(): string {
  const s = process.env.AUTH_SECRET;
  if (!s) throw new Error("AUTH_SECRET is not set");
  return s;
}

export function normaliseFamilyName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export function hashSecret(value: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(value, salt, 32).toString("hex");
  return `${salt}:${hash}`;
}

export function verifySecret(value: string, stored: string): boolean {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;
  const candidate = scryptSync(value, salt, 32);
  const expected = Buffer.from(hash, "hex");
  return candidate.length === expected.length && timingSafeEqual(candidate, expected);
}

function sign(payload: string): string {
  return createHmac("sha256", secret()).update(payload).digest("hex");
}

export function makeToken(accountId: string): string {
  const exp = Date.now() + SESSION_DAYS * 24 * 3600 * 1000;
  const payload = `${accountId}.${exp}`;
  return `${payload}.${sign(payload)}`;
}

export function parseToken(token: string): string | null {
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const [accountId, expStr, sig] = parts;
  const payload = `${accountId}.${expStr}`;
  const expected = sign(payload);
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  if (Date.now() > parseInt(expStr, 10)) return null;
  return accountId;
}

export async function setSessionCookie(accountId: string): Promise<void> {
  const store = await cookies();
  store.set(COOKIE, makeToken(accountId), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: SESSION_DAYS * 24 * 3600,
    path: "/",
  });
}

export async function clearSessionCookie(): Promise<void> {
  const store = await cookies();
  store.set(COOKIE, "", { httpOnly: true, maxAge: 0, path: "/" });
}

export function accountKey(id: string): string {
  return `accounts/${id}.json`;
}

export function familyIndexKey(familyNameKey: string): string {
  return `family-index/${familyNameKey}.json`;
}

export function progressKey(accountId: string, profileId: string): string {
  return `progress/${accountId}/${profileId}.json`;
}

export async function currentAccount(): Promise<AccountRecord | null> {
  try {
    const store = await cookies();
    const token = store.get(COOKIE)?.value;
    if (!token) return null;
    const accountId = parseToken(token);
    if (!accountId) return null;
    return await readJson<AccountRecord>(accountKey(accountId));
  } catch {
    return null;
  }
}

export function toPublic(acc: AccountRecord): AccountPublic {
  return { id: acc.id, familyName: acc.familyName, profiles: acc.profiles };
}

export async function saveAccount(acc: AccountRecord): Promise<void> {
  await writeJson(accountKey(acc.id), acc);
}

export function newId(prefix: string): string {
  return `${prefix}_${randomBytes(8).toString("hex")}`;
}
