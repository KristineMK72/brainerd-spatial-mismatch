# Spatialytics App Scaffold

Real product structure. Prototypes live at `/prototypes.html` (interactive, no backend).

## Planned modules (priority order)

1. **dashboard/** — Daily Business Dashboard + Needs Attention
2. **profitability/** — Job Profitability calculator
3. **receivables/** — Accounts Receivable dashboard
4. **dont-forget/** — Don't-Forget Engine
5. Estimate → Job → Invoice lifecycle
6. Smart Scheduling + Time Tracking
7. Customer Retention + Pipeline
8. Spatialize layer (last)

## Stack (recommended)

- Next.js (App Router) or similar
- Auth: Clerk / Supabase Auth / Auth.js
- Database: Postgres (Supabase / Neon / Railway)
- Multi-tenant: org_id on every row
- Hosting: Vercel

## Local prototypes

Open `../prototypes.html` for clickable UX demos of modules 1–4 with sample data.

## Next engineering steps

1. Init Next.js in this folder or monorepo root
2. Add auth + org model
3. Replace sample data in prototypes with API routes
4. Ship dashboard as first paid surface
