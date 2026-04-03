"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function NetworkSection() {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          data-animate
          className="opacity-0 flex flex-col md:flex-row md:items-center gap-6 mb-16"
        >
          <div className="flex items-center gap-6">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight whitespace-nowrap">
              Our Network
            </h2>
            <div className="hidden md:block w-px h-16 bg-gray-300" />
          </div>
          <p className="text-gray-500 leading-relaxed text-lg max-w-xl">
            We partner with global growers and packing house to give our
            customers only the best and freshest ingredients.
          </p>
        </div>

        {/* Network logos displayed as image */}
        <div
          data-animate
          className="opacity-0 relative w-full rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-500 bg-white p-4"
          style={{ animationDelay: "0.2s" }}
        >
          <Image
            src="/images/network-1.png"
            alt="Our Network Partners - Dino Fresh, Wang Shan, Lori, Aini, Jade Snow, Paradise13, Driscoll's, RJN, Peacock, Cordoma, Tasmanian Cherries, Costa, Vitor, Mr Apple, COPE Fruit, Verfrut, Dole, Unifrutti, Tru-Cape, BOLLO, GrapeCo, Sunkist, Pandol, Pretty Lady, Wandin Valley Farms, Daltex, Enza, Natural Delights, Delecta, Magrabi Agriculture, Safresco"
            width={1200}
            height={500}
            className="w-full h-auto object-contain"
            quality={100}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
