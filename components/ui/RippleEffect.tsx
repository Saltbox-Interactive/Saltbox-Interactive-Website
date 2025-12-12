"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Ripple {
  x: number;
  y: number;
  id: number;
}

interface RippleEffectProps {
  color?: string;
  duration?: number;
}

export default function RippleEffect({ color = "rgba(255, 255, 255, 0.5)", duration = 600 }: RippleEffectProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
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
      }, duration);
    };

    const element = document.querySelector("[data-ripple]") as HTMLElement;
    if (element) {
      element.addEventListener("click", handleClick);
      return () => element.removeEventListener("click", handleClick);
    }
  }, [duration]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-inherit">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute rounded-full"
            style={{
              left: ripple.x,
              top: ripple.y,
              backgroundColor: color,
            }}
            initial={{
              width: 0,
              height: 0,
              opacity: 0.5,
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              width: 500,
              height: 500,
              opacity: 0,
              transition: {
                duration: duration / 1000,
                ease: "easeOut",
              },
            }}
            exit={{ opacity: 0 }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
