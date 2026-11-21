import type { Metadata } from "next";
import Link from "next/link";
import AuraNav from "./_shared/AuraNav";
import { auraPages } from "./_shared/config";

export const metadata: Metadata = {
  title: {
    default: "AURA — Teman Aman Anak di Dunia Digital",
    template: "%s — AURA",
  },
  description:
    "AURA adalah aplikasi kontrol orang tua yang melindungi anak dari bahaya di dunia digital secara terbuka, bukan mata-mata.",
  authors: [{ name: "AURA" }],
  keywords: ["AURA", "parental control", "kontrol orang tua", "keamanan anak"],
  openGraph: {
    title: "AURA — Teman Aman Anak di Dunia Digital",
    description:
      "Aplikasi kontrol orang tua yang melindungi anak dari bahaya di dunia digital secara terbuka, bukan mata-mata.",
    siteName: "AURA",
    type: "website",
    locale: "id_ID",
  },
};

function AuraMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <linearGradient id="aura-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6366f1" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#aura-mark)" />
      <circle
        cx="32"
        cy="32"
        r="17"
        fill="none"
        stroke="#fff"
        strokeOpacity=".35"
        strokeWidth="3"
      />
      <circle cx="32" cy="32" r="9" fill="#fff" />
      <circle cx="32" cy="32" r="4" fill="#2dd4bf" />
    </svg>
  );
}

export default function AuraLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-white text-slate-700 selection:bg-violet-200 selection:text-violet-950">
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/aura/privasi" className="flex items-center gap-2.5">
            <AuraMark />
            <span className="text-lg font-bold tracking-wide text-slate-900">
              AURA
            </span>
          </Link>
          <AuraNav />
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-2.5">
            <AuraMark className="h-6 w-6" />
            <span>
              <strong className="text-slate-700">AURA</strong> · Teman aman anak
              di dunia digital
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {auraPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="hover:text-slate-800 transition-colors"
              >
                {page.label}
              </Link>
            ))}
            <span>© {new Date().getFullYear()} AURA</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
