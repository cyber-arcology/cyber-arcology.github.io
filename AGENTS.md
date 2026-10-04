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
