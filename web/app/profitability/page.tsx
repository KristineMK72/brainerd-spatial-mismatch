"use client";

import { useState, useMemo } from "react";

export default function ProfitabilityPage() {
  const [rev, setRev] = useState(1200);
  const [labor, setLabor] = useState(420);
  const [mats, setMats] = useState(180);
  const [subs, setSubs] = useState(0);
  const [other, setOther] = useState(45);

  const { profit, margin, note } = useMemo(() => {
    const p = rev - labor - mats - subs - other;
    const m = rev > 0 ? (p / rev) * 100 : 0;
    let n = "Healthy margin. This job type is worth repeating.";
    if (m < 0) n = "Losing money. Review pricing or costs.";
    else if (m < 15) n = "Thin margin. Consider raising price or cutting costs.";
    else if (m < 30) n = "Acceptable margin. Room to improve.";
    return { profit: p, margin: m, note: n };
  }, [rev, labor, mats, subs, other]);

  const field = (label: string, value: number, set: (n: number) => void) => (
    <div>
      <label className="block text-xs text-slate-400 mb-1">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => set(+e.target.value || 0)}
        className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-slate-200 focus:border-sky-500 focus:outline-none"
      />
    </div>
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Job Profitability</h1>
        <p className="text-sm text-slate-400 mt-1">Revenue − costs = true margin</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 space-y-3">
          {field("Revenue ($)", rev, setRev)}
          {field("Labor ($)", labor, setLabor)}
          {field("Materials ($)", mats, setMats)}
          {field("Subcontractors ($)", subs, setSubs)}
          {field("Other costs ($)", other, setOther)}
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 flex flex-col justify-center">
          <div className="text-xs text-slate-400 uppercase tracking-wider mb-2">Job Profit</div>
          <div
            className={`text-4xl font-extrabold font-mono ${
              profit >= 0 ? "text-emerald-400" : "text-rose-400"
            }`}
          >
            {profit < 0 ? "-" : ""}${Math.abs(Math.round(profit)).toLocaleString()}
          </div>
          <div className="mt-2 text-lg text-slate-300">Margin: {margin.toFixed(1)}%</div>
          <div className="mt-4 text-sm text-slate-400">{note}</div>
        </div>
      </div>
    </div>
  );
}
