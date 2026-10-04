---
title: Decisions
description: Architecture decisions that span more than one cyber-civitas package.
---

These records hold the rules no single package can decide alone. A decision inside one
package stays in that package's own `docs/adr/` and cites these where it relies on them.

An accepted record is never rewritten. A change of mind is a new record that supersedes
the old one.

| Record | Decision | Status |
| --- | --- | --- |
| [0001](/decisions/0001-runtime-depends-on-communication/) | The runtime depends on communication, never the reverse | Accepted |
| [0002](/decisions/0002-claims-and-leases/) | Coordination claims live in cynapse; leases and presence live in the runtime | Accepted |
| [0003](/decisions/0003-worktrees-through-the-runtime/) | cyber-mux worktrees are reached only through the runtime's workspace adapter | Accepted |
| [0004](/decisions/0004-opaque-service-keys/) | Runtime services take opaque keys; project addressing lives in cynapse | Accepted |
| [0005](/decisions/0005-foundation-depends-on-no-agent-layer-package/) | The foundation depends on no agent-layer package | Accepted |
