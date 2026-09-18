import { FAMILY_UI_KITS, getFramework } from "../frameworks";
import type { FrameworkKey, PatternKey } from "../types";
import { ANGULAR_PATTERN_TYPES, buildAngularBarrel, buildAngularPatterns } from "./angular";
import { buildReactBarrel, buildReactPatterns } from "./react";
import { buildSvelteBarrel, buildSveltePatterns, SVELTE_PATTERN_TYPES } from "./svelte";
import { patternLabels, resolvePatternDependencies, type PatternSource } from "./shared";
import { buildVanillaBarrel, buildVanillaPatterns } from "./vanilla";
import { buildVueBarrel, buildVuePatterns } from "./vue";

export * from "./shared";

/**
 * The pattern layer is authored once per component family and written into
 * whichever directory the target framework uses. Every framework therefore
 * exports the same component names with the same state contract.
 */
export function buildPatternFiles(framework: FrameworkKey, selectedKeys?: PatternKey[]) {
  const definition = getFramework(framework);
  const { family, layout } = definition;
  const keys = resolvePatternDependencies(selectedKeys);
  const context = { utils: layout.utilsImport, ui: layout.uiImport };

  let sources: Record<PatternKey, PatternSource>;
  let barrel: string;
  let sharedTypes: string | null = null;

  if (family === "vue") {
    sources = buildVuePatterns(context);
    barrel = buildVueBarrel(keys, sources);
  } else if (family === "svelte") {
    sources = buildSveltePatterns(context);
    barrel = buildSvelteBarrel(keys, sources);
    sharedTypes = SVELTE_PATTERN_TYPES;
  } else if (family === "angular") {
    sources = buildAngularPatterns(context);
    barrel = buildAngularBarrel(keys, sources);
    sharedTypes = ANGULAR_PATTERN_TYPES;
  } else if (family === "vanilla") {
    sources = buildVanillaPatterns(context);
    barrel = buildVanillaBarrel(keys, sources);
  } else {
    sources = buildReactPatterns(context);
    barrel = buildReactBarrel(keys, sources);
  }

  const files: Record<string, string> = {};
  for (const key of keys) {
    const source = sources[key];
    files[`${layout.patternsDir}/${source.fileName}`] = source.content;
    for (const [name, content] of Object.entries(source.siblings ?? {})) files[`${layout.patternsDir}/${name}`] = content;
  }
  if (sharedTypes) files[`${layout.patternsDir}/types.ts`] = sharedTypes;
  files[`${layout.patternsDir}/${family === "vanilla" ? "index.js" : "index.ts"}`] = barrel;
  files[`${layout.patternsDir}/README.md`] = `# Forge patterns\n\nFramework: ${definition.label}. Primitives: ${FAMILY_UI_KITS[family].name}.\n\nIncluded: ${patternLabels(keys).join(", ")}.\n\nPublic APIs support a class override and the relevant async, disabled, selection, sorting, pagination, and recovery states. DataTable → SuspenseContainer → EmptyState + ErrorState.\n`;
  return files;
}
