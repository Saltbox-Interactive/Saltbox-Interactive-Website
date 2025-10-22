import Link from "next/link";
import Image from "next/image";

interface NewsCardProps {
  slug: string;
  title: string;
  coverImage: string;
  date: string;
  category: string;
}

export default function NewsCard({
  slug,
  title,
  coverImage,
  date,
  category,
}: NewsCardProps) {
  return (
    <Link
      href={`/news/${slug}`}
      className="group flex-shrink-0 w-[450px]"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Card */}
      <div className="overflow-hidden">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="pt-6">
          {/* Date & Category */}
          <div className="flex items-center gap-3 mb-3 text-xs uppercase tracking-wider">
            <span className="text-gray-500">
              {new Date(date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
            <span className="text-gray-700">|</span>
            <span className="text-accent">{category}</span>
          </div>

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
