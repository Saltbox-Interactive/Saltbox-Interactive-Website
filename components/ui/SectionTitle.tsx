interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <h3
      className={`text-lg sm:text-xl font-light tracking-[0.2em] text-accent uppercase ${className}`}
      style={{ fontFamily: "var(--font-bebas)" }}
    >
      {children}
    </h3>
  );
}
