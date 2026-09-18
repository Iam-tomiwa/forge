import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

/**
 * The generator runs in the browser, so the design skill has to be bundled as a
 * module rather than read from disk. docs/design-skill.md stays the source of
 * truth; this script mirrors it into lib/design-skill.ts.
 */
const root = resolve(import.meta.dirname, "..");
const source = readFileSync(resolve(root, "docs/design-skill.md"), "utf8");
const escaped = source.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");

const module = `/**
 * Generated from docs/design-skill.md by scripts/sync-design-skill.mjs.
 * Edit the markdown, then run \`npm run sync:skill\`. npm run verify checks that
 * the two stay identical.
 */
export const DESIGN_SKILL_NAME = "website-build";

export const DESIGN_SKILL_SOURCE = \`${escaped}\`;
`;

writeFileSync(resolve(root, "lib/design-skill.ts"), module);
console.log(`Mirrored ${source.split("\n").length} lines of docs/design-skill.md into lib/design-skill.ts.`);
