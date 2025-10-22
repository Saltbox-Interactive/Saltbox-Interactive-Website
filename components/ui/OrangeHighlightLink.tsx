import Link from "next/link";

interface OrangeHighlightLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function OrangeHighlightLink({
  href,
  children,
  className = ""
}: OrangeHighlightLinkProps) {
  return (
    <Link
      href={href}
      className={`text-gray-400 hover:text-accent transition-colors duration-300 ${className}`}
    >
      {children}
    </Link>
  );
}
