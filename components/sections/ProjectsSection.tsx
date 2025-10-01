import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen flex items-center py-20 px-6 relative">
      <div className="absolute inset-0 gradient-western opacity-50"></div>
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-light tracking-[0.2em] text-foreground mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
            DISCOVER OUR WORK
          </h2>
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-accent/60 to-transparent mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Preserving history through immersive digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.slug}`} className="block group">
              <Card variant="interactive" className="h-full overflow-hidden">
                <div className={`aspect-video bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  {project.thumbnail && (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500"></div>
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs text-accent/80 tracking-wider uppercase">{project.status}</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="text-accent/60 text-sm tracking-wider mb-1">{project.era}</div>
                    <div className="text-2xl font-light text-foreground/20 group-hover:text-foreground/40 transition-colors duration-500" style={{ fontFamily: 'var(--font-bebas)' }}>
                      {project.title}
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-light tracking-wider" style={{ fontFamily: 'var(--font-bebas)' }}>{project.title}</CardTitle>
                  <CardDescription className="text-gray-400 leading-relaxed">{project.description}</CardDescription>
                  <Button variant="ghost" className="mt-4 text-accent hover:text-foreground border-accent/30 hover:border-accent/60 transition-all duration-300 w-full sm:w-auto">
                    Explore Project
                  </Button>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}