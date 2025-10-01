"use client";

import { useEffect, useState } from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
}

export default function Hero({ title, subtitle, backgroundImage, className = "" }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden ${className}`}
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
        <div
          className="mb-8 opacity-0 animate-[fadeIn_1s_ease-out_forwards]"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          <h1 className="font-bebas text-7xl md:text-8xl lg:text-9xl tracking-wider text-white/90 mb-2" style={{ fontFamily: 'var(--font-bebas)' }}>
            {title}
          </h1>
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        </div>

        <div
          className="space-y-4 opacity-0 animate-[fadeIn_1s_0.5s_ease-out_forwards]"
          style={{ transform: `translateY(${scrollY * 0.25}px)` }}
        >
          <p className="text-2xl md:text-3xl text-accent font-light tracking-[0.2em] uppercase">
            Discover. Learn. Preserve.
          </p>
        </div>
      </div>

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