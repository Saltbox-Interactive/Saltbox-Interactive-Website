import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Saltbox Interactive's mission to preserve history through interactive digital experiences. We transform historical locations into explorable virtual environments.",
  openGraph: {
    title: "About Saltbox Interactive",
    description: "Dedicated to preserving the past through interactive digital experiences.",
    images: ["/images/dhanis1.jpg"]
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
