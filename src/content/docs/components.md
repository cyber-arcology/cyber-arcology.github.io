---
title: Components
description: Every cyber-arcology package, its job, and its status.
---

Status as of October 2026. "Published" means on npm; "prototype" means the code works
locally and has no release; "design" means the model is written and the code is not.

| Package | Layer | Job | Status |
| --- | --- | --- | --- |
| [cyberfleet](https://github.com/cyberuni/cyberfleet) | Product | Operator, Captains, and Pods directing work across projects | published 0.4 |
| [cyberlegion](https://github.com/cyberuni/cyberlegion) | Runtime | Spawn, supervise, and nudge agent sessions over the filesystem | published 1.3 |
| [cyber-mux](https://github.com/cyberuni/cyber-mux) | Runtime | Pane control across tmux, herdr, WezTerm, Zellij, and more | published 0.8 |
| [drover](https://github.com/cyberuni/drover) | Runtime | Terminal workspace manager for AI coding agents, a fork of herdr | fork, rename in progress |
| [cynapse](https://github.com/cyberuni/cynapse) | Communication | Persisted channels for agents, and the Cortex viewer | prototype |
| [cyber-truss](https://github.com/cyberuni/cyber-truss) | Process | Holds a repository in its settled state across every change | design |
| [cyber-sdd](https://github.com/cyberuni/cyber-sdd) | Process | Spec-Driven Development, with the ACED and Quill plugins | published 0.4 |
| [cyber-asana](https://github.com/cyberuni/cyber-asana) | Store | Asana CLI, skills, and MCP server for agents | published 0.18 |
| [cyber-slack](https://github.com/cyberuni/cyber-slack) | Store | Slack CLI and MCP server for agents | published 0.1 |
| [cyber-figma](https://github.com/cyberuni/cyber-figma) | Store | Figma CLI, MCP server, and plugin for agents | published 0.1 |
| [dna](https://github.com/cyberuni/dna) | Model | Datum Network Architecture: identity, types, and relations across stores | draft spec |
| [agent-harness](https://github.com/cyberuni/agent-harness) | Foundation | Detect which agent harness is running | published 0.3 |
| [universal-plugin](https://github.com/cyberuni/universal-plugin) | Foundation | One plugin manifest, generated for every harness | published 0.11 |

The repositories live in [cyberuni](https://github.com/cyberuni). The
[cyber-arcology](https://github.com/cyber-arcology) organization holds this site.
