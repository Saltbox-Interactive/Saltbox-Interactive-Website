"use client";

import { useState, useRef, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Ripple {
  x: number;
  y: number;
  id: number;
}

interface RippleButtonProps {
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  rippleColor?: string;
  rippleDuration?: number;
}

export default function RippleButton({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  rippleColor = "rgba(212, 165, 116, 0.4)",
  rippleDuration = 600,
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newRipple: Ripple = {
        x,
        y,
        id: Date.now(),
      };

      setRipples((prev) => [...prev, newRipple]);

      // Remove ripple after animation completes
      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
      }, rippleDuration);
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      ref={buttonRef}
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Ripple effect container */}
      <span className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.span
              key={ripple.id}
              className="absolute rounded-full"
              style={{
                left: ripple.x,
                top: ripple.y,
                backgroundColor: rippleColor,
              }}
              initial={{
                width: 0,
                height: 0,
                opacity: 0.6,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                width: 500,
                height: 500,
                opacity: 0,
                transition: {
                  duration: rippleDuration / 1000,
                  ease: "easeOut",
                },
              }}
              exit={{ opacity: 0 }}
            />
          ))}
        </AnimatePresence>
      </span>

      {/* Button content */}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
