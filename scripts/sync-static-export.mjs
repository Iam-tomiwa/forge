import { cpSync, existsSync, readFileSync, readdirSync, renameSync, rmSync, statSync, writeFileSync } from "node:fs";
import { relative, resolve, sep } from "node:path";

const output = resolve("out");
const destination = resolve("dist");

if (!existsSync(output)) throw new Error("Next.js did not create the out directory.");
rmSync(destination, { recursive: true, force: true });
cpSync(output, destination, { recursive: true });

function walk(directory) {
  return readdirSync(directory).flatMap((entry) => {
    const path = resolve(directory, entry);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

// Next names the metadata image route after the route itself, so the export
// contains an extensionless file. A plain static host would serve that as
// application/octet-stream and social scrapers would reject it.
const ogSource = resolve(destination, "opengraph-image");
const ogTarget = resolve(destination, "opengraph-image.png");
if (existsSync(ogSource)) {
  renameSync(ogSource, ogTarget);
}

for (const file of walk(destination)) {
  if (!file.endsWith(".html")) continue;
  const depth = relative(destination, file).split(sep).length - 1;
  const prefix = depth ? "../".repeat(depth) : "./";
  const html = readFileSync(file, "utf8")
    .replaceAll('href="/_next/', `href="${prefix}_next/`)
    .replaceAll('src="/_next/', `src="${prefix}_next/`)
    .replaceAll('href="/favicon.svg"', `href="${prefix}favicon.svg"`)
    .replaceAll('href="/apple-touch-icon.png"', `${"href="}"${prefix}apple-touch-icon.png"`)
    // Absolute social URLs keep their origin; only the filename changes.
    .replace(/opengraph-image\?[0-9a-f]+/g, "opengraph-image.png");
  writeFileSync(file, html);
}

for (const file of walk(resolve(destination, "_next"))) {
  if (!file.endsWith(".js")) continue;
  const source = readFileSync(file, "utf8");
  if (source.includes('"/_next/')) writeFileSync(file, source.replaceAll('"/_next/', '"./_next/'));
}

console.log("Synced the Next.js static export to dist/. The handwritten prototype is no longer a second implementation.");
