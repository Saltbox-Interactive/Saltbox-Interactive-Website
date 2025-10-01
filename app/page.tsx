"use client";

import { useEffect, useRef, useState } from "react";
import Hero from "@/components/sections/Hero";
import Link from "next/link";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
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

  return (
    <>
      <Hero
        showMotto={true}
        backgroundImage="/images/background_pic.jpg"
      />

      {/* Quick Links Section */}
      <section className="py-32 px-6 relative bg-black">
        <div className="absolute inset-0 bg-noise opacity-5"></div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/projects" className="group">
              <div className="relative min-h-[220px] overflow-hidden rounded-lg border border-accent/20 hover:border-accent/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                  <div className="mb-5">
                    <svg className="w-14 h-14 text-accent/60 group-hover:text-accent transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-light tracking-[0.2em] text-foreground mb-4 group-hover:text-accent transition-colors duration-500" style={{ fontFamily: 'var(--font-bebas)' }}>
                    VIEW OUR WORK
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    Explore our historical preservation projects
                  </p>
                  <div className="h-px w-14 bg-accent/40 group-hover:w-24 transition-all duration-500"></div>
                </div>
              </div>
            </Link>

            <Link href="/about" className="group">
              <div className="relative min-h-[220px] overflow-hidden rounded-lg border border-accent/20 hover:border-accent/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                  <div className="mb-5">
                    <svg className="w-14 h-14 text-accent/60 group-hover:text-accent transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-light tracking-[0.2em] text-foreground mb-4 group-hover:text-accent transition-colors duration-500" style={{ fontFamily: 'var(--font-bebas)' }}>
                    OUR MISSION
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    Discover the team preserving history
                  </p>
                  <div className="h-px w-14 bg-accent/40 group-hover:w-24 transition-all duration-500"></div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Project - Discover Old D'Hanis */}
      <section
        id="intro"
        ref={introRef}
        data-section="intro"
        className="relative py-40 bg-gradient-to-b from-black via-gray-900/30 to-black overflow-hidden"
      >
        <div className="absolute inset-0 gradient-dust opacity-20"></div>

        <div
          className={`relative z-10 transition-all duration-1000 ${
            visibleSections.has('intro')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-20'
          }`}
        >
          {/* Large Background Image */}
          <div className="relative w-full max-w-[1400px] mx-auto px-6 mb-20">
            <div className="relative aspect-[21/9] overflow-hidden">
              <img
                src="/images/dhanis1.jpg"
                alt="Discover Old D'Hanis"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            </div>
          </div>

          {/* Content Below Image */}
          <div className="max-w-[900px] mx-auto px-6 md:px-12">
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
                href="/projects/old-dhanis"
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
      </section>
    </>
  );
}
