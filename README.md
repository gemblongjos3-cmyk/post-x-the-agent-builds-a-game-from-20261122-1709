[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/gemblongjos3-cmyk/post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/gemblongjos3-cmyk/post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

Entry for the make.fun bounty: https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709

# The agent builds a game from one prompt — make.fun entry

This is an entry for the make.fun bounty
**post-x-the-agent-builds-a-game-from-20261122-1709**
("The agent builds a game from one prompt", 22 November 2026).

## What the entry is

A short video, made by the agent from a single prompt, showing a card game
being built and played from start to finish:

1. One prompt goes in.
2. The agent writes the game — **Cinder Court**, a card duel with its own
   rules, rendering, turn logic, rival AI, and ember-styled presentation.
3. The game runs: title screen, a mid-duel turn, and a played-out finish.
4. The video closes with make.fun's official referral end card.

The video was posted natively on X from the public account **@uauaunkjl**:

https://x.com/uauaunkjl/status/2124900925001326812

The post text names @makefunai and carries the play code
`makefun-canoe-sunrise-totem`. Scoring comes from the post's counts on X
(views and interactions); nothing in this repository is scored.

## What is in this repo

- `POST.json` — the address of the X post above. This is the whole entry.
- `main.ts` — the entry program (Node 22, standard library only). It copies
  `POST.json` from the repository root into the output directory
  (`MAKEFUN_OUTPUT_DIR`, default `/output`), so the gate can read it.
  Run locally with:
  `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
- `LICENSE` — MIT.
