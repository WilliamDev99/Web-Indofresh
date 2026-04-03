import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Berita & Artikel",
  description:
    "Baca berita terbaru, artikel informatif, dan tips seputar buah-buahan segar premium dari Indofresh.",
};

interface NewsArticle {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
}

const articles: NewsArticle[] = [
  {
    id: 1,
    slug: "tips-memilih-apel-segar",
    title: "Tips Memilih Apel Segar: Panduan Lengkap untuk Konsumen Cerdas",
    excerpt:
      "Pelajari cara memilih apel yang segar dan berkualitas tinggi. Dari warna kulit hingga kekerasan buah, berikut panduan lengkap yang akan membantu Anda mendapatkan apel terbaik untuk keluarga.",
    date: "25 Maret 2026",
    image: "/images/news-apples.png",
    category: "Tips & Trik",
    readTime: "5 menit",
  },
  {
    id: 2,
    slug: "panen-jeruk-musim-ini",
    title:
      "Panen Jeruk Musim Ini: Indofresh Siap Distribusikan ke Seluruh Indonesia",
    excerpt:
      "Musim panen jeruk telah tiba! Indofresh berkomitmen mendistribusikan jeruk segar berkualitas premium dari kebun-kebun terbaik ke seluruh pelosok Nusantara dengan sistem cold chain terjaga.",
    date: "20 Maret 2026",
    image: "/images/news-oranges.png",
    category: "Berita Perusahaan",
    readTime: "4 menit",
  },
  {
    id: 3,
    slug: "penghargaan-best-distributor-2026",
    title: "Indofresh Raih Penghargaan Best Fresh Fruit Distributor 2026",
    excerpt:
      "Indofresh kembali menorehkan prestasi dengan meraih penghargaan Best Fresh Fruit Distributor pada ajang Indonesia Supply Chain Awards 2026 yang diselenggarakan di Jakarta Convention Center.",
    date: "15 Maret 2026",
    image: "/images/news-team.png",
    category: "Prestasi",
    readTime: "3 menit",
  },
  {
    id: 4,
    slug: "manfaat-anggur-untuk-kesehatan",
    title: "5 Manfaat Luar Biasa Anggur untuk Kesehatan Tubuh Anda",
    excerpt:
      "Anggur bukan hanya buah yang lezat, tetapi juga kaya akan antioksidan dan nutrisi penting. Temukan berbagai manfaat kesehatan dari mengonsumsi anggur secara rutin.",
    date: "10 Maret 2026",
    image: "/images/news-apples.png",
    category: "Kesehatan",
    readTime: "6 menit",
  },
  {
    id: 5,
    slug: "ekspansi-gudang-surabaya",
    title: "Indofresh Resmi Buka Gudang Distribusi Baru di Surabaya",
    excerpt:
      "Dalam rangka memperluas jangkauan distribusi ke wilayah Jawa Timur, Indofresh meresmikan gudang distribusi baru berkapasitas 2.000 ton di Surabaya.",
    date: "5 Maret 2026",
    image: "/images/news-oranges.png",
    category: "Berita Perusahaan",
    readTime: "4 menit",
  },
  {
    id: 6,
    slug: "cara-menyimpan-buah",
    title: "Cara Menyimpan Buah Agar Tetap Segar Lebih Lama di Rumah",
    excerpt:
      "Jangan biarkan buah cepat busuk! Pelajari teknik penyimpanan yang benar untuk berbagai jenis buah agar tetap segar dan tahan lama di kulkas maupun suhu ruangan.",
    date: "1 Maret 2026",
    image: "/images/news-team.png",
    category: "Tips & Trik",
    readTime: "7 menit",
  },
];

export default function BeritaPage() {
  return (
    <>
      <PageHeader
        badge="Berita & Artikel"
        title="Kabar Terbaru dari"
        titleHighlight="Indofresh"
        description="Ikuti perkembangan terbaru, artikel informatif, dan cerita inspiratif seputar dunia buah segar premium."
        badgeColor="orange"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Article */}
          <div className="mb-16">
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:border-brand-green-200 transition-all duration-500">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-72 lg:h-auto min-h-[320px] overflow-hidden">
                  <Image
                    src={articles[0].image}
                    alt={articles[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-gradient-to-r" />
                  <span className="absolute top-6 left-6 px-4 py-1.5 bg-brand-orange-500 text-white text-xs font-semibold rounded-full">
                    Artikel Pilihan
                  </span>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-brand-green-50 text-brand-green-700 text-xs font-semibold rounded-full">
                      {articles[0].category}
                    </span>
                    <span className="text-sm text-gray-400 flex items-center gap-1.5">
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
                      {articles[0].date}
                    </span>
                    <span className="text-sm text-gray-400 flex items-center gap-1.5">
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {articles[0].readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-brand-green-700 transition-colors duration-300">
                    {articles[0].title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    {articles[0].excerpt}
                  </p>
                  <div>
                    <button className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-green-600 to-brand-green-700 text-white font-semibold rounded-xl shadow-lg shadow-brand-green-500/20 hover:shadow-brand-green-500/40 transition-all duration-300">
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
                </div>
              </div>
            </div>
          </div>

          {/* Article Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
              <article
                key={article.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-brand-green-100/50 border border-gray-100 hover:border-brand-green-200 transition-all duration-500 hover:-translate-y-2"
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
                  <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                    <span className="flex items-center gap-1.5">
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
                    </span>
                    <span className="flex items-center gap-1.5">
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {article.readTime}
                    </span>
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
    </>
  );
}
