export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Saltbox Interactive",
    "url": "https://saltboxinteractive.com",
    "logo": "https://saltboxinteractive.com/images/dod-cover.jpg",
    "description": "Saltbox Interactive creates immersive virtual environments where history comes alive. We preserve the past through interactive digital experiences.",
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "Michael Salton"
    },
    "sameAs": [
      "https://store.steampowered.com/developer/saltboxinteractive"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "contact@saltboxinteractive.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function VideoGameSchema({ project }: { project: any }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": project.title,
    "description": project.description,
    "genre": project.genre,
    "gamePlatform": project.platforms,
    "datePublished": project.releaseDate,
    "author": {
      "@type": "Organization",
      "name": "Saltbox Interactive",
      "founder": {
        "@type": "Person",
        "name": "Michael Salton"
      }
    },
    "creator": {
      "@type": "Person",
      "name": "Michael Salton"
    },
    "image": project.thumbnail,
    "aggregateRating": project.rating ? {
      "@type": "AggregateRating",
      "ratingValue": project.rating,
      "ratingCount": project.ratingCount || 1
    } : undefined
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
