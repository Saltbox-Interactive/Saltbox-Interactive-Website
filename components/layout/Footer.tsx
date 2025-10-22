"use client";

import Link from "next/link";
import SocialLinks from "@/components/ui/SocialLinks";
import WhiteHighlightLink from "@/components/ui/WhiteHighlightLink";
import OrangeHighlightLink from "@/components/ui/OrangeHighlightLink";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black" style={{ zIndex: 50 }}>
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
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <WhiteHighlightLink href="/projects/discover-old-dhanis" className="text-sm">
                  Discover Old D'Hanis
                </WhiteHighlightLink>
                <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded">Available Now</span>
              </div>
              <WhiteHighlightLink href="/projects/discover-old-dhanis-remastered" className="text-sm">
                Discover Old D'Hanis: Remastered
              </WhiteHighlightLink>
              <WhiteHighlightLink href="/projects/project-medina" className="text-sm">
                Project Medina
              </WhiteHighlightLink>
            </div>
          </div>

          <div>
            <h4 className="text-foreground font-light tracking-wider mb-4 text-sm uppercase">Navigate</h4>
            <ul className="space-y-2">
              <li>
                <OrangeHighlightLink href="/projects" className="text-sm">
                  Projects
                </OrangeHighlightLink>
              </li>
              <li>
                <OrangeHighlightLink href="/about" className="text-sm">
                  About
                </OrangeHighlightLink>
              </li>
              <li>
                <OrangeHighlightLink href="/news" className="text-sm">
                  News
                </OrangeHighlightLink>
              </li>
              <li>
                <OrangeHighlightLink href="/contact" className="text-sm">
                  Contact
                </OrangeHighlightLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-light tracking-wider mb-4 text-sm uppercase">Follow</h4>
            <SocialLinks variant="small" />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs tracking-wider">
              &copy; {new Date().getFullYear()} SALTBOX INTERACTIVE. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-accent transition-colors duration-300 text-xs tracking-wider uppercase"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-accent transition-colors duration-300 text-xs tracking-wider uppercase"
              >
                Privacy Policy
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem('cookie-consent');
                  window.dispatchEvent(new Event('show-cookie-banner'));
                }}
                className="text-gray-400 hover:text-accent transition-colors duration-300 text-xs tracking-wider uppercase"
              >
                Cookie Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}