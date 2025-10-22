"use client";

import Image from "next/image";
import Typography from "@/components/ui/Typography";
import BracketButton from "@/components/ui/BracketButton";
import EmailSubscribe from "@/components/sections/EmailSubscribe";
import { ArticleSchema } from "@/components/schemas";
import { BlogPost } from "@/lib/data/blog";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function BlogPostContent({ post }: { post: BlogPost }) {
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

      {/* Title Above Image */}
      <div className="relative bg-black">
        <div className="container mx-auto px-6 pt-48 pb-12 max-w-5xl">
          <Typography.Heading size="xl">
            {post.title}
          </Typography.Heading>
        </div>
      </div>

      {/* Hero Image */}
      <section className="relative bg-black">
        <div className="relative w-full h-[85vh] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="relative bg-black">
        <div className="container mx-auto px-6 pt-6 max-w-5xl">
          <Breadcrumbs items={[
            { label: "News", href: "/news" },
            { label: post.title }
          ]} />
        </div>
      </div>

      {/* Article Content */}
      <section className="relative py-12 bg-black">
        <div className="container mx-auto px-6 max-w-3xl">
          {/* Title and Meta */}
          <div className="mb-12">
            <Typography.Heading size="xl" className="mb-6">
              {post.title}
            </Typography.Heading>

            {/* Date & Tags */}
            <div className="flex items-center gap-3 text-sm">
              <time dateTime={post.date} className="text-gray-500">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              {post.project && (
                <>
                  <span className="text-gray-700">|</span>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider">
                    <span className="text-gray-400">{post.project}</span>
                    <span className="text-gray-700">•</span>
                    <span className="text-gray-400">{post.category}</span>
                  </div>
                </>
              )}
              {!post.project && (
                <>
                  <span className="text-gray-700">|</span>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400">{post.category}</span>
                </>
              )}
            </div>
          </div>

          {/* Article Body */}
          <article className="prose prose-invert prose-lg max-w-none">
            {post.content.split("\n\n").map((paragraph, index) => {
              // Handle headings
              if (paragraph.startsWith("## ")) {
                return (
                  <h2
                    key={index}
                    className="text-3xl font-light tracking-[0.15em] text-white uppercase mt-12 mb-6 first:mt-0"
                    style={{ fontFamily: "var(--font-bebas)" }}
                  >
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }

              // Handle links
              if (paragraph.startsWith("[") && paragraph.includes("](")) {
                const linkMatch = paragraph.match(/\[([^\]]+)\]\(([^)]+)\)/);
                if (linkMatch) {
                  return (
                    <div key={index} className="my-8">
                      <BracketButton href={linkMatch[2]}>{linkMatch[1]}</BracketButton>
                    </div>
                  );
                }
              }

              // Handle lists
              if (paragraph.startsWith("- ")) {
                const items = paragraph.split("\n");
                return (
                  <ul key={index} className="space-y-3 my-6 list-disc pl-6">
                    {items.map((item, i) => {
                      const cleanedItem = item.replace("- ", "");
                      const parts = cleanedItem.split("**");

                      return (
                        <li
                          key={i}
                          className="text-lg text-gray-300 leading-relaxed"
                          style={{ fontFamily: "var(--font-work-sans)" }}
                        >
                          {parts.map((part, idx) => {
                            // Odd indices are bold text
                            if (idx % 2 === 1) {
                              return <strong key={idx} className="text-white">{part}</strong>;
                            }
                            return part;
                          })}
                        </li>
                      );
                    })}
                  </ul>
                );
              }

              // Regular paragraphs
              return (
                <p
                  key={index}
                  className="text-lg text-gray-300 leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-work-sans)" }}
                >
                  {paragraph}
                </p>
              );
            })}
          </article>

          {/* Back to News */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <BracketButton href="/news">Back to All News</BracketButton>
          </div>
        </div>
      </section>

      {/* Email Subscribe Section */}
      <div className="relative bg-black">
        <EmailSubscribe />
      </div>
    </>
  );
}
