import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const sizeParam = parseInt(request.nextUrl.searchParams.get("size") ?? "512", 10);
  const size = [192, 512].includes(sizeParam) ? sizeParam : 512;
  const maskable = request.nextUrl.searchParams.get("maskable") === "1";
  const pad = maskable ? size * 0.12 : 0;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: 700,
            padding: pad,
          }}
        >
          <div style={{ fontSize: size * 0.32, lineHeight: 1 }}>Y11</div>
          <div style={{ fontSize: size * 0.14, letterSpacing: size * 0.01, marginTop: size * 0.04 }}>MATHS</div>
        </div>
      </div>
    ),
    { width: size, height: size }
  );
}
