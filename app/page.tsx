"use client";

import { useEffect, useRef, useState } from "react";
import Hero from "@/components/sections/Hero";
import Link from "next/link";
import ParallaxImage from "@/components/ParallaxImage";
import { useScrollSpeed } from "@/hooks/useScrollSpeed";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [scrollY, setScrollY] = useState(0);
  const aboutRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  // Apply slow scroll speed to hero section while motto is animating
  useScrollSpeed(heroRef, {
    speed: 4.0, // Slow scroll during motto animation
    threshold: 0.5, // Activate when section is 50% visible
    downOnly: true, // Only slow down when scrolling down, not up
  });

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
    if (aboutRef.current) observer.observe(aboutRef.current);
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
      {/* Fixed Background Hero */}
      <div
        className="fixed inset-0 z-0"
        style={{
          opacity: scrollY > 3000 ? Math.max(0, 1 - (scrollY - 3000) / 500) : 1
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/background_pic.jpg)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-gray-900/80 to-black/90"></div>
        <div className="absolute inset-0 gradient-dust opacity-40"></div>
        <div className="absolute inset-0 bg-noise opacity-5"></div>

        {/* Black overlay that fades in on scroll */}
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: Math.min(1, scrollY / 700) }}
        />
      </div>

      {/* Hero Content */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center z-10">
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
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
        </div>
      </section>

      {/* About Section - Scrolls over background */}
      <section
        ref={aboutRef}
        data-section="about"
        className="relative py-32 px-6 z-20"
      >
        <div
          className={`relative z-10 container mx-auto max-w-4xl text-center transition-all duration-1000 ${
            visibleSections.has('about')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.15em] text-white mb-8" style={{ fontFamily: 'var(--font-bebas)' }}>
            WE CREATE<br />
            IMMERSIVE HISTORICAL<br />
            EXPERIENCES
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light max-w-3xl mx-auto">
            Saltbox Interactive is a team of historians, developers, and artists dedicated to preserving the past through interactive digital experiences. We transform historical locations into explorable virtual environments where history comes alive.
          </p>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 px-6 relative bg-black z-20">
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
      <section className="relative h-[150vh] bg-black z-10 overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            transform: `translateY(${scrollY * -0.2}px)`,
            opacity: scrollY < 1800 ? 1 : Math.max(0, 1 - (scrollY - 1800) / 600)
          }}
        >
          <img
            src="/images/dhanis1.jpg"
            alt="Discover Old D'Hanis Background"
            className="w-full h-full object-cover"
          />
          {/* Vignette overlay - Very dramatic fade */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at center, transparent 0%, rgba(0,0,0,0.2) 25%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,0.9) 75%, rgba(0,0,0,0.98) 85%, black 90%)'
            }}
          ></div>
        </div>
      </section>

      {/* Featured Project Content - Vertical Image and Text */}
      <section
        id="intro"
        ref={introRef}
        data-section="intro"
        className="relative -mt-[70vh] z-20 pb-96"
      >

        <div
          className={`relative z-10 transition-all duration-1000 ${
            visibleSections.has('intro')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-20'
          }`}
        >
          {/* Centered Content Container */}
          <div className="relative w-full max-w-[1800px] mx-auto px-6">
            <div className="flex items-start justify-between gap-24">
              {/* Foreground Vertical Image - Left Side */}
              <div className="flex-shrink-0 w-[40vw] max-w-[550px] ml-48">
                <ParallaxImage
                  src="/images/dod-cover.jpg"
                  alt="Discover Old D'Hanis"
                  className="w-full aspect-[2/3]"
                  intensity={1}
                  direction="vertical"
                />
              </div>

              {/* Content - Right Side */}
              <div className="flex-shrink-0 max-w-[450px] pt-48 ml-auto mr-32">
            <div className="mb-12">
              <p className="text-accent/70 text-xs tracking-[0.4em] uppercase mb-6">Now Available</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-[0.15em] text-foreground mb-8" style={{ fontFamily: 'var(--font-bebas)' }}>
                DISCOVER OLD D'HANIS
              </h2>
            </div>

            <div className="mb-12">
              <p className="text-gray-300 text-xl leading-relaxed font-light">
                Step back in time to 1870s Texas and experience the authentic daily life of a frontier town. Explore historically accurate buildings, interact with period-appropriate objects, and discover the stories of the people who built this community.
              </p>
            </div>

            <div className="inline-block">
              <Link
                href="/projects/discover-old-dhanis"
                className="flex items-center gap-2 group/title"
              >
                <span className="text-accent transition-all duration-300 group-hover/title:-translate-x-1 text-lg">
                  [
                </span>
                <span className="text-lg font-light tracking-[0.15em] text-gray-400 group-hover/title:text-accent transition-colors duration-300 uppercase" style={{ fontFamily: 'var(--font-bebas)' }}>
                  Learn More
                </span>
                <span className="text-accent transition-all duration-300 group-hover/title:translate-x-1 text-lg">
                  ]
                </span>
              </Link>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End section that covers the fixed background and allows footer to show */}
      <section className="relative bg-black" style={{ zIndex: 100, minHeight: '150vh' }}>
        <div className="container mx-auto px-6 py-32">
          {/* Empty space to allow footer to reveal */}
        </div>
      </section>
    </>
  );
}
