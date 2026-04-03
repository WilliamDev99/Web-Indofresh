"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function StorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              entry.target.getAttribute("data-anim") || "animate-fade-in-up"
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
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text */}
          <div className="order-2 lg:order-1">
            <div data-animate data-anim="animate-slide-up" className="opacity-0">
              {/* Top Label */}
              <div className="mb-6">
                <span className="text-brand-green-600 font-bold text-sm tracking-widest uppercase relative inline-block">
                  Kisah Kami
                  <span className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-green-500 rounded-full"></span>
                </span>
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Orang-Orang Buah Segar
              </h2>

              {/* Paragraphs */}
              <div className="space-y-6 text-gray-500 leading-relaxed text-lg mb-12">
                <p>
                 PT Indofresh’s journey began humbly in the early 2002 as a small trading company, focused on delivering fresh fruits across Indonesia. Over decades, our dedication to quality and customer satisfaction has propelled us to become a premier importer and distributor of fresh fruits in the region. Our success is built on a foundation of efficient logistics, stringent quality control, and a steadfast commitment to excellence.
                </p>
                <p>
                  PT Indofresh boasts over 20 years of experience and expertise in the fruit distribution industry. Our reputation as a household name is a testament to our unwavering dedication in providing the finest fruits from the best farmers and suppliers and exceeding the highest standards and expectations. With a diverse selection of over 40 varieties of fruits, we take pride in delivering freshness and quality to our customers nationwide.
                </p>
              </div>

              {/* Button */}
              <Link 
                href="/tentang"
                className="inline-block px-8 py-3 rounded-xl border-2 border-brand-green-500 text-brand-green-600 font-bold hover:bg-brand-green-50 hover:shadow-lg hover:shadow-brand-green-500/20 transition-all duration-300"
              >
                Baca Selengkapnya
              </Link>
            </div>
          </div>

          {/* Right Column: Image with Dots */}
          <div data-animate data-anim="animate-slide-up" className="order-1 lg:order-2 relative opacity-0" style={{ animationDelay: "0.2s" }}>
            {/* Decorative Dot Patterns */}
            <div 
              className="absolute -bottom-8 -left-8 w-40 h-40 z-0"
              style={{
                backgroundImage: "radial-gradient(#22c55e 2px, transparent 2px)",
                backgroundSize: "20px 20px"
              }}
            />
            <div 
              className="absolute -bottom-16 right-12 w-32 h-20 z-0"
              style={{
                backgroundImage: "radial-gradient(#22c55e 2px, transparent 2px)",
                backgroundSize: "20px 20px"
              }}
            />

            {/* Main Image */}
            <div className="relative z-10 aspect-square w-full rounded-tr-[40px] rounded-bl-[40px] overflow-hidden shadow-2xl">
              <Image 
                src="/images/about-warehouse.png" 
                alt="Gudang Indofresh" 
                fill 
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
