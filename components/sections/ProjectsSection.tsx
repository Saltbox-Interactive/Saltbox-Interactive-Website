"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data/projects";

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
    <section id="projects" className="relative bg-black py-20 px-6">
      {/* Projects Grid */}
      <div className="flex flex-col md:flex-row gap-6 max-w-[1400px] mx-auto">
        {projects.map((project, index) => (
          <div key={project.id} className="md:flex-1">
            <Link
              href={`/projects/${project.slug}`}
              className="relative h-[600px] block overflow-hidden group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                {project.thumbnail && (
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500"></div>
              </div>

              {/* Title Overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <h3
                  className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] text-white text-center group-hover:scale-110"
                  style={{
                    fontFamily: 'var(--font-bebas)',
                    transform: `translateY(${-scrollY * 0.08}px)`,
                    transition: 'transform 0.1s ease-out',
                    willChange: 'transform'
                  }}
                >
                  {project.title}
                </h3>
              </div>

              {/* Status Badge */}
              <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-accent/80 tracking-wider uppercase">{project.status}</span>
              </div>
            </Link>

            {/* Title Below Card */}
            <Link href={`/projects/${project.slug}`} className="mt-4 block hover:text-accent transition-colors duration-300">
              <h4 className="text-2xl font-light tracking-[0.15em] text-white" style={{ fontFamily: 'var(--font-bebas)' }}>
                {project.title}
              </h4>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
