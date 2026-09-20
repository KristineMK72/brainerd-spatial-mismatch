"use client";

import { useState } from "react";
import { forgetAlerts as initial } from "@/lib/sample-data";

export default function DontForgetPage() {
  const [items, setItems] = useState(initial);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Don&apos;t-Forget Engine</h1>
        <p className="text-sm text-slate-400 mt-1">The business&apos;s memory</p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden">
        {items.length === 0 ? (
          <div className="px-4 py-8 text-sm text-slate-500 text-center">
            All clear — nothing to forget.
          </div>
        ) : (
          <div className="divide-y divide-slate-800/80">
            {items.map((f, i) => (
              <div key={i} className="px-4 py-3 flex items-start gap-3 hover:bg-sky-500/5">
                <span className="text-lg">{f.icon}</span>
                <span className="text-sm text-slate-300 flex-1">{f.text}</span>
                <button
                  className="text-xs text-slate-500 hover:text-sky-400"
                  onClick={() => setItems((prev) => prev.filter((_, j) => j !== i))}
                >
                  Dismiss
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
