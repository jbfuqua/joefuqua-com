import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const svg = `<svg width="1200" height="630" viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="680" height="210" fill="#1c1914"/>
  <rect x="30" y="16" width="22" height="2" fill="#c8901a" rx="1"/>
  <text x="650" y="34" font-family="Georgia, serif" font-size="11" fill="#6a6058" text-anchor="end">Joe Fuqua</text>
  <text font-family="Georgia, serif" font-style="italic" fill="#ede6da" font-size="26" font-weight="400">
    <tspan x="340" y="88" text-anchor="middle">Writing, art, and a long view</tspan>
    <tspan x="340" dy="38" text-anchor="middle">of intelligent machines.</tspan>
  </text>
  <line x1="30" y1="154" x2="650" y2="154" stroke="#2a2520" stroke-width="0.5"/>
  <text x="30" y="180" font-family="Georgia, serif" font-size="12" fill="#8a8070">joefuqua.blog</text>
  <text x="650" y="180" font-family="Georgia, serif" font-size="11" fill="#5a5248" text-anchor="end">Panic is optional. Preparation isn't.</text>
</svg>`;

export async function generateOgImage(distDir) {
  const outputPath = path.join(distDir, "og-default.png");
  await sharp(Buffer.from(svg))
    .resize(1200, 630)
    .png()
    .toFile(outputPath);
  console.log("Generated og-default.png");
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const distDir = path.resolve(__dirname, "..", "dist");
  await generateOgImage(distDir);
}
