import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildSite } from "./build.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const host = "127.0.0.1";
const port = 3000;

await buildSite();

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://${host}:${port}`);
  const pathname = url.pathname.endsWith("/") ? `${url.pathname}index.html` : url.pathname;
  const requestPath = pathname === "/" ? "index.html" : pathname.slice(1).replace(/\/$/, "/index.html");
  const normalizedPath = path.extname(requestPath) ? requestPath : path.join(requestPath, "index.html");
  const filePath = path.join(rootDir, normalizedPath);

  try {
    const file = await readFile(filePath);
    const contentType = filePath.endsWith(".html") ? "text/html; charset=utf-8" : "text/plain; charset=utf-8";
    res.writeHead(200, { "Content-Type": contentType });
    res.end(file);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
  }
});

server.listen(port, host, () => {
  console.log(`Serving ${rootDir} at http://${host}:${port}`);
});
