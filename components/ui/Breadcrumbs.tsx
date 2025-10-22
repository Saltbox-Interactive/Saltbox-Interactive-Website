import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center gap-2 text-sm text-gray-400">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              {!isLast && item.href ? (
                <>
                  <Link
                    href={item.href}
                    className="hover:text-accent transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                  <span className="text-gray-600">|</span>
                </>
              ) : (
                <span className="text-accent">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
