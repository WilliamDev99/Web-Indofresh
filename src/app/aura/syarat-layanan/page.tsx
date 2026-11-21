import type { Metadata } from "next";
import Link from "next/link";
import { APP_ID, CONTACT_EMAIL, DEVELOPER_NAME } from "../_shared/config";
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
  title: "Persyaratan Layanan",
  description:
    "Persyaratan layanan aplikasi AURA: siapa yang boleh memakai AURA, cara memakainya dengan benar, dan batas tanggung jawab kami.",
};

const sections = [
  { id: "penerimaan", label: "Penerimaan persyaratan" },
  { id: "layanan", label: "Tentang layanan AURA" },
  { id: "akun", label: "Siapa yang boleh memakai AURA" },
  { id: "terlarang", label: "Penggunaan yang dilarang" },
  { id: "batas-deteksi", label: "Batas kemampuan deteksi & SOS" },
  { id: "aura-ai", label: "Teman bicara Aura (AI)" },
  { id: "vault-hukum", label: "Vault Forensik & Pusat Aksi Hukum" },
  { id: "biaya", label: "Biaya" },
  { id: "privasi", label: "Privasi" },
  { id: "hki", label: "Hak kekayaan intelektual" },
  { id: "pengakhiran", label: "Pengakhiran" },
  { id: "tanggung-jawab", label: "Batasan tanggung jawab" },
  { id: "hukum", label: "Hukum yang berlaku" },
  { id: "perubahan", label: "Perubahan persyaratan" },
  { id: "kontak", label: "Hubungi kami" },
];

export default function AuraTermsPage() {
  return (
    <>
      <DocHero
        title="Persyaratan Layanan AURA"
        dateLabel="Terakhir diperbarui"
        date={LAST_UPDATED}
      >
        <p>
          Persyaratan ini mengatur penggunaan aplikasi AURA (
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-base text-violet-100">
            {APP_ID}
          </code>
          ) yang dikembangkan oleh {DEVELOPER_NAME} (“kami”). Mohon dibaca
          sebelum memasang AURA di HP Anda dan HP anak Anda.
        </p>
      </DocHero>

      <DocBody sections={sections}>
        {/* 1 */}
        <Section id="penerimaan" number={1} title="Penerimaan persyaratan">
          <p>
            Dengan membuat akun atau memakai AURA, Anda menyatakan telah
            membaca, memahami, dan menyetujui Persyaratan Layanan ini serta{" "}
            <Link href="/aura/privasi" className={linkClass}>
              Kebijakan Privasi AURA
            </Link>
            . Jika Anda tidak setuju, mohon jangan memakai AURA.
          </p>
        </Section>

        {/* 2 */}
        <Section id="layanan" number={2} title="Tentang layanan AURA">
          <p>
            AURA adalah aplikasi kontrol orang tua untuk membantu melindungi
            anak dari bahaya di dunia digital. Aplikasi yang sama dipasang di HP
            orang tua dan HP anak, lalu ditautkan dengan kode keluarga. Fitur
            utamanya:
          </p>
          <Bullets
            items={[
              "Pemindai chat (Kawung Shield) yang memeriksa notifikasi pesan masuk di HP anak dan mengirim peringatan ke orang tua bila terdeteksi bahaya.",
              "Tombol SOS (Panic Orb) yang membunyikan alarm di HP orang tua beserta lokasi anak saat itu.",
              "Teman bicara “Aura” berbasis AI untuk anak.",
              "Jam istirahat yang mengunci aplikasi di HP anak pada jam yang diatur orang tua.",
              "Vault Forensik, Pusat Aksi Hukum, dan PIN hapus aplikasi untuk orang tua.",
            ]}
          />
        </Section>

        {/* 3 */}
        <Section id="akun" number={3} title="Siapa yang boleh memakai AURA">
          <Bullets
            items={[
              "Akun orang tua hanya boleh dibuat oleh orang berusia 18 tahun ke atas yang merupakan orang tua kandung, orang tua angkat, atau wali sah dari anak yang dilindungi.",
              "AURA hanya boleh dipasang di HP anak Anda sendiri (atau anak di bawah perwalian sah Anda) yang berusia 3 sampai 17 tahun.",
              "AURA harus dipakai dengan sepengetahuan anak. Sebelum perlindungan aktif, anak membaca dan menyetujui “Kesepakatan Kita” di HP-nya.",
              "Anda wajib memberikan data yang benar, menjaga kerahasiaan kata sandi, kode keluarga, dan PIN hapus aplikasi, serta bertanggung jawab atas semua aktivitas di akun Anda.",
              "Siapa pun yang mengetahui PIN hapus aplikasi dapat menghapus AURA dari HP anak. Jangan bagikan PIN kepada anak atau orang lain.",
            ]}
          />
        </Section>

        {/* 4 */}
        <Section id="terlarang" number={4} title="Penggunaan yang dilarang">
          <Callout tone="rose">
            <strong className="text-rose-700">
              AURA bukan alat untuk memata-matai orang lain.
            </strong>{" "}
            Memasang aplikasi pemantau di perangkat orang lain tanpa hak dapat
            melanggar hukum, termasuk UU ITE dan UU Pelindungan Data Pribadi.
          </Callout>
          <p>Anda dilarang:</p>
          <Bullets
            items={[
              "Memasang AURA di HP orang dewasa, pasangan, karyawan, atau anak yang bukan di bawah tanggung jawab Anda.",
              "Menyembunyikan AURA dari anak, atau mencoba mematikan ikon dan notifikasi “AURA melindungi HP ini”.",
              "Memakai peringatan, potongan pesan, atau isi Vault Forensik untuk mempermalukan, mengancam, atau merundung siapa pun.",
              "Memalsukan peringatan atau bukti, atau mengubah aplikasi untuk tujuan itu.",
              "Menekan tombol SOS secara sengaja untuk iseng atau mengganggu.",
              "Membongkar, merekayasa balik, menyalin, atau menjual kembali AURA, atau mencoba mengakses data keluarga lain.",
              "Memakai teman bicara Aura untuk menghasilkan konten yang melanggar hukum atau berbahaya.",
            ]}
          />
        </Section>

        {/* 5 */}
        <Section
          id="batas-deteksi"
          number={5}
          title="Batas kemampuan deteksi & SOS"
        >
          <p>
            AURA adalah alat bantu, bukan pengganti perhatian dan pendampingan
            orang tua. Mohon pahami batasannya:
          </p>
          <Bullets
            items={[
              "Kawung Shield mendeteksi bahaya dengan mencocokkan frasa berbahaya. Deteksi bisa terlewat (misalnya pesan berupa gambar, pesan suara, bahasa sandi, atau notifikasi yang dimatikan anak) dan bisa juga keliru menandai pesan yang sebenarnya aman.",
              "AURA hanya membaca notifikasi yang muncul di HP anak. Pesan yang tidak memunculkan notifikasi tidak dapat diperiksa.",
              "Peringatan dan alarm SOS bergantung pada koneksi internet, baterai, pengaturan HP, dan layanan pihak ketiga seperti Firebase Cloud Messaging. Kami tidak menjamin setiap peringatan atau alarm terkirim tepat waktu.",
              "Lokasi SOS bisa tidak akurat atau tidak tersedia, tergantung sinyal GPS dan izin di HP anak.",
            ]}
          />
          <Callout tone="teal">
            <strong className="text-slate-900">
              AURA bukan layanan darurat.
            </strong>{" "}
            Jika anak dalam bahaya langsung, hubungi polisi di{" "}
            <strong>110</strong>, layanan darurat <strong>112</strong>, atau
            SAPA 129 (KemenPPPA) di <strong>129</strong> / WhatsApp{" "}
            <strong>08111-129-129</strong>.
          </Callout>
        </Section>

        {/* 6 */}
        <Section id="aura-ai" number={6} title="Teman bicara Aura (AI)">
          <Bullets
            items={[
              "Balasan Aura dibuat oleh model AI dan bisa saja keliru, tidak lengkap, atau kurang tepat.",
              "Aura bukan konselor, psikolog, dokter, atau ahli hukum, dan tidak menggantikan bantuan profesional.",
              "Orang tua tidak dapat membaca obrolan anak dengan Aura. Namun, bila obrolan menunjukkan tanda bahaya, AURA meneruskan peringatan ke orang tua. Hal ini dijelaskan kepada anak dalam “Kesepakatan Kita”.",
            ]}
          />
        </Section>

        {/* 7 */}
        <Section
          id="vault-hukum"
          number={7}
          title="Vault Forensik & Pusat Aksi Hukum"
        >
          <Bullets
            items={[
              "Vault Forensik menyimpan peringatan sebagai catatan bersegel waktu untuk membantu Anda saat melapor. Diterima atau tidaknya catatan tersebut sebagai alat bukti sepenuhnya diputuskan oleh aparat penegak hukum dan pengadilan.",
              "Informasi di Pusat Aksi Hukum, seperti langkah melapor, pasal yang relevan, dan kontak layanan pengaduan, bersifat informasi umum dan bukan nasihat hukum. Untuk kasus tertentu, konsultasikan dengan advokat, lembaga bantuan hukum, atau layanan pengaduan resmi.",
              "Catatan di Vault terhapus permanen bila akun dihapus. Unduh berkas laporan Anda terlebih dahulu bila masih dibutuhkan.",
            ]}
          />
        </Section>

        {/* 8 */}
        <Section id="biaya" number={8} title="Biaya">
          <p>
            Saat ini AURA dapat dipakai tanpa biaya. Jika kelak kami menyediakan
            fitur berbayar, harga dan ketentuannya akan diberitahukan dengan
            jelas sebelum Anda membayar, dan pembayaran diproses melalui Google
            Play sesuai ketentuan Google Play.
          </p>
        </Section>

        {/* 9 */}
        <Section id="privasi" number={9} title="Privasi">
          <p>
            Cara kami mengumpulkan, memakai, dan menghapus data dijelaskan di{" "}
            <Link href="/aura/privasi" className={linkClass}>
              Kebijakan Privasi AURA
            </Link>
            , yang merupakan bagian tidak terpisahkan dari Persyaratan Layanan
            ini.
          </p>
        </Section>

        {/* 10 */}
        <Section id="hki" number={10} title="Hak kekayaan intelektual">
          <p>
            AURA, termasuk nama, logo, maskot Aura, Kawung Shield, desain, dan
            kodenya, adalah milik {DEVELOPER_NAME}. Kami memberi Anda izin
            terbatas, tidak eksklusif, dan tidak dapat dialihkan untuk memasang
            dan memakai AURA bagi keperluan pribadi keluarga Anda sesuai
            persyaratan ini.
          </p>
        </Section>

        {/* 11 */}
        <Section id="pengakhiran" number={11} title="Pengakhiran">
          <Bullets
            items={[
              <>
                Anda dapat berhenti memakai AURA dan menghapus akun kapan saja.
                Caranya dijelaskan di{" "}
                <Link href="/aura/privasi#hapus-akun" className={linkClass}>
                  Kebijakan Privasi bagian 6
                </Link>
                .
              </>,
              "Kami dapat menangguhkan atau menutup akun yang melanggar persyaratan ini, terutama bila AURA dipakai untuk memata-matai orang lain atau menyalahgunakan data anak.",
              "Kami dapat menghentikan atau mengubah sebagian fitur AURA. Bila AURA dihentikan sepenuhnya, kami akan memberi tahu melalui aplikasi dengan waktu yang wajar agar Anda dapat mengunduh berkas laporan.",
            ]}
          />
        </Section>

        {/* 12 */}
        <Section id="tanggung-jawab" number={12} title="Batasan tanggung jawab">
          <p>
            AURA disediakan “sebagaimana adanya”. Sejauh diizinkan oleh hukum
            yang berlaku di Indonesia, kami tidak bertanggung jawab atas:
          </p>
          <Bullets
            items={[
              "Bahaya atau kerugian yang terjadi karena pesan berbahaya tidak terdeteksi, peringatan atau alarm SOS terlambat atau tidak terkirim, atau lokasi tidak akurat.",
              "Gangguan yang disebabkan oleh HP, jaringan, sistem operasi, atau layanan pihak ketiga.",
              "Keputusan yang diambil berdasarkan balasan Aura atau informasi di Pusat Aksi Hukum.",
              "Kerugian tidak langsung, termasuk kehilangan data akibat penghapusan akun yang Anda lakukan sendiri.",
            ]}
          />
          <p>
            Ketentuan ini tidak membatasi tanggung jawab yang menurut hukum
            tidak dapat dibatasi.
          </p>
        </Section>

        {/* 13 */}
        <Section id="hukum" number={13} title="Hukum yang berlaku">
          <p>
            Persyaratan ini tunduk pada hukum Republik Indonesia. Perselisihan
            akan diselesaikan terlebih dahulu secara musyawarah. Bila tidak
            tercapai kesepakatan, perselisihan diselesaikan melalui pengadilan
            yang berwenang di Indonesia.
          </p>
        </Section>

        {/* 14 */}
        <Section id="perubahan" number={14} title="Perubahan persyaratan">
          <p>
            Kami dapat memperbarui persyaratan ini. Bila berubah, kami
            memperbarui tanggal di atas dan memberi tahu melalui aplikasi bila
            perubahannya penting. Dengan tetap memakai AURA setelah perubahan
            berlaku, Anda dianggap menyetujui persyaratan yang baru.
          </p>
        </Section>

        {/* 15 */}
        <Section id="kontak" number={15} title="Hubungi kami">
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
