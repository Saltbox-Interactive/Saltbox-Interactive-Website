import Link from "next/link";

export default function ProjectMedinaPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl md:text-9xl font-light tracking-[0.2em] text-white mb-8" style={{ fontFamily: 'var(--font-bebas)' }}>
          PROJECT MEDINA
        </h1>
        <p className="text-3xl md:text-4xl text-gray-400 mb-16">Coming soon...</p>

        <Link href="/projects" className="inline-flex items-center gap-2 group">
          <span className="text-accent transition-all duration-300 group-hover:-translate-x-1 text-lg">
            [
          </span>
          <span className="text-lg font-light tracking-[0.15em] text-gray-400 group-hover:text-accent transition-colors duration-300 uppercase" style={{ fontFamily: 'var(--font-bebas)' }}>
            View All Projects
          </span>
          <span className="text-accent transition-all duration-300 group-hover:translate-x-1 text-lg">
            ]
          </span>
        </Link>
      </div>
    </div>
  );
}
