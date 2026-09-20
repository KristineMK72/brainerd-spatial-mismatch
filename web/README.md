# Spatialytics Web App

Next.js + **Clerk** auth + four priority modules.

## Setup (5 minutes)

### 1. Create a Clerk app

1. Go to [dashboard.clerk.com](https://dashboard.clerk.com)
2. Create application (Email + Google is fine)
3. Copy **Publishable key** and **Secret key**

### 2. Env file

```bash
cp .env.local.example .env.local
```

Paste keys into `.env.local`:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

### 3. Run

```bash
npm install
npm run dev
```

Open http://localhost:3000 → Sign up → Dashboard.

## Protected routes

Middleware requires auth for everything except `/`, `/sign-in`, `/sign-up`.

## Multi-tenant orgs (next)

- Enable **Clerk Organizations**, or
- Store `orgId` in metadata / Postgres
- Scope every query by `orgId` from `getSession()`

## Modules

| Route | Module |
|-------|--------|
| `/dashboard` | Daily Dashboard |
| `/profitability` | Job Profitability |
| `/receivables` | Accounts Receivable |
| `/dont-forget` | Don't-Forget Engine |

## Deploy on Vercel

1. Root Directory = `web`
2. Add Clerk env vars in Vercel
3. Add production URL in Clerk → Domains
