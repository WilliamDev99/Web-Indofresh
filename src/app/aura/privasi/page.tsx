import type { Metadata } from "next";
import type { ReactNode } from "react";

const DEVELOPER_NAME = "Indofresh";
const LAST_UPDATED = "19 November 2026";
const APP_ID = "id.aura.aura";
const SERVER_LOCATION = "Singapura";
const DELETION_DAYS = 7; // hari kerja untuk permintaan hapus lewat email
const RETENTION_AFTER_DELETE_DAYS = 30;
// Isi alamat email untuk menampilkan cara hapus akun tanpa aplikasi dan
// kontak email. Biarkan kosong untuk menyembunyikannya.
const CONTACT_EMAIL = "";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Kebijakan privasi aplikasi AURA: data apa yang dikumpulkan, untuk apa, dan bagaimana Anda bisa menghapusnya.",
};

const sections = [
  { id: "untuk-siapa", label: "Untuk siapa AURA" },
  { id: "data", label: "Data yang kami kumpulkan" },
  { id: "penggunaan", label: "Untuk apa data dipakai" },
  { id: "pemroses", label: "Pihak yang memproses data" },
  { id: "keamanan", label: "Penyimpanan dan keamanan" },
  { id: "hapus-akun", label: "Menghapus akun dan data" },
  { id: "anak", label: "Anak" },
  { id: "perubahan", label: "Perubahan kebijakan" },
  { id: "kontak", label: "Hubungi kami" },
];

const processors = [
  {
    service: "Supabase",
    purpose: "Basis data, login, penyimpanan foto",
    data: "Semua data di bagian 2 yang dikirim ke server",
  },
  {
    service: "Google Firebase Cloud Messaging",
    purpose: "Mengirim notifikasi dan alarm",
    data: "ID perangkat, isi notifikasi",
  },
  {
    service: "Cloudflare Workers AI",
    purpose: "Membalas obrolan dengan Aura",
    data: "Pesan anak ke Aura",
  },
  {
    service: "Meta (Facebook Login)",
    purpose: "Masuk dengan Facebook, bila dipilih orang tua",
    data: "Nama dan email dari akun Facebook",
  },
  {
    service: "OpenStreetMap",
    purpose: "Peta lokasi SOS",
    data: "Alamat IP saat peta dimuat",
  },
];

function Section({
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

function Bullets({ items }: { items: ReactNode[] }) {
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

function DataGroup({
  title,
  tone = "default",
  children,
}: {
  title: string;
  tone?: "default" | "local";
  children: ReactNode;
}) {
  const styles =
    tone === "local"
      ? "border-teal-100 bg-teal-50/60"
      : "border-slate-100 bg-slate-50/60";
  return (
    <div className={`rounded-2xl border p-6 ${styles}`}>
      <h3 className="font-semibold text-slate-900 mb-3">{title}</h3>
      <div className="text-slate-600">{children}</div>
    </div>
  );
}

function EmailLink() {
  return (
    <a
      href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Hapus akun AURA")}`}
      className="font-medium text-violet-700 underline underline-offset-2"
    >
      {CONTACT_EMAIL}
    </a>
  );
}

export default function AuraPrivacyPage() {
  return (
    <>
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-violet-950 to-slate-950">
        <div className="absolute -top-24 right-[-6rem] h-80 w-80 rounded-full bg-violet-500/25 blur-3xl" />
        <div className="absolute -bottom-32 left-[-4rem] h-72 w-72 rounded-full bg-teal-400/15 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-semibold text-violet-200">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
            Aplikasi AURA
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Kebijakan Privasi AURA
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-violet-100/75">
            AURA (“kami”) dikembangkan oleh {DEVELOPER_NAME}. Kebijakan ini
            menjelaskan data apa yang dikumpulkan aplikasi AURA (
            <code className="rounded bg-white/10 px-1.5 py-0.5 text-base text-violet-100">
              {APP_ID}
            </code>
            ), untuk apa, dan bagaimana Anda bisa menghapusnya.
          </p>
          <p className="mt-8 text-sm text-violet-200/70">
            Terakhir diperbarui{" "}
            <strong className="font-semibold text-white">{LAST_UPDATED}</strong>
          </p>
        </div>
      </div>

      <section className="py-14 lg:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-[16rem_1fr] gap-12">
            {/* Daftar isi */}
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

            <article className="max-w-3xl space-y-14">
              {/* 1 */}
              <Section id="untuk-siapa" number={1} title="Untuk siapa AURA">
                <p>
                  AURA adalah aplikasi kontrol orang tua. Orang tua memasang AURA
                  di HP-nya dan di HP anaknya sendiri. AURA hanya boleh dipakai
                  untuk menjaga anak sendiri, dengan sepengetahuan dan persetujuan
                  anak. Sebelum perlindungan aktif, anak membaca dan menyetujui
                  “Kesepakatan Kita” di HP-nya.
                </p>
              </Section>

              {/* 2 */}
              <Section id="data" number={2} title="Data yang kami kumpulkan">
                <div className="grid gap-4">
                  <DataGroup title="Dari orang tua">
                    <Bullets
                      items={[
                        "Nama, alamat email (untuk masuk), dan nomor HP (opsional, agar anak bisa menelepon orang tua dari layar SOS).",
                        "Foto profil (opsional).",
                        "Pengaturan keluarga, seperti jam istirahat anak.",
                      ]}
                    />
                  </DataGroup>

                  <DataGroup title="Dari anak">
                    <Bullets
                      items={[
                        "Nama panggilan dan umur.",
                        <>
                          <strong className="text-slate-800">
                            Potongan pesan berbahaya.
                          </strong>{" "}
                          AURA membaca notifikasi pesan masuk di HP anak (mis.
                          WhatsApp, Instagram, TikTok, Telegram, SMS, chat game).
                          Pemeriksaannya terjadi{" "}
                          <strong className="text-slate-800">di HP anak</strong>.
                          Yang dikirim ke server hanya pesan yang terdeteksi
                          berbahaya: jenis bahayanya, potongan kecil pesan
                          pemicunya, nama aplikasi, dan nama pengirim yang tampil
                          di notifikasi. Obrolan biasa tidak dikirim.
                        </>,
                        <>
                          <strong className="text-slate-800">Lokasi persis</strong>,
                          hanya saat anak menekan tombol SOS. AURA tidak melacak
                          lokasi terus-menerus.
                        </>,
                        <>
                          <strong className="text-slate-800">
                            Obrolan dengan Aura
                          </strong>{" "}
                          (teman bicara di aplikasi). Pesan anak dikirim ke
                          layanan AI agar Aura bisa menjawab. Orang tua tidak bisa
                          membaca obrolan ini; hanya tanda bahaya yang diteruskan
                          sebagai peringatan.
                        </>,
                        "Status perlindungan (mis. apakah akses notifikasi menyala) dan waktu terakhir aktif.",
                      ]}
                    />
                  </DataGroup>

                  <DataGroup
                    title="Data yang diproses di HP saja dan tidak dikirim"
                    tone="local"
                  >
                    <Bullets
                      items={[
                        "Aplikasi yang sedang dibuka anak, hanya untuk menutupnya saat jam istirahat.",
                        "Isi pesan yang tidak berbahaya.",
                      ]}
                    />
                  </DataGroup>

                  <DataGroup title="Dari perangkat">
                    <Bullets
                      items={[
                        "ID perangkat untuk notifikasi (Firebase Installation ID), agar peringatan dan alarm SOS sampai ke HP orang tua.",
                      ]}
                    />
                  </DataGroup>
                </div>
              </Section>

              {/* 3 */}
              <Section id="penggunaan" number={3} title="Untuk apa data dipakai">
                <Bullets
                  items={[
                    "Memberi tahu orang tua saat anak menghadapi bahaya, dan membunyikan alarm saat anak menekan SOS.",
                    "Menyimpan bukti bersegel waktu yang bisa dibawa orang tua saat melapor.",
                    "Menjalankan fitur jam istirahat dan perlindungan agar AURA tidak dihapus tanpa PIN orang tua.",
                  ]}
                />
                <p className="rounded-2xl border border-violet-100 bg-violet-50/60 px-5 py-4 text-slate-700">
                  Kami <strong>tidak</strong> menjual data,{" "}
                  <strong>tidak</strong> menampilkan iklan, dan{" "}
                  <strong>tidak</strong> memakai data untuk melatih AI.
                </p>
              </Section>

              {/* 4 */}
              <Section
                id="pemroses"
                number={4}
                title="Pihak yang memproses data atas nama kami"
              >
                {/* Tabel untuk layar lebar */}
                <div className="hidden sm:block overflow-hidden rounded-2xl border border-slate-100">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50 text-left text-slate-700">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Layanan</th>
                        <th className="px-4 py-3 font-semibold">Untuk</th>
                        <th className="px-4 py-3 font-semibold">Data</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {processors.map((p) => (
                        <tr key={p.service}>
                          <td className="px-4 py-3 font-medium text-slate-800 align-top">
                            {p.service}
                          </td>
                          <td className="px-4 py-3 align-top">{p.purpose}</td>
                          <td className="px-4 py-3 align-top">{p.data}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Kartu untuk layar HP */}
                <div className="grid gap-3 sm:hidden">
                  {processors.map((p) => (
                    <div
                      key={p.service}
                      className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 text-sm"
                    >
                      <p className="font-semibold text-slate-900">{p.service}</p>
                      <p className="mt-2">
                        <span className="text-slate-400">Untuk: </span>
                        {p.purpose}
                      </p>
                      <p className="mt-1">
                        <span className="text-slate-400">Data: </span>
                        {p.data}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              {/* 5 */}
              <Section id="keamanan" number={5} title="Penyimpanan dan keamanan">
                <Bullets
                  items={[
                    "Data dikirim melalui koneksi terenkripsi (HTTPS).",
                    "Akses data dibatasi aturan keamanan basis data: orang tua hanya melihat data keluarganya, dan obrolan anak dengan Aura tidak bisa dibaca orang tua.",
                    `Data disimpan selama akun aktif, dan dihapus paling lambat ${RETENTION_AFTER_DELETE_DAYS} hari setelah akun dihapus.`,
                    `Lokasi server: ${SERVER_LOCATION}.`,
                  ]}
                />
              </Section>

              {/* 6 */}
              <Section id="hapus-akun" number={6} title="Menghapus akun dan data">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5">
                    <p className="font-semibold text-slate-900 mb-2">Di aplikasi</p>
                    <p className="text-sm">
                      Buka AURA di HP orang tua →{" "}
                      <strong className="text-slate-800">
                        Pengaturan → Hapus akun
                      </strong>
                      .
                    </p>
                  </div>
                  {CONTACT_EMAIL && (
                    <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5">
                      <p className="font-semibold text-slate-900 mb-2">
                        Tanpa aplikasi
                      </p>
                      <p className="text-sm">
                        Kirim email ke <EmailLink /> dengan judul “Hapus akun
                        AURA”, dari alamat email yang Anda pakai untuk masuk. Kami
                        menghapus akun dalam {DELETION_DAYS} hari kerja dan
                        membalas setelah selesai.
                      </p>
                    </div>
                  )}
                </div>

                <p className="font-semibold text-slate-800">Apa yang terhapus:</p>
                <Bullets
                  items={[
                    <>
                      <strong className="text-slate-800">
                        Bila Anda satu-satunya orang tua di keluarga itu:
                      </strong>{" "}
                      akun Anda, akun semua anak yang tertaut, semua peringatan,
                      bukti tersegel, obrolan anak dengan Aura, foto profil, dan ID
                      perangkat untuk notifikasi.
                    </>,
                    <>
                      <strong className="text-slate-800">
                        Bila masih ada orang tua lain:
                      </strong>{" "}
                      hanya akun dan data Anda. Keluarga dan data anak tetap
                      dipegang orang tua lain itu.
                    </>,
                  ]}
                />

                <div className="rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm text-slate-700">
                  <strong className="text-rose-700">
                    Penghapusan bersifat permanen.
                  </strong>{" "}
                  Bukti yang terhapus tidak bisa dipulihkan dan tidak bisa lagi
                  dipakai untuk melapor, jadi unduh dulu berkas laporannya bila
                  masih dibutuhkan.
                </div>

                <p>
                  Akun anak tidak bisa menghapus dirinya sendiri dari HP anak,
                  karena itu sama dengan mematikan perlindungan tanpa
                  sepengetahuan orang tua. Akun anak terhapus saat orang tuanya
                  menghapus akun.
                </p>
              </Section>

              {/* 7 */}
              <Section id="anak" number={7} title="Anak">
                <p>
                  AURA dipakai orang tua untuk anaknya yang berumur 3 sampai 17
                  tahun. Data anak dikumpulkan atas persetujuan orang tua, dan
                  anak diberi penjelasan dengan bahasa yang mudah dipahami sebelum
                  perlindungan aktif. Orang tua bisa meminta data anaknya dihapus
                  kapan saja (
                  <a
                    href="#hapus-akun"
                    className="text-violet-700 underline underline-offset-2"
                  >
                    bagian 6
                  </a>
                  ).
                </p>
              </Section>

              {/* 8 */}
              <Section id="perubahan" number={8} title="Perubahan kebijakan">
                <p>
                  Bila kebijakan ini berubah, kami memperbarui tanggal di atas dan
                  memberi tahu melalui aplikasi bila perubahannya penting.
                </p>
              </Section>

              {/* 9 */}
              <Section id="kontak" number={9} title="Hubungi kami">
                <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6">
                  <p className="font-semibold text-slate-900">{DEVELOPER_NAME}</p>
                  {CONTACT_EMAIL && (
                    <p className="mt-1">
                      Email: <EmailLink />
                    </p>
                  )}
                </div>
              </Section>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
