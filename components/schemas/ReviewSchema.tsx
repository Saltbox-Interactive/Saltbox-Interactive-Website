interface Review {
  author: string;
  datePublished: string;
  reviewBody: string;
  reviewRating: {
    ratingValue: number;
    bestRating?: number;
  };
}

interface ReviewSchemaProps {
  itemName: string;
  itemType?: "Product" | "VideoGame" | "SoftwareApplication";
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
    bestRating?: number;
  };
  reviews?: Review[];
}

export default function ReviewSchema({
  itemName,
  itemType = "VideoGame",
  aggregateRating,
  reviews,
}: ReviewSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": itemType,
    name: itemName,
    ...(aggregateRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: aggregateRating.ratingValue,
        reviewCount: aggregateRating.reviewCount,
        bestRating: aggregateRating.bestRating || 5,
      },
    }),
    ...(reviews && {
      review: reviews.map((review) => ({
        "@type": "Review",
        author: {
          "@type": "Person",
          name: review.author,
        },
        datePublished: review.datePublished,
        reviewBody: review.reviewBody,
        reviewRating: {
          "@type": "Rating",
          ratingValue: review.reviewRating.ratingValue,
          bestRating: review.reviewRating.bestRating || 5,
        },
      })),
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
