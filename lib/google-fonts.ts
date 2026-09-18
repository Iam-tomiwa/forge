import { GOOGLE_FONT_INDEX, GOOGLE_FONT_WEIGHTS, type GoogleFontCategory } from "./google-fonts-index";

export type GoogleFont = { family: string; category: GoogleFontCategory; weights: number[] };

const CATEGORY_LABELS: Record<GoogleFontCategory, string> = { s: "Sans", r: "Serif", d: "Display", h: "Handwriting", m: "Mono" };

/** What each category falls back to while the webfont loads, or if it fails to. */
const FALLBACKS: Record<GoogleFontCategory, string> = {
  s: '"Helvetica Neue", Arial, sans-serif',
  r: 'Georgia, "Times New Roman", serif',
  d: '"Helvetica Neue", Arial, sans-serif',
  h: '"Segoe Script", cursive',
  m: '"SFMono-Regular", Consolas, monospace',
};

const FONTS: GoogleFont[] = GOOGLE_FONT_INDEX.map((entry) => {
  const [family, category, mask] = entry.split("|");
  const bits = Number(mask);
  return {
    family,
    category: category as GoogleFontCategory,
    weights: GOOGLE_FONT_WEIGHTS.filter((_, index) => bits & (1 << index)),
  };
});

const BY_FAMILY = new Map(FONTS.map((font) => [font.family, font]));

export function googleFontCategoryLabel(category: GoogleFontCategory) {
  return CATEGORY_LABELS[category];
}

/** Only families in the bundled index resolve, which is also what keeps the stylesheet URL safe. */
export function findGoogleFont(family: string | null | undefined): GoogleFont | null {
  return family ? BY_FAMILY.get(family) ?? null : null;
}

export function searchGoogleFonts(query: string, limit = 60) {
  const term = query.trim().toLowerCase();
  if (!term) return FONTS.slice(0, limit);
  const starts: GoogleFont[] = [];
  const contains: GoogleFont[] = [];
  for (const font of FONTS) {
    const name = font.family.toLowerCase();
    if (name.startsWith(term)) starts.push(font);
    else if (name.includes(term)) contains.push(font);
    if (starts.length >= limit) break;
  }
  return [...starts, ...contains].slice(0, limit);
}

/** `"Inter", "Helvetica Neue", Arial, sans-serif` */
export function googleFontStack(family: string) {
  const font = findGoogleFont(family);
  if (!font) return null;
  return `"${font.family}", ${FALLBACKS[font.category]}`;
}

/**
 * The stylesheet URL for the chosen families. Names are re-read from the index
 * rather than trusted, so an imported configuration cannot inject a URL.
 */
export function googleFontsCssUrl(families: Array<string | null | undefined>) {
  const resolved = Array.from(new Set(families.map((family) => findGoogleFont(family)?.family).filter((family): family is string => Boolean(family))));
  if (!resolved.length) return null;
  const query = resolved
    .map((family) => {
      const weights = findGoogleFont(family)?.weights ?? [400];
      return `family=${family.replace(/ /g, "+")}:wght@${weights.join(";")}`;
    })
    .join("&");
  return `https://fonts.googleapis.com/css2?${query}&display=swap`;
}
