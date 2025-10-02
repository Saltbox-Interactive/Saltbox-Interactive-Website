import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-black border-t border-accent/10 z-0">
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
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/company/saltbox-interactive" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors duration-300" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors duration-300 opacity-50 cursor-not-allowed" aria-label="YouTube (Coming Soon)">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
              <Link href="https://store.steampowered.com/app/3140860/Discover_Old_DHanis/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors duration-300" aria-label="Steam">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/>
                </svg>
              </Link>
            </div>
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