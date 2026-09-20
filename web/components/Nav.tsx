import Link from "next/link";
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

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
        <div className="flex items-center gap-4 text-sm text-slate-400">
          <SignedIn>
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-sky-400 transition hidden sm:inline">
                {l.label}
              </Link>
            ))}
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-sky-400 hover:text-sky-300 font-medium">Sign in</button>
            </SignInButton>
            <Link
              href="/sign-up"
              className="px-3 py-1.5 rounded-lg bg-sky-500 text-slate-950 text-sm font-semibold hover:bg-sky-400"
            >
              Sign up
            </Link>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}
