import Hero from "@/components/sections/Hero";
import GamesSection from "@/components/sections/GamesSection";
import AboutSection from "@/components/sections/AboutSection";
import NewsSection from "@/components/sections/NewsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero 
        title="Saltbox Interactive" 
        subtitle="Creating immersive gaming experiences"
        className="bg-gradient-to-b from-gray-900 to-gray-800"
      />
      <GamesSection />
      <AboutSection />
      <NewsSection />
      <ContactSection />
    </main>
  );
}