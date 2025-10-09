import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discover Old D'Hanis Credits",
};

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
              <p className="text-gray-400">Project Lead, Archaeologist</p>
            </div>

            <div>
              <h3 className="text-xl text-white mb-1">Michael Salton</h3>
              <p className="text-gray-400">Game Development, Environment Design</p>
            </div>

            <div>
              <h3 className="text-xl text-white mb-1">Emily Grant</h3>
              <p className="text-gray-400">Art, Modelling</p>
            </div>

            <div>
              <h3 className="text-xl text-white mb-1">Hiu Yi Joyce Lee</h3>
              <p className="text-gray-400">Music, Sound</p>
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
            <li>Mike Katchabaw</li>
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
            Markert, Patricia G., Michael Salton, Emily Missetta Grant, and Joyce Lee. Discover Old D'Hanis for Windows/Mac, V. 1., <span className="bg-white text-black px-1">Saltbox Interactive</span>.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <Link href="/projects/discover-old-dhanis" className="inline-flex items-center gap-2 group">
            <span className="text-accent transition-all duration-300 group-hover:-translate-x-1 text-lg">
              [
            </span>
            <span className="text-lg font-light tracking-[0.15em] text-gray-400 group-hover:text-accent transition-colors duration-300 uppercase" style={{ fontFamily: 'var(--font-bebas)' }}>
              Back to Project
            </span>
            <span className="text-accent transition-all duration-300 group-hover:translate-x-1 text-lg">
              ]
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
