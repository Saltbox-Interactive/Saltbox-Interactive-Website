import { useEffect, useRef } from "react";
import { useScrollSpeedContext } from "@/components/ScrollSpeedContext";

interface UseScrollSpeedOptions {
  speed?: number; // Duration for Lenis (lower = faster, higher = slower)
  threshold?: number; // Intersection threshold (0-1)
  enabled?: boolean; // Allow disabling the effect
  downOnly?: boolean; // Only apply slow scroll when scrolling down
}

export function useScrollSpeed(
  elementRef: React.RefObject<HTMLElement | null>,
  options: UseScrollSpeedOptions = {}
) {
  const { speed = 0.6, threshold = 0.3, enabled = true, downOnly = false } = options;
  const { lenis, setScrollSpeed } = useScrollSpeedContext();
  const normalSpeed = 1.2; // Default speed
  const isIntersectingRef = useRef(false);
  const checkIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (!enabled || !elementRef.current || !lenis) return;

    const element = elementRef.current;

    // Function to check if element is actually visible in viewport
    const checkVisibility = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;
      lastScrollY.current = currentScrollY;

      // Calculate what percentage of the element is visible
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const visibleWidth = Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);
      const elementHeight = rect.height;
      const elementWidth = rect.width;

      const visibilityRatio = (visibleHeight * visibleWidth) / (elementHeight * elementWidth);
      const isVisible = visibilityRatio >= threshold;

      const wasIntersecting = isIntersectingRef.current;

      // If downOnly is true, only apply slow scroll when scrolling down
      const shouldApplySlow = downOnly ? isScrollingDown : true;

      if (isVisible && !wasIntersecting && shouldApplySlow) {
        // Entering the slow zone
        setScrollSpeed(speed, true);
        isIntersectingRef.current = true;
      } else if (!isVisible && wasIntersecting) {
        // Exiting the slow zone - return to normal speed IMMEDIATELY
        setScrollSpeed(normalSpeed, true);
        isIntersectingRef.current = false;
      } else if (isVisible && wasIntersecting && !shouldApplySlow) {
        // In the zone but scrolling up (when downOnly is true) - use normal speed
        setScrollSpeed(normalSpeed, true);
        isIntersectingRef.current = false;
      }
    };

    // Check visibility on scroll with high frequency for instant response
    const handleScroll = () => {
      checkVisibility();
    };

    // Also use IntersectionObserver as backup
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(() => {
          checkVisibility();
        });
      },
      { threshold: [0, threshold, 1] } // Multiple thresholds for more frequent updates
    );

    observer.observe(element);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Start an interval to continuously check (in case scroll events are missed during fast scrolling)
    checkIntervalRef.current = setInterval(checkVisibility, 16); // Check every 16ms (~60fps) for ultra-responsive updates

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
      }
      // Reset to normal speed when component unmounts
      if (isIntersectingRef.current) {
        setScrollSpeed(normalSpeed, false);
      }
    };
  }, [elementRef, speed, threshold, enabled, lenis, setScrollSpeed]);
}
