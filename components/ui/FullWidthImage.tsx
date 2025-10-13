"use client";

import Image from "next/image";

interface FullWidthImageProps {
  src: string;
  alt: string;
  height?: string;
  scrollY?: number;
  parallaxSpeed?: number;
  vignette?: boolean;
  fadeStart?: number;
  fadeDistance?: number;
  priority?: boolean;
}

export default function FullWidthImage({
  src,
  alt,
  height = "150vh",
  scrollY = 0,
  parallaxSpeed = -0.2,
  vignette = true,
  fadeStart,
  fadeDistance = 600,
  priority = false,
}: FullWidthImageProps) {
  // Calculate opacity if fade parameters are provided
  const opacity = fadeStart
    ? scrollY < fadeStart
      ? 1
      : Math.max(0, 1 - (scrollY - fadeStart) / fadeDistance)
    : 1;

  return (
    <section
      className="relative bg-black z-10 overflow-hidden"
      style={{ height }}
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${scrollY * parallaxSpeed}px)`,
          opacity,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          priority={priority}
        />
        {vignette && (
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at center, transparent 0%, rgba(0,0,0,0.2) 25%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,0.9) 75%, rgba(0,0,0,0.98) 85%, black 90%)",
            }}
          ></div>
        )}
      </div>
    </section>
  );
}
