"use client";

import { useState, useEffect } from "react";
import { COLORS } from "@/lib/constants";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookie-consent");
    if (!hasConsented) {
      setShowBanner(true);
      // Delay visibility for animation
      setTimeout(() => setIsVisible(true), 100);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
    // Wait for animation to complete before removing from DOM
    setTimeout(() => setShowBanner(false), 300);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);
  };

  if (!showBanner) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent banner"
    >
      <div className="container mx-auto max-w-6xl">
        <div
          className="relative border border-white/20 p-6 md:p-8"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.95)" }}
        >
          {/* Noise overlay */}
          <div
            className="absolute inset-0 opacity-[0.015] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3
                className="text-xl md:text-2xl font-light tracking-wider text-white mb-2"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                Cookie Notice
              </h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                We use essential cookies to ensure our website functions properly. We do not use
                tracking or advertising cookies. By continuing to use this site, you agree to our
                use of essential cookies.{" "}
                <a
                  href="/privacy"
                  className="underline hover:text-accent transition-colors"
                >
                  Learn more
                </a>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={declineCookies}
                className="group relative px-6 py-3 transition-all duration-300 whitespace-nowrap"
                aria-label="Decline cookies"
              >
                {/* Border animation on hover */}
                <div className="absolute inset-0 border border-gray-500 group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-accent"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-accent"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-accent"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-accent"></div>
                </div>
                <span className="relative text-gray-400 group-hover:text-accent transition-colors duration-300 text-sm tracking-wider uppercase">
                  Decline
                </span>
              </button>

              <button
                onClick={acceptCookies}
                className="group relative px-6 py-3 transition-all duration-300 whitespace-nowrap"
                aria-label="Accept cookies"
              >
                {/* Border animation on hover */}
                <div className="absolute inset-0 border border-white/30 group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-accent"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-accent"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-accent"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-accent"></div>
                </div>
                <span
                  className="relative text-white group-hover:text-accent transition-colors duration-300 text-sm tracking-wider uppercase"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  Accept
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
