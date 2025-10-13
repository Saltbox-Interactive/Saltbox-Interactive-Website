// FAQ Data for Discover Old D'Hanis
export const DISCOVER_OLD_DHANIS_FAQS = [
  {
    question: "What is Discover Old D'Hanis?",
    answer: "Discover Old D'Hanis is an immersive historical exploration game that brings the 19th-century town of Old D'Hanis, Texas, to life. Players can explore the settlement, uncover archival fragments, and piece together the stories of Alsatian, German, Black, and Mexican families who lived there from 1847 onwards.",
  },
  {
    question: "What platforms is Discover Old D'Hanis available on?",
    answer: "Discover Old D'Hanis is available on Steam for Windows PC. The remastered version, built in Unreal Engine 5, is coming in 2026.",
  },
  {
    question: "Is Discover Old D'Hanis historically accurate?",
    answer: "Yes, the game is based on extensive historical research, archaeological data, archival photographs, and oral histories to create an authentic recreation of Old D'Hanis as it existed in the 19th century.",
  },
  {
    question: "What makes the Remastered version different?",
    answer: "Discover Old D'Hanis: Remastered is a complete reimagining built from the ground up in Unreal Engine 5, featuring breathtaking photorealistic graphics, enhanced immersive environments, and improved gameplay mechanics.",
  },
  {
    question: "How long does it take to complete Discover Old D'Hanis?",
    answer: "The game is designed as an exploration experience, with players typically spending 2-4 hours discovering the settlement, though thorough explorers may spend much longer uncovering all the historical details.",
  },
];

// About Page FAQs
export const ABOUT_PAGE_FAQS = [
  {
    question: "What does Saltbox Interactive do?",
    answer: "Saltbox Interactive creates immersive virtual environments where history comes alive. We specialize in historical preservation through interactive digital experiences, transforming historical locations into explorable virtual worlds.",
  },
  {
    question: "Who is behind Saltbox Interactive?",
    answer: "Saltbox Interactive is led by a multidisciplinary team including archaeologists, game developers, artists, and sound designers who combine historical research with cutting-edge technology to create authentic experiences.",
  },
  {
    question: "How can I support Saltbox Interactive's projects?",
    answer: "You can support our work by purchasing our games on Steam, following us on social media, and spreading the word about our historical preservation projects. We also welcome collaboration with historians and cultural institutions.",
  },
];

// Video data (for when you add trailers)
export const DISCOVER_OLD_DHANIS_VIDEO = {
  name: "Discover Old D'Hanis - Official Trailer",
  description: "Step into the past and explore the historic 19th-century town of Old D'Hanis, Texas. Experience the lives of Alsatian, German, Black, and Mexican families through immersive historical reconstruction.",
  thumbnailUrl: "/images/dod-cover.jpg",
  uploadDate: "2024-01-01", // Update with actual date
  duration: "PT2M30S", // 2 minutes 30 seconds - update with actual duration
};

// Review data (example - replace with real reviews when available)
export const DISCOVER_OLD_DHANIS_REVIEWS = {
  itemName: "Discover Old D'Hanis",
  aggregateRating: {
    ratingValue: 4.5,
    reviewCount: 10,
    bestRating: 5,
  },
  reviews: [
    {
      author: "Historical Gaming Enthusiast",
      datePublished: "2024-01-15",
      reviewBody: "An incredible journey through history. The attention to detail and historical accuracy makes this a must-play for anyone interested in American frontier history.",
      reviewRating: {
        ratingValue: 5,
        bestRating: 5,
      },
    },
  ],
};

// Breadcrumb helpers
export function generateBreadcrumbs(path: string) {
  const paths = path.split("/").filter(Boolean);
  const breadcrumbs = [{ name: "Home", url: "/" }];

  let currentPath = "";
  paths.forEach((segment) => {
    currentPath += `/${segment}`;
    const name = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    breadcrumbs.push({ name, url: currentPath });
  });

  return breadcrumbs;
}
