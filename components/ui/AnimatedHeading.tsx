"use client";

import { ReactNode } from "react";
import SplitText from "./SplitText";

interface AnimatedHeadingProps {
  children: string;
  className?: string;
  size?: "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  animationType?: "characters" | "words" | "lines";
  delay?: number;
}

export default function AnimatedHeading({
  children,
  className = "",
  size = "base",
  animationType = "words",
  delay = 0,
}: AnimatedHeadingProps) {
  const sizeClasses = {
    sm: "text-xl sm:text-2xl md:text-3xl",
    base: "text-2xl sm:text-3xl md:text-4xl",
    lg: "text-3xl sm:text-4xl md:text-5xl",
    xl: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
    "2xl": "text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
    "3xl": "text-6xl sm:text-7xl md:text-8xl lg:text-9xl",
    "4xl": "text-7xl sm:text-8xl md:text-9xl",
  };

  return (
    <h2
      className={`font-light tracking-[0.15em] text-white uppercase ${sizeClasses[size]} ${className}`}
      style={{ fontFamily: "var(--font-bebas)" }}
    >
      <SplitText type={animationType} delay={delay}>
        {children}
      </SplitText>
    </h2>
  );
}
