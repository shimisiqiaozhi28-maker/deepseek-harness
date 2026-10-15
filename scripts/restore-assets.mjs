import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === "node_modules" || ent.name === ".git") continue;
      walk(abs, files);
    } else {
      files.push(abs);
    }
  }
  return files;
}

const groups = new Map();
for (const abs of walk(root)) {
  const name = path.basename(abs);
  const match = name.match(/^(.*)\.b64(?:\.part(\d+))?$/);
  if (!match) continue;
  const dest = path.join(path.dirname(abs), match[1]);
  const part = match[2] == null ? -1 : Number(match[2]);
  if (!groups.has(dest)) groups.set(dest, []);
  groups.get(dest).push({ abs, part });
}

for (const [dest, parts] of groups) {
  parts.sort((a, b) => a.part - b.part);
  const b64 = parts.map((part) => fs.readFileSync(part.abs, "utf8").trim()).join("");
  fs.writeFileSync(dest, Buffer.from(b64, "base64"));
  console.log("restored", path.relative(root, dest));
}
