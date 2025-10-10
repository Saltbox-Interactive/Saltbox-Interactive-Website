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
    thumbnail: "/images/dod-screenshot-8.jpg",
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
    description: "A stunning reimagining of the original Discover Old D'Hanis experience, rebuilt from the ground up in Unreal Engine 5 with breathtaking photorealistic graphics and immersive environments.",
    longDescription: `Experience Old D'Hanis like never before in this complete reimagining of the original game. Built from the ground up in Unreal Engine 5, this remastered edition brings the historic Alsatian settlement to life with unprecedented visual fidelity and realism.

    Leveraging cutting-edge photogrammetry technology and Unreal Engine 5's revolutionary Lumen and Nanite systems, every detail of this 19th-century Texas community has been meticulously recreated with stunning accuracy. From the weathered textures of limestone buildings to the natural beauty of the Texas Hill Country, experience history in breathtaking photorealistic quality.

    Walk through the settlement as sunlight streams through authentic period architecture, explore richly detailed interiors, and immerse yourself in an atmosphere that truly transports you back in time. This is historical preservation elevated to an art form.`,
    status: "In Development",
    color: "from-stone-800/40 to-amber-950/40",
    thumbnail: "/images/temp/dod-temp-1.jpg",
    features: [
      "Photorealistic graphics with Unreal Engine 5",
      "Real-time global illumination with Lumen",
      "Ultra-detailed geometry with Nanite",
      "Immersive exploration and discovery",
      "Enhanced environmental storytelling",
      "Virtual reality support"
    ],
    technologies: [
      "Unreal Engine 5",
      "Photogrammetry scanning",
      "Lumen global illumination",
      "Nanite virtualized geometry",
      "Advanced lighting systems",
      "Virtual reality support"
    ],
    releaseDate: "Coming 2026",
    platforms: ["PC"],
    genre: "Historical Exploration",
    gallery: [
      "/images/temp/dod-temp-1.jpg",
      "/images/temp/dod-temp-2.jpg",
      "/images/temp/dod-temp-3.jpg",
      "/images/temp/dod-temp-4.jpg",
      "/images/temp/dod-temp-5.jpg",
      "/images/temp/dod-temp-8.jpg",
      "/images/temp/dod-temp-9.jpg",
      "/images/temp/dod-temp-10.jpg",
      "/images/temp/dod-temp-11.jpg",
      "/images/temp/dod-temp-12.jpg",
      "/images/temp/dod-temp-14.jpg",
      "/images/temp/dod-temp-15.jpg",
      "/images/temp/dod-temp-16.jpg",
      "/images/temp/dod-temp-17.jpg",
      "/images/temp/dod-temp-18.jpg",
      "/images/temp/dod-temp-19.jpg",
      "/images/temp/dod-temp-20.jpg",
      "/images/temp/dod-temp-21.jpg",
      "/images/temp/dod-temp-23.jpg",
      "/images/temp/dod-temp-24.jpg",
      "/images/temp/dod-temp-25.jpg",
      "/images/temp/dod-temp-26.jpg",
      "/images/temp/dod-temp-27.jpg"
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