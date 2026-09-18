import { FRAMEWORKS, FRAMEWORK_GROUPS, FAMILY_LABELS } from "./frameworks";

/**
 * One source for the facts that appear in metadata, the sitemap, robots, and
 * structured data. Set NEXT_PUBLIC_SITE_URL before deploying: canonical tags,
 * absolute Open Graph URLs, and the sitemap are only emitted once it is known,
 * because a canonical pointing at the wrong origin is worse than none at all.
 */
function resolveOrigin() {
  // An explicit value wins; otherwise fall back to what the common hosts expose,
  // so a deploy emits canonical URLs and a real sitemap without configuration.
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.URL, // Netlify
    process.env.CF_PAGES_URL, // Cloudflare Pages
    process.env.VERCEL_URL, // preview deployments, last because it changes per build
  ];
  for (const candidate of candidates) {
    const value = candidate?.trim().replace(/\/+$/, "");
    if (!value) continue;
    return /^https?:\/\//.test(value) ? value : `https://${value}`;
  }
  return null;
}

const configured = resolveOrigin();

export const SITE_URL = configured ?? "http://localhost:3000";
export const HAS_SITE_URL = Boolean(configured);

export const SITE_NAME = "Forge";
export const SITE_TITLE = "Forge — frontend design system bootstrapper";
export const SITE_TAGLINE = "Turn brand decisions into a bootable frontend.";

/** Kept near 150 characters so search results show it whole. */
export const SITE_DESCRIPTION =
  "Turn a short product and brand brief into a bootable design system starter — tokens, shadcn components, docs, and an AI handoff — for 10 frameworks.";

/** Framework names, read from the registry so the copy cannot fall behind the product. */
export const SITE_FRAMEWORKS = FRAMEWORK_GROUPS.flatMap((group) => group.frameworks.map((key) => FRAMEWORKS[key].label));

export const SITE_FAMILIES = FRAMEWORK_GROUPS.map((group) => FAMILY_LABELS[group.family]);

export const SITE_KEYWORDS = [
  "design system generator",
  "frontend boilerplate",
  "shadcn/ui starter",
  "design tokens",
  "Tailwind CSS v4",
  "AI coding handoff",
  "AGENTS.md",
  ...SITE_FRAMEWORKS.map((framework) => `${framework} starter`),
];

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

/** Structured data describing what the page actually is: a free, browser-based tool. */
export function buildStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    alternateName: SITE_TITLE,
    description: SITE_DESCRIPTION,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    url: HAS_SITE_URL ? absoluteUrl("/") : undefined,
    image: HAS_SITE_URL ? absoluteUrl("/og.png") : undefined,
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Semantic light and dark design tokens with contrast-aware foregrounds",
      "A density-sized type scale and Google font selection",
      "Accessible ComboBox, DataTable, and async state patterns",
      `Bootable starters for ${SITE_FRAMEWORKS.join(", ")}`,
      "Generated AGENTS.md, design system document, and continuation prompt",
    ],
    license: "https://opensource.org/licenses/MIT",
  };
}
