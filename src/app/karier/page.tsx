import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Karier",
  description:
    "Bergabunglah dengan tim Indofresh! Temukan peluang karier dan lowongan pekerjaan terbaru di perusahaan distributor buah segar premium Indonesia.",
};

const benefits = [
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Gaji Kompetitif",
    description:
      "Kompensasi yang sesuai dengan kemampuan, pengalaman, dan dedikasi Anda. Bonus kinerja tahunan.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "Asuransi Kesehatan",
    description:
      "Perlindungan kesehatan menyeluruh termasuk BPJS dan asuransi swasta untuk Anda dan keluarga.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    title: "Jenjang Karier",
    description:
      "Peluang berkembang dan naik jabatan yang jelas, terukur, dan transparan.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    title: "Pelatihan & Pengembangan",
    description:
      "Program pelatihan rutin dan kesempatan mengikuti seminar/workshop untuk meningkatkan kompetensi.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Tim yang Solid",
    description:
      "Bergabung dengan tim profesional, suportif, dan penuh semangat kolaborasi.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Lingkungan Kerja Nyaman",
    description:
      "Fasilitas kerja modern, budaya kerja positif, dan keseimbangan kehidupan kerja yang baik.",
  },
];


export default function KarierPage() {
  return (
    <>
      <PageHeader
        badge="Karier"
        title="Bergabunglah Bersama"
        titleHighlight="Tim Indofresh"
        description="Kami percaya bahwa karyawan adalah aset paling berharga. Temukan peluang karier terbaik di Indofresh."
        badgeColor="orange"
      />

      {/* Why Join Us */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-brand-green-50 text-brand-green-700 text-sm font-semibold rounded-full mb-4">
              Benefit & Keunggulan
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Bekerja di{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green-600 to-brand-orange-500">
                Indofresh?
              </span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Di Indofresh, Anda akan mendapatkan kesempatan untuk bertumbuh,
              berkontribusi, dan menjadi bagian dari misi menghadirkan kesegaran
              terbaik bagi masyarakat Indonesia.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group p-8 bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:border-brand-green-200 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-brand-green-50 rounded-2xl flex items-center justify-center text-brand-green-600 mb-5 group-hover:bg-brand-green-100 group-hover:text-brand-green-700 transition-all duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Positions Area */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col gap-12">
            <div className="w-full shadow-xl rounded-2xl overflow-hidden group bg-neutral-100/50 hover:shadow-2xl transition-all duration-300">
              <Image 
                src="/images/importbuyer.png" 
                alt="Lowongan Import Buyer" 
                width={1600} 
                height={900} 
                className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500" 
              />
            </div>
            <div className="w-full shadow-xl rounded-2xl overflow-hidden group bg-neutral-100/50 hover:shadow-2xl transition-all duration-300">
              <Image 
                src="/images/admin.png" 
                alt="Lowongan Admin Import" 
                width={1600} 
                height={900} 
                className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500" 
              />
            </div>
            <div className="w-full shadow-xl rounded-2xl overflow-hidden group bg-neutral-100/50 hover:shadow-2xl transition-all duration-300">
              <Image 
                src="/images/itFullstackDev.png" 
                alt="Lowongan Lainnya" 
                width={1600} 
                height={900} 
                className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-green-800 to-brand-green-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Tidak Menemukan Posisi yang Sesuai?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Kirimkan CV terbaru Anda dan kami akan menghubungi jika ada posisi
            yang cocok dengan kualifikasi Anda.
          </p>
          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-orange-500/30 hover:shadow-brand-orange-500/50 hover:scale-105 transition-all duration-300"
          >
            Hubungi Tim HR Kami
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
