"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: `url(/images/background_pic.jpg)`,
            transform: `translateY(${scrollY * 0.5}px) scale(1.1)`
          }}
        />

        {/* Atmospheric background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-gray-900/70 to-black"></div>

        {/* Hero Text */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto"
          style={{
            transform: `translateY(${scrollY * -0.3}px)`,
            opacity: Math.max(0, 1 - scrollY / 500)
          }}
        >
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-light tracking-[0.2em] text-white mb-8" style={{ fontFamily: 'var(--font-bebas)' }}>
            ABOUT US
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            Preserving history through immersive digital experiences
          </p>
        </div>
      </section>

      {/* Our Story Section with Background Image */}
      <section
        ref={(el) => { sectionRefs.current['story'] = el; }}
        data-section="story"
        id="story"
        className="relative min-h-screen flex items-center bg-black overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`
          }}
        >
          <Image
            src="/images/dhanis1.jpg"
            alt="D'Hanis Historic Street"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        <div className={`relative z-10 w-full py-32 px-6 md:px-12 transition-all duration-1000 ${
          visibleSections.has('story') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-[0.15em] text-foreground mb-8 uppercase" style={{ fontFamily: 'var(--font-bebas)' }}>
                OUR STORY
              </h2>
              <div className="h-1 w-24 bg-accent mb-12"></div>
            </div>
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl text-white leading-[1.4] font-light">
                Saltbox Interactive was founded on the belief that history should be experienced, not just read about.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Our journey began with a simple question: What if we could use modern technology to step back in time?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with Background Image */}
      <section
        ref={(el) => { sectionRefs.current['team'] = el; }}
        data-section="team"
        className="relative min-h-screen flex items-center bg-black overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`
          }}
        >
          <Image
            src="/images/dhanis2.jpg"
            alt="Historic D'Hanis"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/80 to-transparent"></div>
        </div>

        <div className={`relative z-10 w-full py-32 px-6 md:px-12 transition-all duration-1000 ${
          visibleSections.has('team') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 md:order-2">
              <p className="text-2xl md:text-3xl text-white leading-[1.4] font-light">
                We're a team of historians, developers, and artists united by our passion for preserving the past.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                We specialize in creating historically accurate digital experiences that transport users to pivotal moments in history.
              </p>
            </div>
            <div className="md:order-1">
              <h2 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-[0.15em] text-foreground mb-8 uppercase" style={{ fontFamily: 'var(--font-bebas)' }}>
                THE TEAM
              </h2>
              <div className="h-1 w-24 bg-accent mb-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section with Background Image */}
      <section
        ref={(el) => { sectionRefs.current['mission'] = el; }}
        data-section="mission"
        className="relative min-h-screen flex items-center bg-black overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        >
          <Image
            src="/images/dhanis3.jpg"
            alt="Historic D'Hanis Building"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        <div className={`relative z-10 w-full py-32 px-6 md:px-12 transition-all duration-1000 ${
          visibleSections.has('mission') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-[0.15em] text-foreground mb-8 uppercase" style={{ fontFamily: 'var(--font-bebas)' }}>
                OUR MISSION
              </h2>
              <div className="h-1 w-24 bg-accent mb-12"></div>
            </div>
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl text-white leading-[1.4] font-light">
                From the dusty streets of frontier towns to the steel rails that connected a nation.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                We're committed to capturing every detail, every story, and every lesson from our collective past.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
