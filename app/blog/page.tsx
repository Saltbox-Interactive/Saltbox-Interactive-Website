"use client";

import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/sections/Hero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";
import Typography from "@/components/ui/Typography";
import { blogPosts, getAllCategories } from "@/lib/data/blog";
import { useState } from "react";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", ...getAllCategories()];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <>
      <Hero
        title="News & Updates"
        subtitle="Latest news from Saltbox Interactive"
        backgroundImage="/images/temp/dod-temp-12.jpg"
        pageName="Blog"
      />

      <AnimatedSection className="relative py-12 sm:py-16 md:py-20 bg-black">
        <Container size="xl">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`group relative px-6 py-3 transition-all duration-300 ${
                  selectedCategory === category ? "text-accent" : "text-gray-400"
                }`}
              >
                <div
                  className={`absolute inset-0 border transition-opacity duration-300 ${
                    selectedCategory === category
                      ? "border-accent opacity-100"
                      : "border-gray-500 group-hover:opacity-0"
                  }`}
                ></div>
                {selectedCategory !== category && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-accent"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-accent"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-accent"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-accent"></div>
                  </div>
                )}
                <span
                  className={`relative text-sm tracking-wider uppercase transition-colors duration-300 ${
                    selectedCategory === category
                      ? "text-accent"
                      : "group-hover:text-accent"
                  }`}
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  {category}
                </span>
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative block"
              >
                <article className="relative h-full flex flex-col border border-white/10 overflow-hidden transition-all duration-300 hover:border-accent/50">
                  {/* Cover Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className="px-3 py-1 text-xs tracking-wider uppercase border border-accent/50 text-accent"
                        style={{
                          fontFamily: "var(--font-bebas)",
                          backgroundColor: "rgba(0, 0, 0, 0.8)",
                        }}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col p-6 bg-black">
                    <Typography.Heading size="sm" className="mb-3 group-hover:text-accent transition-colors duration-300">
                      {post.title}
                    </Typography.Heading>

                    <Typography.Body className="mb-4 text-gray-400 flex-1">
                      {post.excerpt}
                    </Typography.Body>

                    <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-white/10">
                      <span>{post.author}</span>
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <Typography.Heading size="base" className="text-gray-500 mb-4">
                No posts found
              </Typography.Heading>
              <Typography.Body className="text-gray-600">
                Check back later for updates in this category.
              </Typography.Body>
            </div>
          )}
        </Container>
      </AnimatedSection>
    </>
  );
}
