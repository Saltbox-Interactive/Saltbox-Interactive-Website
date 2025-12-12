"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  type?: "characters" | "words" | "lines";
  animateOnView?: boolean;
  staggerDuration?: number;
}

export default function SplitText({
  children,
  className = "",
  delay = 0,
  type = "characters",
  animateOnView = true,
  staggerDuration = 0.03,
}: SplitTextProps) {
  // Split text based on type
  const splitContent = () => {
    switch (type) {
      case "words":
        return children.split(" ");
      case "lines":
        return children.split("\n");
      case "characters":
      default:
        return children.split("");
    }
  };

  const content = splitContent();

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: staggerDuration,
        delayChildren: delay,
      },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate={animateOnView ? undefined : "visible"}
      whileInView={animateOnView ? "visible" : undefined}
      viewport={animateOnView ? { once: true, margin: "-100px" } : undefined}
      style={{ perspective: "400px" }}
    >
      {content.map((item, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{
            display: "inline-block",
            transformOrigin: "bottom",
            marginRight: type === "words" ? "0.25em" : undefined,
            whiteSpace: type === "words" ? "nowrap" : undefined,
          }}
        >
          {item === " " ? "\u00A0" : item}
        </motion.span>
      ))}
    </motion.span>
  );
}
