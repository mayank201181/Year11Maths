# Year 11 Maths Lab 🦉

An interactive revision app for **Edexcel International GCSE (9-1) Mathematics A (4MA1), Higher tier**.

**Live app:** https://year11maths.vercel.app

## What's inside

- **14 topics** covering the full Higher syllabus, each with an illustrated guide (discovery problems, "why does this work?" derivations, named strategies), flashcards, a quick quiz, and 6 practice papers (~58 questions per topic)
- **2 full mock exams** (4 papers each) that ramp up like the real thing
- **Interactive tab** on every topic — parameter-driven explorables (function grapher, circle-theorem explorer, probability spinner, histogram builder…)
- **Hint ladders** on harder questions — fewer hints used means more stars
- **Spaced repetition** — missed questions come back on a 1/3/7/16/35-day ladder
- **Gamification** — stars, ranks, daily streaks, daily goals, timed challenge mode, printable certificate
- **Family account** — multiple learner profiles, progress synced across devices
- **Parent dashboard** — PIN-protected view of time-on-task, accuracy and per-topic progress
- **AI tutor** ("Professor Pi") — Socratic, hints-only; requires `ANTHROPIC_API_KEY`
- **Installable PWA** — add it to a phone's home screen

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind v4 · Vercel Blob (progress storage) · Anthropic API (optional AI tutor)

## Environment variables

| Name | Purpose |
| --- | --- |
| `AUTH_SECRET` | Signs session cookies (set) |
| `BLOB_READ_WRITE_TOKEN` | Injected by the connected Vercel Blob store (set) |
| `ANTHROPIC_API_KEY` | Optional — enables the AI tutor |
| `AI_MODEL` | Optional — override the tutor model |

## Development

```bash
npm install
npm run dev
```

Note: test auth flows with `npm run dev` (secure cookies aren't sent over http under `npm start`).
