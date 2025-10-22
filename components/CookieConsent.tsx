"use client";

import { useState, useEffect } from "react";
import BracketButton from "./ui/BracketButton";
import BoxButton from "./ui/BoxButton";

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
    <div className="fixed bottom-8 left-8 bg-black border border-accent/30 p-6 z-[200] max-w-md shadow-2xl">
      <h3
        className="text-2xl font-light tracking-wider text-accent mb-4 uppercase"
        style={{ fontFamily: 'var(--font-bebas)' }}
      >
        Cookie Consent
      </h3>

      <p className="text-gray-300 text-sm mb-6 leading-relaxed">
        We use cookies to analyze site traffic and improve your experience. By clicking "Accept", you consent to our use of cookies for analytics purposes.
        {' '}
        <a href="/privacy" className="text-accent hover:underline">
          Learn more
        </a>
      </p>

      <div className="flex gap-3">
        <BracketButton onClick={handleDecline}>
          Decline
        </BracketButton>
        <BoxButton onClick={handleAccept}>
          Accept
        </BoxButton>
      </div>
    </div>
  );
}
