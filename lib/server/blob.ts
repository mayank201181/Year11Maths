// Vercel Blob used as a tiny JSON KV store.
//
// The public CDN caches blob content by pathname and ignores query-string
// cache-busters, so overwriting a fixed path serves stale reads for minutes.
// Instead every write lands at a NEW versioned pathname (immutable, so the
// CDN can never be stale) and reads resolve the latest version via the
// metadata API (list), which is read-after-write consistent.
import { put, del, list } from "@vercel/blob";

function versionPrefix(key: string): string {
  return `${key}/v`;
}

async function latestVersion(key: string): Promise<{ pathname: string; url: string } | null> {
  const { blobs } = await list({ prefix: versionPrefix(key), limit: 1000 });
  if (blobs.length === 0) return null;
  let latest = blobs[0];
  for (const b of blobs) {
    if (b.pathname > latest.pathname) latest = b;
  }
  return latest;
}

export async function readJson<T>(key: string): Promise<T | null> {
  try {
    const latest = await latestVersion(key);
    if (!latest) return null;
    const res = await fetch(latest.url, { cache: "no-store" });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function writeJson(key: string, value: unknown): Promise<void> {
  // Zero-padded ms timestamp + random tail keeps pathnames lexicographically ordered.
  const version = `${String(Date.now()).padStart(15, "0")}-${Math.random().toString(36).slice(2, 8)}`;
  const pathname = `${versionPrefix(key)}${version}`;
  await put(pathname, JSON.stringify(value), {
    access: "public",
    contentType: "application/json",
    cacheControlMaxAge: 0,
    addRandomSuffix: false,
    allowOverwrite: true,
  });
  // Best-effort cleanup of superseded versions.
  try {
    const { blobs } = await list({ prefix: versionPrefix(key), limit: 1000 });
    const stale = blobs.filter((b) => b.pathname !== pathname).map((b) => b.url);
    if (stale.length > 0) await del(stale);
  } catch {
    // old versions are harmless — the reader always picks the newest
  }
}

export async function deleteJson(key: string): Promise<void> {
  try {
    const { blobs } = await list({ prefix: versionPrefix(key), limit: 1000 });
    if (blobs.length > 0) await del(blobs.map((b) => b.url));
  } catch {
    // already gone
  }
}
