# Spatialytics

**The operating system for small businesses that happen to understand geography.**

## What's in this repo

| Path | Purpose |
|------|---------|
| `index.html` | Vision site — philosophy, 20 modules, Brainerd spatial case |
| `prototypes.html` | Static interactive prototypes (no backend) |
| `web/` | **Next.js app** — real product scaffold with 4 priority modules |
| `app/` | Legacy notes / module placeholders |

## Next.js app (`web/`)

```bash
cd web
npm install
npm run dev
```

Routes:

- `/` — home
- `/dashboard` — Daily Dashboard + Needs Attention
- `/profitability` — Job Profitability calculator
- `/receivables` — Accounts Receivable
- `/dont-forget` — Don't-Forget Engine

Auth placeholder in `web/lib/auth.ts`. Wire Clerk / Auth.js / Supabase next, then multi-tenant `org_id`.

## Deploy

**Static marketing:** Vercel from repo root (current).

**App:** Point a Vercel project at `web/` as the root directory.

## Brainerd spatial case

- 532 Comp/Math residents in Crow Wing
- 74.2% of statewide Comp/Math jobs in Twin Cities
- LQ ~0.32 (NW MN) / 0.45–0.55 (Crow Wing residential)

---

Spatialytics · Brainerd Lakes · 2025–2026
