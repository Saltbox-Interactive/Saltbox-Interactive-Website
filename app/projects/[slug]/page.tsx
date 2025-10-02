import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/data/projects";
import Link from "next/link";
import ProjectContent from "./ProjectContent";

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

  return <ProjectContent project={project} />;
}