"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const slides = [
    "/images/hero-slide-1.png",
    "/images/hero-slide-2.jpg",
    "/images/hero-slide-3.jpg",
    "/images/hero-slide-4.jpg",
  ];

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    setTouchEnd(null);
    setTouchStart('touches' in e ? e.targetTouches[0].clientX : e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    setTouchEnd('touches' in e ? e.targetTouches[0].clientX : e.clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // ganti slide setiap 5 detik
    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

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

    const elements = heroRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-green-950 pt-20"
    >
      {/* Background Graphic/Color */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Indofresh Headquarters Wall"
          fill
          className="object-cover object-center"
          quality={100}
          unoptimized={true}
          priority
        />
        {/* Clean, dark overlay to restore photo sharpness while keeping text readable */}
        <div className="absolute inset-0 bg-neutral-900/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-900/30 to-brand-green-950" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-orange-400/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-brand-green-400/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 pb-32 pt-28">
        <div className="flex flex-col items-center text-center gap-16">
          {/* Top: Text Content */}
          <div className="max-w-4xl flex flex-col items-center">
            {/* Badge */}
            <div
              data-animate
              className="opacity-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-8"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="w-2 h-2 bg-brand-orange-400 rounded-full animate-pulse-soft" />
              Distributor Buah Premium #1 Indonesia
            </div>

            {/* Headline */}
            <h1
              data-animate
              className="opacity-0 text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6"
              style={{ animationDelay: "0.4s" }}
            >
              Distributor Buah Segar{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-300 to-brand-orange-500">
                Pilihan Terbaik
              </span>{" "}
              Indonesia
            </h1>

            {/* Sub-text */}
            <p
              data-animate
              className="opacity-0 text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl text-center mb-10"
              style={{ animationDelay: "0.6s" }}
            >
              Kami menghadirkan Apel, Pir, Anggur, dan Jeruk berkualitas premium
              langsung dari kebun terbaik ke meja Anda. Kesegaran dan kualitas
              adalah komitmen utama kami.
            </p>

            {/* CTA Buttons */}
            <div
              data-animate
              className="opacity-0 flex flex-wrap justify-center gap-4"
              style={{ animationDelay: "0.8s" }}
            >
              <Link
                href="/tentang"
                id="cta-learn-more"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-orange-500/30 hover:shadow-brand-orange-500/50 hover:scale-105 transition-all duration-300"
              >
                Pelajari Lebih Lanjut
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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

              <Link
                href="/kontak"
                id="cta-contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                Hubungi Kami
              </Link>
            </div>

            {/* Stats */}
            <div
              data-animate
              className="opacity-0 mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full justify-center text-center"
              style={{ animationDelay: "1s" }}
            >
              {[
                { value: "10+", label: "Tahun" },
                { value: "500+", label: "Klien" },
                { value: "50+", label: "Kota" },
                { value: "99%", label: "Puas" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl xl:text-4xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-white/60 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom: Hero Image Auto Slider */}
          <div
            data-animate
            className="opacity-0 relative w-full max-w-5xl transition-transform duration-700 mt-8"
            style={{ animationDelay: "1.2s" }}
          >
            {/* Simple Sharp Box Container (Precise 16:9) */}
            <div 
              className="relative w-full aspect-video overflow-hidden shadow-2xl ring-1 ring-white/20 group bg-neutral-900 border border-white/10 cursor-grab active:cursor-grabbing"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onMouseDown={onTouchStart}
              onMouseMove={onTouchMove}
              onMouseUp={onTouchEnd}
              onMouseLeave={onTouchEnd}
            >
              <div 
                className="flex w-full h-full transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((src, index) => (
                  <div key={src} className="relative min-w-full min-h-full">
                    <Image
                      src={src}
                      alt={`Indofresh Hero Slide ${index + 1}`}
                      fill
                      className="object-cover bg-neutral-800 transition-transform duration-[10000ms] ease-linear group-hover:scale-105"
                      sizes="100vw"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => { e.stopPropagation(); setCurrentSlide(index); }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "w-8 bg-brand-orange-500" : "w-2 bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1)); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white/70 hover:bg-black/70 hover:text-white transition-all opacity-0 group-hover:opacity-100 z-20 backdrop-blur-sm"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setCurrentSlide((prev) => (prev + 1) % slides.length); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white/70 hover:bg-black/70 hover:text-white transition-all opacity-0 group-hover:opacity-100 z-20 backdrop-blur-sm"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>

              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none mix-blend-overlay z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <Link
          href="/berita"
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors duration-300"
        >
          <span className="text-xs tracking-widest uppercase">Jelajahi</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
          </div>
        </Link>
      </div>
    </section>
  );
}
