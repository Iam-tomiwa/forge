import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

/**
 * components/patterns/*.tsx are the real React patterns: the Forge wizard
 * renders them live, and every React starter ships the same source. This script
 * mirrors those files into lib/patterns/react.ts, swapping the app's import
 * specifiers for the ones each framework's layout uses.
 */
const root = resolve(import.meta.dirname, "..");

const PATTERNS = [
  { key: "empty-state", fileName: "empty-state.tsx" },
  { key: "error-state", fileName: "error-state.tsx" },
  { key: "suspense-container", fileName: "suspense-container.tsx" },
  { key: "combo-box", fileName: "combo-box.tsx" },
  { key: "data-table", fileName: "data-table.tsx" },
  { key: "toast-provider", fileName: "toast-provider.tsx" },
];

function templateLiteral(source) {
  return source
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${")
    // Only after escaping do the app's specifiers become real interpolations.
    .replace(/"@\/lib\/utils"/g, '"${utils}"')
    .replace(/"@\/components\/ui\//g, '"${ui}/');
}

const entries = PATTERNS.map(({ key, fileName }) => {
  const source = readFileSync(resolve(root, "components/patterns", fileName), "utf8");
  return `    "${key}": {\n      fileName: "${fileName}",\n      content: \`${templateLiteral(source)}\`,\n    },`;
}).join("\n");

const module = `import type { PatternKey } from "../types";
import type { PatternContext, PatternSource } from "./shared";

/**
 * Generated from components/patterns/*.tsx by scripts/sync-patterns.mjs.
 * Edit the .tsx files — the wizard renders those same modules — then run
 * \`npm run sync:patterns\`. npm run verify checks that the two stay identical.
 */
export function buildReactPatterns(context: PatternContext): Record<PatternKey, PatternSource> {
  const { utils, ui } = context;
  return {
${entries}
  };
}

export function buildReactBarrel(keys: PatternKey[], sources: Record<PatternKey, PatternSource>) {
  return \`\${keys.map((key) => \`export * from "./\${sources[key].fileName.replace(/\\.tsx$/, "")}";\`).join("\\n")}\\n\`;
}
`;

writeFileSync(resolve(root, "lib/patterns/react.ts"), module);
console.log(`Mirrored ${PATTERNS.length} React patterns from components/patterns into lib/patterns/react.ts.`);
