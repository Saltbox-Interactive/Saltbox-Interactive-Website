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
    <div className={`relative w-full max-w-[1800px] mx-auto px-6 ${className}`}>
      <div className="flex items-start justify-between gap-24">
        {/* Image */}
        <div
          className={`flex-shrink-0 w-[40vw] max-w-[550px] ${
            isImageLeft ? "ml-48" : "ml-auto order-2"
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
          className={`flex-shrink-0 max-w-[450px] pt-48 ${
            isImageLeft ? "ml-auto mr-32" : "ml-48 order-1"
          }`}
        >
          <div className="mb-12">
            <StatusBadge className="mb-6">{status}</StatusBadge>
            <Typography.Heading size="lg" className="mb-8 text-foreground">
              {title}
            </Typography.Heading>
          </div>

          <div className="mb-12">
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
