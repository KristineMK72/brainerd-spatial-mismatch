import Link from "next/link";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/profitability", label: "Profitability" },
  { href: "/receivables", label: "Receivables" },
  { href: "/dont-forget", label: "Don't-Forget" },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
            S
          </div>
          <span className="font-semibold text-white">Spatialytics</span>
        </Link>
        <div className="flex gap-4 text-sm text-slate-400">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-sky-400 transition">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
