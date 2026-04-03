"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function AboutUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              entry.target.getAttribute("data-anim") || "animate-slide-up"
            );
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="tentang"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange-50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div
            data-animate
            data-anim="animate-slide-in-left"
            className="opacity-0 relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-brand-green-900/10">
              <Image
                src="/images/about-warehouse.png"
                alt="Gudang distribusi buah segar Indofresh"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green-900/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl shadow-brand-green-900/10 p-6 max-w-[200px]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-green-500 to-brand-green-700 rounded-xl flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
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
                  <p className="text-2xl font-bold text-brand-green-800">
                    100%
                  </p>
                  <p className="text-xs text-gray-500">Produk Segar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <div
              data-animate
              data-anim="animate-slide-in-right"
              className="opacity-0"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="inline-block px-4 py-1.5 bg-brand-green-50 text-brand-green-700 text-sm font-semibold rounded-full mb-4">
                Tentang Kami
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Komitmen Kami untuk{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green-600 to-brand-green-800">
                  Kesegaran
                </span>{" "}
                Terbaik
              </h2>
            </div>

            <div
              data-animate
              data-anim="animate-slide-in-right"
              className="opacity-0 space-y-4 text-gray-600 leading-relaxed"
              style={{ animationDelay: "0.4s" }}
            >
              <p>
                Berdiri sejak tahun 2014, <strong>Indofresh</strong> telah
                menjadi mitra terpercaya dalam distribusi buah-buahan segar
                berkualitas premium di seluruh Indonesia. Kami memulai perjalanan
                dari sebuah visi sederhana: menghadirkan buah-buahan segar
                terbaik dari kebun pilihan hingga ke meja konsumen.
              </p>
              <p>
                Dengan jaringan distribusi yang luas mencakup lebih dari 50 kota,
                kami memastikan setiap produk — mulai dari Apel, Pir, Anggur,
                hingga Jeruk — melewati proses seleksi ketat dan rantai dingin
                (<em>cold chain</em>) yang terjaga untuk menjamin kesegaran
                optimal.
              </p>
            </div>

            {/* Vision & Mission */}
            <div
              data-animate
              data-anim="animate-slide-in-right"
              className="opacity-0 mt-8 grid sm:grid-cols-2 gap-4"
              style={{ animationDelay: "0.6s" }}
            >
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

            {/* Values */}
            <div
              data-animate
              data-anim="animate-slide-in-right"
              className="opacity-0 mt-6 flex flex-wrap gap-3"
              style={{ animationDelay: "0.8s" }}
            >
              {[
                "🍎 Kualitas Premium",
                "🚚 Distribusi Cepat",
                "❄️ Cold Chain",
                "🤝 Layanan Terpercaya",
              ].map((value) => (
                <span
                  key={value}
                  className="px-4 py-2 bg-gray-50 text-gray-700 text-sm rounded-full border border-gray-100 hover:border-brand-green-200 hover:bg-brand-green-50 transition-all duration-300"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
