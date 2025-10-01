import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/data/projects";
import Hero from "@/components/sections/Hero";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Hero 
        title={project.title}
      />
      
      {/* Project Overview Section */}
      <section className="min-h-screen flex items-center py-20 px-6 relative bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="absolute inset-0 gradient-dust opacity-20"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-light tracking-[0.2em] text-foreground mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
                    PROJECT OVERVIEW
                  </h2>
                  <div className="h-px w-32 bg-gradient-to-r from-accent/60 to-transparent mb-6"></div>
                  <div className="text-accent/80 tracking-wider mb-4">ERA: {project.era}</div>
                  <div className="prose prose-invert max-w-none">
                    {project.longDescription.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-gray-300 leading-relaxed mb-6">
                        {paragraph.trim()}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-black/40 border-accent/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-light tracking-wider text-foreground mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
                      PROJECT STATUS
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs text-accent/60 uppercase tracking-wider">Status</div>
                        <div className="text-foreground">{project.status}</div>
                      </div>
                      {project.releaseDate && (
                        <div>
                          <div className="text-xs text-accent/60 uppercase tracking-wider">Release</div>
                          <div className="text-foreground">{project.releaseDate}</div>
                        </div>
                      )}
                      {project.platforms && (
                        <div>
                          <div className="text-xs text-accent/60 uppercase tracking-wider mb-2">Platforms</div>
                          <div className="flex flex-wrap gap-2">
                            {project.platforms.map((platform, idx) => (
                              <span key={idx} className="text-xs bg-accent/10 text-accent/80 px-2 py-1 rounded">
                                {platform}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/40 border-accent/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-light tracking-wider text-foreground mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
                      TECHNOLOGIES
                    </h3>
                    <ul className="space-y-2">
                      {project.technologies.map((tech, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <span className="w-1.5 h-1.5 bg-accent/60 mr-3"></span>
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="min-h-screen flex items-center py-20 px-6 relative bg-black">
        <div className="absolute inset-0 bg-noise opacity-5"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-[0.2em] text-foreground mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
                KEY FEATURES
              </h2>
              <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-accent/60 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.features.map((feature, index) => (
                <Card key={index} className="bg-gray-900/40 border-accent/10 hover:border-accent/30 transition-all duration-300">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-2 h-2 bg-accent/60 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">{feature}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link href="/projects">
                <Button variant="outline" size="lg">
                  Back to All Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}