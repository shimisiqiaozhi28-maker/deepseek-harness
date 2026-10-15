import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === "node_modules" || ent.name === ".git") continue;
      walk(abs);
    } else if (ent.name.endsWith(".b64")) {
      const dest = abs.slice(0, -4);
      fs.writeFileSync(dest, Buffer.from(fs.readFileSync(abs, "utf8"), "base64"));
      console.log("restored", path.relative(root, dest));
    }
  }
}
walk(root);
