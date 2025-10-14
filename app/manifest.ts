import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Saltbox Interactive - Historical Preservation Through Interactive Experiences",
    short_name: "Saltbox Interactive",
    description:
      "Create immersive virtual environments where history comes alive. Experience the past through interactive digital preservation.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#d4a574",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: ["education", "games", "entertainment"],
    screenshots: [
      {
        src: "/images/dod-cover.jpg",
        sizes: "1280x720",
        type: "image/jpeg",
        form_factor: "wide",
      },
    ],
  };
}
