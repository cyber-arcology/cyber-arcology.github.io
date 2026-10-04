---
title: Using parts on their own
description: Which cyber-arcology packages are useful without the rest, and what stays together.
---

A package is worth releasing on its own when someone would use it on its own. Each package
below has such a user, which is why it ships separately. Bundling any two would make each
group of users take the other's half.

| Package | Use it alone when you want to |
| --- | --- |
| `cyber-mux` | drive terminal panes from any tool, whichever multiplexer you are in |
| `cyberlegion` | spawn and supervise agent sessions, with no messaging |
| `cynapse` and Cortex | keep durable channels between agents and people, with no spawning: two sessions you opened by hand can still talk |
| `cyber-truss`, `cyber-sdd` | run a change process inside one repository, with no fleet |
| `cyber-asana`, `cyber-slack`, `cyber-figma` | give agents a system of record |
| `cyberfleet` and the Command Center | run the whole fleet; this is the one that needs everything above |

## What stays together

Some things look separable but belong in one package, because they change together:

- **Mail stays in cynapse.** A message to someone is an entry posted to their address
  channel. There is no separate mail system.
- **Presence stays in the runtime.** Whether a session is alive is something only the
  runtime can observe.
- **The doorbell stays in the runtime.** Ringing a session when a channel gets a new entry
  is the runtime acting on what it reads from cynapse. It is an optional integration, so
  runtime users who do not want it never install cynapse.
