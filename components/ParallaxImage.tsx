"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  intensity?: number; // How much the image moves (0-1, default 0.1)
  direction?: "vertical" | "horizontal" | "both"; // Direction of pan
}

export default function ParallaxImage({
  src,
  alt,
  className = "",
  intensity = 0.1,
  direction = "vertical"
}: ParallaxImageProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the element is visible
      // When element enters viewport from bottom: progress goes 0 -> 1
      // When element exits from top: progress goes 1 -> 0
      const elementTop = rect.top;
      const elementBottom = rect.bottom;

      // Calculate progress through viewport (0 at bottom, 1 at top)
      const visibleHeight = Math.min(elementBottom, windowHeight) - Math.max(elementTop, 0);
      const progress = (windowHeight - elementTop) / (windowHeight + rect.height);

      // Only apply parallax when element is in viewport
      if (elementBottom > 0 && elementTop < windowHeight) {
        // Convert progress (0-1) to offset (-1 to 1), centered at 0
        const normalizedProgress = (progress - 0.5) * 2;

        const maxOffset = 10; // Maximum offset in percentage (reduced for subtlety)

        if (direction === "vertical" || direction === "both") {
          setOffset(prev => ({
            ...prev,
            y: normalizedProgress * maxOffset * intensity
          }));
        }

        if (direction === "horizontal" || direction === "both") {
          setOffset(prev => ({
            ...prev,
            x: normalizedProgress * maxOffset * intensity
          }));
        }
      }
    };

    handleScroll(); // Initial calculation
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [intensity, direction]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div
        className="relative w-full h-full"
        style={{
          transform: `translate(${offset.x}%, ${offset.y}%) scale(1.1)`,
          transition: "transform 0.1s ease-out"
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
