import { googleFontsCssUrl, googleFontStack } from "./google-fonts";
import type {
  Density,
  ForgeState,
  MotionStyle,
  Radius,
  ShadowStyle,
  TypeVoice,
} from "./types";

type RGB = { r: number; g: number; b: number };

const FONT_STACKS: Record<TypeVoice, string> = {
  instrument: '"Geist", "Helvetica Neue", Arial, sans-serif',
  editorial: '"Newsreader", Georgia, "Times New Roman", serif',
  system:
    'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
};

const RADII: Record<Radius, string> = {
  sharp: "0px",
  soft: "0.625rem",
  round: "100px",
};
const DENSITIES: Record<
  Density,
  { space: string; control: string; section: string }
> = {
  airy: { space: "0.3125rem", control: "2.75rem", section: "2rem" },
  balanced: { space: "0.25rem", control: "2.5rem", section: "1.5rem" },
  dense: { space: "0.1875rem", control: "2.25rem", section: "1rem" },
};
/**
 * One type scale, sized by density. Every step is emitted as a Tailwind
 * `--text-*` theme key, so `text-h1` and friends exist in generated projects
 * and the design-system document describes tokens that really ship.
 */
export type TypeScaleStep = {
  key: string;
  label: string;
  role: "heading" | "sans" | "mono";
  weight: number;
  lineHeight: string;
  usage: string;
};

const TYPE_SCALE: Array<TypeScaleStep & { sizes: Record<Density, string> }> = [
  {
    key: "display",
    label: "Display",
    role: "heading",
    weight: 700,
    lineHeight: "1.1",
    usage: "Hero statements, one per screen",
    sizes: { airy: "3rem", balanced: "2.5rem", dense: "2.25rem" },
  },
  {
    key: "h1",
    label: "H1",
    role: "heading",
    weight: 700,
    lineHeight: "1.15",
    usage: "Page title",
    sizes: { airy: "2.25rem", balanced: "2rem", dense: "1.75rem" },
  },
  {
    key: "h2",
    label: "H2",
    role: "heading",
    weight: 600,
    lineHeight: "1.2",
    usage: "Section heading",
    sizes: { airy: "1.75rem", balanced: "1.5rem", dense: "1.375rem" },
  },
  {
    key: "h3",
    label: "H3",
    role: "heading",
    weight: 600,
    lineHeight: "1.3",
    usage: "Card and panel heading",
    sizes: { airy: "1.375rem", balanced: "1.25rem", dense: "1.125rem" },
  },
  {
    key: "h4",
    label: "H4",
    role: "heading",
    weight: 500,
    lineHeight: "1.35",
    usage: "Sub-heading, table group label",
    sizes: { airy: "1.125rem", balanced: "1.0625rem", dense: "1rem" },
  },
  {
    key: "body-lg",
    label: "Body LG",
    role: "sans",
    weight: 400,
    lineHeight: "1.6",
    usage: "Lead paragraph, empty-state copy",
    sizes: { airy: "1.1875rem", balanced: "1.125rem", dense: "1.0625rem" },
  },
  {
    key: "body",
    label: "Body",
    role: "sans",
    weight: 400,
    lineHeight: "1.6",
    usage: "Default text and controls",
    sizes: { airy: "1rem", balanced: "1rem", dense: "0.9375rem" },
  },
  {
    key: "body-sm",
    label: "Body SM",
    role: "sans",
    weight: 400,
    lineHeight: "1.5",
    usage: "Secondary text, table cells, helper text",
    sizes: { airy: "0.9375rem", balanced: "0.875rem", dense: "0.8125rem" },
  },
  {
    key: "caption",
    label: "Caption",
    role: "sans",
    weight: 500,
    lineHeight: "1.4",
    usage: "Labels, badges, metadata",
    sizes: { airy: "0.8125rem", balanced: "0.75rem", dense: "0.6875rem" },
  },
  {
    key: "code",
    label: "Code",
    role: "mono",
    weight: 400,
    lineHeight: "1.6",
    usage: "Code, IDs, tabular numerals",
    sizes: { airy: "0.9375rem", balanced: "0.875rem", dense: "0.8125rem" },
  },
];

const SHADOWS: Record<ShadowStyle, { sm: string; md: string; lg: string }> = {
  flat: { sm: "none", md: "none", lg: "none" },
  soft: {
    sm: "0 1px 2px rgb(0 0 0 / 0.08)",
    md: "0 8px 24px rgb(0 0 0 / 0.10)",
    lg: "0 24px 64px rgb(0 0 0 / 0.14)",
  },
  layered: {
    sm: "0 1px 2px rgb(0 0 0 / 0.12), 0 1px 8px rgb(0 0 0 / 0.06)",
    md: "0 8px 16px rgb(0 0 0 / 0.12), 0 2px 6px rgb(0 0 0 / 0.08)",
    lg: "0 32px 80px rgb(0 0 0 / 0.22)",
  },
};
const MOTION: Record<
  MotionStyle,
  { fast: string; normal: string; easing: string }
> = {
  reduced: { fast: "0ms", normal: "0ms", easing: "linear" },
  subtle: {
    fast: "120ms",
    normal: "200ms",
    easing: "cubic-bezier(0.2, 0, 0, 1)",
  },
  expressive: {
    fast: "160ms",
    normal: "320ms",
    easing: "cubic-bezier(0.16, 1, 0.3, 1)",
  },
};

function hexToRgb(hex: string): RGB {
  const value = hex.replace("#", "");
  return {
    r: Number.parseInt(value.slice(0, 2), 16),
    g: Number.parseInt(value.slice(2, 4), 16),
    b: Number.parseInt(value.slice(4, 6), 16),
  };
}

function channelLuminance(channel: number) {
  const normalized = channel / 255;
  return normalized <= 0.03928
    ? normalized / 12.92
    : ((normalized + 0.055) / 1.055) ** 2.4;
}

export function contrastRatio(first: string, second: string) {
  const luminance = (value: string) => {
    const { r, g, b } = hexToRgb(value);
    return (
      0.2126 * channelLuminance(r) +
      0.7152 * channelLuminance(g) +
      0.0722 * channelLuminance(b)
    );
  };
  const [lighter, darker] = [luminance(first), luminance(second)].sort(
    (a, b) => b - a,
  );
  return (lighter + 0.05) / (darker + 0.05);
}

export function accessibleForeground(background: string) {
  return contrastRatio(background, "#000000") >=
    contrastRatio(background, "#FFFFFF")
    ? "#000000"
    : "#FFFFFF";
}

/**
 * Renders a CSS length in px, optionally scaled by the same factors the radius
 * steps use in the generated stylesheet. One implementation so the document,
 * the token panel, and the CSS cannot disagree.
 */
export function scaleLength(value: string, factor = 1) {
  const match = /^(-?[\d.]+)(rem|px)$/.exec(value.trim());
  if (!match) return value;
  const amount = Number(match[1]) * (match[2] === "rem" ? 16 : 1) * factor;
  return `${Math.round(amount * 10) / 10}px`;
}

/**
 * Radius steps emitted by the generated @theme block.
 *
 * Control-sized steps scale freely — a large radius on a 40px control reads as a
 * pill, which is the point of choosing it. Surface-sized steps are capped: the
 * same value on a 300px panel turns it into a blob. shadcn's own primitives use
 * this idiom (`rounded-[min(var(--radius-md),10px)]`), so the cap belongs in the
 * token rather than in every component that draws a surface.
 */
export const RADIUS_STEPS: Array<{
  name: string;
  factor: number;
  cap: number | null;
  usage: string;
}> = [
  { name: "sm", factor: 0.6, cap: null, usage: "Badges, chips, small tags" },
  { name: "md", factor: 0.8, cap: null, usage: "Buttons, inputs, menu items" },
  { name: "lg", factor: 1, cap: 20, usage: "Cards, dialogs, popovers" },
  { name: "xl", factor: 1.4, cap: 28, usage: "Hero and feature containers" },
];

/** The value a radius step resolves to, cap included. */
export function radiusStepValue(
  radius: string,
  step: { factor: number; cap: number | null },
) {
  const scaled = scaleLength(radius, step.factor);
  if (step.cap === null) return scaled;
  const amount = Number.parseFloat(scaled);
  return Number.isFinite(amount) ? `${Math.min(amount, step.cap)}px` : scaled;
}

export function buildDesignTokens(state: ForgeState) {
  const density = DENSITIES[state.density];
  const shadows = SHADOWS[state.shadowStyle];
  const motion = MOTION[state.motionStyle];
  return {
    brand: {
      primary: state.primary,
      secondary: state.secondary,
      accent: state.accent,
    },
    typography: {
      sans: googleFontStack(state.bodyFont ?? "") ?? FONT_STACKS[state.typeVoice],
      heading: googleFontStack(state.headingFont ?? "") ?? FONT_STACKS[state.typeVoice],
      mono: '"SFMono-Regular", Consolas, "Liberation Mono", monospace',
    },
    typeScale: TYPE_SCALE.map(({ sizes, ...step }) => ({
      ...step,
      size: sizes[state.density],
    })),
    shape: { radius: RADII[state.radius], ...shadows },
    spacing: density,
    motion,
    light: {
      background: "#FFFFFF",
      foreground: "#111111",
      card: "#FFFFFF",
      cardForeground: "#111111",
      popover: "#FFFFFF",
      popoverForeground: "#111111",
      primary: state.primary,
      primaryForeground: accessibleForeground(state.primary),
      secondary: state.secondary,
      secondaryForeground: accessibleForeground(state.secondary),
      accent: state.accent,
      accentForeground: accessibleForeground(state.accent),
      muted: "#F4F4F5",
      mutedForeground: "#66666F",
      destructive: "#DC2626",
      destructiveForeground: "#FFFFFF",
      border: "#E4E4E7",
      input: "#D4D4D8",
      ring: state.primary,
      success: "#15803D",
      warning: "#A16207",
      info: "#0369A1",
    },
    dark: {
      background: "#0A0A0A",
      foreground: "#FAFAFA",
      card: "#111111",
      cardForeground: "#FAFAFA",
      popover: "#171717",
      popoverForeground: "#FAFAFA",
      primary: state.primary,
      primaryForeground: accessibleForeground(state.primary),
      secondary: state.secondary,
      secondaryForeground: accessibleForeground(state.secondary),
      accent: state.accent,
      accentForeground: accessibleForeground(state.accent),
      muted: "#262626",
      mutedForeground: "#A3A3A3",
      destructive: "#F87171",
      destructiveForeground: "#171717",
      border: "#303030",
      input: "#3A3A3A",
      ring: state.primary,
      success: "#4ADE80",
      warning: "#FACC15",
      info: "#38BDF8",
    },
  };
}

function semanticBlock(
  tokens:
    | ReturnType<typeof buildDesignTokens>["light"]
    | ReturnType<typeof buildDesignTokens>["dark"],
) {
  return `  --background: ${tokens.background};\n  --foreground: ${tokens.foreground};\n  --card: ${tokens.card};\n  --card-foreground: ${tokens.cardForeground};\n  --popover: ${tokens.popover};\n  --popover-foreground: ${tokens.popoverForeground};\n  --primary: ${tokens.primary};\n  --primary-foreground: ${tokens.primaryForeground};\n  --secondary: ${tokens.secondary};\n  --secondary-foreground: ${tokens.secondaryForeground};\n  --accent: ${tokens.accent};\n  --accent-foreground: ${tokens.accentForeground};\n  --muted: ${tokens.muted};\n  --muted-foreground: ${tokens.mutedForeground};\n  --destructive: ${tokens.destructive};\n  --destructive-foreground: ${tokens.destructiveForeground};\n  --border: ${tokens.border};\n  --input: ${tokens.input};\n  --ring: ${tokens.ring};\n  --status-success: ${tokens.success};\n  --status-warning: ${tokens.warning};\n  --status-info: ${tokens.info};`;
}

export function buildThemeCss(state: ForgeState) {
  const tokens = buildDesignTokens(state);
  const typeScale = tokens.typeScale
    .map(
      (step) =>
        `  --text-${step.key}: ${step.size};\n  --text-${step.key}--line-height: ${step.lineHeight};\n  --text-${step.key}--font-weight: ${step.weight};`,
    )
    .join("\n");
  return `@theme inline {
  --font-sans: ${tokens.typography.sans};
  --font-heading: ${tokens.typography.heading};
  --font-mono: ${tokens.typography.mono};
${typeScale}
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-success: var(--status-success);
  --color-warning: var(--status-warning);
  --color-info: var(--status-info);
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: min(var(--radius), 1.25rem);
  --radius-xl: min(calc(var(--radius) * 1.4), 1.75rem);
}

:root {
  color-scheme: light;
  --brand-primary: ${tokens.brand.primary};
  --brand-secondary: ${tokens.brand.secondary};
  --brand-accent: ${tokens.brand.accent};
  --radius: ${tokens.shape.radius};
  --space-unit: ${tokens.spacing.space};
  --control-height: ${tokens.spacing.control};
  --section-gap: ${tokens.spacing.section};
  --shadow-sm: ${tokens.shape.sm};
  --shadow-md: ${tokens.shape.md};
  --shadow-lg: ${tokens.shape.lg};
  --motion-fast: ${tokens.motion.fast};
  --motion-normal: ${tokens.motion.normal};
  --motion-easing: ${tokens.motion.easing};
${semanticBlock(tokens.light)}
}

.dark {
  color-scheme: dark;
${semanticBlock(tokens.dark)}
}

@media (prefers-reduced-motion: reduce) {
  :root { --motion-fast: 0ms; --motion-normal: 0ms; }
}
`;
}

/**
 * The stylesheet import a generated project needs for its chosen Google fonts.
 * CSS requires @import before any other rule, so callers put this first.
 */
export function buildFontImport(state: ForgeState) {
  const url = googleFontsCssUrl([state.headingFont, state.bodyFont]);
  return url ? `@import url("${url}");\n` : "";
}
