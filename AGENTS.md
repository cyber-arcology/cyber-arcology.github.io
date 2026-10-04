# AGENTS.md

Guidance for AI coding assistants working in this repository.

## What this repo is

The organization site for cyber-civitas, an Astro + Starlight site served at
`https://cyber-civitas.github.io`. It holds what spans packages: the layer architecture,
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

The mark is three citizens, the front one an agent whose head is the four-point AI spark
(candidate D in the 2026-10-04 civitas glyph study), inside the shared cyber-* frame. The name
is about the community, not the building, so the glyph draws the citizens: people and agents as
one citizenry. At 16px the spark fills in and the mark reads as a group of three, which stays
legible; from 32px up the spark shows.

The two figures behind are cut by a mask: the front figure stroked at width 10, so a 5-unit gap
separates them at every size. Keep the mask when editing the shapes, or the figures merge into
one blob at favicon size.

Fallback, if the spark ever needs to go: **C**, the same group with a round head
(`<circle cx="64" cy="46" r="11"/>`) in place of the spark.

Rejected in the study: the tower and arcology glyphs (they draw the building the rename moved
away from), stacked layers (a diagram, not a community), a ring of citizens (a loading spinner at
16px), and a hemicycle assembly (one-pixel seats at 16px).

A glyph change touches all three SVGs, `public/img/logo.svg`, `src/assets/logo-light.svg` and
`src/assets/logo-dark.svg`, and the two org avatar renders, `brand/org-avatar-light.png` and
`brand/org-avatar-dark.png` (512px, rendered from the header pair). GitHub takes only raster
images for an avatar, so those stay PNG.
