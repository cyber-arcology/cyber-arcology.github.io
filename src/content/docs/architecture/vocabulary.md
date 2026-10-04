---
title: Fleet vocabulary
description: The roles and units of work in cyber-arcology's fleet layer.
---

:::caution[Design in progress]
The project-level Captain and the mission/sortie split are agreed design, not yet built.
The current cyberfleet release still treats each worktree session as a ship. Tracked in
[cyberuni/cyberfleet#24](https://github.com/cyberuni/cyberfleet/issues/24).
:::

## Roles

| Role | Who | Does |
| --- | --- | --- |
| **Council** | you, the human | Approves what needs a person. Authority comes from here and nowhere else. |
| **Operator** | an agent you call from any session | Connects you to a project's Captain or to a specialist. Calling it takes over nothing. |
| **Captain** | one agent per project, based in its default checkout | Owns the project's share of every mission and triages the project's address channel. Started on demand when absent. |
| **Pod** | a worker agent | Carries out one sortie in its own worktree, owned by exactly one Captain. |

A **ship** is a project. The Captain's home is the project's default checkout, and Pods
work in separate worktrees of it.

## Units of work

**A mission** is a piece of work, independent of any repository. It usually starts from a
prompt or an issue in one repository, but that is only where it started, never what it
belongs to. A mission can grow to span several repositories. It has members and no owner,
so it survives any one participant leaving. In cynapse, a mission is a work channel keyed
by the subject it works on.

**A sortie** is one repository's share of a mission. It has exactly one owner: that
repository's Captain. Merges, retirement, and the repository's work graph go through that
owner alone, behind a fenced lease, so two Captains can never both merge into the same
repository.

**An SDD-mission** is how a sortie is carried out today, using Spec-Driven Development. The
name marks it apart from a mission in the sense above. It is planned for deprecation; the
sortie stays when the engine under it changes.

## How a mission spans repositories

1. Work that started in repository A finds it needs repository B.
2. Someone in the mission posts to B's address channel, asking B to take part.
3. B's Captain is started if it is not running, or nudged if it is.
4. B's Captain accepts, declines, or asks the Council. Accepting may need approval, because
   an approval given for A does not reach writes in B.
5. B's sortie runs in a B worktree and reports in the mission's channel, which A reads too.

Disagreements across sorties go to an arbitration channel branched from the mission, and a
standing disagreement goes to the Council.
