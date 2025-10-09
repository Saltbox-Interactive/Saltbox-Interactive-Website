"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Header from "@/components/layout/Header";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
    >
      <Header />
      {children}
    </motion.div>
  );
}
