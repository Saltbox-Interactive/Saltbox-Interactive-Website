"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
    <div className="inline-flex items-center gap-2 group py-3 px-2 min-h-[44px]">
      <motion.span
        className="text-accent transition-all duration-300 text-base sm:text-lg"
        whileHover={{ x: -4, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        [
      </motion.span>
      <span
        className="text-base sm:text-lg font-light tracking-[0.15em] text-gray-400 group-hover:text-accent transition-colors duration-300 uppercase"
        style={{ fontFamily: "var(--font-bebas)" }}
      >
        {children}
      </span>
      <motion.span
        className="text-accent transition-all duration-300 text-base sm:text-lg"
        whileHover={{ x: 4, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        ]
      </motion.span>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`inline-block active:opacity-75 transition-opacity ${className}`}
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
      className={`inline-block active:opacity-75 transition-opacity ${className}`}
    >
      {content}
    </button>
  );
}
