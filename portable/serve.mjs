import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, sep } from "node:path";
import { fileURLToPath } from "node:url";
import handler from "./server/index.mjs";

const siteDir = fileURLToPath(new URL("./site/", import.meta.url));
const port = Number(process.env.PORT || 8080);
const host = "127.0.0.1";

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".ttf": "font/ttf",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".webmanifest": "application/manifest+json",
  ".txt": "text/plain; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".wasm": "application/wasm",
};

function siteFile(urlPath) {
  let pathname = "/";
  try {
    pathname = decodeURIComponent(urlPath.split("?")[0] || "/");
  } catch {
    return null;
  }
  const rel = normalize(pathname).replace(/^([/\\])+/, "");
  if (!rel || rel === ".") return null;
  if (rel.startsWith("..") || rel.includes(`..${sep}`)) return null;
  const full = join(siteDir, rel);
  const root = siteDir.endsWith(sep) ? siteDir : siteDir + sep;
  if (full !== siteDir && !full.startsWith(root)) return null;
  return full;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

const server = createServer(async (req, res) => {
  try {
    const pathOnly = (req.url || "/").split("?")[0];
    if (req.method === "GET" || req.method === "HEAD") {
      const file = siteFile(pathOnly);
      if (file && existsSync(file) && statSync(file).isFile()) {
        const type = TYPES[extname(file).toLowerCase()] || "application/octet-stream";
        res.writeHead(200, {
          "content-type": type,
          "cache-control": pathOnly.startsWith("/assets/") ? "public, max-age=31536000, immutable" : "no-cache",
        });
        if (req.method === "HEAD") {
          res.end();
          return;
        }
        createReadStream(file).pipe(res);
        return;
      }
    }

    const hostHeader = req.headers.host || `${host}:${port}`;
    const url = new URL(req.url || "/", `http://${hostHeader}`);
    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (value == null) continue;
      if (Array.isArray(value)) {
        for (const item of value) headers.append(key, item);
      } else {
        headers.set(key, String(value));
      }
    }
    const hasBody = req.method !== "GET" && req.method !== "HEAD";
    const body = hasBody ? await readBody(req) : undefined;
    const request = new Request(url, {
      method: req.method,
      headers,
      body,
      duplex: hasBody ? "half" : undefined,
    });
    const response = await handler.fetch(request);
    const out = {};
    response.headers.forEach((value, key) => {
      out[key] = value;
    });
    res.writeHead(response.status, out);
    if (!response.body || req.method === "HEAD") {
      res.end();
      return;
    }
    res.end(Buffer.from(await response.arrayBuffer()));
  } catch (error) {
    console.error(error);
    if (!res.headersSent) res.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
    res.end("server error");
  }
});

server.listen(port, host, () => {
  console.log(`DeepSeek Harness  http://${host}:${port}/`);
});
