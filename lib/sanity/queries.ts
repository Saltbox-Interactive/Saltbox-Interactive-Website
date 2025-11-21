import { groq } from "next-sanity";
import { client } from "./client";

export interface NewsPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  coverImage: any;
  category: "Release" | "Development" | "History" | "Behind the Scenes";
  project?: string;
  content: any[];
  author: string;
  date: string;
  tags?: string[];
  featured?: boolean;
}

// Get all news posts
export async function getAllNewsPosts(): Promise<NewsPost[]> {
  return client.fetch(
    groq`*[_type == "newsPost"] | order(date desc) {
      _id,
      title,
      slug,
      excerpt,
      coverImage,
      category,
      project,
      content,
      author,
      date,
      tags,
      featured
    }`
  );
}

// Get a single news post by slug
export async function getNewsPostBySlug(slug: string): Promise<NewsPost | null> {
  return client.fetch(
    groq`*[_type == "newsPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      coverImage,
      category,
      project,
      content,
      author,
      date,
      tags,
      featured
    }`,
    { slug }
  );
}

// Get featured posts
export async function getFeaturedNewsPosts(): Promise<NewsPost[]> {
  return client.fetch(
    groq`*[_type == "newsPost" && featured == true] | order(date desc) {
      _id,
      title,
      slug,
      excerpt,
      coverImage,
      category,
      project,
      content,
      author,
      date,
      tags,
      featured
    }`
  );
}

// Get posts by category
export async function getNewsPostsByCategory(category: string): Promise<NewsPost[]> {
  return client.fetch(
    groq`*[_type == "newsPost" && category == $category] | order(date desc) {
      _id,
      title,
      slug,
      excerpt,
      coverImage,
      category,
      project,
      content,
      author,
      date,
      tags,
      featured
    }`,
    { category }
  );
}
