"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useContext, useRef } from "react";
import { usePathname } from "next/navigation";
import { ScrollSpeedContext } from "../ScrollSpeedContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [typedText, setTypedText] = useState({ projects: "", about: "", contact: "", openMenu: "" });
  const pathname = usePathname();
  const { lenis } = useContext(ScrollSpeedContext);

  // Reset typing animation when pathname changes
  useEffect(() => {
    setTypedText({ projects: "", about: "", contact: "", openMenu: "" });
  }, [pathname]);

  // Typing animation for Projects
  useEffect(() => {
    const fullText = "PROJECTS";
    if (typedText.projects.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => ({ ...prev, projects: fullText.slice(0, prev.projects.length + 1) }));
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [typedText.projects]);

  // Typing animation for About (starts after Projects is done)
  useEffect(() => {
    const fullText = "ABOUT";
    if (typedText.projects === "PROJECTS" && typedText.about.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => ({ ...prev, about: fullText.slice(0, prev.about.length + 1) }));
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [typedText.projects, typedText.about]);

  // Typing animation for Contact (starts after About is done)
  useEffect(() => {
    const fullText = "CONTACT";
    if (typedText.about === "ABOUT" && typedText.contact.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => ({ ...prev, contact: fullText.slice(0, prev.contact.length + 1) }));
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [typedText.about, typedText.contact]);

  // Typing animation for [OPEN] MENU (starts after Contact is done)
  useEffect(() => {
    const fullText = "[OPEN] MENU";
    if (typedText.contact === "CONTACT" && typedText.openMenu.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => ({ ...prev, openMenu: fullText.slice(0, prev.openMenu.length + 1) }));
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [typedText.contact, typedText.openMenu]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      }
      // Hide header when scrolling down past the first section
      else if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Disable scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Measure actual scrollbar width by creating a temporary element
      const outer = document.createElement('div');
      outer.style.visibility = 'hidden';
      outer.style.overflow = 'scroll';
      document.body.appendChild(outer);

      const inner = document.createElement('div');
      outer.appendChild(inner);

      const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

      document.body.removeChild(outer);

      document.documentElement.classList.add('menu-open');
      document.body.style.marginRight = `${scrollbarWidth}px`;

      // Apply margin to all fixed elements
      const header = document.querySelector('header');
      const footer = document.querySelector('footer');
      const fixedBackgrounds = document.querySelectorAll('.fixed');

      if (header) {
        (header as HTMLElement).style.marginRight = `${scrollbarWidth}px`;
      }
      if (footer) {
        (footer as HTMLElement).style.marginRight = `${scrollbarWidth}px`;
      }
      fixedBackgrounds.forEach((el) => {
        (el as HTMLElement).style.marginRight = `${scrollbarWidth}px`;
      });

      if (lenis) {
        lenis.stop();
      }
    } else {
      document.documentElement.classList.remove('menu-open');
      document.body.style.marginRight = '0px';

      // Remove margin from all fixed elements
      const header = document.querySelector('header');
      const footer = document.querySelector('footer');
      const fixedBackgrounds = document.querySelectorAll('.fixed');

      if (header) {
        (header as HTMLElement).style.marginRight = '0px';
      }
      if (footer) {
        (footer as HTMLElement).style.marginRight = '0px';
      }
      fixedBackgrounds.forEach((el) => {
        (el as HTMLElement).style.marginRight = '0px';
      });

      if (lenis) {
        lenis.start();
      }
    }
    return () => {
      document.documentElement.classList.remove('menu-open');
      document.body.style.marginRight = '0px';

      const header = document.querySelector('header');
      const footer = document.querySelector('footer');
      const fixedBackgrounds = document.querySelectorAll('.fixed');

      if (header) {
        (header as HTMLElement).style.marginRight = '0px';
      }
      if (footer) {
        (footer as HTMLElement).style.marginRight = '0px';
      }
      fixedBackgrounds.forEach((el) => {
        (el as HTMLElement).style.marginRight = '0px';
      });

      if (lenis) {
        lenis.start();
      }
    };
  }, [isMenuOpen, lenis]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`} style={{ zIndex: 200 }}>
        <nav className="px-4 py-6 max-w-[1400px] mx-auto mt-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="group flex items-center gap-4 absolute left-8">
              <Image
                src="/images/saltbox-logo-blank.png"
                alt="Saltbox Interactive Logo"
                width={48}
                height={48}
                className="object-contain"
              />
              <span className="relative text-xl font-normal tracking-wide translate-y-0.5 uppercase px-2 py-1 overflow-hidden" style={{ fontFamily: 'var(--font-bebas)' }}>
                <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
                  Saltbox Interactive
                </span>
                <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
              </span>
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden text-foreground hover:text-accent transition-colors absolute right-8"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-4 absolute right-8">
              <Link href="/projects" className={`text-base tracking-wider transition-colors duration-300 uppercase inline-block text-left ${pathname === '/projects' ? 'text-accent' : 'text-foreground/80 hover:text-accent'}`} style={{ fontFamily: 'var(--font-bebas)', minWidth: '70px' }}>
                {typedText.projects}
              </Link>
              <Link href="/about" className={`text-base tracking-wider transition-colors duration-300 uppercase inline-block text-left ${pathname === '/about' ? 'text-accent' : 'text-foreground/80 hover:text-accent'}`} style={{ fontFamily: 'var(--font-bebas)', minWidth: '50px' }}>
                {typedText.about}
              </Link>
              <Link href="/contact" className={`text-base tracking-wider transition-colors duration-300 uppercase inline-block text-left ${pathname === '/contact' ? 'text-accent' : 'text-foreground/80 hover:text-accent'}`} style={{ fontFamily: 'var(--font-bebas)', minWidth: '65px' }}>
                {typedText.contact}
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-base tracking-wider transition-colors duration-300 uppercase text-foreground/80 hover:text-accent inline-block text-left"
                style={{ fontFamily: 'var(--font-bebas)', minWidth: '95px' }}
              >
                {isMenuOpen ? (
                  <><span className="text-accent">[CLOSE]</span> MENU</>
                ) : (
                  <>
                    {typedText.openMenu.split('').map((char, i) => (
                      <span key={i} className={char === '[' || char === ']' ? 'text-accent' : ''}>
                        {char}
                      </span>
                    ))}
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Mobile dropdown menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-6 pb-4 border-t border-accent/20 pt-4">
              <div className="flex flex-col gap-4">
                <Link href="/projects" className={`text-sm tracking-wider transition-colors duration-300 uppercase ${pathname === '/projects' ? 'text-accent' : 'text-foreground/80 hover:text-accent'}`} onClick={() => setIsMobileMenuOpen(false)}>
                  Projects
                </Link>
                <Link href="/about" className={`text-sm tracking-wider transition-colors duration-300 uppercase ${pathname === '/about' ? 'text-accent' : 'text-foreground/80 hover:text-accent'}`} onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </Link>
                <Link href="/contact" className={`text-sm tracking-wider transition-colors duration-300 uppercase ${pathname === '/contact' ? 'text-accent' : 'text-foreground/80 hover:text-accent'}`} onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Overlay - Click to close menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-transparent"
          style={{ zIndex: 198 }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Menu Panel - Slides from top */}
      <div
        className={`fixed top-0 left-0 right-0 bg-black transition-transform duration-700 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ zIndex: 199, height: '92vh' }}
      >
        <div className="container mx-auto px-12 h-full flex items-center py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 w-full max-w-7xl mx-auto">
            {/* Left side - Navigation Links */}
            <div className="flex flex-col justify-between h-full -ml-8">
              <div className="flex flex-col justify-start space-y-4 mt-8">
                <Link
                  href="/projects"
                  onClick={() => setIsMenuOpen(false)}
                  className={`group relative text-4xl md:text-5xl font-light tracking-[0.15em] uppercase inline-block overflow-hidden px-2 py-1 ${
                    isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{
                    fontFamily: 'var(--font-bebas)',
                    transitionDelay: isMenuOpen ? '200ms' : '0ms'
                  }}
                >
                  <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
                    Projects
                  </span>
                  <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className={`group relative text-4xl md:text-5xl font-light tracking-[0.15em] uppercase inline-block overflow-hidden px-2 py-1 ${
                    isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{
                    fontFamily: 'var(--font-bebas)',
                    transitionDelay: isMenuOpen ? '350ms' : '0ms'
                  }}
                >
                  <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
                    About
                  </span>
                  <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className={`group relative text-4xl md:text-5xl font-light tracking-[0.15em] uppercase inline-block overflow-hidden px-2 py-1 ${
                    isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{
                    fontFamily: 'var(--font-bebas)',
                    transitionDelay: isMenuOpen ? '500ms' : '0ms'
                  }}
                >
                  <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
                    Contact
                  </span>
                  <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                </Link>
              </div>

              {/* Social Media Links - Bottom Left */}
              <div className={`flex gap-6 mt-12 transition-all duration-500 ${
                isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: isMenuOpen ? '650ms' : '0ms' }}
              >
                <Link href="https://www.linkedin.com/company/saltbox-interactive" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors duration-300" aria-label="LinkedIn">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors duration-300 opacity-50" aria-label="YouTube (Coming Soon)">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </Link>
                <Link href="https://store.steampowered.com/app/3140860/Discover_Old_DHanis/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors duration-300" aria-label="Steam">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right side - Image Panels */}
            <div className="hidden lg:grid grid-cols-2 gap-6">
              {/* Discover Old D'Hanis Panel */}
              <Link
                href="/projects/discover-old-dhanis"
                onClick={() => setIsMenuOpen(false)}
                className={`relative h-full min-h-[60vh] overflow-hidden group cursor-pointer flex items-center justify-center transition-all duration-500 ${
                  isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: isMenuOpen ? '300ms' : '0ms' }}
              >
                <Image
                  src="/images/dod-cover.jpg"
                  alt="Menu panel featuring Discover Old D'Hanis project with historic stone ruins and atmospheric landscape"
                  fill
                  className="object-cover transition-transform duration-150 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 transition-colors duration-150 group-hover:bg-black/30"></div>
                <div className="relative z-10 text-center">
                  <h3 className="text-4xl md:text-5xl font-light tracking-[0.15em] text-white uppercase" style={{ fontFamily: 'var(--font-bebas)' }}>
                    Discover Old D'Hanis
                  </h3>
                </div>
              </Link>

              {/* About Panel */}
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`relative h-full min-h-[60vh] overflow-hidden group cursor-pointer flex items-center justify-center transition-all duration-500 ${
                  isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: isMenuOpen ? '450ms' : '0ms' }}
              >
                <Image
                  src="/images/background_pic.jpg"
                  alt="Menu panel for About section showing historic architecture and heritage preservation work at Saltbox Interactive"
                  fill
                  className="object-cover transition-transform duration-150 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 transition-colors duration-150 group-hover:bg-black/30"></div>
                <div className="relative z-10 text-center">
                  <h3 className="text-4xl md:text-5xl font-light tracking-[0.15em] text-white uppercase" style={{ fontFamily: 'var(--font-bebas)' }}>
                    About Us
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}