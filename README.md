# DeepSeek Harness

Browser recreation of the DeepSeek Harness opening sequence: logo, access gate, identity check, outline-to-fill whale, scan bar, radar verify, and welcome flash.

## Run

```bash
node scripts/restore-assets.mjs
npm install
npm run dev
```

The dev server listens on port 8080.

Binary assets (fonts and the share image) are stored as `.b64` files. `scripts/restore-assets.mjs` writes them back before the first run.
