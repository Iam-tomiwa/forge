import { FRAMEWORK_KEYS } from "./frameworks";
import { findGoogleFont } from "./google-fonts";
import { DEFAULT_STATE, type ForgeState, type PresetKey } from "./types";

/**
 * 3 added the Google font overrides; 2 added the framework selection. Older
 * configurations load with the newer fields at their defaults.
 */
export const FORGE_SCHEMA_VERSION = 3;

type PresetDefinition = {
  name: string;
  description: string;
  values: Pick<ForgeState, "primary" | "secondary" | "accent" | "typeVoice" | "radius" | "density" | "themeMode" | "shadowStyle" | "motionStyle">;
};

export const FORGE_PRESETS: Record<Exclude<PresetKey, "custom">, PresetDefinition> = {
  "neutral-product": {
    name: "Neutral product",
    description: "Quiet surfaces with a sharp signal color.",
    values: {
      primary: "#D7F75B",
      secondary: "#8CA6FF",
      accent: "#F5A65B",
      typeVoice: "instrument",
      radius: "soft",
      density: "balanced",
      themeMode: "system",
      shadowStyle: "soft",
      motionStyle: "subtle",
    },
  },
  "editorial-studio": {
    name: "Editorial studio",
    description: "Warm paper, serif display type, and spacious composition.",
    values: {
      primary: "#1B4332",
      secondary: "#DDBEA9",
      accent: "#E76F51",
      typeVoice: "editorial",
      radius: "sharp",
      density: "airy",
      themeMode: "light",
      shadowStyle: "flat",
      motionStyle: "subtle",
    },
  },
  "bold-commerce": {
    name: "Bold commerce",
    description: "High contrast, rounded controls, and energetic feedback.",
    values: {
      primary: "#6D28D9",
      secondary: "#06B6D4",
      accent: "#F97316",
      typeVoice: "system",
      radius: "round",
      density: "balanced",
      themeMode: "light",
      shadowStyle: "layered",
      motionStyle: "expressive",
    },
  },
};

const enumValues = {
  projectType: ["dashboard", "landing", "web-app"],
  framework: FRAMEWORK_KEYS,
  packageManager: ["pnpm", "npm", "yarn"],
  typeVoice: ["instrument", "editorial", "system"],
  radius: ["sharp", "soft", "round"],
  density: ["airy", "balanced", "dense"],
  themeMode: ["light", "dark", "system"],
  shadowStyle: ["flat", "soft", "layered"],
  motionStyle: ["reduced", "subtle", "expressive"],
  presetKey: ["neutral-product", "editorial-studio", "bold-commerce", "custom"],
} as const;

function isHex(value: unknown): value is string {
  return typeof value === "string" && /^#[0-9a-f]{6}$/i.test(value);
}

function enumValue<K extends keyof typeof enumValues>(key: K, value: unknown, fallback: ForgeState[K]) {
  return (enumValues[key] as readonly unknown[]).includes(value) ? (value as ForgeState[K]) : fallback;
}

export function sanitizeAssetFileName(value: string) {
  return value.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-+|-+$/g, "") || "brand-mark";
}

export function parseForgeState(input: unknown): ForgeState {
  const source = input && typeof input === "object" ? (input as Record<string, unknown>) : {};
  return {
    projectName: typeof source.projectName === "string" ? source.projectName.slice(0, 48) : DEFAULT_STATE.projectName,
    projectType: enumValue("projectType", source.projectType, DEFAULT_STATE.projectType),
    framework: enumValue("framework", source.framework, DEFAULT_STATE.framework),
    packageManager: enumValue("packageManager", source.packageManager, DEFAULT_STATE.packageManager),
    primary: isHex(source.primary) ? source.primary.toUpperCase() : DEFAULT_STATE.primary,
    secondary: isHex(source.secondary) ? source.secondary.toUpperCase() : DEFAULT_STATE.secondary,
    accent: isHex(source.accent) ? source.accent.toUpperCase() : DEFAULT_STATE.accent,
    typeVoice: enumValue("typeVoice", source.typeVoice, DEFAULT_STATE.typeVoice),
    // A family is only accepted when it exists in the bundled index, which is
    // what keeps an imported configuration from injecting a stylesheet URL.
    headingFont: findGoogleFont(source.headingFont as string | null)?.family ?? null,
    bodyFont: findGoogleFont(source.bodyFont as string | null)?.family ?? null,
    radius: enumValue("radius", source.radius, DEFAULT_STATE.radius),
    density: enumValue("density", source.density, DEFAULT_STATE.density),
    themeMode: enumValue("themeMode", source.themeMode, DEFAULT_STATE.themeMode),
    shadowStyle: enumValue("shadowStyle", source.shadowStyle, DEFAULT_STATE.shadowStyle),
    motionStyle: enumValue("motionStyle", source.motionStyle, DEFAULT_STATE.motionStyle),
    presetKey: enumValue("presetKey", source.presetKey, DEFAULT_STATE.presetKey),
    logoFileName: typeof source.logoFileName === "string" ? sanitizeAssetFileName(source.logoFileName) : null,
    logoDataUrl: typeof source.logoDataUrl === "string" && source.logoDataUrl.startsWith("data:image/") ? source.logoDataUrl : null,
  };
}

export function applyPreset(state: ForgeState, key: Exclude<PresetKey, "custom">): ForgeState {
  return { ...state, ...FORGE_PRESETS[key].values, presetKey: key };
}

export function serializePortableState(state: ForgeState) {
  const { logoDataUrl: _logoDataUrl, ...portable } = state;
  return JSON.stringify({ schemaVersion: FORGE_SCHEMA_VERSION, state: portable }, null, 2);
}

export function parsePortableState(input: string) {
  const parsed = JSON.parse(input) as { schemaVersion?: unknown; state?: unknown } | unknown;
  if (parsed && typeof parsed === "object" && "state" in parsed) {
    const version = Number((parsed as { schemaVersion?: unknown }).schemaVersion ?? 1);
    if (!Number.isInteger(version) || version < 1) throw new Error("Invalid Forge schema version");
    if (version > FORGE_SCHEMA_VERSION) throw new Error(`This configuration requires Forge schema ${version}`);
    return parseForgeState((parsed as { state: unknown }).state);
  }
  return parseForgeState(parsed);
}
