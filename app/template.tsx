"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [displayPath, setDisplayPath] = useState(pathname);

  useEffect(() => {
    setDisplayPath(pathname);
  }, [pathname]);

  return (
    <>
      {/* Full screen fade overlay - covers everything including header */}
      <motion.div
        key={`overlay-${displayPath}`}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 bg-black pointer-events-none z-[999999]"
      />
      <Header />
      {children}
    </>
  );
}
