interface StatusBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function StatusBadge({ children, className = "" }: StatusBadgeProps) {
  return (
    <p className={`text-accent/70 text-xs tracking-[0.4em] uppercase ${className}`}>
      {children}
    </p>
  );
}
