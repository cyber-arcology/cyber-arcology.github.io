---
title: "0002: Coordination claims live in cynapse; leases and presence live in the runtime"
description: Two different things are both called a lease. Each gets the home that can observe and act on it.
---

**Status:** Accepted, 2026-10-04.

## Context

cynapse's design lists "leases and presence" among what it stores. cyberlegion already has a
lease: the fenced service lease of its
[ADR-0033](https://github.com/cyberuni/cyberlegion/blob/main/docs/adr/0033-project-services-fenced-ownership.md),
which gives a project service exactly one authoritative runtime. The word names two
different things:

- **A coordination claim**, such as "I am editing `src/auth/**` for the next hour." It is an
  advisory agreement between participants, with a TTL and path patterns.
- **An ownership lease**, such as "unit X drives this project's Captain, generation 7." It is
  healthy only while the owner's session is alive, and recovering it means starting a
  replacement.

## Decision

- **Coordination claims live in cynapse.** They are agreements between participants, which
  is communication.
- **Ownership leases live in the runtime.** Only the runtime can see whether the owner's
  pane is alive, and only the runtime can start a replacement. A lease stored in cynapse
  would need runtime liveness, which reverses
  [decision 0001](/decisions/0001-runtime-depends-on-communication/).
- **Presence lives in the runtime.** Whether a session is alive is a runtime fact. cynapse
  may display it when the runtime publishes it, but the runtime is its home.
- **The two are named apart: claim and lease.**

## Consequences

- The fencing that [cyberuni/cyberfleet#25](https://github.com/cyberuni/cyberfleet/issues/25) relies on (stale owners cannot act, concurrent starts produce one
  owner, a healthy owner is never displaced silently) stays where it already works.
- cynapse's planned lease, modelled on mcp_agent_mail, is built as a claim.
- Expensive to undo: which package owns each. Cheap to change: the names.
