# Inciterz Website — React + Vite (exact preview)

This is your **exact `inciterz-preview.html`**, wrapped in a real React + Vite project so it builds and deploys on Netlify. It renders **byte-for-byte identical** to the preview — same layout, fonts, colours, rotating dots, hover effects, auto-scrolling sliders, and the detail-page routing (Directors / Our Work / Media / Impact).

## How it's structured

```
inciterz-exact/
├── index.html                 # loads Google Fonts + mounts React
├── src/
│   ├── main.jsx               # React entry
│   ├── App.jsx                # injects the preview markup + runs the preview script
│   ├── body.html              # the EXACT <body> markup from the preview (all sections + detail pages + hero image)
│   ├── preview-script.js      # the EXACT JS from the preview (router, sliders, dot/scroll animations)
│   └── styles/preview.css     # the EXACT CSS from the preview (32 KB, all styles + animations)
├── netlify.toml               # Netlify build config + SPA fallback
├── public/_redirects          # SPA fallback (safety net)
├── package.json
└── vite.config.js
```

`App.jsx` renders `body.html` and then executes `preview-script.js` once on mount, so every animation and interaction behaves exactly as in the HTML file.

> Routing note: the preview uses **hash routing** (`/#/directors`, `/#/works`, `/#/impacts/0`, …). That means routes work on Netlify with zero server config — refreshing or sharing a deep link always works. The `_redirects` file is just an extra safety net.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build / preview production

```bash
npm run build    # outputs dist/
npm run preview  # serves the production build locally
```

## Deploy to Netlify

**Option A — drag & drop (fastest):**
1. `npm install && npm run build`
2. Go to https://app.netlify.com/drop and drag the **`dist`** folder in.
   (A pre-built `dist/` is already in this zip, so you can drag it straight away.)

**Option B — Git:**
1. Push this folder to GitHub.
2. Netlify → *Add new site → Import an existing project* → pick the repo.
3. Netlify reads `netlify.toml` automatically (build `npm run build`, publish `dist`). Deploy.

## How to edit content

All real content lives in **`src/body.html`** as plain HTML — open it and edit directly.

- **Hero image/video**: search for `data:image/jpeg;base64,` in `body.html` and replace that `<img>`/element with your own `<img src="...">` or a `<video>`.
- **Text**: every editable spot is a bracketed placeholder like `[ Founder Name ]`, `[ State ]`, `[ Your press headline … ]`, `[ Leader photo ]`. Find & replace with your real content.
- **Images**: replace the placeholder blocks (the elements with `data-l="[ ... ]"`) with `<img>` tags. Put image files in `public/` and reference them as `/your-image.jpg`.
- **Colours / fonts / spacing**: edit `src/styles/preview.css` (CSS variables are at the very top under `:root`).
- **Animations / slider speed / routing**: edit `src/preview-script.js`.

After any edit, `npm run build` again (or just keep `npm run dev` running for live reload).

---

**Tech:** React 18 + Vite 5. **Build tested and confirmed working.** Deploy and you're live.
