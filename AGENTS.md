# AGENTS.md

This file provides guidance to agents when working with code in this repository.

This repository is a **template**. `README.md` is written for people who consume the template, and this file is for people (and agents) who contribute to it. Keep the two audiences separate: usage instructions belong in `README.md`, contributor conventions belong here.

## Status

The clonecademy.com marketing site, a static Astro build. There is no test framework configured.

- **Content**: roles, cloned products and blog posts are content collections (`src/content.config.ts`); pages are generated from them. Program facts (cohort dates, prices, FAQ, testimonials, outcomes) live in `src/data/`. Change a fact there, never in page markup.
- **Draft copy**: every unconfirmed value (prices, dates, quotes, alumni, bio, legal text) is marked `TODO`. `grep -rn TODO src` is the pre-launch checklist.
- **Design**: the "teardown" direction — products drawn as exploded isometric plates (`src/components/teardown.astro`), teal ink on a drafting grid. Motion is one orchestrated moment (the home hero teardown); everything else moves only in response to the visitor.
- **Share image**: `pnpm og` regenerates `public/og.png` from `scripts/og-image.mjs`; rerun it after changing the headline or palette.

## Gotchas

- Astro drops whitespace that contains a newline between text and an `{expression}`, so `of\n{price}` renders `of$650`. Keep inline text and its expression on one line.
- The dev server misses Tailwind classes in newly created files; restart `pnpm dev` when a new page's layout looks unstyled. `pnpm build` is unaffected.

## Commands

Package manager is **pnpm** (pinned via `packageManager`/`devEngines` in `package.json`); don't use npm or yarn.

- `pnpm dev` — Astro dev server
- `pnpm build` — production build to `dist/`
- `pnpm preview` — serve the built output
- `pnpm lint` — `biome check --write --verbose`. Note that it **writes fixes** (lint autofixes, formatting, import organizing), not just reports. Pass file paths to limit scope, e.g. `pnpm lint src/pages/index.astro`.

## Tooling conventions

- **Biome** (`biome.jsonc`) is the single linter/formatter/import-organizer: tab indentation, double quotes, `recommended` rules, respects `.gitignore`. It ignores `.agents/` and `skills-lock.json`.
- **Lefthook** (`lefthook.jsonc`) installs a `pre-commit` hook via the `prepare` script. It runs `pnpm lint` on staged files matching js/ts/css/html/astro/json(c) and re-stages the fixes (`stage_fixed`), so commits may include auto-formatted changes.
- Config files start with a `// PATH: /<file>` comment header; keep that convention for new config files.
- Commit messages follow Conventional Commits (`build:`, `feat:`, `style:`).
- `tsconfig.json` extends `astro/tsconfigs/base` (not `strict`); there is no type-check script, so `astro check` is not wired up.
- `pnpm-workspace.yaml` only holds `allowBuilds` (esbuild, lefthook) for pnpm's build-script allowlist. It isn't a multi-package workspace.

## Skills

- Skills live under `.agents/skills/<name>/`; `.claude/skills/<name>` is a symlink to `../../.agents/skills/<name>` for each one. Don't edit skill contents through the `.claude/skills/` path or duplicate files between the two — always change `.agents/skills/`.
- `skills-lock.json` records each skill's `source` repo, `sourceType`, `skillPath`, and `computedHash`. Most entries source from `mattpocock/skills`; a few (`agent-browser`, `building-components`, `ucp`, `web-design-guidelines`) come from other `vercel*` repos.
- Biome ignores `.agents/` and `skills-lock.json`, so skill content isn't linted or reformatted.
