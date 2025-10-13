"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import ParallaxImage from "@/components/ParallaxImage";
import BracketLink from "@/components/ui/BracketLink";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Typography from "@/components/ui/Typography";

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
      <Hero
        title="About Us"
        subtitle="Learn about who we are"
        backgroundImage="/images/background_pic.jpg"
        pageName="About"
      />

      {/* Intro Text Section */}
      <AnimatedSection id="intro" className="relative py-32 bg-black">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <p className="text-2xl md:text-3xl text-white leading-[1.4] font-light mb-12" style={{ fontFamily: 'var(--font-work-sans)' }}>
            <span className="bg-white text-black px-1">Saltbox Interactive</span> was founded on the belief that history should be experienced, not just read about.
          </p>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light max-w-4xl" style={{ fontFamily: 'var(--font-work-sans)' }}>
            Our journey began with a simple question: What if we could use modern technology to step back in time? Today, we transform historical locations into explorable virtual environments where history comes alive.
          </p>
        </div>
      </AnimatedSection>

      {/* Full-Width Image Gallery Section */}
      <AnimatedSection id="gallery1" className="relative bg-black">
        <div>
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
      </AnimatedSection>

      {/* Team Philosophy Section */}
      <AnimatedSection id="team" className="relative py-32 md:py-48 bg-black">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
            <div className="md:col-span-2">
              <Typography.Heading size="2xl" className="mb-8">
                THE TEAM
              </Typography.Heading>
              <div className="h-1 w-20 bg-accent"></div>
            </div>
            <div className="md:col-span-3 space-y-6">
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed" style={{ fontFamily: 'var(--font-work-sans)' }}>
                Each project is a collaborative effort combining historical research, cutting-edge technology, and artistic vision to create authentic experiences that transport users to pivotal moments in history.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Full-Width Mission Image */}
      <AnimatedSection id="mission-image" className="relative bg-black">
        <div>
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
      </AnimatedSection>

      {/* Mission Statement */}
      <AnimatedSection id="mission" className="relative py-32 md:py-48 bg-black">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
            <Typography.Heading size="xl" className="mb-12 leading-[1.3] tracking-[0.1em]">
              Experience history like never before
            </Typography.Heading>
            <Typography.Body size="lg" className="text-gray-400">
              We're committed to capturing every detail, every story, and every lesson from our collective past. Through meticulous research and innovative technology, we preserve history for future generations.
            </Typography.Body>
          </div>
        </div>
      </AnimatedSection>

      {/* View Projects CTA */}
      <section className="relative py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <BracketLink href="/projects" className="justify-center">View Our Projects</BracketLink>
        </div>
      </section>
    </>
  );
}
