"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

const articles: NewsArticle[] = [
  {
    id: 1,
    title: "Tips Memilih Apel Segar: Panduan Lengkap untuk Konsumen Cerdas",
    excerpt:
      "Pelajari cara memilih apel yang segar dan berkualitas tinggi. Dari warna kulit hingga kekerasan buah, berikut panduan lengkap yang akan membantu Anda mendapatkan apel terbaik.",
    date: "25 Maret 2026",
    image: "/images/news-apples.png",
    category: "Tips & Trik",
  },
  {
    id: 2,
    title: "Panen Jeruk Musim Ini: Indofresh Siap Distribusikan ke Seluruh Indonesia",
    excerpt:
      "Musim panen jeruk telah tiba! Indofresh berkomitmen mendistribusikan jeruk segar berkualitas premium dari kebun-kebun terbaik ke seluruh pelosok Nusantara.",
    date: "20 Maret 2026",
    image: "/images/news-oranges.png",
    category: "Berita Perusahaan",
  },
  {
    id: 3,
    title: "Indofresh Raih Penghargaan Best Fresh Fruit Distributor 2026",
    excerpt:
      "Indofresh kembali menorehkan prestasi dengan meraih penghargaan Best Fresh Fruit Distributor pada ajang Indonesia Supply Chain Awards 2026.",
    date: "15 Maret 2026",
    image: "/images/news-team.png",
    category: "Prestasi",
  },
];

export default function News() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="berita"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-gradient-to-b from-brand-green-50/30 to-white overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-orange-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          data-animate
          className="opacity-0 text-center mb-16"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="inline-block px-4 py-1.5 bg-brand-orange-50 text-brand-orange-600 text-sm font-semibold rounded-full mb-4">
            Berita & Artikel
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Kabar Terbaru dari{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green-600 to-brand-orange-500">
              Indofresh
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Ikuti perkembangan terbaru, artikel informatif, dan cerita
            inspiratif seputar dunia buah segar premium.
          </p>
        </div>

        {/* News Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={article.id}
              data-animate
              className="opacity-0 group bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-brand-green-100/50 border border-gray-100 hover:border-brand-green-200 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-green-700 text-xs font-semibold rounded-full">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {article.date}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-brand-green-700 transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <button
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green-600 hover:text-brand-green-800 group/btn transition-colors duration-300"
                  aria-label={`Baca selengkapnya tentang ${article.title}`}
                >
                  Baca Selengkapnya
                  <svg
                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
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
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
