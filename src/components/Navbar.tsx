"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Berita", href: "/berita" },
  { label: "Tentang Kami", href: "/tentang" },
  { label: "Karier", href: "/karier" },
  { label: "Hubungi Kami", href: "/kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Determine if navbar should have transparent background
  // Only on home page at the top
  const isTransparent = isHome && !scrolled;

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md shadow-lg shadow-brand-green-500/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-32 h-10 sm:w-40 sm:h-12 hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/logo.png"
                alt="Indofresh Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? isTransparent
                        ? "text-white bg-white/20"
                        : "text-brand-green-700 bg-brand-green-50"
                      : isTransparent
                        ? "text-white/80 hover:text-white hover:bg-white/10"
                        : "text-gray-600 hover:text-brand-green-700 hover:bg-brand-green-50/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            id="mobile-menu-button"
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-300 ${
              isTransparent
                ? "text-white hover:bg-white/10"
                : "text-brand-green-700 hover:bg-brand-green-50"
            }`}
            aria-label="Toggle navigation menu"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 rounded-full transition-all duration-300 ${
                  isTransparent ? "bg-white" : "bg-brand-green-700"
                } ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`}
              />
              <span
                className={`block h-0.5 rounded-full transition-all duration-300 ${
                  isTransparent ? "bg-white" : "bg-brand-green-700"
                } ${isOpen ? "opacity-0 scale-x-0" : ""}`}
              />
              <span
                className={`block h-0.5 rounded-full transition-all duration-300 ${
                  isTransparent ? "bg-white" : "bg-brand-green-700"
                } ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/98 backdrop-blur-lg border-t border-brand-green-100 shadow-xl px-4 pb-6 pt-2">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                  isActive
                    ? "text-brand-green-700 bg-brand-green-50"
                    : "text-gray-600 hover:text-brand-green-700 hover:bg-brand-green-50"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
