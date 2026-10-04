---
title: "0003: cyber-mux worktrees are reached only through the runtime's workspace adapter"
description: Use cyber-mux's worktree support, and contain the coupling in one adapter.
---

**Status:** Accepted, 2026-10-04.

## Context

cyber-mux is the seam over terminal multiplexers. It also manages git worktrees, because
multiplexers such as herdr manage them natively by binding a workspace to a worktree, so a
seam over multiplexers has to expose that.

Part of that code changes for git reasons rather than multiplexer reasons: detecting
squash-merged branches, or resetting a worktree for reuse. That is a reason to keep the
coupling in one place, not a reason to avoid a working feature.

## Decision

- **The runtime defines a narrow workspace interface**: provision, release, list, check
  disposability, bind a pane. Its consumers, such as cyberfleet's Captain, depend on that
  interface and never import cyber-mux's worktree API directly.
- **One adapter implements it, backed by cyber-mux.** There is no second worktree
  mechanism. Where there is no multiplexer, as with a forked subagent, the same adapter uses
  cyber-mux's git path and skips the pane binding.
- **Pane binding is a capability, checked per backend.** When the backend binds panes to
  worktrees natively, the adapter uses it. When it does not, the runtime keeps the mapping
  itself. Callers see one interface either way.
- **Policy stays above cyber-mux.** Which worktree is free, whether a session is still
  attached to it, and who owns the pool belong to the runtime and cyberfleet.

## Consequences

- An import rule makes the workspace adapter the only importer of cyber-mux's worktree
  surface.
- Contract tests at the adapter run against at least one backend with native worktree
  binding and one without.
- If cyber-mux ever splits worktrees out, or a multiplexer changes its worktree model, one
  adapter changes and nothing above it notices.
