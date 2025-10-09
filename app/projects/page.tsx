import Hero from "@/components/sections/Hero";
import ProjectsSection from "@/components/sections/ProjectsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Saltbox Interactive's portfolio of immersive historical experiences. From Old D'Hanis to other historical preservation projects, discover how we bring the past to life.",
  openGraph: {
    title: "Our Projects | Saltbox Interactive",
    description: "Explore our portfolio of immersive historical experiences and digital preservation projects.",
    images: ["/images/dod-cover.jpg"]
  }
};

export default function ProjectsPage() {
  return (
    <>
      <Hero
        title="Our Projects"
        subtitle="Discover what we do"
        backgroundImage="/images/background_pic.jpg"
        pageName="Projects"
      />
      <ProjectsSection />
      <section className="min-h-screen flex items-center justify-center bg-black px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-light tracking-[0.2em] text-foreground mb-6" style={{ fontFamily: 'var(--font-bebas)' }}>
            MORE COMING SOON
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We're constantly working on new projects to preserve and share historical moments. 
            Check back regularly for updates on our latest digital preservation efforts.
          </p>
        </div>
      </section>
    </>
  );
}