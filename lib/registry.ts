import { FAMILY_UI_KITS } from "./frameworks";
import { buildPatternFiles } from "./patterns";
import type { FrameworkFamily, FrameworkKey } from "./types";

/** Families whose CLI can install from a registry URL. spartan/ui has no registry protocol, and a vanilla project has no CLI at all. */
export type RegistryFamily = Exclude<FrameworkFamily, "angular" | "vanilla">;

/** The framework whose layout a published registry item is written against. */
const REGISTRY_SOURCE: Record<RegistryFamily, FrameworkKey> = { react: "next", vue: "vue-vite", svelte: "sveltekit" };

const REGISTRY_DEPENDENCIES: Record<RegistryFamily, string[]> = {
  react: ["lucide-react", "sonner", "clsx", "tailwind-merge"],
  vue: ["@lucide/vue", "vue-sonner", "clsx", "tailwind-merge"],
  svelte: ["@lucide/svelte", "svelte-sonner", "clsx", "tailwind-merge"],
};

const REGISTRY_NAMES: Record<RegistryFamily, string> = { react: "forge-system", vue: "forge-system-vue", svelte: "forge-system-svelte" };

export const REGISTRY_FAMILIES: RegistryFamily[] = ["react", "vue", "svelte"];

/** The published path for a family's registry item. */
export function registryPath(family: RegistryFamily) {
  return `/r/${REGISTRY_NAMES[family]}.json`;
}

export function buildForgeRegistryItem(family: RegistryFamily = "react") {
  const kit = FAMILY_UI_KITS[family];
  const files = buildPatternFiles(REGISTRY_SOURCE[family]);
  return {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: REGISTRY_NAMES[family],
    type: "registry:base",
    title: "Forge product patterns",
    description: `Accessible product patterns for ${kit.name}, including async states, data tables, combo boxes, and Sonner feedback.`,
    dependencies: REGISTRY_DEPENDENCIES[family],
    registryDependencies: ["button", "command", "popover", "sonner"],
    files: Object.entries(files).map(([path, content]) => ({ path, content, type: "registry:component", target: path })),
  };
}
