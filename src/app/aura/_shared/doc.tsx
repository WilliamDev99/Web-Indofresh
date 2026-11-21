import type { ReactNode } from "react";
import Link from "next/link";
import { CONTACT_EMAIL, CONTACT_PHONE, DEVELOPER_NAME } from "./config";

/** Ringkasan kontak untuk bagian "Hubungi kami" di halaman dokumen. */
export function ContactSummary() {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6 space-y-1">
      <p className="font-semibold text-slate-900">{DEVELOPER_NAME}</p>
      {CONTACT_EMAIL && (
        <p>
          Email: <EmailLink />
        </p>
      )}
      <p>
        Telepon / WhatsApp:{" "}
        <a
          href={`tel:${CONTACT_PHONE.tel}`}
          className="font-medium text-violet-700 underline underline-offset-2"
        >
          {CONTACT_PHONE.display}
        </a>
      </p>
      <p className="pt-2 text-sm">
        <Link href="/aura/kontak" className={linkClass}>
          Lihat halaman kontak →
        </Link>
      </p>
    </div>
  );
}

export type DocSection = { id: string; label: string };

export function DocHero({
  title,
  dateLabel,
  date,
  children,
}: {
  title: string;
  dateLabel?: string;
  date?: string;
  children: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-violet-950 to-slate-950">
      <div className="absolute -top-24 right-[-6rem] h-80 w-80 rounded-full bg-violet-500/25 blur-3xl" />
      <div className="absolute -bottom-32 left-[-4rem] h-72 w-72 rounded-full bg-teal-400/15 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-semibold text-violet-200">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
          Aplikasi AURA
        </span>
        <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        <div className="mt-5 max-w-2xl text-lg leading-relaxed text-violet-100/75">
          {children}
        </div>
        {date && (
          <p className="mt-8 text-sm text-violet-200/70">
            {dateLabel}{" "}
            <strong className="font-semibold text-white">{date}</strong>
          </p>
        )}
      </div>
    </div>
  );
}

export function DocBody({
  sections,
  children,
}: {
  sections: DocSection[];
  children: ReactNode;
}) {
  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-[16rem_1fr] gap-12">
          <aside className="hidden lg:block">
            <nav
              aria-label="Daftar isi"
              className="sticky top-24 rounded-2xl border border-slate-100 p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Daftar isi
              </p>
              <ol className="space-y-1.5 text-sm">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="flex gap-2 text-slate-600 hover:text-violet-700 transition-colors"
                    >
                      <span className="tabular-nums text-slate-400">
                        {i + 1}.
                      </span>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>
          <article className="max-w-3xl space-y-14">{children}</article>
        </div>
      </div>
    </section>
  );
}

export function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="flex items-baseline gap-3 text-2xl font-bold text-slate-900 mb-4">
        <span className="text-base font-semibold text-violet-600 tabular-nums">
          {number}.
        </span>
        {title}
      </h2>
      <div className="space-y-4 text-slate-600 leading-relaxed">{children}</div>
    </section>
  );
}

export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Callout({
  tone = "violet",
  children,
}: {
  tone?: "violet" | "rose" | "teal";
  children: ReactNode;
}) {
  const styles = {
    violet: "border-violet-100 bg-violet-50/60",
    rose: "border-rose-200 bg-rose-50",
    teal: "border-teal-100 bg-teal-50/60",
  }[tone];
  return (
    <div className={`rounded-2xl border px-5 py-4 text-slate-700 ${styles}`}>
      {children}
    </div>
  );
}

export function EmailLink({ subject }: { subject?: string }) {
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return (
    <a
      href={`mailto:${CONTACT_EMAIL}${query}`}
      className="font-medium text-violet-700 underline underline-offset-2"
    >
      {CONTACT_EMAIL}
    </a>
  );
}

export const linkClass = "text-violet-700 underline underline-offset-2";
