import type { Metadata } from "next";
import type { ReactNode } from "react";

// ---------------------------------------------------------------------------
// TODO: Isi data di bawah ini sebelum halaman dipublikasikan / didaftarkan
// ke Google Play Console.
// ---------------------------------------------------------------------------
const DEVELOPER_NAME = "[Nama pengembang / badan hukum AURA]";
const CONTACT_EMAIL = "[email-privasi@domain-anda]";
const EFFECTIVE_DATE = "19 November 2026";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Kebijakan privasi aplikasi AURA, aplikasi kontrol orang tua yang melindungi anak dari bahaya di dunia digital secara terbuka, bukan mata-mata.",
};

const sections = [
  { id: "ringkasan", label: "Ringkasan" },
  { id: "tentang", label: "Tentang AURA & kebijakan ini" },
  { id: "data", label: "Data yang kami proses" },
  { id: "tidak-dikumpulkan", label: "Data yang tidak kami kumpulkan" },
  { id: "izin", label: "Izin Android yang digunakan" },
  { id: "penggunaan", label: "Cara kami menggunakan data" },
  { id: "pihak-ketiga", label: "Penyedia layanan pihak ketiga" },
  { id: "anak", label: "Data anak & persetujuan" },
  { id: "vault", label: "Vault Forensik" },
  { id: "keamanan", label: "Penyimpanan & keamanan" },
  { id: "retensi", label: "Berapa lama data disimpan" },
  { id: "hak", label: "Hak Anda" },
  { id: "hapus-akun", label: "Menghapus akun & data" },
  { id: "perubahan", label: "Perubahan kebijakan" },
  { id: "kontak", label: "Hubungi kami" },
];

const doesList = [
  "Meminta persetujuan anak lewat “Kesepakatan Kita”",
  "Menampilkan ikon dan notifikasi “AURA melindungi HP ini”",
  "Mengirim hanya pesan yang terdeteksi berbahaya",
  "Mengambil lokasi hanya saat tombol SOS ditekan",
  "Menunjukkan kepada anak semua peringatan yang dikirim ke orang tuanya",
];

const doesNotList = [
  "Bekerja diam-diam tanpa sepengetahuan anak",
  "Menyembunyikan diri dari daftar aplikasi atau layar",
  "Meneruskan obrolan biasa ke orang tua",
  "Melacak lokasi terus-menerus",
  "Merekam kamera atau mikrofon",
  "Menjual data atau menampilkan iklan",
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
          {String(number).padStart(2, "0")}
        </span>
        {title}
      </h2>
      <div className="space-y-4 text-slate-600 leading-relaxed">{children}</div>
    </section>
  );
}

function DataCard({
  title,
  items,
}: {
  title: string;
  items: { label: string; detail: string }[];
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6">
      <h3 className="font-semibold text-slate-900 mb-4">{title}</h3>
      <dl className="space-y-4">
        {items.map((item) => (
          <div key={item.label}>
            <dt className="font-medium text-slate-800">{item.label}</dt>
            <dd className="text-sm text-slate-600 mt-1">{item.detail}</dd>
          </div>
        ))}
      </dl>
    </div>
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
            Kebijakan Privasi
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-violet-100/75">
            AURA adalah teman aman anak di dunia digital. Kebijakan ini
            menjelaskan data apa yang diproses, mengapa, dan bagaimana kami
            menjaganya — secara terbuka, bukan mata-mata.
          </p>
          <p className="mt-8 text-sm text-violet-200/70">
            Berlaku sejak{" "}
            <strong className="font-semibold text-white">{EFFECTIVE_DATE}</strong>
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
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            <article className="max-w-3xl space-y-14">
              {/* 1. Ringkasan */}
              <Section id="ringkasan" number={1} title="Ringkasan">
                <p>
                  AURA memeriksa pesan masuk di HP anak <strong>langsung di HP
                  anak</strong>. Obrolan biasa tidak pernah dikirim ke orang tua
                  maupun ke server kami. Hanya ketika sebuah pesan terdeteksi
                  berbahaya, AURA mengirim peringatan singkat ke HP orang tua.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-violet-100 bg-violet-50/60 p-6">
                    <p className="font-semibold text-violet-800 mb-3">
                      AURA melakukan
                    </p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      {doesList.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span aria-hidden className="text-violet-600">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                    <p className="font-semibold text-slate-800 mb-3">
                      AURA tidak melakukan
                    </p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      {doesNotList.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span aria-hidden className="text-rose-600">✕</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Section>

              {/* 2. Tentang */}
              <Section id="tentang" number={2} title="Tentang AURA & kebijakan ini">
                <p>
                  AURA adalah aplikasi kontrol orang tua (parental control) yang
                  dikembangkan oleh <strong>{DEVELOPER_NAME}</strong> (“kami”).
                  Aplikasi yang sama dipasang di dua perangkat — HP anak dan HP
                  orang tua — lalu ditautkan menggunakan <em>kode keluarga</em>.
                </p>
                <p>
                  Kebijakan ini berlaku untuk aplikasi AURA versi Android dalam
                  bahasa Indonesia dan Inggris. Kebijakan ini disusun mengacu pada
                  Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data Pribadi
                  (UU PDP) serta kebijakan Google Play. Dalam pengertian UU PDP,
                  kami bertindak sebagai pengendali data pribadi yang diproses
                  melalui AURA.
                </p>
              </Section>

              {/* 3. Data */}
              <Section id="data" number={3} title="Data yang kami proses">
                <p>
                  Kami hanya memproses data yang diperlukan agar fitur pelindungan
                  bekerja. Berikut rinciannya menurut perangkat.
                </p>
                <div className="grid gap-4">
                  <DataCard
                    title="Di HP anak"
                    items={[
                      {
                        label: "Notifikasi pesan masuk (Kawung Shield)",
                        detail:
                          "AURA membaca teks notifikasi dari WhatsApp, Instagram, TikTok, Telegram, SMS, chat game, dan aplikasi pesan lain. Teks dicocokkan dengan daftar ±500 frasa berbahaya yang masing-masing memiliki skor. Seluruh pemeriksaan terjadi di HP anak. Pesan yang tidak berbahaya langsung diabaikan — tidak disimpan dan tidak dikirim ke mana pun.",
                      },
                      {
                        label: "Peringatan bahaya",
                        detail:
                          "Jika skor sebuah pesan melewati ambang batas, AURA membuat peringatan berisi: jenis bahaya (misalnya grooming, permintaan foto, pemerasan, perundungan, ajakan bertemu), tingkat bahaya (Rendah, Sedang, Tinggi, Kritis), nama aplikasi sumber, waktu, dan potongan kecil pesan pemicunya — bukan seluruh isi percakapan.",
                      },
                      {
                        label: "Lokasi saat SOS (Panic Orb)",
                        detail:
                          "Lokasi diambil satu kali hanya ketika anak menekan tombol SOS, lalu dikirim ke HP orang tua bersama alarm. AURA tidak melacak lokasi di latar belakang atau secara terus-menerus.",
                      },
                      {
                        label: "Obrolan dengan teman bicara “Aura”",
                        detail:
                          "Pesan yang anak ketik ke maskot Aura dikirim ke model AI (Gemma 4 melalui Cloudflare) agar dapat dibalas. Orang tua tidak dapat membaca obrolan ini. Hanya bila obrolan menunjukkan tanda bahaya, AURA meneruskan peringatan (jenis dan tingkat bahaya) ke orang tua — bukan transkrip obrolannya.",
                      },
                      {
                        label: "Status perlindungan",
                        detail:
                          "Informasi teknis seperti status izin aplikasi, status jam istirahat, versi aplikasi, dan token notifikasi (FCM) agar HP orang tua tahu bahwa perlindungan aktif.",
                      },
                    ]}
                  />
                  <DataCard
                    title="Di HP orang tua"
                    items={[
                      {
                        label: "Data akun",
                        detail:
                          "Data yang dipakai untuk masuk (misalnya alamat email) dan nama tampilan. Kata sandi dikelola oleh layanan autentikasi Supabase dan tidak pernah kami simpan dalam bentuk teks biasa.",
                      },
                      {
                        label: "Data keluarga",
                        detail:
                          "Kode keluarga, nama atau panggilan anak yang Anda masukkan, dan daftar perangkat yang tertaut.",
                      },
                      {
                        label: "Pengaturan",
                        detail:
                          "Jadwal jam istirahat dan PIN hapus aplikasi. PIN disimpan dalam bentuk ter-hash, bukan teks biasa.",
                      },
                      {
                        label: "Token notifikasi",
                        detail:
                          "Token Firebase Cloud Messaging agar peringatan dan alarm SOS dapat sampai ke HP Anda.",
                      },
                    ]}
                  />
                </div>
              </Section>

              {/* 4. Tidak dikumpulkan */}
              <Section
                id="tidak-dikumpulkan"
                number={4}
                title="Data yang tidak kami kumpulkan"
              >
                <Bullets
                  items={[
                    "Isi obrolan biasa yang tidak berbahaya.",
                    "Rekaman kamera, mikrofon, atau tangkapan layar.",
                    "Foto, video, berkas, atau kontak di perangkat.",
                    "Riwayat penelusuran web.",
                    "Lokasi di luar momen ketika tombol SOS ditekan.",
                    "ID iklan. AURA tidak memuat iklan dan tidak memakai pelacak iklan.",
                  ]}
                />
              </Section>

              {/* 5. Izin */}
              <Section id="izin" number={5} title="Izin Android yang digunakan">
                <p>
                  Setiap izin diminta secara terbuka, dengan penjelasan di layar,
                  dan hanya dipakai untuk fungsi yang disebutkan.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-slate-100">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50 text-left text-slate-700">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Izin</th>
                        <th className="px-4 py-3 font-semibold">Untuk apa</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        [
                          "Akses notifikasi",
                          "Membaca teks notifikasi pesan masuk untuk diperiksa oleh Kawung Shield di HP anak.",
                        ],
                        [
                          "Lokasi",
                          "Mengambil lokasi satu kali saat tombol SOS ditekan.",
                        ],
                        [
                          "Notifikasi & alarm layar penuh",
                          "Membunyikan alarm SOS dan menampilkan peringatan bahaya di HP orang tua, serta notifikasi tetap “AURA melindungi HP ini” di HP anak.",
                        ],
                        [
                          "Akses penggunaan / tampil di atas aplikasi lain",
                          "Mengunci aplikasi di HP anak selama jam istirahat. Tombol SOS dan telepon tetap dapat dipakai.",
                        ],
                        [
                          "Administrator perangkat",
                          "Mencegah AURA dihapus dari HP anak tanpa PIN orang tua. Izin ini tidak dipakai untuk menghapus data, mengunci layar, atau mengubah sandi perangkat.",
                        ],
                        [
                          "Internet",
                          "Mengirim peringatan, menyinkronkan data keluarga, dan menghubungi layanan AI teman bicara Aura.",
                        ],
                      ].map(([perm, purpose]) => (
                        <tr key={perm}>
                          <td className="px-4 py-3 font-medium text-slate-800 align-top whitespace-nowrap">
                            {perm}
                          </td>
                          <td className="px-4 py-3 text-slate-600">{purpose}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              {/* 6. Penggunaan */}
              <Section id="penggunaan" number={6} title="Cara kami menggunakan data">
                <p>Data diproses hanya untuk tujuan berikut:</p>
                <Bullets
                  items={[
                    "Mendeteksi pesan berbahaya dan memberi tahu orang tua secepatnya.",
                    "Mengirim alarm SOS beserta lokasi anak saat itu.",
                    "Membalas obrolan anak dengan teman bicara Aura.",
                    "Menjalankan jam istirahat dan perlindungan PIN hapus aplikasi.",
                    "Menyimpan peringatan sebagai bukti di Vault Forensik dan membantu orang tua melapor melalui Pusat Aksi Hukum.",
                    "Menjaga keamanan layanan, mencegah penyalahgunaan, dan memperbaiki gangguan teknis.",
                  ]}
                />
                <p>
                  Kami <strong>tidak menjual</strong> data pribadi, tidak
                  membagikannya untuk iklan, dan tidak memakai isi pesan anak
                  untuk melatih model AI.
                </p>
              </Section>

              {/* 7. Pihak ketiga */}
              <Section
                id="pihak-ketiga"
                number={7}
                title="Penyedia layanan pihak ketiga"
              >
                <p>
                  AURA memakai penyedia layanan berikut sebagai pemroses data atas
                  nama kami. Mereka hanya menerima data yang diperlukan untuk
                  fungsinya masing-masing.
                </p>
                <Bullets
                  items={[
                    <>
                      <strong>Supabase</strong> — basis data, autentikasi akun,
                      dan penyimpanan (data keluarga, peringatan, Vault Forensik).
                    </>,
                    <>
                      <strong>Firebase Cloud Messaging (Google)</strong> —
                      pengiriman notifikasi peringatan dan alarm SOS.
                    </>,
                    <>
                      <strong>Cloudflare (Workers AI, model Gemma 4)</strong> —
                      memproses obrolan anak dengan teman bicara Aura untuk
                      menghasilkan balasan.
                    </>,
                  ]}
                />
                <p>
                  Server penyedia tersebut dapat berada di luar Indonesia. Dalam
                  hal terjadi transfer data lintas negara, kami memastikan
                  penyedia memiliki tingkat pelindungan data yang setara atau
                  lebih tinggi sebagaimana disyaratkan UU PDP.
                </p>
                <p>
                  Kami dapat mengungkapkan data apabila diwajibkan oleh hukum atau
                  atas permintaan resmi aparat penegak hukum, misalnya dalam
                  penanganan laporan kekerasan terhadap anak.
                </p>
              </Section>

              {/* 8. Anak */}
              <Section id="anak" number={8} title="Data anak & persetujuan">
                <p>
                  AURA dirancang untuk melindungi anak, sehingga data anak
                  diperlakukan sebagai data yang paling dijaga. Sesuai UU PDP,
                  pemrosesan data pribadi anak dilakukan dengan persetujuan orang
                  tua atau wali.
                </p>
                <Bullets
                  items={[
                    "Orang tua atau wali memasang dan mengaktifkan AURA di HP anak serta memberikan persetujuan atas nama anak.",
                    "Anak juga diminta menyetujui “Kesepakatan Kita” yang menjelaskan dengan bahasa sederhana apa yang dilakukan dan tidak dilakukan AURA.",
                    "AURA selalu terlihat: ikonnya tidak disembunyikan dan notifikasi “AURA melindungi HP ini” tampil di HP anak.",
                    "Anak dapat melihat sendiri semua peringatan yang pernah dikirim ke orang tuanya.",
                    "Obrolan anak dengan teman bicara Aura bersifat pribadi dan tidak dapat dibaca orang tua.",
                  ]}
                />
              </Section>

              {/* 9. Vault */}
              <Section id="vault" number={9} title="Vault Forensik">
                <p>
                  Setiap peringatan disimpan di Vault Forensik sebagai bukti
                  bersegel waktu. Agar dapat dipertanggungjawabkan saat dibawa ke
                  polisi, catatan di vault <strong>tidak dapat diubah atau
                  dihapus</strong> melalui aplikasi, termasuk oleh orang tua.
                </p>
                <p>
                  Vault hanya berisi data peringatan (jenis dan tingkat bahaya,
                  potongan pesan pemicu, aplikasi sumber, waktu, dan lokasi bila
                  berasal dari SOS) — bukan seluruh isi chat. Vault ikut dihapus
                  bila akun keluarga dihapus, kecuali jika data tersebut sedang
                  diperlukan untuk proses hukum yang sedang berjalan.
                </p>
              </Section>

              {/* 10. Keamanan */}
              <Section id="keamanan" number={10} title="Penyimpanan & keamanan">
                <Bullets
                  items={[
                    "Pemeriksaan pesan dilakukan di HP anak; hanya peringatan yang meninggalkan perangkat.",
                    "Seluruh komunikasi antara aplikasi dan server dienkripsi (HTTPS/TLS).",
                    "Akses data dibatasi per keluarga: hanya perangkat yang tertaut dengan kode keluarga yang sama yang dapat membaca peringatan keluarga tersebut.",
                    "PIN dan kata sandi tidak disimpan dalam bentuk teks biasa.",
                  ]}
                />
                <p>
                  Tidak ada sistem yang sepenuhnya kebal. Jika terjadi kegagalan
                  pelindungan data pribadi, kami akan memberi tahu pengguna yang
                  terdampak dan otoritas terkait sesuai ketentuan UU PDP.
                </p>
              </Section>

              {/* 11. Retensi */}
              <Section id="retensi" number={11} title="Berapa lama data disimpan">
                <Bullets
                  items={[
                    "Pesan yang tidak berbahaya: tidak disimpan sama sekali.",
                    "Peringatan & isi Vault Forensik: selama akun keluarga aktif.",
                    "Lokasi SOS: disimpan bersama peringatan SOS terkait.",
                    "Obrolan dengan teman bicara Aura: hanya selama diperlukan untuk menghasilkan balasan dan menampilkan riwayat obrolan kepada anak.",
                    "Data akun & keluarga: sampai akun dihapus.",
                  ]}
                />
              </Section>

              {/* 12. Hak */}
              <Section id="hak" number={12} title="Hak Anda">
                <p>
                  Sesuai UU PDP, Anda (dan anak melalui orang tua atau walinya)
                  berhak untuk:
                </p>
                <Bullets
                  items={[
                    "Mendapatkan informasi tentang pemrosesan data pribadi.",
                    "Mengakses dan memperoleh salinan data pribadi.",
                    "Memperbaiki data yang tidak akurat.",
                    "Menarik kembali persetujuan kapan saja.",
                    "Meminta penghapusan data pribadi, dengan memperhatikan ketentuan Vault Forensik di atas.",
                    "Mengajukan keberatan atas pemrosesan data.",
                  ]}
                />
                <p>
                  Untuk menggunakan hak tersebut, hubungi kami melalui kontak di
                  bagian akhir halaman ini. Kami akan menanggapi dalam waktu paling
                  lambat 3 × 24 jam sejak permintaan diterima.
                </p>
              </Section>

              {/* 13. Hapus akun */}
              <Section id="hapus-akun" number={13} title="Menghapus akun & data">
                <p>Anda dapat meminta penghapusan akun dan data keluarga dengan cara:</p>
                <Bullets
                  items={[
                    "Melalui menu pengaturan akun di aplikasi AURA pada HP orang tua; atau",
                    <>
                      Mengirim email ke{" "}
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="font-medium text-violet-700 underline underline-offset-2"
                      >
                        {CONTACT_EMAIL}
                      </a>{" "}
                      dengan subjek “Hapus Akun AURA” dari alamat email akun Anda.
                    </>,
                  ]}
                />
                <p>
                  Untuk menghapus AURA dari HP anak, orang tua memasukkan PIN hapus
                  aplikasi. Menghapus aplikasi dari perangkat tidak otomatis
                  menghapus data di server; ajukan penghapusan akun untuk itu.
                </p>
              </Section>

              {/* 14. Perubahan */}
              <Section id="perubahan" number={14} title="Perubahan kebijakan">
                <p>
                  Kami dapat memperbarui kebijakan ini dari waktu ke waktu.
                  Perubahan penting akan diberitahukan melalui aplikasi sebelum
                  berlaku, dan tanggal “Berlaku sejak” di atas akan diperbarui.
                </p>
              </Section>

              {/* 15. Kontak */}
              <Section id="kontak" number={15} title="Hubungi kami">
                <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6 space-y-1">
                  <p className="font-semibold text-slate-900">{DEVELOPER_NAME}</p>
                  <p>
                    Email:{" "}
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="font-medium text-violet-700 underline underline-offset-2"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                </div>

                <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
                  <p className="font-semibold text-rose-700 mb-2">
                    Butuh bantuan darurat?
                  </p>
                  <p className="text-sm text-slate-700 mb-3">
                    Jika anak berada dalam bahaya, jangan menunggu balasan email.
                    Hubungi layanan berikut:
                  </p>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li>
                      <strong>SAPA 129</strong> (KemenPPPA) — telepon 129 atau
                      WhatsApp 08111-129-129
                    </li>
                    <li>
                      <strong>KPAI</strong> — pengaduan melalui{" "}
                      <a
                        href="https://www.kpai.go.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2"
                      >
                        kpai.go.id
                      </a>
                    </li>
                    <li>
                      <strong>Polisi</strong> — 110
                    </li>
                  </ul>
                </div>
              </Section>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
