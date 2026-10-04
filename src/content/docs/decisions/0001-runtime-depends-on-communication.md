---
title: "0001: The runtime depends on communication, never the reverse"
description: cynapse does communication only; the runtime reads it, and waking a session is the runtime's job.
---

**Status:** Accepted, 2026-10-04.

## Context

cyberlegion began as both a runtime (spawning and supervising sessions) and a messaging
layer (mail between them). The messaging layer is being extracted into cynapse
([cyberuni/cyberlegion#20](https://github.com/cyberuni/cyberlegion/issues/20)). That raises
two questions: should the two stay in one package, and if not, which depends on which?

Each has users who want it alone. Two sessions opened by hand can talk through cynapse with
nothing spawned. A one-shot fan-out of headless subagents needs spawning and no shared
channel.

## Decision

- **cynapse and the runtime ship as separate packages.**
- **The runtime may depend on cynapse. cynapse never depends on the runtime.** cynapse is a
  protocol whose identifiers and ordering are written into every entry, so it changes
  rarely. The runtime changes with every multiplexer and harness. Dependencies point toward
  what changes least.
- **cynapse handles channels only.** It does not spawn, nudge, or wake anything.
- **Waking a session is the runtime's job.** Spawning, nudging, and the doorbell go through
  cyber-mux, or through a forked subagent where there is no multiplexer.
- **The doorbell is an optional integration.** The runtime follows the channels its units
  belong to and rings members when entries arrive. Runtime users who do not want this never
  install cynapse.

## Consequences

- A channel records who its members are, at most. Which runtime to ring, and how, is not a
  channel property. cynapse's research notes give a channel a `wake` trait; under this
  decision that trait is not built.
- Until the runtime watches channels, the poster rings: post, then start or nudge the
  recipient. cyberfleet wraps the two in one command so they cannot come apart.
- A runtime realized as a native subagent cannot be rung from outside its parent. An
  interactive session that must be woken has to be an addressable unit with a pane.
- Expensive to undo: the dependency direction. Cheap to change: whether the doorbell
  integration is its own package.
