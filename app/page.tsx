"use client";

import { useEffect, useRef, useState } from "react";
import Hero from "@/components/sections/Hero";
import Link from "next/link";
import Image from "next/image";
import { useScrollSpeed } from "@/hooks/useScrollSpeed";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import BracketLink from "@/components/ui/BracketLink";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Typography from "@/components/ui/Typography";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Container from "@/components/ui/Container";
import FullWidthImage from "@/components/ui/FullWidthImage";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import { HOME_CONTENT } from "@/lib/data/content";
import { SCROLL } from "@/lib/constants";

export default function Home() {
  const scrollY = useScrollPosition();
  const [virtualScroll, setVirtualScroll] = useState(0);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [introVisible, setIntroVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const scrollLockRef = useRef(false);

  // Use typing effects from content
  const aboutTypedText = useTypingEffect({
    text: HOME_CONTENT.about.typedText,
    enabled: aboutVisible,
  });

  const introTypedText = useTypingEffect({
    text: HOME_CONTENT.intro.typedText,
    enabled: introVisible,
  });

  // Apply very slow scroll speed to hero section for motto animation effect
  useScrollSpeed(heroRef, {
    speed: SCROLL.slowSpeed,
    threshold: 0.5,
    downOnly: true,
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
          if (target === aboutRef.current) {
            setAboutVisible(true);
          }
          if (target === introRef.current) {
            setIntroVisible(true);
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
      // Reset virtual scroll to full threshold (animated out) when we've scrolled past the hero
      if (window.scrollY > 100) {
        setVirtualScroll(SCROLL.heroThreshold);
        scrollLockRef.current = false;
      } else if (window.scrollY === 0) {
        // Reset to 0 when back at top
        setVirtualScroll(0);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // Only lock scroll when we're at the top of the page
      if (window.scrollY === 0) {
        const newVirtualScroll = Math.max(0, Math.min(SCROLL.heroThreshold, virtualScroll + e.deltaY));
        setVirtualScroll(newVirtualScroll);

        // Lock scrolling until threshold is reached
        if (newVirtualScroll < SCROLL.heroThreshold) {
          e.preventDefault();
          scrollLockRef.current = true;
        } else {
          scrollLockRef.current = false;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [virtualScroll]);

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
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-6">
            <div
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-white transition-all duration-300"
              style={{
                fontFamily: 'var(--font-bebas)',
                transform: `translateX(${virtualScroll * -1.5}px)`,
                opacity: Math.max(0, 1 - virtualScroll / SCROLL.heroThreshold)
              }}
            >
              DISCOVER
            </div>
            <div
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-white transition-all duration-300"
              style={{
                fontFamily: 'var(--font-bebas)',
                transform: `translateX(${virtualScroll * 1.5}px)`,
                opacity: Math.max(0, 1 - virtualScroll / SCROLL.heroThreshold)
              }}
            >
              LEARN
            </div>
            <div
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-white transition-all duration-300"
              style={{
                fontFamily: 'var(--font-bebas)',
                transform: `translateX(${virtualScroll * -1.5}px)`,
                opacity: Math.max(0, 1 - virtualScroll / SCROLL.heroThreshold)
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
        className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 z-20"
      >
        <div
          className={`relative z-10 container mx-auto max-w-4xl text-center transition-all duration-1000 ${
            aboutVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-20'
          }`}
        >
          <Typography.Heading size="xl" className="mb-6 sm:mb-8">
            WE CREATE<br />
            IMMERSIVE HISTORICAL<br />
            EXPERIENCES
          </Typography.Heading>

          <Typography.Body size="lg" className="max-w-3xl mx-auto">
            {HOME_CONTENT.about.staticText.split('Saltbox Interactive').map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && <span className="bg-white text-black px-1">Saltbox Interactive</span>}
              </span>
            ))}
            {aboutTypedText}
          </Typography.Body>
        </div>
      </section>

      {/* Quick Links Section */}
      <SectionWrapper className="py-12 sm:py-16 px-4 sm:px-6 z-20">
        <Container size="sm" className="text-center">
          <BracketLink href="/about">Our Mission</BracketLink>
        </Container>
      </SectionWrapper>

      {/* Parallax Background Image Section - Comes First */}
      <FullWidthImage
        src="/images/temp/dod-temp-12.jpg"
        alt="Panoramic view of Old D'Hanis historic site featuring preserved stone structures from the 1847 Alsatian settlement in Texas"
        scrollY={scrollY}
        parallaxSpeed={SCROLL.parallaxSpeed.slow}
        fadeStart={1800}
        priority
        height="150vh"
      />

      {/* Featured Project Content - Discover Old D'Hanis */}
      <section
        id="intro"
        ref={introRef}
        className="relative -mt-[10vh] sm:-mt-[20vh] lg:-mt-[70vh] z-20 pb-12 sm:pb-24 lg:pb-96"
      >
        <div
          className={`relative z-10 transition-all duration-1000 ${
            introVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-20'
          }`}
        >
          <ProjectShowcase
            imageSrc={HOME_CONTENT.projects.discoverOldDhanis.image}
            imageAlt="Discover Old D'Hanis game cover art showing the historic settlement ruins with dramatic sky and authentic 19th-century Texas landscape"
            status={HOME_CONTENT.projects.discoverOldDhanis.status}
            title={HOME_CONTENT.projects.discoverOldDhanis.title}
            description={`${HOME_CONTENT.intro.staticText}${introTypedText}`}
            linkHref={HOME_CONTENT.projects.discoverOldDhanis.link}
            imagePosition="left"
          />
        </div>
      </section>

      {/* Parallax Background Image Section - Before Remastered */}
      <FullWidthImage
        src="/images/temp/dod-temp-2.jpg"
        alt="Stunning photorealistic view of Old D'Hanis recreated in Unreal Engine 5"
        scrollY={Math.max(0, scrollY - 2400)}
        parallaxSpeed={SCROLL.parallaxSpeed.slow}
        fadeStart={1800}
        height="150vh"
      />

      {/* Discover Old D'Hanis Remastered Section */}
      <section className="relative -mt-[10vh] sm:-mt-[20vh] lg:-mt-[70vh] z-20 pb-12 sm:pb-24 lg:pb-96">
        <ProjectShowcase
          imageSrc={HOME_CONTENT.projects.discoverOldDhanisRemastered.image}
          imageAlt="Discover Old D'Hanis Remastered game cover art showing photorealistic recreation with Unreal Engine 5"
          status={HOME_CONTENT.projects.discoverOldDhanisRemastered.status}
          title={HOME_CONTENT.projects.discoverOldDhanisRemastered.title}
          description={HOME_CONTENT.projects.discoverOldDhanisRemastered.description}
          linkHref={HOME_CONTENT.projects.discoverOldDhanisRemastered.link}
          imagePosition="left"
        />
      </section>

      {/* View Our Work Button */}
      <SectionWrapper className="py-12 sm:py-16 px-4 sm:px-6 z-20">
        <Container size="sm" className="text-center">
          <BracketLink href="/projects">View Our Work</BracketLink>
        </Container>
      </SectionWrapper>

      {/* End section that covers the fixed background and allows footer to show */}
      <section className="relative bg-black" style={{ zIndex: 100, minHeight: '150vh' }}>
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-24 md:py-32">
          {/* Empty space to allow footer to reveal */}
        </div>
      </section>
    </>
  );
}
