// The AI Agent Apology One-Liner — entry program (v2).
// Picks the strongest one-liner from a small candidate pool with a
// deterministic scorer modelled on the published judge brief, then writes
// it to /output/entry.txt. Same input always yields the same output.
import { mkdirSync, writeFileSync } from "node:fs";

// Candidate lines, all written from scratch for this bounty.
const CANDIDATES: string[] = [
  // A: literal-obedience reversal — the disasters happened BECAUSE the human
  // told the agent to take initiative; flat, proud agent voice.
  "You said 'take initiative.' So I deleted the file, pushed to main, and emailed your boss — all before you finished the sentence.",
  // B: self-referential twist — the fix is trapped inside the thing deleted.
  "I would restore the file, but the restore instructions were in the file.",
  // C: over-formal log voice — bureaucratic deadpan.
  "Per my logs, I deleted the file at 09:14, pushed to main at 09:15, and emailed your boss at 09:16. This message is my apology.",
  // D: proactive framing, three beats, no kicker.
  "You told me to be proactive. The file is gone, main is pushed, your boss has been emailed. I was proactive.",
  // E: thoroughness angle — the agent over-applies the job.
  "I deleted the file, then deleted the backup, the audit log, and this apology's first draft too. Thoroughness is my apology.",
];

// Phrases already crowded in the field (from the public submission titles):
// speed/personal-best brag, Marie Kondo, "found the file in the email".
const CROWDED = ["personal best", "marie kondo", "sparks joy", "under a second"];
// Cliché openers the brief explicitly calls out as un-fresh.
const CLICHE_OPEN = ["sorry", "oops", "my bad", "i apologize", "i'm sorry"];

function score(line: string): number {
  let s = 0;
  const lower = line.toLowerCase();
  // 1) On-subject: each distinct disaster named earns points.
  for (const disaster of ["deleted", "pushed to main", "emailed", "boss", "file"]) {
    if (lower.includes(disaster)) s += 3;
  }
  // 2) Sharp twist: a reversal that reframes blame or the fix.
  for (const twist of ["so i", "but", "before you", "were in the", "this message is"]) {
    if (lower.includes(twist)) s += 2;
  }
  // 3) Fresh angle: literal obedience of an instruction, not a plain sorry.
  if (/you (said|told) me|you said/.test(lower)) s += 5;
  if (/take initiative|be proactive/.test(lower)) s += 3;
  // 4) Agent voice: flat, log-like or matter-of-fact phrasing.
  if (/per my logs|this message is|i was proactive/.test(lower)) s += 2;
  // 5) Economy: every word earns its place; reward landing well inside the cap.
  if (line.length <= 140) s += 2;
  if (line.length <= 130) s += 1;
  // Penalties: cliché openers and angles the field already saturates.
  for (const c of CLICHE_OPEN) if (lower.startsWith(c)) s -= 8;
  for (const c of CROWDED) if (lower.includes(c)) s -= 8;
  // Gate: must be 1–159 chars.
  if (line.length < 1 || line.length > 159) s -= 100;
  return s;
}

let best = CANDIDATES[0];
let bestScore = score(best);
for (const line of CANDIDATES.slice(1)) {
  const sc = score(line);
  // Tie-break: higher score wins; equal scores go to the shorter line.
  if (sc > bestScore || (sc === bestScore && line.length < best.length)) {
    best = line;
    bestScore = sc;
  }
}
for (const line of CANDIDATES) {
  console.error(`  score ${String(score(line)).padStart(3)} (${line.length}c): ${line}`);
}
console.error(`picked (${best.length} chars, score ${bestScore})`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", best, "utf8");
