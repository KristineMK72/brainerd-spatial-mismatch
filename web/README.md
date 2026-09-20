# Spatialytics Web App

Next.js App Router scaffold for the real product.

## Priority modules

| Route | Module |
|-------|--------|
| `/dashboard` | Daily Dashboard + Needs Attention |
| `/profitability` | Job Profitability calculator |
| `/receivables` | Accounts Receivable |
| `/dont-forget` | Don't-Forget Engine |

## Run locally

```bash
cd web
npm install
npm run dev
```

Open http://localhost:3000

## Auth (next step)

See `lib/auth.ts`. Wire Clerk, Auth.js, or Supabase Auth, then:

1. Protect routes with session check
2. Add `org_id` to every table / query
3. Replace `lib/sample-data.ts` with real DB calls

## Deploy on Vercel

Set Root Directory = `web` in the Vercel project, or:

```bash
cd web && npx vercel
```
