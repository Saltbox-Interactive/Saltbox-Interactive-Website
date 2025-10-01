"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data/projects";

export default function ProjectsSection() {
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set());
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = projectRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleProjects((prev) => new Set(prev).add(index));
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section id="projects" className="py-40 px-6 relative bg-gradient-to-b from-black via-gray-900/30 to-black">
      <div className="absolute inset-0 gradient-western opacity-50"></div>
      <div className="absolute inset-0 bg-noise opacity-5"></div>

      <div className="relative z-10">
        <div className="text-center mb-32 max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.15em] text-foreground mb-8" style={{ fontFamily: 'var(--font-bebas)' }}>
            DISCOVER OUR WORK
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
            Preserving history through immersive digital experiences
          </p>
        </div>

        <div className="space-y-48">
          {projects.map((project, index) => {
            const isVisible = visibleProjects.has(index);

            return (
              <div
                key={project.id}
                ref={(el) => { projectRefs.current[index] = el; }}
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
              >
                {/* Large Image */}
                <div className="relative w-full max-w-[1400px] mx-auto mb-16">
                  <Link href={`/projects/${project.slug}`} className="group block">
                    <div className="relative aspect-[21/9] overflow-hidden">
                      {project.thumbnail && (
                        <Image
                          src={project.thumbnail}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                      <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-xs text-accent/80 tracking-wider uppercase">{project.status}</span>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Content Below Image */}
                <div className="max-w-[900px] mx-auto px-6 md:px-12">
                  <div className="mb-10">
                    <p className="text-accent/70 text-xs tracking-[0.4em] uppercase mb-6">{project.era}</p>
                    <h3 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.15em] text-foreground mb-8" style={{ fontFamily: 'var(--font-bebas)' }}>
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-xl md:text-2xl leading-relaxed font-light mb-10">
                    {project.description}
                  </p>

                  <div className="inline-block">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-3 text-foreground hover:text-accent transition-colors duration-300 group"
                    >
                      <span className="text-sm tracking-[0.2em] uppercase">Learn more</span>
                      <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
