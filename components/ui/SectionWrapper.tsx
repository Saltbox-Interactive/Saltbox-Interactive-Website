import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  noise?: boolean;
  background?: "black" | "transparent";
}

export default function SectionWrapper({
  children,
  className = "",
  noise = true,
  background = "black",
}: SectionWrapperProps) {
  const bgClass = background === "black" ? "bg-black" : "";

  return (
    <section className={`relative ${bgClass} ${className}`}>
      {noise && <div className="absolute inset-0 bg-noise opacity-5"></div>}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
