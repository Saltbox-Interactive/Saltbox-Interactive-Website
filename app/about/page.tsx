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

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
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
            <Image
              src="/images/dhanis1.jpg"
              alt="Historic limestone building with arched doorway in Old D'Hanis, showcasing 19th-century Alsatian architecture"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Overlapping Images Layout */}
          <div className="container mx-auto px-6 md:px-12 -mt-32 relative z-10">
            <div className="grid grid-cols-2 gap-6 md:gap-8 max-w-5xl ml-auto">
              <div className="relative h-[40vh] md:h-[50vh]">
                <ParallaxImage
                  src="/images/dhanis2.jpg"
                  alt="Detailed view of weathered stone masonry and traditional construction techniques in Old D'Hanis historic site"
                  className="w-full h-full"
                  intensity={1}
                  direction="vertical"
                />
              </div>
              <div className="relative h-[40vh] md:h-[50vh] mt-16">
                <ParallaxImage
                  src="/images/dhanis3.jpg"
                  alt="Close-up of historic architectural elements and textures from the Old D'Hanis settlement"
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
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed" style={{ fontFamily: 'var(--font-work-sans)' }}>
                Each project is a collaborative effort combining historical research, cutting-edge technology, and artistic vision to create authentic experiences that transport users to pivotal moments in history.
              </p>
            </div>
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
            <Image
              src="/images/dod-cover.jpg"
              alt="Atmospheric view of historic Old D'Hanis landscape, featuring preserved ruins and vegetation of the 19th-century Texas settlement"
              fill
              className="object-cover"
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
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.1em] text-white leading-[1.3] mb-12 uppercase" style={{ fontFamily: 'var(--font-bebas)' }}>
              Experience history like never before
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              We're committed to capturing every detail, every story, and every lesson from our collective past. Through meticulous research and innovative technology, we preserve history for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* View Projects CTA */}
      <section className="relative py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <Link href="/projects" className="flex items-center justify-center gap-2 group">
            <span className="text-accent transition-all duration-300 group-hover:-translate-x-1 text-lg">
              [
            </span>
            <span className="text-lg font-light tracking-[0.15em] text-gray-400 group-hover:text-accent transition-colors duration-300 uppercase" style={{ fontFamily: 'var(--font-bebas)' }}>
              View Our Projects
            </span>
            <span className="text-accent transition-all duration-300 group-hover:translate-x-1 text-lg">
              ]
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
