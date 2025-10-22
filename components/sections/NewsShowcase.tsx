"use client";

import { useState, useRef, useEffect } from "react";
import { blogPosts } from "@/lib/data/blog";
import SectionTitle from "@/components/ui/SectionTitle";
import BracketButton from "@/components/ui/BracketButton";
import ArrowButton from "@/components/ui/ArrowButton";
import NewsCard from "@/components/ui/NewsCard";

export default function NewsShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Get latest 6 news posts
  const latestPosts = blogPosts.slice(0, 6);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener('resize', checkScrollButtons);
    return () => window.removeEventListener('resize', checkScrollButtons);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      // Card width (450px) + gap (24px) = 474px per card
      // Scroll 1 card at a time
      const scrollAmount = 474;
      const newScrollLeft = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });

      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <section className="relative py-20 bg-black">
      {/* Horizontal line - almost full width */}
      <div className="px-16 mb-6">
        <div className="h-px w-full bg-white/30"></div>
      </div>

      {/* Header and News Cards Container */}
      <div className="px-16">
        <div className="flex items-start gap-12">
          {/* Section Title */}
          <div className="flex-shrink-0">
            <SectionTitle>Latest News</SectionTitle>
          </div>

          {/* News Cards Container */}
          <div className="flex-1 relative overflow-hidden">
            {/* Scroll Container */}
            <div
              ref={scrollContainerRef}
              onScroll={checkScrollButtons}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollSnapType: 'x mandatory' }}
            >
            {latestPosts.map((post) => (
              <NewsCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                category={post.category}
              />
            ))}
          </div>

          {/* Navigation Controls - Bottom Right */}
          <div className="flex items-center justify-end gap-4 mt-8">
            <BracketButton href="/news">See All</BracketButton>

            <div className="flex gap-2">
              <ArrowButton
                direction="left"
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
              />
              <ArrowButton
                direction="right"
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
              />
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
