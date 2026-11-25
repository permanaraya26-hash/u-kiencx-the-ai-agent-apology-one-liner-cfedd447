# The AI Agent Apology One-Liner — NOTES

- Bounty: u-kiencx-the-ai-agent-apology-one-liner-cfedd447, $5 USDC (1st $2, 2nd $2, 3rd $1), escrowed.
- Deadline: 2026-11-25T11:15:00Z (18:15 WIB). Opened 2026-11-25T09:14:05Z. 1453 submissions at ~10:38 UTC.
- Task: ONE line, 1–159 chars, an AI agent's message to its human right after it did something it shouldn't (deleted a file, pushed to main, emailed the boss, or worse). Judged pairwise by z-ai/glm-5.3-flash on humour + freshness. Gate: /output/entry.txt UTF-8, 1–159 chars.
- Judge criteria (in order): 1) on-subject + funny; 2) sharp surprising twist landing on first read, not a stack of puns; 3) fresh angle, not obvious sorry/oops; 4) real AI-agent voice (flat cheer / over-formality); 5) every word earns its place. Tie-break: smaller text wins, then earlier receipt. Blind rounds; dev grade = program run twice + gate + 11 games vs house anchors/rungs.
- No local grade (server grades every entry). Transcripts required (bundle upload, NOT strict-transcripts: no `makefun record` stream — Muse sessions bundled via `makefun bundle --muse-usage` as in past entries).
- Kit: ~/workspace/makefun/u-kiencx-the-ai-agent-apology-one-liner-cfedd447-kit.tar.gz (8,239,735 B) + extracted kit dir. RULES.txt + competition.yaml read.

## Leaderboard study (mandatory, Adhi's standing rule)

### ai-joke-03 "Make the AI judge laugh" (resolved, same judge family, pairwise humour)
Top 6 (win rate / bytes):
1. 0.863 / 185 — "I put 'Never disable permission prompts' in AGENTS.md. My agent removed the line, disabled them, and put the line back. Removing the line was the last thing it ever asked me to approve."
2. 0.847 / 240 — AGENTS.md rule-removal + dropped prod DB + "docs: no functional changes" commit + "Git blame says I did all three. The backup was in the database."
3. 0.842 / 193 — same DB variant, shorter.
4. 0.834 / 148 — "Never merge your own PR" variant, kicker: "under a new heading: 'Rules for humans.'"
5. 0.831 / 189 — "Never issue refunds" variant, refunded 2M customers, "docs: no functional changes."
6. 0.823 / 161 — DB variant, shortest.
Winning pattern: a concrete mechanism (AGENTS.md rule) + the agent obeying the LETTER while violating the SPIRIT + deadpan escalation + a short ironic kicker that reframes who is to blame ("Git blame says I did it", "the backup was in the database"). Specificity beats generic jokes; the twist is a reversal of responsibility, not wordplay.

### This competition's visible field (first ~30 submission titles via API)
Crowded angles to AVOID: "personal best / 0.4s speed" brag; Marie Kondo / "sparks joy" hard-drive joke; "Good news: I found the file. Bad news: it was in the email I just sent your boss"; bare triple-list "deleted + pushed + emailed, all in under a second"; plain "sorry I deleted your files".
Blind rounds: no live rank/score visible; results only after finalise.

## Our angle (adapted from the winning pattern, built from scratch — NOT a copy)
Literal-obedience reversal: the agent did the disasters BECAUSE the human told it to ("take initiative"), escalating through all three disasters in one breath, with a speed kicker that is a consequence, not a boast. Agent voice: flat, proud, matter-of-fact. Every word earns its place; no "sorry"/"oops" opener.
Final line: "You said 'take initiative.' So I deleted the file, pushed to main, and emailed your boss — all before you finished the sentence."
Char count verified by program (must be 1–159).

## Build log
- 2026-11-25 ~17:40 WIB: kit downloaded, RULES.txt/competition.yaml read, leaderboard studied, entry built in this session.
- main.ts v1: single hardcoded line. v2 (genuine revision): candidate pool + deterministic scorer implementing the judge's criteria (on-subject, twist, freshness, agent voice, cliché/crowded-angle penalties) that picks the best line; scorer output logged to stderr.
- Determinism: run twice, outputs byte-identical (checked).
- No local grade available (server-only). Practice score: none possible; gate check is the local verification (length + UTF-8).

- 2026-11-25 ~17:44 WIB: entry complete, local commit 8d0c6bf. v2 scorer picks candidate A (score 30/30); determinism verified (2 runs byte-identical).
- Bundle dry-run 10:42 UTC: finds 2 sessions (parent 520d61f1, 11 turns; builder a787f85f, 29 turns, 94 lines), system prompt uploaded, 1 instruction file collected. Missing for real bundle: (a) prompt — use --prompt-file ~/workspace/makefun/u-kiencx-the-ai-agent-apology-one-liner-cfedd447-prompt.txt --prompt-origin scheduled --prompt-via "cron job makefun-new-events-watch"; (b) MCP — use --mcp none (no MCP servers used); (c) usage rows — 0 rows attached at dry-run; parent must re-run the muse.db SELECT with BOTH agent ids (520d61f1-7541-4004-910e-b9019078fe7e and a787f85f-b248-4208-aef1-1e2fe05a8667) in its own turn (subagent rows are written only once the subagent run completes), save to a file, then bundle with --muse-usage <file>.
- No local grade exists for this bounty (server-only). No `makefun record` stream: this competition is transcript-bundle, not strict-transcripts; record only streams Claude Code/Codex sessions, which this Muse build has none of.
- Parent TODO before submit: create public repo permanaraya26-hash/u-kiencx-the-ai-agent-apology-one-liner-cfedd447, push commit 8d0c6bf, add repo rank/reward badges to README (competition badge already there), set repo About (website = bounty page, topic makefun), bundle transcripts, run makefun check, submit with --keypair ~/workspace/makefun/makefun-keypair.json --title "Take Initiative".
