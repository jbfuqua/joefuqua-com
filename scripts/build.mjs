import { copyFile, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pages } from "../src/site.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");

export async function buildSite({ cleanOnly = false } = {}) {
  await rm(distDir, { recursive: true, force: true });

  if (cleanOnly) {
    console.log("Removed dist/");
    return;
  }

  await mkdir(distDir, { recursive: true });

  for (const page of pages) {
    const outputPath = path.join(distDir, page.route);
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, page.html);
  }

  await copyFile(path.join(rootDir, "src", "og-default.png"), path.join(distDir, "og-default.png"));

  console.log(`Built ${pages.length} pages to dist/`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const cleanOnly = process.argv.includes("--clean");
  await buildSite({ cleanOnly });
}
