"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function PromosSection() {
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

  const promos = [
    {
      src: "/images/promo-1.jpg",
      alt: "Logistik & Distribusi Indofresh",
      delay: "0s",
    },
    {
      src: "/images/promo-2.jpg",
      alt: "Kualitas Buah Indofresh",
      delay: "0.2s",
    },
    {
      src: "/images/promo-3.jpg",
      alt: "Pilihan Aneka Buah Segar",
      delay: "0.4s",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50 overflow-hidden relative">
      {/* Decorative Background Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-green-200/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-orange-200/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span 
            data-animate 
            className="opacity-0 inline-block px-4 py-1.5 bg-brand-green-100 text-brand-green-700 text-sm font-bold rounded-full mb-4 tracking-wider uppercase"
          >
            Info Terkini
          </span>
          <h2 
            data-animate 
            className="opacity-0 text-3xl md:text-5xl font-extrabold text-gray-900"
            style={{ animationDelay: "0.1s" }}
          >
            Temukan Penawaran & Layanan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {promos.map((promo, i) => (
            <div
              key={i}
              data-animate
              className="opacity-0 group relative"
              style={{ animationDelay: promo.delay }}
            >
              {/* Premium Card Styling */}
              <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_-10px_rgba(34,197,94,0.3)] ring-1 ring-gray-900/5 group-hover:ring-brand-green-500/50 bg-white">
                <Image
                  src={promo.src}
                  alt={promo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Subtle Gradient Overlay for visual depth */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
