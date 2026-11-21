"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { auraPages } from "./config";

export default function AuraNav() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Halaman AURA"
      className="flex gap-1 text-xs font-semibold sm:text-sm"
    >
      {auraPages.map((page) => {
        const active = pathname === page.href;
        return (
          <Link
            key={page.href}
            href={page.href}
            aria-current={active ? "page" : undefined}
            className={`rounded-full px-3 py-1.5 transition-colors ${
              active
                ? "bg-violet-50 text-violet-700"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            <span className="sm:hidden">{page.short}</span>
            <span className="hidden sm:inline">{page.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
