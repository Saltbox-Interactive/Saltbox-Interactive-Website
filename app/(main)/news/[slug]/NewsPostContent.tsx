"use client";

import Image from "next/image";
import Typography from "@/components/ui/Typography";
import BracketButton from "@/components/ui/BracketButton";
import EmailSubscribe from "@/components/sections/EmailSubscribe";
import ShareButtons from "@/components/ui/ShareButtons";
import { ArticleSchema } from "@/components/schemas";
import { NewsPost } from "@/lib/sanity/queries";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/lib/sanity/image";

export default function NewsPostContent({ post }: { post: NewsPost }) {
  const postUrl = typeof window !== 'undefined' ? window.location.href : `https://saltboxinteractive.com/news/${post.slug.current}`;
  const imageUrl = post.coverImage ? urlForImage(post.coverImage).url() : '/images/placeholder.jpg';

  const portableTextComponents = {
    block: {
      h2: ({ children }: any) => (
        <h2
          className="text-3xl font-light tracking-[0.15em] text-white uppercase mt-12 mb-6 first:mt-0"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          {children}
        </h2>
      ),
      normal: ({ children }: any) => (
        <p
          className="text-lg text-gray-300 leading-relaxed mb-6"
          style={{ fontFamily: "var(--font-work-sans)" }}
        >
          {children}
        </p>
      ),
    },
    list: {
      bullet: ({ children }: any) => (
        <ul className="space-y-3 my-6 list-disc pl-6">{children}</ul>
      ),
    },
    listItem: {
      bullet: ({ children }: any) => (
        <li
          className="text-lg text-gray-300 leading-relaxed"
          style={{ fontFamily: "var(--font-work-sans)" }}
        >
          {children}
        </li>
      ),
    },
    marks: {
      strong: ({ children }: any) => (
        <strong className="text-white">{children}</strong>
      ),
      link: ({ value, children }: any) => (
        <BracketButton href={value.href}>{children}</BracketButton>
      ),
    },
  };

  return (
    <>
      <ArticleSchema
        headline={post.title}
        description={post.excerpt}
        image={imageUrl}
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
            src={imageUrl}
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
            <div className="flex items-center justify-between">
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

              {/* Share Buttons */}
              <ShareButtons title={post.title} url={postUrl} />
            </div>
          </div>

          {/* Article Body */}
          <article className="prose prose-invert prose-lg max-w-none">
            <PortableText value={post.content} components={portableTextComponents} />
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
