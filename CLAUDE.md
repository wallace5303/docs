# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

VitePress documentation site for the **electron-egg** desktop-app framework (dromara/electron-egg). Bilingual: English at the site root, Chinese under `/zh/`, plus a frozen v4 archive under `/zh/v4/`. Deployed to GitHub Pages.

## Commands

```bash
npm run dev      # local dev server (VitePress)
npm run build    # build to .vitepress/dist
npm run preview  # preview the built site
npm run migrate  # one-time: pull markdown from ../v4/docs (old vuepress/vdoing site) into docs/
```

There is no test or lint setup. Verify changes by running `npm run dev` and checking the page(s) you touched.

## Deployment

`.github/workflows/deployV5.yml` runs on push to `main_v5`, builds, and publishes `.vitepress/dist` to the `dist_v5` branch via `peaceiris/actions-gh-pages`. The default working branch is `main_v5` (not `main`).

## Architecture

### Content lives in `docs/`, auto-sorted by numeric prefixes

`config.mts` sets `srcDir: 'docs'`. The content tree is organized by **numeric-prefixed directory and file names** (e.g. `010.getting-started/`, `020.ipc-render.md`). These prefixes drive sort order everywhere — never reorder content by name alone; the prefix is the sort key.

Top-level content dirs: `00.docs` (main guides), `07.features`, `08.plugins`, `09.api`, `06.support`, `04.others`, `05.tips`. Chinese mirrors under `docs/zh/` with the same structure. v4 archive lives under `docs/zh/v4/`.

### Sidebars are generated, not hand-written

`.vitepress/buildData.mjs` walks the `docs/` tree at build time and generates `sidebarEn`, `sidebarZh`, and `sidebarZhV4` (exported, consumed by `config.mts`). Key mechanics:

- Only the dirs in `INCLUDE_DIRS` (in that order) become top-level sidebar groups; the first is expanded, the rest collapsed.
- Directory **display names** come from `displayNameMapEn` / `displayNameMapZh` / `displayNameMapZhV4` — keyed by the name *with its numeric prefix stripped*. A new directory that isn't in the map falls back to the stripped slug, so add an entry there for a human-friendly label.
- Page **link text** comes from each `.md` file's frontmatter `title` (falls back to filename). Every content page must have a `title` in frontmatter or the sidebar shows the raw filename.

If you add/rename/remove a directory or page, no manual sidebar edit is needed — it regenerates on next dev/build. Update the display-name maps only when adding a new directory name.

### Locales & routing

`config.mts` defines two locales: `root` (English, routes start `/`) and `zh` (Chinese, routes start `/zh/`). Nav bars (`navEn`/`navZh`) are hand-authored in `config.mts`; sidebars differ per locale. `cleanUrls: true` strips `.html`. `ignoreDeadLinks: true` is on, so broken links won't fail the build — check links manually.

### Theme

`.vitepress/theme/index.ts` extends the default VitePress theme and injects a `WwAds.vue` ad component into the `doc-before` slot on every doc page. `custom.css` ports the old vdoing accent color (`#11A8CD`) to VitePress brand variables. `WwAds.vue` also shows an ad-block whitelist banner after a 3s delay.

`config.mts` `head` injects Google Analytics, Baidu Tongji, the WWAds loader, and favicon into every page.

## Content conventions

- Frontmatter is minimal: `title` (required for sidebar text), optionally `layout: home` for landing pages (`docs/index.md`, `docs/zh/index.md`, `docs/zh/v4/index.md`).
- Image/static assets go in `docs/public/` (referenced as `/img/...` from markdown).
- When adding a page, match the numeric-prefix naming of its siblings so it lands in the right place in the sidebar.

## Migration scripts (`scripts/`)

One-time utilities used to port content from the old vuepress/vdoing site (`../v4/docs`) to VitePress:

- `migrate.mjs` (`npm run migrate`) — copies `.md`, rewrites frontmatter (keeps `title`/`permalink`, drops `date`/`article`), converts `$withBase(...)` image refs to plain paths, copies `public/` assets. Writes zh content + an en placeholder copy.
- `rename-dirs.mjs` / `rename-files.mjs` — bulk rename Chinese folder/file names to English equivalents via hardcoded maps.
- `remove-permalink.mjs` — strip `permalink` frontmatter.

These are historical; not part of the build. `baiduPush.sh` pushes `urls.txt` to Baidu for SEO indexing (run manually, requires the file).
