// Homepage Content
export const HOME_CONTENT = {
  hero: {
    words: ["DISCOVER", "LEARN", "PRESERVE"],
  },
  about: {
    staticText:
      "Saltbox Interactive is dedicated to preserving the past through interactive digital experiences. We create explorable virtual environments",
    typedText: " where history comes alive.",
  },
  intro: {
    staticText:
      "Step into the past and unravel the rich history of Old D'Hanis. Explore this 19th-century town, from Alsatian and German settlers of 1847 to Black and Mexican families post-Civil War. Unearth archival fragments, archaeological photos, and oral histories",
    typedText: " to piece together the town's alluring stories.",
  },
  projects: {
    discoverOldDhanis: {
      status: "Now Available",
      title: "DISCOVER OLD D'HANIS",
      description:
        "Step into the past and unravel the rich history of Old D'Hanis. Explore this 19th-century town, from Alsatian and German settlers of 1847 to Black and Mexican families post-Civil War. Unearth archival fragments, archaeological photos, and oral histories to piece together the town's alluring stories.",
      image: "/images/dod-cover.jpg",
      link: "/projects/discover-old-dhanis",
    },
    discoverOldDhanisRemastered: {
      status: "Coming 2026",
      title: "DISCOVER OLD D'HANIS: REMASTERED",
      description:
        "Experience Old D'Hanis like never before in this complete reimagining of the original game. Built from the ground up in Unreal Engine 5 with breathtaking photorealistic graphics and immersive environments.",
      image: "/images/temp/dod-temp-1.jpg",
      link: "/projects/discover-old-dhanis-remastered",
    },
  },
} as const;

// About Page Content
export const ABOUT_CONTENT = {
  intro: {
    heading: "Saltbox Interactive was founded on the belief that history should be experienced, not just read about.",
    body: "Our journey began with a simple question: What if we could use modern technology to step back in time? Today, we transform historical locations into explorable virtual environments where history comes alive.",
  },
  team: {
    title: "THE TEAM",
    description:
      "Each project is a collaborative effort combining historical research, cutting-edge technology, and artistic vision to create authentic experiences that transport users to pivotal moments in history.",
  },
  mission: {
    title: "Experience history like never before",
    description:
      "We're committed to capturing every detail, every story, and every lesson from our collective past. Through meticulous research and innovative technology, we preserve history for future generations.",
  },
} as const;

// Projects Page Content
export const PROJECTS_CONTENT = {
  comingSoon: {
    title: "MORE COMING SOON",
    description:
      "We're constantly working on new projects to preserve and share historical moments. Check back regularly for updates on our latest digital preservation efforts.",
  },
} as const;

// Footer Content
export const FOOTER_CONTENT = {
  tagline: "Preserving history through immersive digital experiences. Where the past meets cutting-edge technology.",
  motto: "DISCOVER. LEARN. PRESERVE.",
  copyright: "SALTBOX INTERACTIVE. ALL RIGHTS RESERVED.",
} as const;
