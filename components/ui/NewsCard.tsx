"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { urlForImage } from "@/lib/sanity/image";

interface NewsCardProps {
  slug: string;
  title: string;
  coverImage: any;
  date: string;
  category: string;
  project?: string;
  author?: string;
}

export default function NewsCard({
  slug,
  title,
  coverImage,
  date,
  category,
  project,
  author,
}: NewsCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  // Handle both Sanity images and regular image paths
  const imageUrl = coverImage
    ? typeof coverImage === "string"
      ? coverImage
      : urlForImage(coverImage).width(800).height(450).url()
    : "/images/placeholder.jpg";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0.5, y: 0.5 });
  };

  const rotateX = (mousePosition.y - 0.5) * -10;
  const rotateY = (mousePosition.x - 0.5) * 10;

  return (
    <Link
      href={`/news/${slug}`}
      className="group block w-full"
      aria-label={`Read article: ${title}`}
    >
      {/* Card */}
      <motion.div
        ref={cardRef}
        className="overflow-hidden relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX,
          rotateY,
        }}
      >

        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={imageUrl}
            alt=""
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="pt-6">
          {/* Date & Tags */}
          <div className="flex items-center gap-3 mb-3 overflow-hidden">
            <motion.span
              className="text-xs text-gray-500"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {new Date(date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </motion.span>
            <span className="text-gray-700">|</span>
            <motion.div
              className="flex items-center gap-2 text-xs sm:text-[10px] uppercase tracking-wider"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              {project && (
                <>
                  <span className="text-gray-400">{project}</span>
                  <span className="text-gray-700">•</span>
                </>
              )}
              <span className="text-gray-400">{category}</span>
            </motion.div>
          </div>

          {/* Author */}
          {author && (
            <motion.div
              className="mb-2"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                By {author}
              </span>
            </motion.div>
          )}

          {/* Title */}
          <motion.h3
            className="text-xl text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300 line-clamp-2"
            style={{ fontFamily: "var(--font-work-sans)" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            {title}
          </motion.h3>
        </div>
      </motion.div>
    </Link>
  );
}
