"use client";

import { useState, useEffect } from "react";

interface UseTypingEffectOptions {
  text: string;
  enabled?: boolean;
  speed?: number;
}

export function useTypingEffect({
  text,
  enabled = true,
  speed = 50,
}: UseTypingEffectOptions) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!enabled || displayText.length >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayText(text.slice(0, displayText.length + 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [enabled, displayText, text, speed]);

  return displayText;
}
