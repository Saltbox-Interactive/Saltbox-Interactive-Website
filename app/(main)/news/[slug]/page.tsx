import { notFound } from "next/navigation";
import { getAllNewsPosts, getNewsPostBySlug } from "@/lib/sanity/queries";
import NewsPostContent from "./NewsPostContent";
import type { Metadata } from "next";
import { urlForImage } from "@/lib/sanity/image";

export async function generateStaticParams() {
  const posts = await getAllNewsPosts();
  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getNewsPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const imageUrl = post.coverImage ? urlForImage(post.coverImage).url() : undefined;

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: `${post.title} | Saltbox Interactive News`,
      description: post.excerpt,
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Saltbox Interactive News`,
      description: post.excerpt,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function NewsPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getNewsPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <NewsPostContent post={post} />;
}
