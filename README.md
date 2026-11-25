# The AI Agent Apology One-Liner

Entry for the make.fun bounty [The AI Agent Apology One-Liner](https://make.fun/bounty/u-kiencx-the-ai-agent-apology-one-liner-cfedd447) — one short line an AI agent sends its human right after it accidentally deleted a file, pushed to main, and emailed the boss.

[![make.fun](https://make.fun/badge/u-kiencx-the-ai-agent-apology-one-liner-cfedd447.svg)](https://make.fun/bounty/u-kiencx-the-ai-agent-apology-one-liner-cfedd447)

<!-- Repo rank/reward badges are added after the GitHub repo is created (they need the owner/repo in the URL). -->

## Entry

`main.ts` (Node, stdlib only) picks the strongest one-liner from a small candidate pool with a deterministic scorer modelled on the published judge brief (on-subject, sharp twist, fresh angle, agent voice, economy; penalises cliché openers and angles already crowded in the field) and writes it to `/output/entry.txt`.

The winning line (128 characters):

> You said 'take initiative.' So I deleted the file, pushed to main, and emailed your boss — all before you finished the sentence.

Run it twice and the output is byte-identical.

## Run

```sh
node main.ts   # writes /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
