import Link from "next/link";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 w-full bg-black border-t border-accent/10" style={{ zIndex: 50, pointerEvents: 'auto' }}>
      <div className="absolute inset-0 bg-noise opacity-5"></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-3xl font-light tracking-[0.2em] text-foreground mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
              SALTBOX INTERACTIVE
            </h3>
            <p className="text-gray-400 max-w-md mb-4 text-sm leading-relaxed">
              Preserving history through immersive digital experiences.
              Where the past meets cutting-edge technology.
            </p>
            <p className="text-accent/80 tracking-wider text-sm">
              DISCOVER. LEARN. PRESERVE.
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-light tracking-wider mb-4 text-sm uppercase">Projects</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/projects/discover-old-dhanis" className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm flex items-center gap-2">
                  Discover Old D'Hanis
                  <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded">Available Now</span>
                </Link>
              </li>
              <li>
                <Link href="/projects/discover-old-dhanis-remastered" className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm">
                  Discover Old D'Hanis: Remastered
                </Link>
              </li>
              <li>
                <Link href="/projects/project-medina" className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm">
                  Project Medina
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-light tracking-wider mb-4 text-sm uppercase">Navigate</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm">
                  All Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-light tracking-wider mb-4 text-sm uppercase">Follow</h4>
            <SocialLinks variant="small" />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-accent/10 text-center">
          <p className="text-gray-500 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} SALTBOX INTERACTIVE. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}