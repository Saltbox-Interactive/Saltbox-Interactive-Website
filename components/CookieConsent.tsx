"use client";

import { useState, useEffect } from "react";
import BracketButton from "./ui/BracketButton";
import WhiteBoxButton from "./ui/WhiteBoxButton";

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
    <div className="fixed bottom-8 left-8 bg-[#1a1a1a] p-6 z-[200] max-w-2xl shadow-2xl">
      <h3
        className="text-xl font-light tracking-wider text-white mb-2 uppercase"
        style={{ fontFamily: 'var(--font-bebas)' }}
      >
        Cookie Consent
      </h3>

      <p className="text-white text-sm leading-relaxed mb-4">
        We use cookies to analyze site traffic and improve your experience. By clicking "Accept", you consent to our use of cookies for analytics purposes.
        {' '}
        <a href="/privacy" className="text-accent hover:underline">
          Learn more
        </a>
      </p>

      <div className="flex gap-6 justify-end">
        <BracketButton onClick={handleDecline}>
          Decline
        </BracketButton>
        <WhiteBoxButton onClick={handleAccept}>
          Accept
        </WhiteBoxButton>
      </div>
    </div>
  );
}
