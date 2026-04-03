import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Pelajari sejarah, visi, misi, dan komitmen Indofresh dalam mendistribusikan buah-buahan segar berkualitas premium di Indonesia.",
};



const values = [
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
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Kualitas Terjamin",
    description:
      "Setiap buah melewati proses seleksi ketat dengan standar kualitas internasional.",
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
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Distribusi Cepat",
    description:
      "Sistem logistik terintegrasi memastikan buah sampai dengan cepat dan dalam kondisi optimal.",
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
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
    title: "Cold Chain System",
    description:
      "Rantai dingin terjaga dari gudang hingga pengiriman untuk menjamin kesegaran.",
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
    title: "Tim Profesional",
    description:
      "Didukung oleh lebih dari 200 karyawan berpengalaman dan berdedikasi tinggi.",
  },
];

export default function TentangPage() {
  return (
    <>
      <PageHeader
        badge="Tentang Kami"
        title="Mengenal Lebih Dekat"
        titleHighlight="Indofresh"
        description="Mitra terpercaya dalam distribusi buah-buahan segar berkualitas premium sejak 2014."
      />

      {/* About Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-brand-green-900/10">
                <Image
                  src="/images/about-warehouse.png"
                  alt="Gudang distribusi buah segar Indofresh"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green-900/20 to-transparent" />
              </div>

              {/* Floating Achievement */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl shadow-brand-green-900/10 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green-500 to-brand-green-700 rounded-xl flex items-center justify-center shrink-0">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-brand-green-800">
                      100%
                    </p>
                    <p className="text-sm text-gray-500">Produk Segar</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-brand-green-50 text-brand-green-700 text-sm font-semibold rounded-full mb-4">
                Cerita Kami
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Komitmen Kami untuk{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green-600 to-brand-green-800">
                  Kesegaran
                </span>{" "}
                Terbaik
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Berdiri sejak tahun 2014, <strong>Indofresh</strong> telah
                  menjadi mitra terpercaya dalam distribusi buah-buahan segar
                  berkualitas premium di seluruh Indonesia. Kami memulai
                  perjalanan dari sebuah visi sederhana: menghadirkan buah-buahan
                  segar terbaik dari kebun pilihan hingga ke meja konsumen.
                </p>
                <p>
                  Dengan jaringan distribusi yang luas mencakup lebih dari 50
                  kota, kami memastikan setiap produk — mulai dari Apel, Pir,
                  Anggur, hingga Jeruk — melewati proses seleksi ketat dan
                  rantai dingin (<em>cold chain</em>) yang terjaga untuk menjamin
                  kesegaran optimal.
                </p>
              </div>

              {/* Vision & Mission */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="group p-6 bg-brand-green-50/50 rounded-2xl border border-brand-green-100 hover:bg-brand-green-50 hover:border-brand-green-200 transition-all duration-300">
                  <div className="w-10 h-10 bg-brand-green-100 rounded-xl flex items-center justify-center mb-3 group-hover:bg-brand-green-200 transition-colors duration-300">
                    <svg
                      className="w-5 h-5 text-brand-green-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Visi</h3>
                  <p className="text-sm text-gray-600">
                    Menjadi distributor buah premium terdepan dan terpercaya di
                    Asia Tenggara.
                  </p>
                </div>

                <div className="group p-6 bg-brand-orange-50/50 rounded-2xl border border-brand-orange-100 hover:bg-brand-orange-50 hover:border-brand-orange-200 transition-all duration-300">
                  <div className="w-10 h-10 bg-brand-orange-100 rounded-xl flex items-center justify-center mb-3 group-hover:bg-brand-orange-200 transition-colors duration-300">
                    <svg
                      className="w-5 h-5 text-brand-orange-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Misi</h3>
                  <p className="text-sm text-gray-600">
                    Menyediakan buah berkualitas tinggi dengan pelayanan terbaik
                    dan harga kompetitif.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-brand-green-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-brand-orange-50 text-brand-orange-600 text-sm font-semibold rounded-full mb-4">
              Nilai-Nilai Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green-600 to-brand-orange-500">
                Indofresh?
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="group text-center p-8 bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:border-brand-green-200 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-16 h-16 mx-auto bg-brand-green-50 rounded-2xl flex items-center justify-center text-brand-green-600 mb-5 group-hover:bg-brand-green-100 group-hover:text-brand-green-700 transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-brand-green-800 to-brand-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10+", label: "Tahun Pengalaman" },
              { value: "500+", label: "Klien Puas" },
              { value: "50+", label: "Kota Terjangkau" },
              { value: "200+", label: "Karyawan" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl sm:text-5xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
