import { ImageResponse } from "next/og";
import { SITE_DESCRIPTION, SITE_FRAMEWORKS, SITE_TAGLINE } from "@/lib/site";

// The static export needs every route to declare itself static, images included.
export const dynamic = "force-static";

export const alt = `Forge — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#0a0f16";
const PAPER = "#f2f4f3";
const MUTED = "#9fb0bb";
const FAINT = "#7d8b95";
const PRIMARY = "#d7f75b";

/** The social card, generated at build time so it can never fall behind the copy. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: INK, padding: "72px 80px", borderTop: `6px solid ${PRIMARY}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="60" height="60" viewBox="0 0 32 32">
            <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="none" stroke={PRIMARY} strokeOpacity="0.55" />
            <g fill={PRIMARY} transform="translate(3.2 3.2) scale(0.8)">
              <path d="M5.7 8.5 L11.2 6 H24.7 A1.6 1.6 0 0 1 26.3 7.6 V12.9 A1.6 1.6 0 0 1 24.7 14.5 H11.2 L5.7 12 Z" />
              <rect x="14.3" y="14.5" width="3.4" height="11.5" rx="1.7" />
            </g>
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 34, fontWeight: 800, color: PAPER, letterSpacing: -1.5 }}>forge</div>
            <div style={{ fontSize: 14, color: FAINT, letterSpacing: 3 }}>FRONTEND SYSTEMS</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0 20px", fontSize: 68, fontWeight: 800, color: PAPER, letterSpacing: -3, lineHeight: 1.08 }}>
            <span>Turn brand decisions</span>
            <span>into a</span>
            <span style={{ color: PRIMARY }}>bootable</span>
            <span>frontend.</span>
          </div>
          <div style={{ fontSize: 26, color: MUTED, maxWidth: 940, lineHeight: 1.4 }}>{SITE_DESCRIPTION}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontSize: 17, color: FAINT, letterSpacing: 1.5 }}>{SITE_FRAMEWORKS.join("  ·  ").toUpperCase()}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 16, color: FAINT, letterSpacing: 1.2 }}>
            <div style={{ width: 9, height: 9, borderRadius: 2, background: PRIMARY }} />
            LOCAL-FIRST · MIT LICENSED
          </div>
        </div>
      </div>
    ),
    size,
  );
}
