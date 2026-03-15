import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const cleanOnly = process.argv.includes("--clean");

await rm(distDir, { recursive: true, force: true });

if (cleanOnly) {
  console.log("Removed dist/");
  process.exit(0);
}

await mkdir(distDir, { recursive: true });
await cp(path.join(rootDir, "index.html"), path.join(distDir, "index.html"));

console.log("Built dist/index.html");
