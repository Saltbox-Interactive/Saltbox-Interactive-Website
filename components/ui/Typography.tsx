import { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

// Heading component with Bebas Neue font
export function Heading({
  children,
  className = "",
  size = "base",
}: TypographyProps & {
  size?: "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
}) {
  const sizeClasses = {
    sm: "text-2xl md:text-3xl",
    base: "text-3xl md:text-4xl",
    lg: "text-4xl md:text-5xl",
    xl: "text-5xl md:text-6xl lg:text-7xl",
    "2xl": "text-6xl md:text-7xl lg:text-8xl",
    "3xl": "text-7xl md:text-8xl lg:text-9xl",
    "4xl": "text-8xl md:text-9xl",
  };

  return (
    <h2
      className={`font-light tracking-[0.15em] text-white uppercase ${sizeClasses[size]} ${className}`}
      style={{ fontFamily: "var(--font-bebas)" }}
    >
      {children}
    </h2>
  );
}

// Body text component with Work Sans font
export function Body({
  children,
  className = "",
  size = "base",
}: TypographyProps & {
  size?: "sm" | "base" | "lg" | "xl";
}) {
  const sizeClasses = {
    sm: "text-base md:text-lg",
    base: "text-lg md:text-xl",
    lg: "text-xl md:text-2xl",
    xl: "text-2xl md:text-3xl",
  };

  return (
    <p
      className={`text-gray-300 leading-relaxed ${sizeClasses[size]} ${className}`}
      style={{ fontFamily: "var(--font-work-sans)" }}
    >
      {children}
    </p>
  );
}

// Export as namespace for cleaner imports
const Typography = {
  Heading,
  Body,
};

export default Typography;
