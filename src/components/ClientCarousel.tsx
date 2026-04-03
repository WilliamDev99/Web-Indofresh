"use client";

import { useEffect, useRef, useState } from "react";

const clients = [
  { name: "The FoodHall", src: "/images/thefoodhall.jpg" },
  { name: "Giant", src: "/images/giant.png.jpg" },
  { name: "GrandLucky", src: "/images/grandlucky.jpg" },
  { name: "GS Supermarket", src: "/images/gssupermarket.jpg" },
  { name: "Lotte Mart", src: "/images/lottemart.jpg" },
  { name: "Rezeki Fresh Fruit", src: "/images/rezeki.jpg" },
  { name: "Transmart", src: "/images/transmart.jpg" },
  { name: "Yogya Group", src: "/images/yogagroup.jpg" },
  { name: "AlfaMidi", src: "/images/alfamidi.jpg" },
];

export default function ClientCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const exactScrollLeft = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragStartScrollLeft, setDragStartScrollLeft] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  // Continuous Smooth Auto-scroll
  const scrollAnimation = () => {
    if (scrollRef.current && !isDragging) {
      exactScrollLeft.current += 0.4; // kecepatan per frame diturunkan agar lebih lambat
      const { scrollWidth } = scrollRef.current;
      
      if (exactScrollLeft.current >= scrollWidth / 2) {
        exactScrollLeft.current = 0;
      }
      scrollRef.current.scrollLeft = exactScrollLeft.current;
    }
    animationRef.current = requestAnimationFrame(scrollAnimation);
  };

  useEffect(() => {
    // Memastikan nilai awal sesuai dengan container
    if (scrollRef.current) {
      exactScrollLeft.current = scrollRef.current.scrollLeft;
    }
    animationRef.current = requestAnimationFrame(scrollAnimation);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isDragging]);

  // Mouse Drag (Khusus Desktop)
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (!scrollRef.current) return;
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setDragStartScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // kecepatan saat drag
    const newScroll = dragStartScrollLeft - walk;
    scrollRef.current.scrollLeft = newScroll;
    exactScrollLeft.current = newScroll; // Perbarui referensi desimal agar tidak melompat setelah dilepas
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Mitra Kami
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Kami bangga dapat bekerja sama dengan berbagai perusahaan terkemuka.
          </p>
        </div>

        <div className="relative">
          {/* Gradient Overlay for Fade Effect di sisi Kiri dan Kanan */}
          <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing py-4"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {/* Array is mapped 4 times to ensure seamless infinite scrolling loop without jarring edge jump */}
            {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
              <div 
                key={index}
                className="shrink-0 w-48 md:w-56 aspect-[3/2] relative bg-white border border-neutral-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center justify-center group"
              >
                <div className="relative w-full h-full transition-all duration-300 flex items-center justify-center">
                  {!imageErrors[index] ? (
                    <img
                      src={client.src}
                      alt={client.name}
                      style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                      onError={() => setImageErrors(prev => ({ ...prev, [index]: true }))}
                    />
                  ) : (
                    <span className="text-xl font-bold text-neutral-400">{client.name}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
