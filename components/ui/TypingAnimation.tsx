"use client";

import { useState, useEffect } from "react";

interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
  onComplete?: () => void;
}

export default function TypingAnimation({
  text,
  speed = 30,
  className = "",
  style = {},
  onComplete
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");

  // Typing animation - starts immediately when component mounts
  useEffect(() => {
    if (displayedText.length < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeoutId);
    } else if (displayedText.length === text.length && onComplete) {
      onComplete();
    }
  }, [displayedText, text, speed, onComplete]);

  return (
    <span className={className} style={style}>
      {displayedText}
    </span>
  );
}
