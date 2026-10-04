---
title: "0004: Runtime services take opaque keys; project addressing lives in cynapse"
description: The runtime keys a service by whatever the caller passes, so it works with or without cynapse.
---

**Status:** Accepted, 2026-10-04.

## Context

A project needs one identity that both layers agree on. cyberlegion derives a project ID
from the repository's git common directory and keys services on it
([ADR-0033](https://github.com/cyberuni/cyberlegion/blob/main/docs/adr/0033-project-services-fenced-ownership.md)).
cynapse owns addressing, and keys a channel by its subject's native ID, registering its own
address for things with no stable outside ID, such as a folder
([cynapse ADR-0012](https://github.com/cyberuni/cynapse)).

If the runtime imported cynapse's addressing to key a service, runtime-only users would
have to install cynapse. If cynapse derived project identity from git itself, the
derivation would exist twice.

## Decision

- **The runtime's service lease accepts any key the caller passes.** It does not know what
  a project is.
- **Project addressing lives in cynapse,** including the derivation from the git common
  directory, used as the address cynapse registers for a local project.
- **cyberfleet passes cynapse's project address as the service key.** One project, one
  address channel, one Captain.

## Consequences

- The runtime stays usable without cynapse.
- Two clones of one repository resolve to two local project addresses, so they never
  compete for one address channel.
- Expensive to undo: where project identity lives. Cheap to change: the derivation, which
  can move to a move-stable ID later without changing the service model.
