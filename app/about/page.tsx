"use client";

import { useEffect, useRef, useState } from "react";
import Hero from "@/components/sections/Hero";
import Image from "next/image";

const storyPoints = [
  {
    text: "Saltbox Interactive was founded on the belief that history should be experienced, not just read about. Our journey began with a simple question: What if we could use modern technology to step back in time?",
    image: "/images/dhanis1.jpg",
    alt: "Historic D'Hanis"
  },
  {
    text: "Today, we're a team of historians, developers, and artists united by our passion for preserving the past. We specialize in creating historically accurate digital experiences that transport users to pivotal moments in history.",
    image: "/images/dhanis2.jpg",
    alt: "Historic D'Hanis Street"
  },
  {
    text: "From the dusty streets of frontier towns to the steel rails that connected a nation, we're committed to capturing every detail, every story, and every lesson from our collective past.",
    image: "/images/dhanis3.jpg",
    alt: "Historic D'Hanis Building"
  }
];

export default function AboutPage() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set(prev).add(index));
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <>
      <Hero
        title="Our Mission"
        backgroundImage="/images/background_pic.jpg"
      />
      <section className="bg-gradient-to-b from-black via-gray-900/30 to-black px-6 py-40 relative">
        <div className="absolute inset-0 gradient-dust opacity-20"></div>
        <div className="relative z-10">
          <div className="text-center mb-32 max-w-4xl mx-auto">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.15em] text-foreground mb-8" style={{ fontFamily: 'var(--font-bebas)' }}>
              OUR STORY
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              Preserving the past through technology and passion
            </p>
          </div>

          <div className="space-y-48">
            {storyPoints.map((point, index) => {
              const isVisible = visibleItems.has(index);

              return (
                <div
                  key={index}
                  ref={(el) => { itemRefs.current[index] = el; }}
                  className={`transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                >
                  {/* Large Image */}
                  <div className="relative w-full max-w-[1400px] mx-auto mb-16">
                    <div className="relative aspect-[21/9] overflow-hidden">
                      <Image
                        src={point.image}
                        alt={point.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="max-w-[900px] mx-auto px-6 md:px-12">
                    <p className="text-gray-300 text-xl md:text-2xl leading-relaxed font-light">
                      {point.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
