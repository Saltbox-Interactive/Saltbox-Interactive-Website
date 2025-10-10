import Link from "next/link";

interface BracketLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
}

export default function BracketLink({
  href,
  children,
  onClick,
  className = "",
  target,
  rel,
}: BracketLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`inline-flex items-center gap-2 group ${className}`}
      target={target}
      rel={rel}
    >
      <span className="text-accent transition-all duration-300 group-hover:-translate-x-1 text-lg">
        [
      </span>
      <span
        className="text-lg font-light tracking-[0.15em] text-gray-400 group-hover:text-accent transition-colors duration-300 uppercase"
        style={{ fontFamily: "var(--font-bebas)" }}
      >
        {children}
      </span>
      <span className="text-accent transition-all duration-300 group-hover:translate-x-1 text-lg">
        ]
      </span>
    </Link>
  );
}
