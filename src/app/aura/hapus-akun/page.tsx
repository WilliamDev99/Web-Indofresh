import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  APP_ID,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  DELETION_DAYS,
  DEVELOPER_NAME,
  RETENTION_AFTER_DELETE_DAYS,
} from "../_shared/config";
import {
  Bullets,
  Callout,
  DocBody,
  DocHero,
  EmailLink,
  Section,
  linkClass,
} from "../_shared/doc";

const LAST_UPDATED = "21 November 2026";

export const metadata: Metadata = {
  title: "Hapus Akun & Data",
  description:
    "Cara meminta penghapusan akun dan data aplikasi AURA, data apa yang dihapus, dan berapa lama prosesnya.",
};

const sections = [
  { id: "cara", label: "Cara meminta penghapusan" },
  { id: "dihapus", label: "Data yang dihapus" },
  { id: "disimpan", label: "Data yang disimpan & berapa lama" },
  { id: "penting", label: "Hal penting sebelum menghapus" },
];

const emailSubject = "Hapus akun AURA";
const emailBody = [
  "Halo tim AURA,",
  "",
  "Saya ingin menghapus akun AURA saya beserta datanya.",
  "",
  "Nama di akun: ",
  "Email untuk masuk AURA: ",
  "Nama panggilan anak yang tertaut (opsional, untuk verifikasi): ",
  "",
  "Terima kasih.",
].join("\n");
const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  emailSubject,
)}&body=${encodeURIComponent(emailBody)}`;

function Steps({ items }: { items: ReactNode[] }) {
  return (
    <ol className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700">
            {i + 1}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

export default function AuraDeleteAccountPage() {
  return (
    <>
      <DocHero
        title="Hapus Akun & Data AURA"
        dateLabel="Terakhir diperbarui"
        date={LAST_UPDATED}
      >
        <p>
          Halaman ini menjelaskan cara meminta penghapusan akun dan data
          aplikasi <strong className="text-white">AURA</strong> (
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-base text-violet-100">
            {APP_ID}
          </code>
          ) yang dikembangkan oleh {DEVELOPER_NAME}.
        </p>
      </DocHero>

      <DocBody sections={sections}>
        {/* 1 */}
        <Section id="cara" number={1} title="Cara meminta penghapusan">
          <p>
            Penghapusan akun diminta oleh <strong>orang tua</strong>. Pilih
            salah satu cara berikut.
          </p>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-slate-200 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-violet-600">
                Cara A
              </p>
              <h3 className="mt-1 mb-4 text-lg font-semibold text-slate-900">
                Lewat aplikasi
              </h3>
              <Steps
                items={[
                  "Buka AURA di HP orang tua.",
                  <>
                    Masuk ke menu <strong>Pengaturan</strong>.
                  </>,
                  <>
                    Ketuk <strong>Hapus akun</strong>, lalu ikuti langkah
                    konfirmasinya.
                  </>,
                ]}
              />
            </div>

            {CONTACT_EMAIL && (
              <div className="rounded-2xl border border-slate-200 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-violet-600">
                  Cara B
                </p>
                <h3 className="mt-1 mb-4 text-lg font-semibold text-slate-900">
                  Tanpa aplikasi, lewat email
                </h3>
                <Steps
                  items={[
                    <>
                      Kirim email ke <EmailLink /> dari{" "}
                      <strong>alamat email yang Anda pakai untuk masuk</strong>{" "}
                      ke AURA.
                    </>,
                    <>
                      Tulis judul <strong>“{emailSubject}”</strong>, lalu
                      sebutkan nama dan email akun Anda.
                    </>,
                    <>
                      Kami memproses permintaan dalam{" "}
                      <strong>{DELETION_DAYS} hari kerja</strong> dan membalas
                      email Anda setelah akun dihapus.
                    </>,
                  ]}
                />
                <a
                  href={mailtoHref}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-colors hover:bg-violet-700"
                >
                  Kirim permintaan hapus akun
                  <span aria-hidden>→</span>
                </a>
                <p className="mt-4 text-sm text-slate-500">
                  Tidak bisa lagi mengakses email akun? Hubungi kami lewat{" "}
                  <a
                    href={`https://wa.me/${CONTACT_PHONE.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    WhatsApp {CONTACT_PHONE.display}
                  </a>
                  . Kami akan meminta verifikasi untuk memastikan Anda pemilik
                  akun.
                </p>
              </div>
            )}
          </div>
        </Section>

        {/* 2 */}
        <Section id="dihapus" number={2} title="Data yang dihapus">
          <div className="grid gap-4">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6">
              <h3 className="mb-3 font-semibold text-slate-900">
                Bila Anda satu-satunya orang tua di keluarga itu
              </h3>
              <p className="mb-3">Seluruh akun keluarga dihapus, termasuk:</p>
              <Bullets
                items={[
                  "Akun Anda: nama, alamat email, nomor HP, dan foto profil.",
                  "Pengaturan keluarga, seperti jam istirahat dan PIN hapus aplikasi.",
                  "Akun semua anak yang tertaut: nama panggilan dan umur.",
                  "Semua peringatan bahaya, termasuk potongan pesan, nama aplikasi, dan nama pengirim.",
                  "Bukti tersegel di Vault Forensik dan lokasi dari setiap SOS.",
                  "Obrolan anak dengan teman bicara Aura.",
                  "Status perlindungan dan ID perangkat untuk notifikasi.",
                ]}
              />
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6">
              <h3 className="mb-3 font-semibold text-slate-900">
                Bila masih ada orang tua lain di keluarga itu
              </h3>
              <p>
                Hanya akun dan data pribadi Anda yang dihapus (nama, email,
                nomor HP, foto profil, dan ID perangkat Anda). Keluarga, akun
                anak, dan peringatannya tetap dipegang orang tua lain itu.
              </p>
            </div>
          </div>
        </Section>

        {/* 3 */}
        <Section
          id="disimpan"
          number={3}
          title="Data yang disimpan & berapa lama"
        >
          <Bullets
            items={[
              <>
                Setelah akun dihapus, data di atas terhapus permanen dari server
                kami{" "}
                <strong>
                  paling lambat {RETENTION_AFTER_DELETE_DAYS} hari
                </strong>
                .
              </>,
              "Kami tidak menyimpan data akun AURA setelah masa itu, kecuali bila diwajibkan oleh hukum.",
              "Data yang hanya diproses di HP (isi pesan yang tidak berbahaya dan aplikasi yang sedang dibuka anak) tidak pernah dikirim ke server, dan hilang saat AURA dihapus dari HP.",
            ]}
          />
        </Section>

        {/* 4 */}
        <Section id="penting" number={4} title="Hal penting sebelum menghapus">
          <Callout tone="rose">
            <strong className="text-rose-700">
              Penghapusan bersifat permanen.
            </strong>{" "}
            Bukti yang terhapus tidak bisa dipulihkan dan tidak bisa lagi
            dipakai untuk melapor. Unduh dulu berkas laporan dari Vault Forensik
            bila masih dibutuhkan.
          </Callout>
          <Bullets
            items={[
              "Akun anak tidak bisa menghapus dirinya sendiri dari HP anak, karena itu sama dengan mematikan perlindungan tanpa sepengetahuan orang tua. Akun anak terhapus saat orang tuanya menghapus akun.",
              "Menghapus aplikasi AURA dari HP (dengan PIN orang tua) tidak otomatis menghapus data di server. Gunakan salah satu cara di atas untuk menghapus akun dan data.",
            ]}
          />
          <p>
            Informasi lengkap tentang data yang kami proses ada di{" "}
            <Link href="/aura/privasi" className={linkClass}>
              Kebijakan Privasi AURA
            </Link>
            . Pertanyaan lain?{" "}
            <Link href="/aura/kontak" className={linkClass}>
              Hubungi kami
            </Link>
            .
          </p>
        </Section>
      </DocBody>
    </>
  );
}
