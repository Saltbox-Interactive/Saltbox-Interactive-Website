"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data/projects";
import BracketLink from "@/components/ui/BracketLink";

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="projects" className="relative bg-black py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      {/* Projects Stack */}
      <div className="flex flex-col gap-8 sm:gap-12 max-w-[1400px] mx-auto">
        {projects.map((project, index) => (
          <div key={project.id} className="w-full">
            <Link
              href={`/projects/${project.slug}`}
              className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] block overflow-hidden group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                {project.thumbnail && (
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} - ${project.description}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Title Overlay - Centered */}
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-[0.1em] sm:tracking-[0.15em] text-white uppercase text-center" style={{ fontFamily: 'var(--font-bebas)' }}>
                  {project.title}
                </h3>
              </div>

              {/* Status Badge */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-black/60 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-accent/80 tracking-wider uppercase">{project.status}</span>
              </div>
            </Link>

            {/* Title Below Card */}
            <BracketLink href={`/projects/${project.slug}`} className="mt-4 sm:mt-6 md:mt-8">
              {project.title}
            </BracketLink>
          </div>
        ))}
      </div>
    </section>
  );
}
