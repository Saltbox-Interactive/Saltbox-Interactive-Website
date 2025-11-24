"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ScrollSpeedContext } from "./ScrollSpeedContext";

// Define Lenis type
type Lenis = any;

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Dynamically import Lenis to reduce initial bundle size
    let rafId: number;

    const initLenis = async () => {
      // Detect if device supports touch (mobile/tablet)
      const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

      const Lenis = (await import("lenis")).default;

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical" as const,
        smoothWheel: !isTouchDevice, // Disable smooth scrolling on mobile for better performance
      });

      lenisRef.current = lenis;

      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
    };

    initLenis();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    // Force scroll to top on navigation
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  const [contextValue, setContextValue] = useState({
    lenis: null as Lenis | null,
    setScrollSpeed: (duration: number) => {
      if (lenisRef.current) {
        lenisRef.current.options.duration = duration;
      }
    },
  });

  useEffect(() => {
    if (lenisRef.current) {
      setContextValue({
        lenis: lenisRef.current,
        setScrollSpeed: (duration: number) => {
          if (lenisRef.current) {
            lenisRef.current.options.duration = duration;
          }
        },
      });
    }
  }, []);

  // Remove the old setScrollSpeed useMemo

  return <ScrollSpeedContext.Provider value={contextValue}>{children}</ScrollSpeedContext.Provider>;
}
