import Link from "next/link";

type BoxButtonProps =
  | {
      href: string;
      children: React.ReactNode;
      onClick?: () => void;
      isActive?: boolean;
      className?: string;
      target?: string;
      rel?: string;
      icon?: React.ReactNode;
    }
  | {
      href?: never;
      children: React.ReactNode;
      onClick?: () => void;
      isActive?: boolean;
      className?: string;
      target?: never;
      rel?: never;
      icon?: React.ReactNode;
    };

export default function BoxButton({
  href,
  children,
  onClick,
  isActive = false,
  className = "",
  target,
  rel,
  icon,
}: BoxButtonProps) {
  const content = (
    <>
      <div
        className={`absolute inset-0 border transition-opacity duration-300 ${
          isActive ? "border-accent opacity-100" : "border-gray-500 group-hover:opacity-0"
        }`}
      ></div>
      {!isActive && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-accent"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-accent"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-accent"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-accent"></div>
        </div>
      )}
      {icon && (
        <span
          className={`relative transition-colors duration-300 ${
            isActive ? "text-accent" : "group-hover:text-accent"
          }`}
        >
          {icon}
        </span>
      )}
      <span
        className={`relative text-sm tracking-wider uppercase transition-colors duration-300 ${
          isActive ? "text-accent" : "group-hover:text-accent"
        }`}
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
        className={`group relative px-6 py-3 inline-flex items-center justify-center gap-3 transition-all duration-300 ${
          isActive ? "text-accent" : "text-gray-400"
        } ${className}`}
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
      className={`group relative px-6 py-3 flex items-center gap-3 transition-all duration-300 ${
        isActive ? "text-accent" : "text-gray-400"
      } ${className}`}
    >
      {content}
    </button>
  );
}
