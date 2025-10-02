"use client";

import { useEffect, useRef, useState } from "react";
import Hero from "@/components/sections/Hero";
import Link from "next/link";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [scrollY, setScrollY] = useState(0);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const id = target.dataset.section;
          if (id) {
            setVisibleSections((prev) => new Set(prev).add(id));
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe sections
    if (introRef.current) observer.observe(introRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Hero
        showMotto={true}
        backgroundImage="/images/background_pic.jpg"
      />

      {/* Quick Links Section */}
      <section className="py-24 px-6 relative bg-black">
        <div className="absolute inset-0 bg-noise opacity-5"></div>

        <div className="container mx-auto max-w-3xl relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
            <Link href="/projects" className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden transition-all duration-300">
              {/* Background border */}
              <div className="absolute inset-0 border border-gray-500 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Corner borders (hover state) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-accent"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-accent"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-accent"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent"></div>
              </div>

              {/* Text */}
              <span className="relative z-10 text-gray-400 group-hover:text-accent transition-colors duration-300 tracking-[0.25em] uppercase" style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.1rem' }}>
                View Our Work
              </span>
            </Link>

            <div className="h-px w-8 bg-accent/30 hidden sm:block"></div>

            <Link href="/about" className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden transition-all duration-300">
              {/* Background border */}
              <div className="absolute inset-0 border border-gray-500 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Corner borders (hover state) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-accent"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-accent"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-accent"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent"></div>
              </div>

              {/* Text */}
              <span className="relative z-10 text-gray-400 group-hover:text-accent transition-colors duration-300 tracking-[0.25em] uppercase" style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.1rem' }}>
                Our Mission
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Parallax Background Image Section - Comes First */}
      <section className="relative h-screen bg-black overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full scale-110 z-10"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <img
            src="/images/dhanis1.jpg"
            alt="Discover Old D'Hanis Background"
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      {/* Featured Project Content - Vertical Image and Text */}
      <section
        id="intro"
        ref={introRef}
        data-section="intro"
        className="relative py-40 bg-gradient-to-b from-black via-gray-900/30 to-black"
      >
        <div className="absolute inset-0 gradient-dust opacity-20"></div>

        <div
          className={`relative z-10 transition-all duration-1000 ${
            visibleSections.has('intro')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-20'
          }`}
        >
          {/* Centered Content Container */}
          <div className="relative w-full max-w-[1200px] mx-auto px-6">
            <div className="flex items-center justify-center gap-12">
              {/* Foreground Vertical Image - Left Side */}
              <div className="flex-shrink-0 w-auto max-w-[400px]">
                <img
                  src="/images/dominics.jpeg"
                  alt="Discover Old D'Hanis"
                  className="w-full h-auto"
                />
              </div>

              {/* Content - Right Side */}
              <div className="flex-1 max-w-[600px]">
            <div className="mb-12">
              <p className="text-accent/70 text-xs tracking-[0.4em] uppercase mb-6">Now Available</p>
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.15em] text-foreground mb-8" style={{ fontFamily: 'var(--font-bebas)' }}>
                DISCOVER OLD D'HANIS
              </h2>
            </div>

            <div className="space-y-8 mb-12">
              <p className="text-gray-300 text-xl md:text-2xl leading-relaxed font-light">
                Step back in time to 1870s Texas and experience the authentic daily life of a frontier town.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Explore historically accurate buildings, interact with period-appropriate objects, and discover
                the stories of the people who built this community.
              </p>
            </div>

            <div className="inline-block">
              <Link
                href="/projects/discover-old-dhanis"
                className="inline-flex items-center gap-3 text-foreground hover:text-accent transition-colors duration-300 group"
              >
                <span className="text-sm tracking-[0.2em] uppercase">Learn more</span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
