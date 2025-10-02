import Link from "next/link";

export default function CreditsPage() {
  return (
    <div className="min-h-screen bg-black text-foreground py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-light tracking-[0.2em] text-white mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
            PROJECT CREDITS
          </h1>
          <p className="text-xl text-gray-400">Discover Old D'Hanis</p>
        </div>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-light tracking-wider text-accent mb-8 border-b border-accent/30 pb-3" style={{ fontFamily: 'var(--font-bebas)' }}>
            TEAM
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl text-white mb-1">Patricia Markert</h3>
              <p className="text-gray-400 mb-2">Project Lead, Archaeologist</p>
              <a href="mailto:pmarkert@uwo.ca" className="text-accent hover:underline text-sm">pmarkert@uwo.ca</a>
            </div>

            <div>
              <h3 className="text-xl text-white mb-1">Michael Salton</h3>
              <p className="text-gray-400 mb-2">Game Development, Environment Design</p>
              <a href="mailto:michaeldsalton@gmail.com" className="text-accent hover:underline text-sm">michaeldsalton@gmail.com</a>
            </div>

            <div>
              <h3 className="text-xl text-white mb-1">Emily Grant</h3>
              <p className="text-gray-400 mb-2">Art, Modelling</p>
              <a href="mailto:grantemilym0@gmail.com" className="text-accent hover:underline text-sm">grantemilym0@gmail.com</a>
            </div>

            <div>
              <h3 className="text-xl text-white mb-1">Hiu Yi Joyce Lee</h3>
              <p className="text-gray-400 mb-2">Music, Sound</p>
              <a href="mailto:joyceleehiuyi3@gmail.com" className="text-accent hover:underline text-sm">joyceleehiuyi3@gmail.com</a>
            </div>
          </div>
        </section>

        {/* Additional Help Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-light tracking-wider text-accent mb-8 border-b border-accent/30 pb-3" style={{ fontFamily: 'var(--font-bebas)' }}>
            ADDITIONAL HELP
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li>Terrence Ju</li>
            <li>Ricardo Ortiz Wilkins</li>
          </ul>
        </section>

        {/* Project Support Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-light tracking-wider text-accent mb-8 border-b border-accent/30 pb-3" style={{ fontFamily: 'var(--font-bebas)' }}>
            PROJECT SUPPORT
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li>Western University</li>
            <li>Binghamton University</li>
            <li>National Geographic Society</li>
            <li>Wenner-Gren Foundation</li>
            <li>Mellon Foundation/American Council of Learned Societies</li>
            <li>Council of Texas Archeologists</li>
            <li>Medina County Historical Commission</li>
          </ul>
        </section>

        {/* Special Thanks Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-light tracking-wider text-accent mb-8 border-b border-accent/30 pb-3" style={{ fontFamily: 'var(--font-bebas)' }}>
            SPECIAL THANKS
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li>Community of D'Hanis and Medina County</li>
            <li>Portal to Texas History (University of North Texas Libraries)</li>
            <li>UTSA Special Collections</li>
          </ul>
        </section>

        {/* Cited Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-light tracking-wider text-accent mb-8 border-b border-accent/30 pb-3" style={{ fontFamily: 'var(--font-bebas)' }}>
            CITED PROJECTS
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li>Old D'Hanis Archaeological Mapping Project</li>
            <li>Castro Colonies Oral History Project</li>
          </ul>
        </section>

        {/* Citation Section */}
        <section className="mb-16 p-6 bg-gray-900/30 border border-accent/20">
          <h2 className="text-2xl font-light tracking-wider text-accent mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
            CITATION
          </h2>
          <p className="text-gray-300 italic">
            Markert, Patricia G., Michael Salton, Emily Missetta Grant, and Joyce Lee. Discover Old D'Hanis for Windows/Mac, V. 1., Saltbox Interactive.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <Link
            href="/projects/discover-old-dhanis"
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
              Back to Project
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
