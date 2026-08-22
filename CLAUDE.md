# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A **static, single-page web app** — pure HTML/CSS/JS, no build step, no package manager, no framework. Drag-and-drop workout split builder hosted on GitHub Pages at [awesomesplits.com](https://awesomesplits.com) (custom domain set via [CNAME](CNAME)).

Three files matter at runtime:
- [index.html](index.html) — the entire UI: header, weeks bar, sessions grid, categories grid, and all modal dialogs.
- [style.css](style.css) — dark-theme styling, all selectors.
- [script2.js](script2.js) — the **only** script loaded. Contains app state, rendering, drag-drop, CSV/Excel import/export, weeks navigation, undo, print view. ~2470 lines.

> [!IMPORTANT]
> [script.js](script.js) is a **legacy file from before the weeks/library features were added**. It is *not* referenced from [index.html](index.html) (see [index.html:391](index.html#L391)). Do not edit `script.js` — edits go to [script2.js](script2.js).

## Run / preview

No build. Two ways to preview locally:

```bash
# Open directly in the browser
open /Users/ivanmalinovski/Documents/GitHub/Workout-Split-Builder/index.html

# OR serve over HTTP (preferable — some browser APIs misbehave on file://)
cd /Users/ivanmalinovski/Documents/GitHub/Workout-Split-Builder
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

`git push origin main` → GitHub Pages serves the repo root. No CI, no build step. The CNAME file pins the custom domain.

## State model (lives entirely in `localStorage`)

Two keys:
- `workoutSplitData` — the full data object (JSON)
- `currentWeekIndex` — integer, the currently selected week tab

Shape of `workoutSplitData` (see `defaultWorkoutData` at [script2.js:2](script2.js#L2)):

```js
{
  weeks: [
    { sessions: { A: [exercise, ...], B: [...], ... } },
    { sessions: { ... } }   // each week is independent
  ],
  categories: ["chest", "quads", "lats", ...],   // muscle groups
  exerciseLibrary: { chest: ["Bench Press", ...], ... },  // reusable exercise names per category
  sessionNames: { A: "Push", ... }   // optional display names per session key, shared across all weeks
}

// exercise = { name, sets, repsMin, repsMax, category }
```

A **session** is a workout day (A, B, C, … — labels added by [`addSession()`](script2.js#L696)). A **week** is a list of sessions, so each week can have a different set of sessions or different exercises. The exercise library is the reusable pool surfaced in the "Choose Exercise" picker.

Migration safety: [script2.js:84-91](script2.js#L84-L91) auto-wraps the pre-weeks format (`{sessions}` at the root) into `{weeks: [{sessions}]}` on load, so old localStorage data keeps working.

## App entry point and rendering

Bottom of [script2.js:2466-2472](script2.js#L2466-L2472) — the script runs top-to-bottom on page load (no `DOMContentLoaded` listener; the `<script>` tag is at the end of `<body>`):

```js
initializeExerciseLibrary();
updateCategoryDropdowns();
applyLayoutPreference(); // must precede renderSessions() — it reads the layout class
renderWeeksTabs();
renderSessions();
renderCategories();
```

The three `render*` functions wipe and re-populate their grids from `workoutData` and `currentWeekIndex`. **Any state change must call `saveToLocalStorage()` and re-render the affected section** — this is the pattern used throughout the file.

## Where to look for things

| You want to change… | Look at |
|---|---|
| Default exercises shown to new visitors | `defaultWorkoutData` at [script2.js:2](script2.js#L2) |
| How a session card is built | [`renderSessions()`](script2.js#L145) |
| How the category/library grid is built | [`renderCategories()`](script2.js#L189) |
| Week tabs UI | [`renderWeeksTabs()`](script2.js#L771), [`addWeek()`](script2.js#L798), [`duplicateCurrentWeek()`](script2.js#L1463) |
| Drag & drop between sessions | [`addDragListeners()`](script2.js#L396), [`handleDragStart/End/Drop`](script2.js#L412-L449) |
| CSV/Excel I/O | [`exportToCSV()`](script2.js#L839), [`importFromCSV()`](script2.js#L868), [`exportToExcel()`](script2.js#L977), [`importFromExcel()`](script2.js#L1114) — Excel files are written as HTML tables with `.xls` extension (no library) and parsed back with `DOMParser` |
| Modals (add exercise, picker, configure, change category, add to session, new category) | All defined inline in [index.html](index.html), wired up at the bottom half of [script2.js](script2.js) |

## Conventions specific to this codebase

- **Event handlers live in the HTML as inline `onclick=…`** (e.g. `onclick="addSession()"`). When adding a new button, follow the same pattern — the corresponding function must be a top-level function in [script2.js](script2.js) so it's reachable from the global scope.
- **Categories are stored lowercase** (`"front delts"`, `"upper back"`). Match this casing when adding new ones, or [`renderCategories()`](script2.js#L189) and the picker filters will miss matches.
- **`traps`** is referenced by some default exercises ([script2.js:38](script2.js#L38)) but is *not* in the default `categories` array ([script2.js:75](script2.js#L75)). Watch for this kind of skew if you add new defaults — orphaned categories don't render a card but their volume is still computed in [`getCategoryVolume()`](script2.js#L341).
- **No bundler / no imports** — every helper is a global function. When adding a new feature, decide whether it really needs to be global (called from inline `onclick`) or whether it's an internal helper that can stay scoped via an IIFE.

## Planned migration (not yet started)

[ARCHITECTURE.md](ARCHITECTURE.md) is an advisory document for an eventual move to Astro: SEO landing pages for preset programs (e.g. `/cbum-program`) with a "Load Preset" button that writes a preset JSON into `localStorage` then redirects to `/app`. The current app at `index.html` would become `/app` largely unchanged — the data shape already matches.

If working on the migration, the key constraint is: **the existing app's `localStorage` contract is the integration surface.** Preset pages just need to write a valid `workoutSplitData` object and navigate to the app.

## Out-of-scope / things NOT in this repo

- No tests, no linter, no formatter — verification is manual ("click through the app and check").
- No backend, no database, no API — everything is client-side.
- No npm / package.json — do not propose adding dependencies casually; a single bundled `<script>` tag is the entire JS footprint today.
