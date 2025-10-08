"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import ParallaxImage from "@/components/ParallaxImage";

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollSequenceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Handle scroll-triggered image sequence
      if (scrollSequenceRef.current) {
        const rect = scrollSequenceRef.current.getBoundingClientRect();
        const scrollProgress = -rect.top / (rect.height - window.innerHeight);

        if (scrollProgress >= 0 && scrollProgress <= 1) {
          // Map scroll progress to image index (0-3 for 4 images)
          const imageIndex = Math.min(3, Math.floor(scrollProgress * 4));
          setCurrentImageIndex(imageIndex);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero
        title="About Us"
        subtitle="Learn about who we are"
        backgroundImage="/images/background_pic.jpg"
        pageName="About"
      />

      {/* Intro Text Section */}
      <section
        ref={(el) => { sectionRefs.current['intro'] = el; }}
        data-section="intro"
        className="relative py-32 bg-black"
      >
        <div className={`container mx-auto px-6 md:px-12 max-w-6xl transition-all duration-1000 ${
          visibleSections.has('intro') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <p className="text-2xl md:text-3xl text-white leading-[1.4] font-light mb-12" style={{ fontFamily: 'var(--font-work-sans)' }}>
            <span className="bg-white text-black px-1">Saltbox Interactive</span> was founded on the belief that history should be experienced, not just read about.
          </p>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light max-w-4xl" style={{ fontFamily: 'var(--font-work-sans)' }}>
            Our journey began with a simple question: What if we could use modern technology to step back in time? Today, we transform historical locations into explorable virtual environments where history comes alive.
          </p>
        </div>
      </section>

      {/* Full-Width Image Gallery Section */}
      <section
        ref={(el) => { sectionRefs.current['gallery1'] = el; }}
        data-section="gallery1"
        className="relative bg-black"
      >
        <div className={`transition-all duration-1000 ${
          visibleSections.has('gallery1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          {/* Large Featured Image */}
          <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
            <img
              src="/images/dhanis1.jpg"
              alt="Historical Reconstruction"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlapping Images Layout */}
          <div className="container mx-auto px-6 md:px-12 -mt-32 relative z-10">
            <div className="grid grid-cols-2 gap-6 md:gap-8 max-w-5xl ml-auto">
              <div className="relative h-[40vh] md:h-[50vh]">
                <ParallaxImage
                  src="/images/dhanis2.jpg"
                  alt="Team at work"
                  className="w-full h-full"
                  intensity={1}
                  direction="vertical"
                />
              </div>
              <div className="relative h-[40vh] md:h-[50vh] mt-16">
                <ParallaxImage
                  src="/images/dhanis3.jpg"
                  alt="Historical detail"
                  className="w-full h-full"
                  intensity={1}
                  direction="vertical"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Philosophy Section */}
      <section
        ref={(el) => { sectionRefs.current['team'] = el; }}
        data-section="team"
        className="relative py-32 md:py-48 bg-black"
      >
        <div className={`container mx-auto px-6 md:px-12 max-w-6xl transition-all duration-1000 ${
          visibleSections.has('team') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
            <div className="md:col-span-2">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.15em] text-white mb-8 uppercase" style={{ fontFamily: 'var(--font-bebas)' }}>
                THE TEAM
              </h2>
              <div className="h-1 w-20 bg-accent"></div>
            </div>
            <div className="md:col-span-3 space-y-6">
              <p className="text-2xl md:text-3xl text-white leading-[1.4] font-light" style={{ fontFamily: 'var(--font-work-sans)' }}>
                We're a team of historians, developers, and artists united by our passion for preserving the past.
              </p>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed" style={{ fontFamily: 'var(--font-work-sans)' }}>
                Each project is a collaborative effort combining historical research, cutting-edge technology, and artistic vision to create authentic experiences that transport users to pivotal moments in history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll-Triggered Image Sequence */}
      <section
        ref={scrollSequenceRef}
        className="relative bg-black"
        style={{ height: '400vh' }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {[
            '/images/dhanis1.jpg',
            '/images/dhanis2.jpg',
            '/images/dhanis3.jpg',
            '/images/dod-cover.jpg'
          ].map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Team image ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              style={{
                opacity: currentImageIndex === index ? 1 : 0,
                zIndex: currentImageIndex === index ? 1 : 0
              }}
            />
          ))}

          {/* Optional: Progress indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full transition-colors duration-300"
                style={{
                  backgroundColor: currentImageIndex === index ? '#C9A063' : 'rgba(255,255,255,0.3)'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Full-Width Mission Image */}
      <section
        ref={(el) => { sectionRefs.current['mission-image'] = el; }}
        data-section="mission-image"
        className="relative bg-black"
      >
        <div className={`transition-all duration-1000 ${
          visibleSections.has('mission-image') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
            <img
              src="/images/dod-cover.jpg"
              alt="Our Work"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section
        ref={(el) => { sectionRefs.current['mission'] = el; }}
        data-section="mission"
        className="relative py-32 md:py-48 bg-black"
      >
        <div className={`container mx-auto px-6 md:px-12 max-w-6xl transition-all duration-1000 ${
          visibleSections.has('mission') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.3] mb-12" style={{ fontFamily: 'var(--font-work-sans)' }}>
              From the dusty streets of frontier towns to the steel rails that connected a nation
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light" style={{ fontFamily: 'var(--font-work-sans)' }}>
              We're committed to capturing every detail, every story, and every lesson from our collective past. Through meticulous research and innovative technology, we preserve history for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* View Projects CTA */}
      <section className="relative py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <Link
            href="/projects"
            className="group relative inline-flex items-center justify-center px-12 py-4 overflow-hidden transition-all duration-300"
          >
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
              View Our Projects
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
