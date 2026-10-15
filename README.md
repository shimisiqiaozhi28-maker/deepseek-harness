# DeepSeek Harness

Browser recreation of the DeepSeek Harness opening sequence: logo, access gate, identity check, outline-to-fill whale, scan bar, radar verify, and welcome flash.

## Run

```bash
node scripts/restore-assets.mjs
npm install
npm run dev
```

The dev server listens on port 8080.

Fonts and the share image are stored as base64 (`.b64` or `.b64.partNN`). `scripts/restore-assets.mjs` writes the binary files back before the first run.
