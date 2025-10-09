import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/data/projects";
import Link from "next/link";
import ProjectContent from "./ProjectContent";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found"
    };
  }

  return {
    title: project.title,
    description: project.longDescription || project.description,
    keywords: [project.title, ...project.features, project.genre, ...project.platforms].filter(Boolean),
    openGraph: {
      title: `${project.title} | Saltbox Interactive`,
      description: project.description,
      images: project.thumbnail ? [
        {
          url: project.thumbnail,
          width: 1200,
          height: 630,
          alt: project.title
        }
      ] : [],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Saltbox Interactive`,
      description: project.description,
      images: project.thumbnail ? [project.thumbnail] : []
    }
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectContent project={project} />;
}