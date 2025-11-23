import { MetadataRoute } from "next";
import { projects } from "@/lib/data/projects";
import { getAllNewsPosts } from "@/lib/sanity/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://saltboxinteractive.com";

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
  ];

  // Project pages
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Credits page for Discover Old D'Hanis
  const creditsPage = {
    url: `${baseUrl}/projects/discover-old-dhanis/credits`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  };

  // Fetch news posts from Sanity
  let newsPages: MetadataRoute.Sitemap = [];
  try {
    const newsPosts = await getAllNewsPosts();
    newsPages = newsPosts.map((post) => ({
      url: `${baseUrl}/news/${post.slug.current}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Error fetching news posts for sitemap:", error);
  }

  return [...staticPages, ...projectPages, creditsPage, ...newsPages];
}
