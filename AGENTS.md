# AGENTS.md

Guidance for AI coding assistants working in this repository.

## What this repo is

The organization site for cyber-arcology, an Astro + Starlight site served at
`https://cyber-arcology.github.io`. It holds what spans packages: the layer architecture,
the fleet vocabulary, the component index, and cross-package decision records. A package's
own behavior is documented in that package's repository, not here.

## Commands

```
pnpm install
pnpm dev          # local site
pnpm build        # must be clean before committing
pnpm typecheck    # astro check, 0 errors
```

## Conventions

- **Root Pages site, no base path.** Internal links are bare paths (`/architecture/layers/`).
- **The sidebar is explicit** in `astro.config.mjs`. A page without an entry there ships
  unreachable.
- **Claims must be backed.** A component's status comes from npm (`npm view <pkg> version`)
  and its repository. Mark design and prototype work as such; never describe planned
  behavior as shipped.
- **Decision records are never rewritten once accepted.** A change of mind is a new record
  that supersedes the old one, and the index table gains a row.
- **Theme and icon** come from the cyber-* family (cyberuni/cyber-mux
  `docs/design/icon-system.md`). Keep the frame paths verbatim; the toolchain versions are
  pinned to cyber-mux's known-good set.

## The glyph

The mark is a slender tower on a base with a four-point AI spark at its tip (candidate I in the
2026-10-04 glyph study), inside the shared cyber-* frame. The icon-system rule asks for a literal
glyph; the package name is the metaphor, so drawing the structure is the literal reading.

Backups, if I proves too thin at favicon size:

- **A**, stacked layers: `M52 32h24v14H52zM42 57h44v14H42zM32 82h64v14H32z`
- **N**, arcology under an AI spark:
  `M32 96 45 62h38l13 34Z M49 80h8v8h-8z M60 80h8v8h-8z M71 80h8v8h-8z M64 28q2.6 11 13 13q-10.4 2-13 13q-2.6-11-13-13q10.4-2 13-13Z`
  with `fill-rule="evenodd"` so the windows cut out.

A glyph change touches all three files: `public/img/logo.svg`, `src/assets/logo-light.svg`,
`src/assets/logo-dark.svg`.
