import { arSummary, arFollowUps } from "@/lib/sample-data";

export default function ReceivablesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Accounts Receivable</h1>
        <p className="text-sm text-slate-400 mt-1">Money view + follow-up list</p>
      </div>

      <div className="grid sm:grid-cols-4 gap-3">
        {arSummary.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-slate-800 bg-slate-900/50 p-3 text-center"
          >
            <div className={`text-lg font-bold font-mono ${s.color}`}>{s.value}</div>
            <div className="text-xs text-slate-500 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden">
        <div className="px-4 py-3 border-b border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Follow up
        </div>
        <div className="divide-y divide-slate-800/80">
          {arFollowUps.map((r) => (
            <div
              key={r.name}
              className="px-4 py-3 flex flex-wrap items-center justify-between gap-2 hover:bg-sky-500/5"
            >
              <div>
                <span className="text-white font-medium">{r.name}</span>
                <span className="text-slate-500 text-sm ml-2">
                  ${r.amount.toLocaleString()} · {r.days} days overdue
                </span>
              </div>
              <button className="text-xs px-3 py-1 rounded-md bg-sky-500/20 text-sky-400 border border-sky-500/30 hover:bg-sky-500/30">
                Follow up
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
