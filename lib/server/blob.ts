// Vercel Blob used as a tiny JSON KV store.
import { put, head, del } from "@vercel/blob";

export async function readJson<T>(key: string): Promise<T | null> {
  try {
    const meta = await head(key);
    const res = await fetch(`${meta.url}?ts=${Date.now()}`, { cache: "no-store" });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function writeJson(key: string, value: unknown): Promise<void> {
  await put(key, JSON.stringify(value), {
    access: "public",
    contentType: "application/json",
    cacheControlMaxAge: 0,
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

export async function deleteJson(key: string): Promise<void> {
  try {
    await del(key);
  } catch {
    // already gone
  }
}
