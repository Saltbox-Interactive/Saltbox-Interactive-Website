"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      }
      // Hide header when scrolling down past the first section
      else if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 right-0 transition-opacity duration-300 ${
      isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
    }`} style={{ zIndex: 200 }}>
      <nav className="px-4 py-6 max-w-[1400px] mx-auto mt-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="group flex items-center gap-4 absolute left-8">
            <img
              src="/images/saltbox-logo-blank.png"
              alt="Saltbox Interactive Logo"
              className="w-12 h-12 object-contain"
            />
            <span className="text-xl font-normal tracking-wide text-foreground group-hover:text-accent transition-colors duration-300 translate-y-0.5 uppercase" style={{ fontFamily: 'var(--font-archivo)' }}>
              Saltbox Interactive
            </span>
          </Link>

          <button
            className="lg:hidden text-foreground hover:text-accent transition-colors absolute right-8"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="hidden lg:flex items-center gap-8 absolute right-8">
            <Link href="/projects" className="text-base tracking-wider text-foreground/80 hover:text-accent transition-colors duration-300 uppercase" style={{ fontFamily: 'var(--font-bebas)' }}>
              Projects
            </Link>
            <Link href="/about" className="text-base tracking-wider text-foreground/80 hover:text-accent transition-colors duration-300 uppercase" style={{ fontFamily: 'var(--font-bebas)' }}>
              About
            </Link>
            <Link href="/contact" className="text-base tracking-wider text-foreground/80 hover:text-accent transition-colors duration-300 uppercase" style={{ fontFamily: 'var(--font-bebas)' }}>
              Contact
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-4 border-t border-accent/20 pt-4">
            <div className="flex flex-col gap-4">
              <Link href="/projects" className="text-sm tracking-wider text-foreground/80 hover:text-accent transition-colors duration-300 uppercase" onClick={() => setIsMenuOpen(false)}>
                Projects
              </Link>
              <Link href="/about" className="text-sm tracking-wider text-foreground/80 hover:text-accent transition-colors duration-300 uppercase" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="text-sm tracking-wider text-foreground/80 hover:text-accent transition-colors duration-300 uppercase" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}