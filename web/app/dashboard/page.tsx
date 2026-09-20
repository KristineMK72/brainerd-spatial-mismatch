import { todayStats, needsAttention } from "@/lib/sample-data";
import { getDemoSession } from "@/lib/auth";

export default function DashboardPage() {
  const user = getDemoSession();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Daily Dashboard</h1>
        <p className="text-sm text-slate-400 mt-1">
          Good morning, {user.name} · org <code className="text-sky-400">{user.orgId}</code>
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-xl border border-slate-800 bg-slate-900/50 p-4">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Today</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {todayStats.map((s) => (
              <div key={s.label} className="rounded-lg bg-slate-950/80 p-3 border border-slate-800">
                <div className={`text-lg font-bold font-mono ${s.color}`}>{s.value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-amber-500/30 bg-slate-900/50 p-4">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-3">
            ⚠️ Needs Attention
          </div>
          <ul className="space-y-2 text-sm">
            {needsAttention.map((a) => (
              <li key={a} className="flex gap-2">
                <span className="text-amber-400">•</span>
                <span className="text-slate-300">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
