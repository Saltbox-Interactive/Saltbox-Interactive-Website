"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/data/projects";

export default function ProjectContent({ project }: { project: Project }) {
  const [scrollY, setScrollY] = useState(0);
  const descriptionRef = useRef<HTMLElement>(null);
  const screenshotsRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [screenshotsVisible, setScreenshotsVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);
  const mouseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setShowArrows(false);
      }, 1500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === descriptionRef.current) {
            setDescriptionVisible(entry.isIntersecting);
          }
          if (entry.target === screenshotsRef.current) {
            setScreenshotsVisible(entry.isIntersecting);
          }
          if (entry.target === featuresRef.current) {
            setFeaturesVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (screenshotsRef.current) observer.observe(screenshotsRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = () => {
      setShowArrows(true);

      if (mouseTimeoutRef.current) {
        clearTimeout(mouseTimeoutRef.current);
      }

      mouseTimeoutRef.current = setTimeout(() => {
        setShowArrows(false);
      }, 20000);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (mouseTimeoutRef.current) {
        clearTimeout(mouseTimeoutRef.current);
      }
    };
  }, []);

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    const totalImages = project.gallery?.length || 0;
    if (currentImageIndex < totalImages - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <>
      {/* Hero Section with Game Logo/Title */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* Background Image with Parallax */}
        {project.thumbnail && (
          <div
            className="absolute inset-0"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`
            }}
          >
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
          </div>
        )}

        {/* Game Title/Logo */}
        <div className="absolute bottom-24 left-0 right-0 z-10 text-center px-6"
          style={{
            transform: `translateY(${scrollY * -0.2}px)`,
            opacity: Math.max(0, 1 - scrollY / 600)
          }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.2em] text-white" style={{ fontFamily: 'var(--font-bebas)' }}>
            {project.title}
          </h1>
        </div>

      </section>

      {/* Play Now Section - Fixed Bottom Right */}
      <div className="fixed bottom-12 right-12 z-50">
        <div className="flex items-center gap-4 px-6 py-4 bg-gray-800/80 backdrop-blur-sm">
          <span className="text-white text-lg font-light tracking-wider uppercase" style={{ fontFamily: 'var(--font-bebas)' }}>
            PLAY NOW:
          </span>
          <a
            href="https://store.steampowered.com/app/3140860/Discover_Old_DHanis/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors duration-300"
            aria-label="Steam"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Description Section */}
      <section
        ref={descriptionRef}
        className="relative py-20 bg-black"
        style={{
          transform: `translateY(${descriptionVisible ? 0 : 60}px)`,
          opacity: descriptionVisible ? 1 : 0,
          transition: 'transform 0.8s ease-out, opacity 0.8s ease-out'
        }}
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-6">
            {project.longDescription.split('\n\n').map((paragraph, index) => (
              <p
                key={index}
                className="text-xl md:text-2xl text-gray-300 leading-relaxed"
                style={{
                  transform: `translateY(${descriptionVisible ? 0 : 40}px)`,
                  opacity: descriptionVisible ? 1 : 0,
                  transition: `transform 0.8s ease-out ${index * 0.1}s, opacity 0.8s ease-out ${index * 0.1}s`
                }}
              >
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Gallery - Scroll-based Slider */}
      {project.gallery && project.gallery.length > 0 && (
        <section ref={screenshotsRef} className="relative bg-black py-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="relative w-full aspect-video">
                {project.gallery.map((image, idx) => {
                  const isVisible = idx === currentImageIndex;

                  return (
                    <div
                      key={idx}
                      className="absolute inset-0 w-full h-full"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transition: 'opacity 0.3s ease-out',
                        pointerEvents: isVisible ? 'auto' : 'none'
                      }}
                    >
                      <Image
                        src={image}
                        alt={`${project.title} Screenshot ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  );
                })}
              </div>

              {/* Navigation Arrows and Dot Indicators */}
              <div className="flex items-center justify-center gap-6 mt-8">
                {/* Previous Arrow */}
                <button
                  onClick={handlePrevImage}
                  disabled={currentImageIndex === 0}
                  className="group relative w-8 h-8 flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
                  style={{
                    opacity: showArrows ? 1 : 0,
                    pointerEvents: showArrows ? 'auto' : 'none'
                  }}
                  aria-label="Previous Image"
                >
                  {/* Full border (default state) */}
                  <div className="absolute inset-0 border border-gray-500 group-hover:group-enabled:opacity-0 group-disabled:border-gray-800 transition-opacity duration-300"></div>

                  {/* Corner borders (hover state) */}
                  <div className="absolute inset-0 opacity-0 group-hover:group-enabled:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-accent"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-accent"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-accent"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-accent"></div>
                  </div>

                  {/* Arrow icon */}
                  <svg className="w-5 h-5 text-gray-400 group-hover:group-enabled:text-accent group-disabled:text-gray-700 transition-colors duration-300 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                  </svg>
                </button>

                {/* Dot Indicators - Carousel Style */}
                <div className="flex gap-2 items-center justify-center" style={{ width: '52px' }}>
                  {(() => {
                    const totalImages = project.gallery?.length || 0;
                    const isAtStart = currentImageIndex === 0;
                    const isAtEnd = currentImageIndex === totalImages - 1;

                    if (isAtStart) {
                      // At start: show 2 dots, orange on left
                      return (
                        <>
                          <div className="w-2 h-2 rounded-full transition-all duration-300" style={{ backgroundColor: '#d4a574' }} />
                          <div className="w-2 h-2 rounded-full transition-all duration-300" style={{ backgroundColor: '#4a4a4a' }} />
                        </>
                      );
                    } else if (isAtEnd) {
                      // At end: show 2 dots, orange on right
                      return (
                        <>
                          <div className="w-2 h-2 rounded-full transition-all duration-300" style={{ backgroundColor: '#4a4a4a' }} />
                          <div className="w-2 h-2 rounded-full transition-all duration-300" style={{ backgroundColor: '#d4a574' }} />
                        </>
                      );
                    } else {
                      // In middle: show 3 dots, orange in center
                      return (
                        <>
                          <div className="w-2 h-2 rounded-full transition-all duration-300" style={{ backgroundColor: '#4a4a4a' }} />
                          <div className="w-2 h-2 rounded-full transition-all duration-300" style={{ backgroundColor: '#d4a574' }} />
                          <div className="w-2 h-2 rounded-full transition-all duration-300" style={{ backgroundColor: '#4a4a4a' }} />
                        </>
                      );
                    }
                  })()}
                </div>

                {/* Next Arrow */}
                <button
                  onClick={handleNextImage}
                  disabled={currentImageIndex === (project.gallery?.length || 0) - 1}
                  className="group relative w-8 h-8 flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
                  style={{
                    opacity: showArrows ? 1 : 0,
                    pointerEvents: showArrows ? 'auto' : 'none'
                  }}
                  aria-label="Next Image"
                >
                  {/* Full border (default state) */}
                  <div className="absolute inset-0 border border-gray-500 group-hover:group-enabled:opacity-0 group-disabled:border-gray-800 transition-opacity duration-300"></div>

                  {/* Corner borders (hover state) */}
                  <div className="absolute inset-0 opacity-0 group-hover:group-enabled:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-accent"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-accent"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-accent"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-accent"></div>
                  </div>

                  {/* Arrow icon */}
                  <svg className="w-5 h-5 text-gray-400 group-hover:group-enabled:text-accent group-disabled:text-gray-700 transition-colors duration-300 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                  </svg>
                </button>
              </div>
          </div>
        </section>
      )}

      {/* Image + Text Sections with Parallax */}
      <section className="relative bg-black py-12">
        {/* First Section - Image Left, Text Right */}
        <div className="py-20 flex items-center">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div
                className="relative aspect-video overflow-hidden"
                style={{
                  transform: `translateY(${scrollY * 0.05}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                {project.gallery && project.gallery[0] && (
                  <Image
                    src={project.gallery[0]}
                    alt={`${project.title} Feature 1`}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              {/* Text */}
              <div
                style={{
                  transform: `translateY(${scrollY * -0.03}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <h3 className="text-4xl md:text-5xl font-light tracking-wider text-white mb-6" style={{ fontFamily: 'var(--font-bebas)' }}>
                  {project.features[0] || 'FEATURE TITLE'}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {project.longDescription.split('\n\n')[0]}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section - Text Left, Image Right */}
        <div className="py-20 flex items-center">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <div
                style={{
                  transform: `translateY(${scrollY * -0.02}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <h3 className="text-4xl md:text-5xl font-light tracking-wider text-white mb-6" style={{ fontFamily: 'var(--font-bebas)' }}>
                  {project.features[1] || 'FEATURE TITLE'}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {project.longDescription.split('\n\n')[1] || project.description}
                </p>
              </div>

              {/* Image */}
              <div
                className="relative aspect-video overflow-hidden"
                style={{
                  transform: `translateY(${scrollY * 0.04}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                {project.gallery && project.gallery[1] && (
                  <Image
                    src={project.gallery[1]}
                    alt={`${project.title} Feature 2`}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Credits and Back to Projects Section */}
      <section className="relative py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* View Credits Button - Only for Discover Old D'Hanis */}
            {project.slug === 'discover-old-dhanis' && (
              <Link
                href="/projects/discover-old-dhanis/credits"
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
                <span className="relative z-10 text-gray-400 group-hover:text-accent transition-colors duration-300 tracking-wider text-sm uppercase font-light">
                  View Project Credits
                </span>
              </Link>
            )}

            {/* View All Projects Button */}
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
              <span className="relative z-10 text-gray-400 group-hover:text-accent transition-colors duration-300 tracking-wider text-sm uppercase font-light">
                View All Projects
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
