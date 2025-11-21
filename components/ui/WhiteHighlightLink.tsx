import Link from "next/link";

interface WhiteHighlightLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function WhiteHighlightLink({
  href,
  children,
  className = "",
}: WhiteHighlightLinkProps) {
  return (
    <Link href={href} className={`group inline-block ${className}`}>
      <span className="relative inline-block overflow-hidden">
        <span className="relative z-10 text-gray-400 group-hover:text-black transition-colors duration-300">
          {children}
        </span>
        <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
      </span>
    </Link>
  );
}
