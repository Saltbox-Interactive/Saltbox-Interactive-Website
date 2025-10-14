"use client";

import ParallaxImage from "@/components/ParallaxImage";
import Typography from "@/components/ui/Typography";
import StatusBadge from "@/components/ui/StatusBadge";
import BracketLink from "@/components/ui/BracketLink";

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
    <div className={`relative w-full max-w-[1800px] mx-auto px-4 sm:px-6 ${className}`}>
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-12 lg:gap-24">
        {/* Image */}
        <div
          className={`w-full lg:flex-shrink-0 lg:w-[40vw] lg:max-w-[550px] ${
            isImageLeft ? "lg:ml-48" : "lg:ml-auto lg:order-2"
          }`}
        >
          <ParallaxImage
            src={imageSrc}
            alt={imageAlt}
            className="w-full aspect-[2/3]"
            intensity={1}
            direction="vertical"
          />
        </div>

        {/* Content */}
        <div
          className={`w-full lg:flex-shrink-0 lg:max-w-[450px] lg:pt-48 ${
            isImageLeft ? "lg:ml-auto lg:mr-32" : "lg:ml-48 lg:order-1"
          }`}
        >
          <div className="mb-8 sm:mb-12">
            <StatusBadge className="mb-4 sm:mb-6">{status}</StatusBadge>
            <Typography.Heading size="lg" className="mb-6 sm:mb-8 text-foreground">
              {title}
            </Typography.Heading>
          </div>

          <div className="mb-8 sm:mb-12">
            <Typography.Body size="base">{description}</Typography.Body>
          </div>

          <div className="inline-block">
            <BracketLink href={linkHref}>{linkText}</BracketLink>
          </div>
        </div>
      </div>
    </div>
  );
}
