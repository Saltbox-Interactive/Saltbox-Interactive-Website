"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  id,
  threshold = 0.2,
  rootMargin = "0px 0px -100px 0px",
  delay = 0,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // If user prefers reduced motion, show immediately
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observerOptions = {
      threshold,
      rootMargin,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      data-section={id}
      className={`${prefersReducedMotion ? '' : 'transition-all duration-1000'} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      } ${className}`}
      style={{
        transitionDelay: prefersReducedMotion ? '0ms' : `${delay}ms`,
      }}
    >
      {children}
    </section>
  );
}
