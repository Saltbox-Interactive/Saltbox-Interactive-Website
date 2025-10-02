import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/data/projects";
import Link from "next/link";
import ProjectContent from "./ProjectContent";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectContent project={project} />;
}