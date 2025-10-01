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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-opacity duration-300 bg-black/90 backdrop-blur-md border-b border-accent/20 ${
      isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-2xl font-light tracking-[0.275em] text-foreground group-hover:text-accent transition-colors duration-300" style={{ fontFamily: 'var(--font-bebas)' }}>
                SALTBOX
              </span>
              <span className="text-xs tracking-[0.2em] text-accent/60 group-hover:text-accent transition-colors duration-300">
                INTERACTIVE
              </span>
            </div>
          </Link>

          <button
            className="lg:hidden text-foreground hover:text-accent transition-colors"
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

          <div className="hidden lg:flex items-center gap-8">
            <Link href="/projects" className="text-sm tracking-wider text-foreground/80 hover:text-accent transition-colors duration-300 uppercase">
              Projects
            </Link>
            <Link href="/about" className="text-sm tracking-wider text-foreground/80 hover:text-accent transition-colors duration-300 uppercase">
              About
            </Link>
            <Link href="/contact" className="text-sm tracking-wider text-foreground/80 hover:text-accent transition-colors duration-300 uppercase">
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