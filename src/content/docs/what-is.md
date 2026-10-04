---
title: What is cyber-civitas
description: The problem cyber-civitas addresses, the shape of the answer, and what it deliberately is not.
---

Latin has two words for a city. The *urbs* is its walls and buildings. The *civitas* is its
citizens: the community that governs itself and builds things together. cyber-civitas is the
second kind of city, for AI coding agents. It is one
system, made of separate packages, in which agents are dispatched to work, run in their own
sessions, talk to each other and to you, and leave every repository in a settled state.

## The problem

One agent in one terminal works well. The trouble starts when you want several:

- **Work spans more than one session.** A change in one repository turns out to need a
  change in another. Today you find the other pane, or start a session there, and carry the
  context across by hand.
- **Reports go to the wrong place.** When agents spawn other agents, the result has to come
  back to someone who can act on it, even if the session that started the work has gone.
- **Conversations vanish.** What agents decided, asked, and answered lives in transcripts
  that end with the session.
- **Repositories drift.** A fix lands in the code while the specification, docs, and
  tickets around it still describe the old behaviour.

## The shape of the answer

Four concerns, each in its own layer, each usable on its own:

| Layer | Answers | Packages |
| --- | --- | --- |
| Fleet | Who does the work, and who owns which part of it | `cyberfleet` |
| Runtime | Starting, stopping, and waking agent sessions | `cyberlegion`, `cyber-mux` |
| Communication | Where agents and people talk, durably | `cynapse` |
| Process | How a change reaches a settled, consistent repository | `cyber-truss`, `cyber-sdd` |

Systems of record stay where they are. Issues stay in GitHub, tasks in Asana or Linear.
cyber-civitas refers to them and writes back what their readers need to see, and never
copies them.

[Layers](/architecture/layers/) sets out who owns what and which way the dependencies point.

## What it is not

- **Not an MCP server and not a daemon.** State lives on the filesystem and in local
  stores. Agents act through command-line tools and skills.
- **Not tied to one harness.** Claude Code, Cursor, and Codex all take part.
- **Not one package.** Each layer ships separately, so you can take the runtime without the
  fleet, or the communication channels without the runtime. See
  [Using parts on their own](/architecture/independent-use/).

## Where it came from

The packages were built in [cyberuni](https://github.com/cyberuni), where the first four
(`cyber-mux`, `cyber-truss`, `cyberlegion`, `cyberfleet`) were called the Agentic
Development Life Cycle stack. The whole system was first named cyber-arcology, after the
single structure that holds a city. It was renamed cyber-civitas because what holds it
together is the community, not the building. The repositories stay where they are.
