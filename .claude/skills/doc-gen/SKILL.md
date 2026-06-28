---
name: doc-gen
description: Analyze the ee-dev framework source code at ~/www/gofile/src/gowork/ee-dev and generate VitePress documentation in this (ee-doc) repository. Use whenever the user asks to document a module, API, controller, service, job, preload, Go handler, or any part of ee-dev — or to refresh/sync existing docs against the current source.
---

# doc-gen — analyze ee-dev source → generate docs

This skill turns code in the **ee-dev** source project into documentation pages in **this** (ee-doc) VitePress site. Read `CLAUDE.md` at the repo root first — it explains the doc conventions you MUST follow (numeric-prefix sorting, frontmatter `title`, auto-generated sidebars, bilingual EN/zh layout).

## Source project

Root: `~/www/gofile/src/gowork/ee-dev` (a.k.a. `$SRC`)

| Source path | What it is | Doc destination |
|---|---|---|
| `packages/ee-core/src/` | Framework core library (config, controller, jobs, core, cross, message, storage, socket, loader, log, ps, exception, electron, const…) | `docs/09.api/003.ee-core/` |
| `packages/ee-bin/` | CLI / build tooling (`ee-bin` commands) | `docs/09.api/002.ee-bin/` |
| `go/` + the `ee-go` module (`eapp`, `ehelper`, `ehttp`, `elog`…) | Go cross-language backend | `docs/09.api/004.ee-go/` |
| `electron/controller/` | IPC controllers (routed as `{controller}/{name}/{method}`) | `docs/00.docs/020.basic-features/016.controller.md` (+ siblings) |
| `electron/service/` | Business service layer (os/window, os/tray, os/auto_updater, os/security, database, effect…) | `docs/00.docs/020.basic-features/018.service-layer.md` (+ siblings) |
| `electron/jobs/` | Background child-process tasks | `docs/00.docs/020.basic-features/060.tasks/` |
| `electron/preload/` | Preload bridge / lifecycle | `docs/00.docs/020.basic-features/020.preload-layer.md` |
| `electron/config/` | App config (default/local/prod) | `docs/00.docs/010.getting-started/050.config/` |
| `electron/main.ts` | App entry / lifecycle | `docs/00.docs/020.basic-features/012.lifecycle.md` |
| `frontend/` | Frontend demo / module integration | `docs/00.docs/020.basic-features/014.frontend-module/` |
| `python/`, `ohos_hap/` | Other cross-language targets | `docs/00.docs/045.cross-language/` |

If unsure where a page belongs, look at existing files in the nearest matching destination dir for precedent.

## Workflow

### 1. Scope the work with the user

Before reading code, confirm: which module(s) / file(s), and **English only, Chinese only, or both**. Default to **both** (EN at root + zh mirror under `docs/zh/`) — that is this project's standard. If the user names a single language, do only that one.

### 2. Read & extract from source

For each target, read the actual source (prefer `packages/ee-core/src/**/*.ts`, `electron/**/*.ts`, `go/**/*.go`). Extract from:
- File/module JSDoc header (`@module`, `@description`) → Introduction
- `export`ed functions/classes/types + their JSDoc (`@param`, `@returns`, `@throws`) → API reference
- Function signatures and types → code examples
- Comments and `:::warning`-worthy constraints (e.g. "Electron APIs cannot be used in child processes") → admonitions

Do **not** invent APIs. If a symbol is undocumented in source, document its real signature and mark behavior as inferred only if you are uncertain. Prefer reading the compiled `dist/` only when `.ts` source is absent.

### 3. Generate the page

Follow the established format (see `docs/09.api/003.ee-core/015.config.md` / `060.jobs.md` for reference). Template:

```markdown
---
title: <moduleName>          # required — becomes sidebar link text
---

## Introduction
<one short paragraph: what this module is and does. note key constraints as :::warning>

## Import
Both CJS and ESM:
\`\`\`javascript
// ESM
import { ... } from 'ee-core/<module>';
// CJS
const { ... } = require('ee-core/<module>');
\`\`\`
(For Go: a `go get` / import block instead.)

## <API or method name>
<description>

\`\`\`javascript
<real usage example derived from source / demo>
\`\`\`

| Param | Type | Description |
| --- | --- | --- |
| ... | ... | ... |

**Returns:** `Type` — description
```

Rules:
- Frontmatter must contain `title`. That is the **only** field most pages need (landing pages add `layout: home`).
- Filename: `NNN.<kebab-name>.md` where `NNN` is a numeric prefix chosen to sort correctly among siblings. Look at existing files in the target dir and pick the next free prefix in logical order.
- Use VitePress admonitions (`::: tip`, `::: warning`, `::: details`) for callouts, not blockquotes.
- Code fences must have a language tag.
- Keep examples runnable — copy real call sites from `electron/controller/*` or `frontend/src` rather than fabricating.

### 4. Bilingual mirror

If doing both languages, write the EN page at `docs/<path>` and the **zh equivalent at `docs/zh/<path>`** with identical structure/filenames. Translate prose; keep code, identifiers, and frontmatter `title` consistent (zh `title` may be the Chinese name — match the pattern of existing zh pages).

### 5. New directory? Update the sidebar name maps

Sidebars are auto-generated by `.vitepress/buildData.mjs` — **do not** hand-edit sidebars. But if you **create a new directory**, add its stripped name (no numeric prefix) to the display-name maps in `buildData.mjs`:
- `displayNameMapEn` and `displayNameMapZh` for normal content
- `INCLUDE_DIRS` array (top-level dir allowlist, in display order) if it's a new top-level section
- `displayNameMapZhV4` / `INCLUDE_DIRS_V4` only for v4 archive content

A new *file* in an existing dir needs no map entry — it appears automatically, sorted by numeric prefix, with link text from frontmatter `title`.

### 6. Verify

```bash
npm run dev    # open the page(s), confirm sidebar entry, link text, and rendering
```

`ignoreDeadLinks: true` is on, so the build won't catch broken links — click through any cross-links you added. If you added a nav entry (rare; navs are hand-authored in `config.mts`), confirm it resolves.

## Conventions to respect

- **Numeric prefixes are the sort key.** Never rename a file without keeping/adjusting its prefix.
- **No hand-written sidebars.** Content changes flow through `buildData.mjs`.
- **Don't duplicate.** Check the destination dir first — if a page already exists, update it in place rather than creating a parallel one.
- **Source of truth is ee-dev source.** When docs and source disagree, fix the docs to match source (and tell the user what changed).
