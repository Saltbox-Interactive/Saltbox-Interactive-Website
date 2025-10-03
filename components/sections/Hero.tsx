"use client";

import { useEffect, useState } from "react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
  showMotto?: boolean;
  pageName?: string;
}

export default function Hero({ title, subtitle, backgroundImage, className = "", showMotto = false, pageName }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
      )}

      {/* Atmospheric background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-gray-900/80 to-black/90"></div>
      <div className="absolute inset-0 gradient-dust opacity-40"></div>

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {showMotto ? (
          <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
            <div
              className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.3em] text-white transition-all duration-300"
              style={{
                fontFamily: 'var(--font-bebas)',
                transform: `translateX(${scrollY * -1.5}px)`,
                opacity: Math.max(0, 1 - scrollY / 300)
              }}
            >
              DISCOVER
            </div>
            <div
              className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.3em] text-white transition-all duration-300"
              style={{
                fontFamily: 'var(--font-bebas)',
                transform: `translateX(${scrollY * 1.5}px)`,
                opacity: Math.max(0, 1 - scrollY / 300)
              }}
            >
              LEARN
            </div>
            <div
              className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.3em] text-white transition-all duration-300"
              style={{
                fontFamily: 'var(--font-bebas)',
                transform: `translateX(${scrollY * -1.5}px)`,
                opacity: Math.max(0, 1 - scrollY / 300)
              }}
            >
              PRESERVE
            </div>
          </div>
        ) : (
          <>
            <div
              className="mb-8 opacity-0 animate-[fadeIn_1s_ease-out_forwards]"
              style={{ transform: `translateY(${scrollY * 0.15}px)` }}
            >
              {title && (
                <>
                  <h1 className="font-bebas text-7xl md:text-8xl lg:text-9xl tracking-wider text-white/90 mb-2" style={{ fontFamily: 'var(--font-bebas)' }}>
                    {title}
                  </h1>
                  <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                </>
              )}
            </div>

            <div
              className="space-y-4 opacity-0 animate-[fadeIn_1s_0.5s_ease-out_forwards]"
              style={{ transform: `translateY(${scrollY * 0.25}px)` }}
            >
              {subtitle && (
                <p className="text-2xl md:text-3xl text-accent font-light tracking-[0.2em]">
                  {subtitle}
                </p>
              )}
            </div>
          </>
        )}
      </div>

      {/* Page indicator - bottom left */}
      {pageName && (
        <div className="absolute bottom-10 left-10 text-sm text-gray-400 tracking-wider opacity-0 animate-[fadeIn_1s_1s_ease-out_forwards]">
          Saltbox Interactive | <span className="text-accent">{pageName}</span>
        </div>
      )}

      {/* Scroll indicator */}
      <button
        onClick={() => {
          document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-[fadeIn_1s_1s_ease-out_forwards] cursor-pointer hover:text-accent transition-colors duration-300"
        aria-label="Scroll down"
      >
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-accent/60 hover:text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </button>
    </section>
  );
}