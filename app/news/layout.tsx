import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates",
  description: "Stay up to date with the latest news, updates, and insights from Saltbox Interactive. Read about our historical preservation projects, game development progress, and more.",
  openGraph: {
    title: "News & Updates | Saltbox Interactive",
    description: "Latest news and updates from Saltbox Interactive's historical preservation projects.",
    images: ["/images/temp/dod-temp-12.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Updates | Saltbox Interactive",
    description: "Latest news and updates from Saltbox Interactive's historical preservation projects.",
    images: ["/images/temp/dod-temp-12.jpg"]
  }
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
