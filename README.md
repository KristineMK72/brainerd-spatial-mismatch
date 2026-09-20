# Spatialytics

**The operating system for small businesses that happen to understand geography.**

- **Vision site:** `index.html` — product philosophy, all 20 modules, build order, Brainerd spatial-mismatch case study
- **Interactive prototypes:** `prototypes.html` — working UX demos for modules 1–4 (Dashboard, Job Profitability, AR, Don't-Forget)
- **App scaffold:** `/app` — folder structure for the real multi-tenant product

## Quick links

| Page | What it is |
|------|------------|
| [index.html](index.html) | Full vision + spatial case |
| [prototypes.html](prototypes.html) | Clickable prototypes (sample data) |
| [app/](app/) | Real product scaffold |

## Priority modules (prototyped)

1. Daily Business Dashboard + Needs Attention
2. Job Profitability calculator
3. Accounts Receivable dashboard
4. Don't-Forget Engine

## Brainerd spatial case (why geography still matters)

- 532 Comp/Math residents in Crow Wing County
- 74.2% of statewide Comp/Math jobs in Twin Cities metro
- NW MN LQ ~0.32 · Crow Wing residential LQ ~0.45–0.55
- Comparable pattern: Fergus Falls / Willmar

## Deploy

Static site on Vercel. No build step.

```bash
npx vercel --prod
```

## Next engineering

1. Init Next.js (or keep static and grow prototypes)
2. Auth + org model
3. Replace sample data with API + Postgres
4. Ship dashboard as first paid surface

---

Spatialytics · Brainerd Lakes · 2025–2026
