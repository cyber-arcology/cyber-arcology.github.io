---
title: "0005: The foundation depends on no agent-layer package"
description: agent-harness and universal-plugin depend on nothing in cyber-civitas or any other agent tool, so every layer, and tools outside cyber-civitas, can build on them.
---

**Status:** Accepted, 2026-10-04.

## Context

Every tool that works across AI coding agents has to know which harness it is running
under and what that harness holds: where skills are read from, which plugins are enabled,
where managed policy lives. **agent-harness** answers those questions once
([cyberuni/agent-harness](https://github.com/cyberuni/agent-harness)), and
**universal-plugin** builds on it to generate one plugin manifest for every harness.

The foundation serves more than cyber-civitas. On npm today, `universal-plugin` and
`buddy-agent-harness` both depend on `@cyberuni/agent-harness`, and repobuddy is among the
tools it is written for. If a foundation package depended on a cyber-civitas layer, or on
another agent tool, every one of those users would install that tool to detect a harness,
and a change in it would ripple down into everything built on the foundation.

"Zero dependency" here is about the agent layer, not about npm packages. An ordinary
library, such as a YAML parser or a semver range resolver, is fine.

## Decision

- **agent-harness and universal-plugin depend on nothing in cyber-civitas, and on no other
  agent tool.** Ordinary npm libraries are allowed.
- **Every layer may depend on the foundation.** It sits below the runtime, communication,
  process, and products layers alike.
- **The foundation stays usable outside cyber-civitas.** A tool such as repobuddy or
  buddy-agent-harness takes it without taking anything else from this system.

## Consequences

- Harness knowledge has one home. A tool that needs to know which harness runs it asks
  agent-harness instead of guessing from env vars and file paths itself.
- A fact the foundation needs from a higher layer has to come in as an argument, never as
  an import.
- Expensive to undo: the direction of the edges, since every consumer relies on the
  foundation installing alone. Cheap to change: which libraries the foundation uses, as
  long as none of them is an agent tool.
