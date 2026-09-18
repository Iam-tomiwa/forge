import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

/**
 * Google's font metadata sends no CORS header, so the browser cannot read it
 * directly. This script bundles the family index instead: search stays local and
 * instant, the app works offline, and no API key is involved. Re-run it to pick
 * up newly published families.
 */
const root = resolve(import.meta.dirname, "..");
const SOURCE = "https://fonts.google.com/metadata/fonts";

/** Weights the generated type scale can ask for. */
const WANTED = [400, 500, 600, 700];

const CATEGORIES = {
  "Sans Serif": "s",
  Serif: "r",
  Display: "d",
  Handwriting: "h",
  Monospace: "m",
};

const response = await fetch(SOURCE);
if (!response.ok) throw new Error(`Google Fonts metadata responded ${response.status}`);
const metadata = await response.json();

const families = metadata.familyMetadataList
  .filter((family) => CATEGORIES[family.category] && family.subsets.includes("latin"))
  .sort((a, b) => (a.popularity ?? 1e6) - (b.popularity ?? 1e6))
  .map((family) => {
    const upright = Object.keys(family.fonts).filter((weight) => !weight.endsWith("i")).map(Number);
    const axis = family.axes?.find((item) => item.tag === "wght");
    // A variable family covers every weight between its min and max.
    const supports = (weight) => (axis ? weight >= axis.min && weight <= axis.max : upright.includes(weight));
    const mask = WANTED.reduce((total, weight, index) => (supports(weight) ? total | (1 << index) : total), 0);
    return `${family.family}|${CATEGORIES[family.category]}|${mask || 1}`;
  });

const module = `/**
 * Generated from ${SOURCE} by scripts/sync-google-fonts.mjs.
 * Each entry is "Family|category|weightMask", ordered by Google's popularity
 * ranking. The mask covers ${WANTED.join(", ")} as bits 1, 2, 4, 8.
 */
export const GOOGLE_FONT_WEIGHTS = [${WANTED.join(", ")}] as const;

export type GoogleFontCategory = "s" | "r" | "d" | "h" | "m";

export const GOOGLE_FONT_INDEX: string[] = ${JSON.stringify(families, null, 0).replace(/","/g, '",\n  "').replace(/^\[/, "[\n  ").replace(/\]$/, ",\n]")};
`;

writeFileSync(resolve(root, "lib/google-fonts-index.ts"), module);
console.log(`Bundled ${families.length} Google font families into lib/google-fonts-index.ts.`);
