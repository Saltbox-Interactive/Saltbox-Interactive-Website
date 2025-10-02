"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(/images/background_pic.jpg)`,
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />

        {/* Atmospheric background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-gray-900/80 to-black/90"></div>
        <div className="absolute inset-0 gradient-dust opacity-40"></div>

        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-noise opacity-5"></div>

        {/* Hero Text */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="font-bebas text-7xl md:text-8xl lg:text-9xl tracking-wider text-white/90 mb-2" style={{ fontFamily: 'var(--font-bebas)' }}>
              Our Mission
            </h1>
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => {
            document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer hover:text-accent transition-colors duration-300"
          aria-label="Scroll down"
        >
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-accent/60 hover:text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </button>
      </section>

      {/* Our Story Section with Background Image */}
      <section id="story" className="relative min-h-screen flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/dhanis1.jpg"
            alt="D'Hanis Historic Street"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/60"></div>
        </div>

        <div className="relative z-10 w-full py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-[0.15em] text-foreground mb-20 uppercase" style={{ fontFamily: 'var(--font-bebas)' }}>
              OUR STORY
            </h2>
            <div className="max-w-3xl space-y-8">
              <p className="text-3xl md:text-4xl text-white leading-[1.4] font-light">
                Saltbox Interactive was founded on the belief that history should be experienced, not just read about.
              </p>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Our journey began with a simple question: What if we could use modern technology to step back in time?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with Background Image */}
      <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/dhanis2.jpg"
            alt="Historic D'Hanis"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/60"></div>
        </div>

        <div className="relative z-10 w-full py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-[0.15em] text-foreground mb-20 uppercase" style={{ fontFamily: 'var(--font-bebas)' }}>
              THE TEAM
            </h2>
            <div className="max-w-3xl space-y-8">
              <p className="text-3xl md:text-4xl text-white leading-[1.4] font-light">
                We're a team of historians, developers, and artists united by our passion for preserving the past.
              </p>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                We specialize in creating historically accurate digital experiences that transport users to pivotal moments in history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section with Background Image */}
      <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/dhanis3.jpg"
            alt="Historic D'Hanis Building"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/60"></div>
        </div>

        <div className="relative z-10 w-full py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-[0.15em] text-foreground mb-20 uppercase" style={{ fontFamily: 'var(--font-bebas)' }}>
              OUR MISSION
            </h2>
            <div className="max-w-3xl space-y-8">
              <p className="text-3xl md:text-4xl text-white leading-[1.4] font-light">
                From the dusty streets of frontier towns to the steel rails that connected a nation.
              </p>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                We're committed to capturing every detail, every story, and every lesson from our collective past.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
