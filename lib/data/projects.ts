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
  sections?: {
    title: string;
    content: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "discover-old-dhanis",
    title: "Discover Old D'Hanis",
    era: "1847-1920s",
    description: "An immersive educational experience that invites you to explore the history of the old town of D'Hanis, TX.",
    longDescription: `Discover Old D'Hanis is an immersive educational experience that invites you to explore the history of the old town of D'Hanis, TX. The game is based on data from the Old D'Hanis Archaeological Mapping Project, a real archaeological project that examined the ruins, stories, and landscapes of the historic town, alongside community members, in 2018.

    Enter D'Hanis and you will find yourself in front of the ruin of its Catholic church, grass beneath your feet, the sound of wind and the occasional bird in a landscape empty of people. You stand at the intersection of past and present. Walking through the historic streets, you will find virtual reconstructions of white-walled cottages from the 19th century alongside 21st century ruins scanned by archaeologists.

    Scattered throughout the landscape are pieces of D'Hanis' story – a 19th century photograph, archaeological field notes, a quote from an oral history, a newspaper article. Alone, these provide small snapshots of the town or the archaeological project through time. Together, they paint a fuller picture of D'Hanis and its residents, from the Alsatian and German migrants who founded the town in 1847 to the Black and Mexican families who made it their home following the Civil War and Mexican Revolution. Your role: to explore, to collect fragments, and to piece together the stories of the Old D'Hanis.

    Based on the history of a real Texas town, Discover Old D'Hanis features 3D models of ruins, historically-informed landscape and sound design, interactive features, artistic reconstructions, and an original musical composition based on old German folk songs. It provides a glimpse into a real archaeology project and demonstrates how we come to understand the past through its fragments.

    Discover Old D'Hanis is more than just a game; it's an invitation to join the efforts preserve and share the historical legacy of an historic place. Are you ready to uncover the stories and experience the old town?`,
    status: "Available Now",
    color: "from-amber-900/40 to-stone-900/40",
    thumbnail: "/images/dod-screenshot-8.jpg",
    features: [
      "Virtual reconstruction of 19th-century white-walled cottages",
      "Landscape featuring 21st-century archaeological ruins",
      "Interactive storytelling elements",
      "Historical artifacts and documents",
      "Original musical composition inspired by German folk songs",
      "Stories of Alsatian, German, Black, and Mexican families"
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