import Link from "next/link";

type BracketButtonProps =
  | {
      href: string;
      children: React.ReactNode;
      onClick?: () => void;
      className?: string;
      target?: string;
      rel?: string;
      type?: never;
    }
  | {
      href?: never;
      children: React.ReactNode;
      onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
      className?: string;
      type?: "button" | "submit" | "reset";
      target?: never;
      rel?: never;
    };

export default function BracketButton({
  href,
  children,
  onClick,
  className = "",
  type = "button",
  target,
  rel,
}: BracketButtonProps) {
  const content = (
    <>
      <span className="text-accent transition-all duration-300 group-hover:-translate-x-1 text-base sm:text-lg">
        [
      </span>
      <span
        className="text-base sm:text-lg font-light tracking-[0.15em] text-gray-400 group-hover:text-accent transition-colors duration-300 uppercase"
        style={{ fontFamily: "var(--font-bebas)" }}
      >
        {children}
      </span>
      <span className="text-accent transition-all duration-300 group-hover:translate-x-1 text-base sm:text-lg">
        ]
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`inline-flex items-center gap-2 group py-2 ${className}`}
        target={target}
        rel={rel}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center gap-2 group py-2 ${className}`}
    >
      {content}
    </button>
  );
}
