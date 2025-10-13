// Export all schema components
export { default as BreadcrumbSchema } from "./BreadcrumbSchema";
export { default as FAQSchema } from "./FAQSchema";
export { default as VideoSchema } from "./VideoSchema";
export { default as ArticleSchema } from "./ArticleSchema";
export { default as ReviewSchema } from "./ReviewSchema";
export { default as LocalBusinessSchema } from "./LocalBusinessSchema";

// Re-export existing schemas for convenience
export { VideoGameSchema, OrganizationSchema, BreadcrumbSchema as LegacyBreadcrumbSchema } from "../StructuredData";
