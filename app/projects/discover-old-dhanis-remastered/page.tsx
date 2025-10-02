import Link from "next/link";

export default function DiscoverOldDHanisRemasteredPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-7xl md:text-8xl font-light tracking-[0.2em] text-white mb-8" style={{ fontFamily: 'var(--font-bebas)' }}>
          DISCOVER OLD D'HANIS:<br/>REMASTERED
        </h1>
        <p className="text-3xl md:text-4xl text-gray-400 mb-16">Coming soon...</p>

        <Link
          href="/projects"
          className="group relative inline-flex items-center justify-center px-12 py-4 overflow-hidden transition-all duration-300"
        >
          {/* Background border */}
          <div className="absolute inset-0 border border-gray-500 group-hover:opacity-0 transition-opacity duration-300"></div>

          {/* Corner borders (hover state) */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-accent"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-accent"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-accent"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent"></div>
          </div>

          {/* Text */}
          <span className="relative z-10 text-gray-400 group-hover:text-accent transition-colors duration-300 tracking-wider text-sm uppercase font-light">
            View All Projects
          </span>
        </Link>
      </div>
    </div>
  );
}
