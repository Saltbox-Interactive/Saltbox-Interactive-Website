"use client";

import { motion } from "framer-motion";
import ParallaxImage from "@/components/ParallaxImage";
import Typography from "@/components/ui/Typography";
import StatusBadge from "@/components/ui/StatusBadge";
import BracketButton from "@/components/ui/BracketButton";
import AnimatedHeading from "@/components/ui/AnimatedHeading";

interface ProjectShowcaseProps {
  imageSrc: string;
  imageAlt: string;
  status: string;
  title: string;
  description: string;
  linkHref: string;
  linkText?: string;
  imagePosition?: "left" | "right";
  className?: string;
}

export default function ProjectShowcase({
  imageSrc,
  imageAlt,
  status,
  title,
  description,
  linkHref,
  linkText = "Learn More",
  imagePosition = "left",
  className = "",
}: ProjectShowcaseProps) {
  const isImageLeft = imagePosition === "left";

  return (
    <motion.div
      className={`relative w-full max-w-[1800px] mx-auto px-4 sm:px-6 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-12 lg:gap-24">
        {/* Image */}
        <motion.div
          className={`w-full lg:flex-shrink-0 lg:w-[40vw] lg:max-w-[550px] overflow-hidden ${
            isImageLeft ? "lg:ml-48" : "lg:ml-auto lg:order-2"
          }`}
          initial={{ opacity: 0, x: isImageLeft ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <ParallaxImage
              src={imageSrc}
              alt={imageAlt}
              className="w-full aspect-[2/3]"
              intensity={1}
              direction="vertical"
            />
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          className={`w-full lg:flex-shrink-0 lg:max-w-[450px] lg:pt-48 ${
            isImageLeft ? "lg:ml-auto lg:mr-32" : "lg:ml-48 lg:order-1"
          }`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <StatusBadge className="mb-4 sm:mb-6">{status}</StatusBadge>
            <AnimatedHeading size="lg" className="mb-6 sm:mb-8 text-foreground" animationType="words">
              {title}
            </AnimatedHeading>
          </motion.div>

          <motion.div
            className="mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Typography.Body size="base">{description}</Typography.Body>
          </motion.div>

          <motion.div
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <BracketButton href={linkHref}>{linkText}</BracketButton>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
