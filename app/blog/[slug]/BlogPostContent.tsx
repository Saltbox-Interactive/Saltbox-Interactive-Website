"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";
import Typography from "@/components/ui/Typography";
import BracketLink from "@/components/ui/BracketLink";
import { ArticleSchema } from "@/components/schemas";
import { BlogPost } from "@/lib/data/blog";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export default function BlogPostContent({ post }: { post: BlogPost }) {
  const scrollY = useScrollPosition();

  return (
    <>
      <ArticleSchema
        headline={post.title}
        description={post.excerpt}
        image={post.coverImage}
        datePublished={post.date}
        dateModified={post.date}
        author={{ name: post.author }}
        publisher={{
          name: "Saltbox Interactive",
          logo: "https://saltboxinteractive.com/icon.png",
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* Background Image with Parallax */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
        </div>

        {/* Content */}
        <div
          className="relative z-10 text-center px-6 max-w-4xl"
          style={{
            transform: `translateY(${scrollY * -0.2}px)`,
            opacity: Math.max(0, 1 - scrollY / 600),
          }}
        >
          {/* Category Badge */}
          <div className="mb-6">
            <span
              className="inline-block px-4 py-2 text-sm tracking-wider uppercase border border-accent/50 text-accent"
              style={{
                fontFamily: "var(--font-bebas)",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
              }}
            >
              {post.category}
            </span>
          </div>

          <Typography.Heading size="3xl" className="mb-6">
            {post.title}
          </Typography.Heading>

          <div className="flex items-center justify-center gap-6 text-gray-400">
            <span>{post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <AnimatedSection className="relative py-20 bg-black">
        <Container size="md">
          <article className="prose prose-invert prose-lg max-w-none">
            {post.content.split("\n\n").map((paragraph, index) => {
              // Handle headings
              if (paragraph.startsWith("## ")) {
                return (
                  <Typography.Heading
                    key={index}
                    size="lg"
                    className="mt-12 mb-6 first:mt-0"
                  >
                    {paragraph.replace("## ", "")}
                  </Typography.Heading>
                );
              }

              // Handle links
              if (paragraph.startsWith("[") && paragraph.includes("](")) {
                const linkMatch = paragraph.match(/\[([^\]]+)\]\(([^)]+)\)/);
                if (linkMatch) {
                  return (
                    <div key={index} className="my-8">
                      <BracketLink href={linkMatch[2]}>{linkMatch[1]}</BracketLink>
                    </div>
                  );
                }
              }

              // Handle lists
              if (paragraph.startsWith("- ")) {
                const items = paragraph.split("\n");
                return (
                  <ul key={index} className="space-y-2 my-6 text-gray-300">
                    {items.map((item, i) => (
                      <li key={i} className="text-lg">
                        {item.replace("- ", "")}
                      </li>
                    ))}
                  </ul>
                );
              }

              // Regular paragraphs
              return (
                <Typography.Body key={index} className="mb-6 text-gray-300">
                  {paragraph}
                </Typography.Body>
              );
            })}
          </article>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs tracking-wider uppercase border border-white/20 text-gray-400"
                    style={{ fontFamily: "var(--font-bebas)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <BracketLink href="/blog">Back to All Posts</BracketLink>
          </div>
        </Container>
      </AnimatedSection>
    </>
  );
}
