import type { Metadata } from "next";
import type { ReactNode } from "react";
import { APP_ID, CONTACT_EMAIL, DEVELOPER_NAME } from "../_shared/config";
import { Bullets, DocBody, DocHero, EmailLink, Section } from "../_shared/doc";

const LAST_UPDATED = "19 November 2026";
const SERVER_LOCATION = "Singapura";
const DELETION_DAYS = 7; // hari kerja untuk permintaan hapus lewat email
const RETENTION_AFTER_DELETE_DAYS = 30;

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

export default function AuraPrivacyPage() {
  return (
    <>
      <DocHero
        title="Kebijakan Privasi AURA"
        dateLabel="Terakhir diperbarui"
        date={LAST_UPDATED}
      >
        <p>
          AURA (“kami”) dikembangkan oleh {DEVELOPER_NAME}. Kebijakan ini
          menjelaskan data apa yang dikumpulkan aplikasi AURA (
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-base text-violet-100">
            {APP_ID}
          </code>
          ), untuk apa, dan bagaimana Anda bisa menghapusnya.
        </p>
      </DocHero>

      <DocBody sections={sections}>
        {/* 1 */}
        <Section id="untuk-siapa" number={1} title="Untuk siapa AURA">
          <p>
            AURA adalah aplikasi kontrol orang tua. Orang tua memasang AURA di
            HP-nya dan di HP anaknya sendiri. AURA hanya boleh dipakai untuk
            menjaga anak sendiri, dengan sepengetahuan dan persetujuan anak.
            Sebelum perlindungan aktif, anak membaca dan menyetujui “Kesepakatan
            Kita” di HP-nya.
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
                    <strong className="text-slate-800">di HP anak</strong>. Yang
                    dikirim ke server hanya pesan yang terdeteksi berbahaya:
                    jenis bahayanya, potongan kecil pesan pemicunya, nama
                    aplikasi, dan nama pengirim yang tampil di notifikasi.
                    Obrolan biasa tidak dikirim.
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
                    (teman bicara di aplikasi). Pesan anak dikirim ke layanan AI
                    agar Aura bisa menjawab. Orang tua tidak bisa membaca
                    obrolan ini; hanya tanda bahaya yang diteruskan sebagai
                    peringatan.
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
            Kami <strong>tidak</strong> menjual data, <strong>tidak</strong>{" "}
            menampilkan iklan, dan <strong>tidak</strong> memakai data untuk
            melatih AI.
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
                  Kirim email ke <EmailLink subject="Hapus akun AURA" /> dengan
                  judul “Hapus akun AURA”, dari alamat email yang Anda pakai
                  untuk masuk. Kami menghapus akun dalam {DELETION_DAYS} hari
                  kerja dan membalas setelah selesai.
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
                akun Anda, akun semua anak yang tertaut, semua peringatan, bukti
                tersegel, obrolan anak dengan Aura, foto profil, dan ID
                perangkat untuk notifikasi.
              </>,
              <>
                <strong className="text-slate-800">
                  Bila masih ada orang tua lain:
                </strong>{" "}
                hanya akun dan data Anda. Keluarga dan data anak tetap dipegang
                orang tua lain itu.
              </>,
            ]}
          />

          <div className="rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm text-slate-700">
            <strong className="text-rose-700">
              Penghapusan bersifat permanen.
            </strong>{" "}
            Bukti yang terhapus tidak bisa dipulihkan dan tidak bisa lagi
            dipakai untuk melapor, jadi unduh dulu berkas laporannya bila masih
            dibutuhkan.
          </div>

          <p>
            Akun anak tidak bisa menghapus dirinya sendiri dari HP anak, karena
            itu sama dengan mematikan perlindungan tanpa sepengetahuan orang
            tua. Akun anak terhapus saat orang tuanya menghapus akun.
          </p>
        </Section>

        {/* 7 */}
        <Section id="anak" number={7} title="Anak">
          <p>
            AURA dipakai orang tua untuk anaknya yang berumur 3 sampai 17 tahun.
            Data anak dikumpulkan atas persetujuan orang tua, dan anak diberi
            penjelasan dengan bahasa yang mudah dipahami sebelum perlindungan
            aktif. Orang tua bisa meminta data anaknya dihapus kapan saja (
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
      </DocBody>
    </>
  );
}
