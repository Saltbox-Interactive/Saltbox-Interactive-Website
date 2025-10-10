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
    <section id="projects" className="relative bg-black py-32 px-6">
      {/* Projects Stack */}
      <div className="flex flex-col gap-12 max-w-[1400px] mx-auto">
        {projects.map((project, index) => (
          <div key={project.id} className="w-full">
            <Link
              href={`/projects/${project.slug}`}
              className="relative h-[400px] block overflow-hidden group"
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
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-5xl md:text-6xl font-light tracking-[0.15em] text-white uppercase" style={{ fontFamily: 'var(--font-bebas)' }}>
                  {project.title}
                </h3>
              </div>

              {/* Status Badge */}
              <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-accent/80 tracking-wider uppercase">{project.status}</span>
              </div>
            </Link>

            {/* Title Below Card */}
            <BracketLink href={`/projects/${project.slug}`} className="mt-8">
              {project.title}
            </BracketLink>
          </div>
        ))}
      </div>
    </section>
  );
}
