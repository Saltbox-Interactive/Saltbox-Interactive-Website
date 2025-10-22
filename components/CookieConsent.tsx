"use client";

import { useState, useEffect } from "react";
import BracketButton from "./ui/BracketButton";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    } else if (consent === "accepted") {
      // Enable Google Analytics
      enableAnalytics();
    }
  }, []);

  const enableAnalytics = () => {
    // Enable Google Analytics by setting consent
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
  };

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    enableAnalytics();
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-accent/30 p-6 z-[200]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <p className="text-gray-300 text-sm md:text-base">
              We use cookies to analyze site traffic and improve your experience. By clicking "Accept", you consent to our use of cookies for analytics purposes.
              {' '}
              <a href="/privacy" className="text-accent hover:underline">
                Learn more
              </a>
            </p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <button
              onClick={handleDecline}
              className="px-6 py-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-bebas)' }}
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-accent hover:bg-accent/80 text-black transition-colors duration-300 text-sm uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-bebas)' }}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
