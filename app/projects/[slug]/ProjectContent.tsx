"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/data/projects";
import ParallaxImage from "@/components/ParallaxImage";
import { VideoGameSchema, BreadcrumbSchema } from "@/components/StructuredData";

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
  const [playNowOpacity, setPlayNowOpacity] = useState(1);
  const mouseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Track element positions for parallax
  const [imageOffsets, setImageOffsets] = useState<{ [key: string]: number }>({});
  const imageRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setShowArrows(false);
      }, 1500);

      // Calculate position based on distance to footer
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY + windowHeight;
      const distanceToBottom = documentHeight - scrollPosition;

      // Start sliding down when within 600px of bottom (well before footer becomes visible)
      const slideDistance = 600;
      const slideAmount = Math.min(1, Math.max(0, 1 - (distanceToBottom / slideDistance)));
      setPlayNowOpacity(slideAmount);

      // Calculate parallax offsets for tracked images
      const newOffsets: { [key: string]: number } = {};
      Object.keys(imageRefs.current).forEach((key) => {
        const ref = imageRefs.current[key];
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementTop = rect.top;
          const elementBottom = rect.bottom;

          // Only apply parallax when element is visible in viewport
          if (elementBottom > 0 && elementTop < windowHeight) {
            // Calculate how far through the viewport the element is (0 to 1)
            const viewportProgress = (windowHeight - elementTop) / (windowHeight + rect.height);
            // Convert to offset range centered at 0
            const normalizedProgress = (viewportProgress - 0.5) * 2;
            newOffsets[key] = normalizedProgress;
          } else {
            newOffsets[key] = 0;
          }
        }
      });
      setImageOffsets(newOffsets);
    };

    handleScroll(); // Initial calculation
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
      <VideoGameSchema project={project} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://saltboxinteractive.com" },
        { name: "Projects", url: "https://saltboxinteractive.com/projects" },
        { name: project.title, url: `https://saltboxinteractive.com/projects/${project.slug}` }
      ]} />

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
              alt={`Hero background image for ${project.title} - ${project.description}`}
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

        {/* Page indicator - bottom left */}
        <div className="absolute bottom-10 left-10 text-sm text-gray-400 tracking-wider opacity-0 animate-[fadeIn_1s_1s_ease-out_forwards]">
          Saltbox Interactive | <span className="text-accent">{project.title}</span>
        </div>

      </section>

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
          <div className="space-y-6 mb-20">
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

        {/* Horizontal line - full width */}
        <div className="container mx-auto px-6 mb-20">
          <div className="h-0.5 w-full bg-white/30"></div>
        </div>

        <div className="container mx-auto px-6">
          {/* General Info Section */}
          <div className="flex items-start gap-32">
            <h3 className="text-lg font-light tracking-[0.2em] text-accent uppercase whitespace-nowrap" style={{ fontFamily: 'var(--font-bebas)' }}>
              General Info
            </h3>

            <div className="flex flex-col gap-y-6 text-gray-300 flex-1 ml-24">
              <div className="flex gap-x-40">
                {project.releaseDate && (
                  <div>
                    <span className="text-gray-500 text-sm uppercase tracking-wider">Release Date</span>
                    <p className="text-lg">{project.releaseDate}</p>
                  </div>
                )}

                {project.platforms && project.platforms.length > 0 && (
                  <div>
                    <span className="text-gray-500 text-sm uppercase tracking-wider">Platforms</span>
                    <p className="text-lg">{project.platforms.join(', ')}</p>
                  </div>
                )}
              </div>

              {project.genre && (
                <div>
                  <span className="text-gray-500 text-sm uppercase tracking-wider">Genre</span>
                  <p className="text-lg">{project.genre}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Text Ticker - Only for Discover Old D'Hanis */}
      {project.slug === 'discover-old-dhanis' && (
        <section className="relative bg-black py-6 overflow-hidden">
          <div className="inline-flex animate-scroll-seamless" style={{ minWidth: '200%' }}>
            <div className="flex whitespace-nowrap flex-shrink-0">
              {[...Array(25)].map((_, i) => (
                <span key={`a-${i}`} className="text-3xl font-light tracking-[0.15em] text-white uppercase mx-16" style={{ fontFamily: 'var(--font-bebas)' }}>
                  Discover. Learn. Preserve.
                </span>
              ))}
            </div>
            <div className="flex whitespace-nowrap flex-shrink-0" aria-hidden="true">
              {[...Array(25)].map((_, i) => (
                <span key={`b-${i}`} className="text-3xl font-light tracking-[0.15em] text-white uppercase mx-16" style={{ fontFamily: 'var(--font-bebas)' }}>
                  Discover. Learn. Preserve.
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Image + Text Sections with Parallax */}
      <section className="relative bg-black py-12">
        {/* Remastered - Enhanced Image Gallery Layout */}
        {project.slug === 'discover-old-dhanis-remastered' && project.gallery && project.gallery.length > 2 ? (
          <>
            {/* Large Full-Width Hero Image */}
            <div className="py-20">
              <div className="container mx-auto px-6 max-w-7xl">
                <div
                  ref={(el) => { imageRefs.current['hero1'] = el; }}
                  className="relative aspect-[21/9] overflow-hidden"
                  style={{
                    transform: `translateY(${(imageOffsets['hero1'] || 0) * 80}px)`,
                    transition: 'transform 0.1s ease-out'
                  }}
                >
                  <Image
                    src={project.gallery[2]}
                    alt="Stunning photorealistic landscape showcasing Unreal Engine 5's Lumen and Nanite technology"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* First Feature - Image Left, Text Right */}
            <div className="py-20">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <ParallaxImage
                    src={project.gallery[3]}
                    alt={`${project.features[0]}`}
                    className="aspect-video"
                    intensity={1}
                    direction="vertical"
                  />
                  <div
                    style={{
                      transform: `translateY(${scrollY * -0.03}px)`,
                      transition: 'transform 0.1s ease-out'
                    }}
                  >
                    <h3 className="text-4xl md:text-5xl font-light tracking-wider text-white mb-6" style={{ fontFamily: 'var(--font-bebas)' }}>
                      {project.features[0]}
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {project.longDescription.split('\n\n')[0]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Small Image Grid */}
            <div className="py-20">
              <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {project.gallery.slice(4, 8).map((img, idx) => (
                    <ParallaxImage
                      key={idx}
                      src={img}
                      alt={`Environmental detail showcasing realistic lighting and textures`}
                      className="aspect-square"
                      intensity={0.8}
                      direction="vertical"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Second Feature - Text Left, Image Right */}
            <div className="py-20">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div
                    style={{
                      transform: `translateY(${scrollY * -0.02}px)`,
                      transition: 'transform 0.1s ease-out'
                    }}
                  >
                    <h3 className="text-4xl md:text-5xl font-light tracking-wider text-white mb-6" style={{ fontFamily: 'var(--font-bebas)' }}>
                      {project.features[1]}
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {project.longDescription.split('\n\n')[1] || project.description}
                    </p>
                  </div>
                  <ParallaxImage
                    src={project.gallery[18]}
                    alt={`${project.features[1]}`}
                    className="aspect-video"
                    intensity={1}
                    direction="vertical"
                  />
                </div>
              </div>
            </div>

            {/* Wide Panoramic Image */}
            <div className="py-20">
              <div className="container mx-auto px-6 max-w-7xl">
                <div
                  ref={(el) => { imageRefs.current['hero2'] = el; }}
                  className="relative aspect-[21/9] overflow-hidden"
                  style={{
                    transform: `translateY(${(imageOffsets['hero2'] || 0) * 70}px)`,
                    transition: 'transform 0.1s ease-out'
                  }}
                >
                  <Image
                    src={project.gallery[8]}
                    alt="Expansive panoramic view showcasing dynamic weather and atmospheric effects"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Third Feature - Large Image Left, Small Images + Text Right */}
            <div className="py-20">
              <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div
                    ref={(el) => { imageRefs.current['portrait1'] = el; }}
                    className="relative aspect-[4/5] overflow-hidden"
                    style={{
                      transform: `translateY(${(imageOffsets['portrait1'] || 0) * 60}px)`,
                      transition: 'transform 0.1s ease-out'
                    }}
                  >
                    <Image
                      src={project.gallery[9]}
                      alt="Detailed architectural reconstruction with period-accurate materials"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-6">
                    <div
                      style={{
                        transform: `translateY(${scrollY * -0.025}px)`,
                        transition: 'transform 0.1s ease-out'
                      }}
                    >
                      <h3 className="text-4xl md:text-5xl font-light tracking-wider text-white mb-6" style={{ fontFamily: 'var(--font-bebas)' }}>
                        {project.features[2]}
                      </h3>
                      <p className="text-lg text-gray-300 leading-relaxed mb-8">
                        {project.longDescription.split('\n\n')[2] || project.description}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {project.gallery.slice(10, 12).map((img, idx) => (
                        <ParallaxImage
                          key={idx}
                          src={img}
                          alt="Close-up environmental detail"
                          className="aspect-square"
                          intensity={0.6}
                          direction="vertical"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Image Duo */}
            <div className="py-20">
              <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <ParallaxImage
                    src={project.gallery[12]}
                    alt="Natural landscape with dynamic time-of-day lighting"
                    className="aspect-video"
                    intensity={1}
                    direction="vertical"
                  />
                  <ParallaxImage
                    src={project.gallery[13]}
                    alt="Atmospheric environmental scene"
                    className="aspect-video"
                    intensity={1}
                    direction="vertical"
                  />
                </div>
              </div>
            </div>

            {/* Fourth Feature - Vertical Image Right, Text Left */}
            <div className="py-20">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div
                    style={{
                      transform: `translateY(${scrollY * -0.028}px)`,
                      transition: 'transform 0.1s ease-out'
                    }}
                  >
                    <h3 className="text-4xl md:text-5xl font-light tracking-wider text-white mb-6" style={{ fontFamily: 'var(--font-bebas)' }}>
                      {project.features[3]}
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Explore every corner of the meticulously reconstructed settlement with unprecedented freedom and immersion. Discover hidden details in the limestone architecture, walk through authentic period structures with historically accurate interiors, and experience the sweeping Texas Hill Country landscape rendered in stunning photorealistic detail. Every building, every pathway, and every vista has been crafted to transport you back to the 1840s-1860s, allowing you to truly feel what life was like in this historic Alsatian settlement. From the weathered textures of hand-hewn timbers to the rolling hills stretching to the horizon, experience historical preservation like never before.
                    </p>
                  </div>
                  <div
                    ref={(el) => { imageRefs.current['vertical1'] = el; }}
                    className="relative aspect-[3/4] overflow-hidden"
                    style={{
                      transform: `translateY(${(imageOffsets['vertical1'] || 0) * 50}px)`,
                      transition: 'transform 0.1s ease-out'
                    }}
                  >
                    <Image
                      src={project.gallery[14]}
                      alt={`${project.features[3]}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Large Showcase Grid */}
            <div className="py-20">
              <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="grid grid-rows-2 gap-6">
                    <ParallaxImage
                      src={project.gallery[15]}
                      alt="Richly detailed environment"
                      className="aspect-video"
                      intensity={1}
                      direction="vertical"
                    />
                    <ParallaxImage
                      src={project.gallery[16]}
                      alt="Environmental vignette"
                      className="aspect-video"
                      intensity={0.7}
                      direction="vertical"
                    />
                  </div>
                  <div className="grid grid-rows-2 gap-6">
                    {project.gallery.slice(17, 19).map((img, idx) => (
                      <ParallaxImage
                        key={idx}
                        src={img}
                        alt="Environmental vignette"
                        className="aspect-[16/9]"
                        intensity={0.7}
                        direction="vertical"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Final Wide Hero */}
            <div className="py-20">
              <div className="container mx-auto px-6 max-w-7xl">
                <div
                  ref={(el) => { imageRefs.current['hero3'] = el; }}
                  className="relative aspect-[21/9] overflow-hidden"
                  style={{
                    transform: `translateY(${(imageOffsets['hero3'] || 0) * 60}px)`,
                    transition: 'transform 0.1s ease-out'
                  }}
                >
                  <Image
                    src={project.gallery[18]}
                    alt="Epic vista showcasing the full scope of the remastered experience"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Remaining Images Grid */}
            {project.gallery.length > 19 && (
              <div className="py-20">
                <div className="container mx-auto px-6 max-w-7xl">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {project.gallery.slice(19).map((img, idx) => (
                      <ParallaxImage
                        key={idx}
                        src={img}
                        alt="Additional environmental showcase"
                        className="aspect-square"
                        intensity={0.5}
                        direction="vertical"
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            {/* Default Layout for Other Projects */}
            <div className="py-20 flex items-center">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  {project.gallery && project.gallery[0] && (
                    <ParallaxImage
                      src={project.gallery[0]}
                      alt={`In-game screenshot showcasing the immersive historical environment and exploration mechanics of ${project.title}`}
                      className="aspect-video"
                      intensity={1}
                      direction="vertical"
                    />
                  )}
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

            <div className="py-20 flex items-center">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
                  {project.gallery && project.gallery[1] && (
                    <ParallaxImage
                      src={project.gallery[1]}
                      alt={`Detailed gameplay view highlighting interactive historical elements and authentic period reconstruction in ${project.title}`}
                      className="aspect-video"
                      intensity={1}
                      direction="vertical"
                    />
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </section>

      {/* Soundtrack Section - Only for Discover Old D'Hanis */}
      {project.slug === 'discover-old-dhanis' && (
        <section className="relative py-32 bg-black">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Image - Left Side */}
              <ParallaxImage
                src="/images/dominics.jpeg"
                alt="Album artwork for the Discover Old D'Hanis Official Soundtrack, composed and produced by Joyce Lee"
                className="aspect-square"
                intensity={1}
                direction="vertical"
              />

              {/* Text - Right Side */}
              <div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.15em] text-white mb-6" style={{ fontFamily: 'var(--font-bebas)' }}>
                  THE DISCOVER<br />
                  OLD D'HANIS<br />
                  OFFICIAL SOUNDTRACK
                </h2>

                <p className="text-xl md:text-2xl text-gray-400 font-light mb-8">
                  Music Composed And Produced By Joyce Lee
                </p>

                <div className="flex items-center gap-4">
                  <span className="text-gray-300 text-lg font-light">Listen now on</span>
                  <a
                    href="https://www.youtube.com/playlist?list=YOUR_PLAYLIST_ID"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition-colors duration-300"
                    aria-label="YouTube"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Steam Call to Action Section - Only for Discover Old D'Hanis */}
      {project.slug === 'discover-old-dhanis' && (
        <section className="relative py-32 bg-black">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="relative w-full aspect-[21/9] overflow-hidden">
              {/* Background Image */}
              <Image
                src={project.thumbnail || '/images/dod-cover.jpg'}
                alt="Call-to-action banner featuring Discover Old D'Hanis with Steam platform link for game purchase"
                fill
                className="object-cover opacity-30"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.15em] text-white text-center" style={{ fontFamily: 'var(--font-bebas)' }}>
                  PLAY DISCOVER OLD D'HANIS<br />
                  ON STEAM
                </h2>

                {/* Steam Button */}
                <a
                  href="https://store.steampowered.com/app/3140860/Discover_Old_DHanis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 group"
                >
                  <span className="text-accent transition-all duration-300 group-hover:-translate-x-1 text-xl">
                    [
                  </span>
                  {/* Steam Icon */}
                  <svg className="w-7 h-7 text-gray-400 group-hover:text-accent transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/>
                  </svg>
                  <span className="text-lg font-light tracking-[0.15em] text-gray-400 group-hover:text-accent transition-colors duration-300 uppercase" style={{ fontFamily: 'var(--font-bebas)' }}>
                    Open in Steam
                  </span>
                  <span className="text-accent transition-all duration-300 group-hover:translate-x-1 text-xl">
                    ]
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Screenshots Gallery - Scroll-based Slider */}
      {project.gallery && project.gallery.length > 0 && (
        <section ref={screenshotsRef} className="relative bg-black py-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="relative w-full aspect-video">
                {project.gallery.map((image, idx) => {
                  const isVisible = idx === currentImageIndex;
                  const isNext = idx === currentImageIndex + 1;
                  const isPrev = idx === currentImageIndex - 1;

                  return (
                    <div
                      key={idx}
                      className="absolute inset-0 w-full h-full"
                      style={{
                        opacity: isVisible ? 1 : (isNext || isPrev) ? 0.15 : 0,
                        transform: isNext ? 'translateX(10%)' : isPrev ? 'translateX(-10%)' : 'translateX(0)',
                        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
                        pointerEvents: isVisible ? 'auto' : 'none',
                        zIndex: isVisible ? 10 : 1
                      }}
                    >
                      <Image
                        src={image}
                        alt={`${project.title} gameplay screenshot ${idx + 1} - Interactive historical exploration and authentic period environment`}
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

      {/* Credits and Back to Projects Section */}
      <section className="relative py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* View Credits Button - Only for Discover Old D'Hanis */}
            {project.slug === 'discover-old-dhanis' && (
              <Link href="/projects/discover-old-dhanis/credits" className="inline-flex items-center gap-2 group">
                <span className="text-accent transition-all duration-300 group-hover:-translate-x-1 text-lg">
                  [
                </span>
                <span className="text-lg font-light tracking-[0.15em] text-gray-400 group-hover:text-accent transition-colors duration-300 uppercase" style={{ fontFamily: 'var(--font-bebas)' }}>
                  View Project Credits
                </span>
                <span className="text-accent transition-all duration-300 group-hover:translate-x-1 text-lg">
                  ]
                </span>
              </Link>
            )}

            {/* View All Projects Button */}
            <Link href="/projects" className="inline-flex items-center gap-2 group">
              <span className="text-accent transition-all duration-300 group-hover:-translate-x-1 text-lg">
                [
              </span>
              <span className="text-lg font-light tracking-[0.15em] text-gray-400 group-hover:text-accent transition-colors duration-300 uppercase" style={{ fontFamily: 'var(--font-bebas)' }}>
                View All Projects
              </span>
              <span className="text-accent transition-all duration-300 group-hover:translate-x-1 text-lg">
                ]
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
