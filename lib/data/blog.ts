export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: "Release" | "Development" | "History" | "Behind the Scenes";
  coverImage: string;
  tags: string[];
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "discover-old-dhanis-steam-release",
    title: "Discover Old D'Hanis Now Available on Steam",
    excerpt: "We're thrilled to announce that Discover Old D'Hanis is now live on Steam! Explore the historic Alsatian settlement like never before.",
    content: `We're incredibly excited to announce that Discover Old D'Hanis is now available on Steam! This marks a significant milestone in our mission to preserve history through interactive digital experiences.

## What is Discover Old D'Hanis?

Discover Old D'Hanis is an immersive historical exploration game that brings the 1840s-1860s Alsatian settlement of D'Hanis, Texas to life. Players can freely explore meticulously reconstructed buildings, interact with historical artifacts, and learn about the daily lives of the Alsatian immigrants who settled in the Texas Hill Country.

## Key Features

- **Authentic Reconstruction**: Every building and artifact has been carefully researched and recreated based on historical records
- **Free Exploration**: Walk through the settlement at your own pace, discovering hidden details and stories
- **Educational Content**: Learn about Alsatian culture, pioneer life, and Texas history through interactive exhibits
- **Beautiful Environments**: Experience the Texas Hill Country landscape rendered in stunning detail

## What's Next?

This is just the beginning. We're already working on Discover Old D'Hanis Remastered, a complete overhaul using Unreal Engine 5 that will take the experience to new heights with photorealistic graphics and enhanced interactivity.

Thank you to everyone who has supported us on this journey. We can't wait for you to experience Old D'Hanis!

[Get it on Steam](https://store.steampowered.com/app/3140860/Discover_Old_DHanis/)`,
    author: "Michael Salton",
    date: "2024-01-15",
    category: "Release",
    coverImage: "/images/dod-cover.jpg",
    tags: ["Discover Old D'Hanis", "Steam", "Release", "Historical Preservation"],
    featured: true,
  },
  {
    slug: "remastered-version-announcement",
    title: "Discover Old D'Hanis Remastered - Powered by Unreal Engine 5",
    excerpt: "A glimpse into the future: Discover Old D'Hanis is being completely rebuilt in Unreal Engine 5 with photorealistic graphics.",
    content: `After the successful release of Discover Old D'Hanis, we've been hard at work on something truly special: a complete remaster using Unreal Engine 5.

## Why Remaster?

While we're incredibly proud of the original Discover Old D'Hanis, technology has advanced significantly. Unreal Engine 5's Lumen and Nanite technologies allow us to create photorealistic environments that would have been impossible just a few years ago.

## What's New?

- **Photorealistic Graphics**: Utilizing UE5's Lumen for dynamic global illumination and Nanite for incredible geometric detail
- **Enhanced Interactivity**: More interactive elements and deeper engagement with historical artifacts
- **Expanded Content**: Additional buildings, areas, and historical information
- **Improved Performance**: Better optimization for a wider range of hardware

## Timeline

Discover Old D'Hanis Remastered is scheduled for release in 2026. We're taking our time to ensure every detail is perfect and historically accurate.

Stay tuned for more updates as development progresses!`,
    author: "Michael Salton",
    date: "2024-02-20",
    category: "Development",
    coverImage: "/images/temp/dod-temp-2.jpg",
    tags: ["Discover Old D'Hanis Remastered", "Unreal Engine 5", "Development"],
    featured: true,
  },
  {
    slug: "history-of-old-dhanis",
    title: "The History of Old D'Hanis: An Alsatian Settlement in Texas",
    excerpt: "Learn about the fascinating history of the Alsatian immigrants who founded D'Hanis in the Texas Hill Country.",
    content: `The story of Old D'Hanis is one of courage, determination, and cultural preservation. In the 1840s, a group of Alsatian immigrants left their homeland to build a new life in the rugged Texas Hill Country.

## The Alsatian Immigrants

The Alsatian people came from a region between France and Germany, bringing with them a unique culture, language, and architectural style. Facing economic hardship and political instability in Europe, many families made the difficult decision to emigrate to America.

## Founding of D'Hanis

In 1847, Henri Castro, an empresario, established the settlement of D'Hanis as part of his colonization grant from the Republic of Texas. The town was named after a sponsor of the colony, William D'Hanis.

## Life in the Settlement

The early settlers faced numerous challenges:
- Harsh climate and unfamiliar terrain
- Limited resources and supplies
- Conflicts with Native American tribes
- Disease and isolation

Despite these hardships, the community thrived through cooperation, hard work, and maintaining their cultural traditions.

## Architectural Heritage

The settlers built their homes and structures using local limestone, creating distinctive buildings that reflected their Alsatian heritage while adapting to Texas conditions. Many of these structures still exist today and inspired our digital reconstruction.

## Legacy

While the original settlement eventually declined, the legacy of Old D'Hanis lives on through descendants, preserved structures, and now, through our interactive digital experience. By preserving this history digitally, we ensure that future generations can experience and learn from this important chapter of Texas history.`,
    author: "Michael Salton",
    date: "2024-03-10",
    category: "History",
    coverImage: "/images/temp/dod-temp-12.jpg",
    tags: ["Old D'Hanis", "History", "Alsatian", "Texas History"],
    featured: false,
  },
];

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(category: BlogPost["category"]): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getAllCategories(): BlogPost["category"][] {
  return ["Release", "Development", "History", "Behind the Scenes"];
}
