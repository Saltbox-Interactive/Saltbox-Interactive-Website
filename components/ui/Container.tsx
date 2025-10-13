import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  padding?: boolean;
}

export default function Container({
  children,
  className = "",
  size = "xl",
  padding = true,
}: ContainerProps) {
  const sizeClasses = {
    sm: "max-w-3xl",
    md: "max-w-4xl",
    lg: "max-w-5xl",
    xl: "max-w-6xl",
    "2xl": "max-w-7xl",
    full: "max-w-[1800px]",
  };

  const paddingClass = padding ? "px-6 md:px-12" : "";

  return (
    <div className={`container mx-auto ${sizeClasses[size]} ${paddingClass} ${className}`}>
      {children}
    </div>
  );
}
