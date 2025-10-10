import Link from "next/link";
import type { Metadata } from "next";
import BracketLink from "@/components/ui/BracketLink";

export const metadata: Metadata = {
  title: "Project Medina",
};

export default function ProjectMedinaPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl md:text-9xl font-light tracking-[0.2em] text-white mb-8" style={{ fontFamily: 'var(--font-bebas)' }}>
          PROJECT MEDINA
        </h1>
        <p className="text-3xl md:text-4xl text-gray-400 mb-16">Coming soon...</p>

        <BracketLink href="/projects">View All Projects</BracketLink>
      </div>
    </div>
  );
}
