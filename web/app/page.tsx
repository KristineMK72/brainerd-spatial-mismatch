import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-medium mb-4">
          Clerk auth wired · sample data until DB
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Spatialytics
        </h1>
        <p className="mt-2 text-slate-400 max-w-xl">
          Small-business OS first. Spatial intelligence when geography improves the answer.
        </p>
      </div>

      <SignedOut>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 max-w-md">
          <p className="text-slate-300 text-sm mb-4">
            Sign in to open the dashboard and tools.
          </p>
          <div className="flex gap-3">
            <Link
              href="/sign-in"
              className="px-4 py-2 rounded-lg bg-sky-500 text-slate-950 text-sm font-semibold hover:bg-sky-400"
            >
              Sign in
            </Link>
            <Link
              href="/sign-up"
              className="px-4 py-2 rounded-lg border border-slate-600 text-sm text-slate-300 hover:border-slate-400"
            >
              Create account
            </Link>
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: "/dashboard", title: "01 · Daily Dashboard", desc: "Today stats + Needs Attention" },
            { href: "/profitability", title: "05 · Job Profitability", desc: "True margin per job" },
            { href: "/receivables", title: "07 · Accounts Receivable", desc: "Outstanding + follow-up list" },
            { href: "/dont-forget", title: "09 · Don't-Forget Engine", desc: "Business memory & alerts" },
          ].map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 hover:border-sky-500/40 transition"
            >
              <div className="text-white font-medium">{m.title}</div>
              <div className="text-sm text-slate-400 mt-1">{m.desc}</div>
            </Link>
          ))}
        </div>
      </SignedIn>
    </div>
  );
}
