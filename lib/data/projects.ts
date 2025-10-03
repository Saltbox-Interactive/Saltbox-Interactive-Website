export interface Project {
  id: string;
  slug: string;
  title: string;
  era: string;
  description: string;
  longDescription: string;
  status: string;
  color: string;
  features: string[];
  technologies: string[];
  thumbnail?: string;
  gallery?: string[];
  releaseDate?: string;
  platforms?: string[];
  genre?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "discover-old-dhanis",
    title: "Discover Old D'Hanis",
    era: "1840s-1860s",
    description: "An immersive virtual experience recreating the historic Alsatian community of Old D'Hanis, Texas.",
    longDescription: `Step back in time to explore Old D'Hanis, a historic Alsatian settlement in Texas. This virtual experience brings to life the story of European immigrants who established a thriving community in the Texas frontier during the mid-1800s.

    Walk through meticulously recreated buildings, streets, and landmarks based on historical records and archaeological evidence. Learn about the daily lives, struggles, and triumphs of the settlers who made this place their home.

    Experience the rich cultural heritage of the Alsatian immigrants and discover how their traditions shaped this unique Texas community.`,
    status: "Available Now",
    color: "from-amber-900/40 to-stone-900/40",
    thumbnail: "/images/dod-cover.jpg",
    features: [
      "Historically accurate 3D reconstruction",
      "Interactive historical markers",
      "Educational content and narratives",
      "Period-appropriate architecture",
      "Cultural heritage exploration",
      "Historical photo comparisons"
    ],
    technologies: [
      "Unity Engine",
      "3D modeling and texturing",
      "Historical research integration",
      "Interactive storytelling"
    ],
    releaseDate: "May 22, 2025",
    platforms: ["Windows", "Mac"],
    genre: "Historical Exploration",
    gallery: [
      "/images/dod-screenshot-2.png",
      "/images/dod-screenshot-3.png",
      "/images/dod-screenshot-4.png",
      "/images/dod-screenshot-5.png",
      "/images/dod-screenshot-6.png",
      "/images/dod-screenshot-7.png"
    ]
  },
  {
    id: "2",
    slug: "discover-old-dhanis-remastered",
    title: "Discover Old D'Hanis: Remastered",
    era: "1840s-1860s",
    description: "Coming soon...",
    longDescription: "Coming soon...",
    status: "Coming Soon",
    color: "from-stone-800/40 to-amber-950/40",
    thumbnail: "/images/dominics-2.jpg",
    features: [
      "Coming soon..."
    ],
    technologies: [
      "Unreal Engine 5",
      "Photogrammetry scanning",
      "Advanced lighting systems",
      "Virtual reality support"
    ],
    releaseDate: "Coming 2025",
    platforms: ["PC", "Mac", "VR Headsets"],
    genre: "Historical Exploration",
    gallery: [
      "/images/dod-screenshot-2.png",
      "/images/dod-screenshot-3.png",
      "/images/dod-screenshot-4.png",
      "/images/dod-screenshot-5.png",
      "/images/dod-screenshot-6.png",
      "/images/dod-screenshot-7.png"
    ]
  },
  {
    id: "3",
    slug: "project-medina",
    title: "Project Medina",
    era: "1850s-1870s",
    description: "Coming soon...",
    longDescription: "Coming soon...",
    status: "Coming Soon",
    color: "from-blue-900/40 to-gray-900/40",
    thumbnail: "/images/medina.jpg",
    features: [
      "Coming soon..."
    ],
    technologies: [
      "Unity Engine",
      "3D modeling",
      "Historical research",
      "Interactive design"
    ],
    releaseDate: "TBA",
    platforms: ["PC", "Mac", "Web Browser"],
    genre: "Historical Exploration"
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}