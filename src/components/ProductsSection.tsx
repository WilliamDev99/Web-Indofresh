"use client";

import { useEffect, useRef } from "react";

const videos = [
  {
    id: "h83u_wbPexc",
    title: "Share Your Moment With Wangshan",
    description:
      "Wangshan, pilihan terbaik untuk yang tersayang sejak 1962. Mewariskan cinta abadi dari generasi ke generasi.",
  },
  {
    id: "ageOlag_ZBk",
    title: "Fuji Apples By Wangshan",
    description:
      "Apel Fuji Wangshan, dipilih dari kualitas terbaik dengan tingkat kemanisan terjamin (Brix Guarantee) dan No Wax! Pilihan terbaik penuhi nutrisi harian.",
  },
  {
    id: "6PMgQTx_Uso",
    title: "Autumn Honey Pear Premium By Wangshan",
    description:
      "Autumn Honey Pear Premium, kaya akan kolagen, baik untuk pencernaan dan bikin glowing! Brix Guarantee and No Wax!",
  },
  {
    id: "42Kbai6XYws",
    title: "Lori si Apel Tanning",
    description:
      "Kisah Lori si Apel Tanning yang petualangannya selalu seru dan penuh warna bersama Indofresh.",
  },
  {
    id: "HR-KGD7C1O0",
    title: "Aini, Apel yang Melambangkan Cinta",
    description:
      "Aini, si Apel merah yang melambangkan cinta sejati. Cerita manis dari Indofresh Official Channel.",
  },
  {
    id: "qyHSVHNhiT4",
    title: "Venus si Apel Kuning yang Melambangkan Kecantikan",
    description:
      "Venus, si Apel kuning yang cantik dan elegan. Simbol kecantikan dari rangkaian cerita Indofresh.",
  },
];

export default function ProductsSection() {
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
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Decorative blurs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-green-100/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-brand-orange-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-6">
          <span
            data-animate
            className="opacity-0 inline-block px-4 py-1.5 bg-brand-green-100 text-brand-green-700 text-sm font-bold rounded-full mb-4 tracking-wider uppercase"
          >
            Our Products
          </span>
          <h2
            data-animate
            className="opacity-0 text-3xl md:text-5xl font-extrabold text-gray-900"
            style={{ animationDelay: "0.1s" }}
          >
            Our Products
          </h2>
        </div>

        <p
          data-animate
          className="opacity-0 text-gray-500 leading-relaxed max-w-4xl mx-auto text-center mb-16"
          style={{ animationDelay: "0.2s" }}
        >
          With an exquisite selection of over 40 varieties of fresh fruits, PT
          Indofresh takes pride in offering only the most superior farm produce.
          We meticulously source our fruits and vegetables from esteemed farmers
          and suppliers, adhering rigorously to our stringent standards and
          unwavering expectations of quality. Additionally, our products are
          certified, guaranteeing its safety and suitability for consumption.
        </p>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {videos.map((video, i) => (
            <div
              key={video.id}
              data-animate
              className="opacity-0 group"
              style={{ animationDelay: `${0.15 * i}s` }}
            >
              {/* YouTube Embed */}
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-900/5 bg-gray-100 mb-5 group-hover:shadow-xl group-hover:ring-brand-green-300/50 transition-all duration-500">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
              </div>

              {/* Text content */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-green-700 transition-colors duration-300">
                {video.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {video.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
