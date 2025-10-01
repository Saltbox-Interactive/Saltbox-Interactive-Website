import Hero from "@/components/sections/Hero";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const highlights = [
  {
    title: "Historical Accuracy",
    description: "Every detail meticulously researched and verified by historians.",
    link: "/about",
    linkText: "Learn About Us",
  },
  {
    title: "Immersive Technology",
    description: "VR, AR, and cutting-edge simulation bringing history to life.",
    link: "/projects",
    linkText: "View Projects",
  },
  {
    title: "Digital Preservation",
    description: "Safeguarding historical moments for future generations.",
    link: "/projects",
    linkText: "View Projects",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        title="Saltbox Interactive"
        backgroundImage="/images/background_pic.jpg"
      />
      
      {/* Introduction Section */}
      <section id="intro" className="min-h-screen flex items-center py-20 px-6 relative bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="absolute inset-0 gradient-dust opacity-20"></div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {highlights.map((item, index) => (
              <Card key={index} className="bg-black/40 border-accent/10 hover:border-accent/30 transition-all duration-500 group">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-light tracking-wider text-foreground mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <Link href={item.link}>
                    <Button variant="ghost" size="sm" className="group-hover:text-accent group-hover:border-accent/60">
                      {item.linkText}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative bg-black">
        <div className="absolute inset-0 bg-noise opacity-5"></div>

        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-light tracking-[0.2em] text-foreground mb-12" style={{ fontFamily: 'var(--font-bebas)' }}>
            EXPLORE OUR WORK
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/projects">
              <Button variant="outline" size="lg">
                View Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}