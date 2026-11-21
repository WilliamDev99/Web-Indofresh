import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  DEVELOPER_NAME,
} from "../_shared/config";
import { DocHero, linkClass } from "../_shared/doc";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi tim AURA lewat email, telepon, atau WhatsApp untuk pertanyaan, bantuan, atau permintaan hapus akun.",
};

const waText = encodeURIComponent(
  "Halo tim AURA, saya ingin bertanya tentang ",
);

function ContactCard({
  icon,
  label,
  value,
  href,
  action,
  external,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
  action: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-500/5"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600 group-hover:bg-violet-100">
        {icon}
      </span>
      <span className="mt-5 text-sm font-medium text-slate-500">{label}</span>
      <span className="mt-1 break-all text-lg font-semibold text-slate-900">
        {value}
      </span>
      <span className="mt-5 text-sm font-semibold text-violet-700">
        {action} →
      </span>
    </a>
  );
}

const iconProps = {
  className: "h-5 w-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export default function AuraContactPage() {
  return (
    <>
      <DocHero title="Hubungi Tim AURA">
        <p>
          Ada pertanyaan tentang AURA, butuh bantuan memakai aplikasi, atau
          ingin menghapus akun? Hubungi kami lewat salah satu cara di bawah ini.
        </p>
      </DocHero>

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CONTACT_EMAIL && (
              <ContactCard
                label="Email"
                value={CONTACT_EMAIL}
                href={`mailto:${CONTACT_EMAIL}`}
                action="Kirim email"
                icon={
                  <svg {...iconProps}>
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
              />
            )}
            <ContactCard
              label="Telepon"
              value={CONTACT_PHONE.display}
              href={`tel:${CONTACT_PHONE.tel}`}
              action="Telepon sekarang"
              icon={
                <svg {...iconProps}>
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              }
            />
            <ContactCard
              label="WhatsApp"
              value={CONTACT_PHONE.display}
              href={`https://wa.me/${CONTACT_PHONE.whatsapp}?text=${waText}`}
              action="Chat di WhatsApp"
              external
              icon={
                <svg {...iconProps}>
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              }
            />
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6 text-slate-600">
              <h2 className="font-semibold text-slate-900">
                Ingin menghapus akun?
              </h2>
              <p className="mt-2 text-sm leading-relaxed">
                Buka AURA di HP orang tua →{" "}
                <strong>Pengaturan → Hapus akun</strong>, atau kirim email
                dengan judul “Hapus akun AURA” dari alamat email yang Anda pakai
                untuk masuk. Lihat rinciannya di{" "}
                <Link href="/aura/hapus-akun" className={linkClass}>
                  halaman Hapus Akun &amp; Data
                </Link>
                .
              </p>
            </div>

            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-slate-700">
              <h2 className="font-semibold text-rose-700">
                Anak dalam bahaya sekarang?
              </h2>
              <p className="mt-2 text-sm leading-relaxed">
                Jangan menunggu balasan kami. Hubungi polisi di{" "}
                <strong>110</strong>, layanan darurat <strong>112</strong>, atau
                SAPA 129 (KemenPPPA) di <strong>129</strong> / WhatsApp{" "}
                <strong>08111-129-129</strong>.
              </p>
            </div>
          </div>

          <p className="mt-10 text-sm text-slate-500">
            AURA dikembangkan oleh {DEVELOPER_NAME}.
          </p>
        </div>
      </section>
    </>
  );
}
