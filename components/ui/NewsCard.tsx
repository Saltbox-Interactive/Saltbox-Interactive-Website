import Link from "next/link";
import Image from "next/image";
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
  // Handle both Sanity images and regular image paths
  const imageUrl = coverImage
    ? typeof coverImage === 'string'
      ? coverImage
      : urlForImage(coverImage).width(800).height(450).url()
    : '/images/placeholder.jpg';
  return (
    <Link
      href={`/news/${slug}`}
      className="group block w-full"
    >
      {/* Card */}
      <div className="overflow-hidden">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="pt-6">
          {/* Date & Tags */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs text-gray-500">
              {new Date(date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
            <span className="text-gray-700">|</span>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider">
              {project && (
                <>
                  <span className="text-gray-400">{project}</span>
                  <span className="text-gray-700">•</span>
                </>
              )}
              <span className="text-gray-400">{category}</span>
            </div>
          </div>

          {/* Author */}
          {author && (
            <div className="mb-2">
              <span className="text-sm text-gray-400">By {author}</span>
            </div>
          )}

          {/* Title */}
          <h3
            className="text-xl text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300 line-clamp-2"
            style={{ fontFamily: "var(--font-work-sans)" }}
          >
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
