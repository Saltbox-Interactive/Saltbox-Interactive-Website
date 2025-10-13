interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  url?: string;
  logo?: string;
  email?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  telephone?: string;
  sameAs?: string[]; // Social media URLs
}

export default function LocalBusinessSchema({
  name = "Saltbox Interactive",
  description = "Creating immersive virtual environments where history comes alive through interactive digital experiences.",
  url = "https://saltboxinteractive.com",
  logo = "https://saltboxinteractive.com/images/saltbox-logo-blank.png",
  email,
  address,
  telephone,
  sameAs = [
    "https://www.linkedin.com/company/saltbox-interactive",
    "https://store.steampowered.com/app/3140860/Discover_Old_DHanis/",
  ],
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    description,
    url,
    logo: {
      "@type": "ImageObject",
      url: logo,
    },
    ...(email && { email }),
    ...(telephone && { telephone }),
    ...(address && {
      address: {
        "@type": "PostalAddress",
        ...(address.streetAddress && { streetAddress: address.streetAddress }),
        ...(address.addressLocality && { addressLocality: address.addressLocality }),
        ...(address.addressRegion && { addressRegion: address.addressRegion }),
        ...(address.postalCode && { postalCode: address.postalCode }),
        ...(address.addressCountry && { addressCountry: address.addressCountry }),
      },
    }),
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
