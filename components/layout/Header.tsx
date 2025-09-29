"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">
            Saltbox Interactive
          </Link>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            <Link href="/#games" className="text-gray-300 hover:text-white transition-colors">
              Games
            </Link>
            <Link href="/#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/#news" className="text-gray-300 hover:text-white transition-colors">
              News
            </Link>
            <Link href="/#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col gap-4">
              <Link href="/#games" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                Games
              </Link>
              <Link href="/#about" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/#news" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                News
              </Link>
              <Link href="/#contact" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}