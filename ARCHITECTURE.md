# Architecture Advisory: Workout Builder → Full Website

## What you're trying to build

| Feature | Description |
|---|---|
| **SEO landing pages** | `/cbum-program`, `/powerlifting-preset` etc. rank in Google, load a short article |
| **Preset loader** | A button on each landing page that loads the preset into the app |
| **The app itself** | Accessible standalone (empty slate, or with a preset) |
| **Optional CMS** | Edit articles without touching code |

---

## Recommended Stack: **Astro** (not Jekyll)

> [!IMPORTANT]
> You already write HTML, CSS, and JavaScript. **Astro uses all three** — it's just a build tool on top. Jekyll is Ruby-based, which adds a language you don't know. Astro is the modern, JS-native equivalent.

### Why Astro over Jekyll

| | Jekyll | Astro |
|---|---|---|
| Language | Ruby | JavaScript (you already know this) |
| Embeds your JS app | Manual, fragile | First-class, trivial |
| SEO | Good | Excellent (0 JS by default) |
| GitHub Pages | Native | Works, or use Netlify/Vercel (both free) |
| Community growth | Declining | Rapidly growing |
| Markdown articles | ✅ | ✅ |
| JSON preset data | Manual | Native content collections |

---

## How it would work

### 1. Preset data — just JSON files

Each preset is a plain `.json` file in your repo matching your existing `workoutData` format:

```
/presets/
  cbum-program.json
  powerlifting.json
  free-weights-only.json
```

These are already exactly the structure you use in `localStorage` today — **no backend needed**.

### 2. Landing pages — Markdown + Astro

Each program gets a Markdown file:

```
/src/content/programs/
  cbum-program.md      ← article text + frontmatter
  powerlifting.md
```

Frontmatter in the Markdown links the article to its preset:

```yaml
---
title: "CBum's 6-Day PPL Program"
description: "Chris Bumstead's off-season split..."
preset: cbum-program        # ← matches /presets/cbum-program.json
---
```

Astro generates a static HTML page at `/cbum-program` — fully SEO-optimised, fast, no JS until needed.

### 3. The "Load Preset" button

On each landing page, one button:

```html
<button onclick="loadPreset('cbum-program')">
  Load this program →
</button>
```

```js
async function loadPreset(name) {
  const res = await fetch(`/presets/${name}.json`);
  const data = await res.json();
  localStorage.setItem('workoutSplitData', JSON.stringify(data));
  window.location.href = '/app';  // redirect to the app
}
```

That's it. Your existing app code reads `localStorage` on load — **zero changes needed to the app logic**.

### 4. The app itself — `/app`

The current `index.html` becomes `/src/pages/app.astro`. It keeps all existing JS and CSS unchanged. Visiting it with no preset gives the current empty-slate behaviour.

---

## Site structure

```
awesomesplits.com/            ← homepage listing all presets
awesomesplits.com/app         ← the builder (current index.html)
awesomesplits.com/cbum-program  ← SEO article + Load button
awesomesplits.com/powerlifting  ← SEO article + Load button
```

---

## Optional CMS: Decap CMS (formerly Netlify CMS)

> [!NOTE]
> This is completely optional. You can just edit Markdown files directly in VS Code or GitHub. A CMS only matters if non-developers need to write articles.

If you do want a visual editor:
- **[Decap CMS](https://decapcms.org/)** — free, Git-based, no server. Works on top of Astro. You get a `/admin` dashboard in the browser where you can write and publish articles. Changes go straight to your GitHub repo as commits.
- No database, no server, no monthly cost.

---

## How drastic are the changes?

| Area | Change needed |
|---|---|
| `script2.js` | **None** — works as-is |
| `style.css` | **None** — reused directly |
| `index.html` → `app.astro` | **Minimal** — copy-paste, wrap in Astro boilerplate |
| New landing page layout | New file (~30 lines) |
| Preset JSON files | New files (copy your existing `defaultWorkoutData` format) |
| Hosting | Move from GitHub Pages static to **Netlify** (still free, still git-push to deploy) |

> [!TIP]
> The migration can be done incrementally. Start by just adding Astro on top of what you have. The app can live at `/app` unchanged while you build landing pages alongside it.

---

## Hosting & Cost

| Service | Cost | Notes |
|---|---|---|
| **Netlify** | Free tier | Recommended — git push to deploy, free SSL, free custom domain |
| **Vercel** | Free tier | Also great, same idea |
| GitHub Pages | Free | Works but less flexible with Astro routing |

---

## Summary recommendation

1. **Astro** for the site framework (JS, Markdown, static output)
2. **JSON files** in the repo for presets (no backend needed)
3. **Netlify** for hosting (free, git-push deploy)
4. **Decap CMS** optionally, if you want a visual article editor
5. **Zero changes** to your existing app JS/CSS logic
