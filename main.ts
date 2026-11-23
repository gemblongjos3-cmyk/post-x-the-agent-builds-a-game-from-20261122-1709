// Entry program for the make.fun "agent builds a game from one prompt" bounty.
//
// The scored artifact is the X post itself (a video the agent produced, ending
// with make.fun's official referral end card). All this program does is hand the
// gate the post's address: it copies POST.json out of the repository root into
// the output directory, where the grader looks for it.
//
// Node 22, standard library only. No network, no dependencies.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");

if (!existsSync(source)) {
  console.error(
    `POST.json not found in the bot directory (${botDir}). ` +
      `The entry post URL must be recorded in POST.json at the repository root before this program can run.`,
  );
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
const destination = join(outputDir, "POST.json");
copyFileSync(source, destination);
console.log(`Copied POST.json from ${source} to ${destination}.`);

// Read the copy back and show the post it points at, so a bad copy is
// visible immediately instead of failing silently at the gate.
const copied = JSON.parse(readFileSync(destination, "utf8")) as { url?: unknown };
if (typeof copied.url !== "string" || !copied.url.startsWith("https://x.com/")) {
  console.error(`Copied POST.json has no valid X post URL: ${JSON.stringify(copied)}`);
  process.exit(1);
}
console.log(`Entry post: ${copied.url}`);
