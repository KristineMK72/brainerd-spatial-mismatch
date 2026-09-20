import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-medium mb-4">
          App scaffold · sample data · auth next
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Spatialytics
        </h1>
        <p className="mt-2 text-slate-400 max-w-xl">
          Small-business OS first. Spatial intelligence when geography improves the answer.
        </p>
      </div>

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

      <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-sm text-slate-300">
        <strong className="text-amber-400">Auth status:</strong> Demo session only. Wire Clerk / Auth.js /
        Supabase Auth, then scope every query by <code className="text-sky-400">org_id</code>.
        See <code className="text-sky-400">lib/auth.ts</code>.
      </div>
    </div>
  );
}
