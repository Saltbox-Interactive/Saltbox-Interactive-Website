import Link from "next/link";

type WhiteBoxButtonProps =
  | {
      href: string;
      children: React.ReactNode;
      onClick?: () => void;
      className?: string;
      target?: string;
      rel?: string;
      icon?: React.ReactNode;
    }
  | {
      href?: never;
      children: React.ReactNode;
      onClick?: () => void;
      className?: string;
      target?: never;
      rel?: never;
      icon?: React.ReactNode;
    };

export default function WhiteBoxButton({
  href,
  children,
  onClick,
  className = "",
  target,
  rel,
  icon,
}: WhiteBoxButtonProps) {
  const content = (
    <>
      <div className="absolute inset-0 bg-white border border-white transition-opacity duration-300 group-hover:opacity-0"></div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white"></div>
      </div>
      {icon && (
        <span className="relative text-black transition-colors duration-300 group-hover:text-white z-10">
          {icon}
        </span>
      )}
      <span
        className="relative text-sm tracking-wider uppercase transition-colors duration-300 text-black group-hover:text-white z-10"
        style={{ fontFamily: "var(--font-bebas)" }}
      >
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`group relative px-6 py-3 inline-flex items-center justify-center gap-3 transition-all duration-300 ${className}`}
        target={target}
        rel={rel}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`group relative px-6 py-3 flex items-center gap-3 transition-all duration-300 ${className}`}
    >
      {content}
    </button>
  );
}
