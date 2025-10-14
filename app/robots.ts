import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
        crawlDelay: 1,
      },
      // Optimize for major search engines
      {
        userAgent: ['Googlebot', 'Googlebot-Image'],
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: ['Bingbot', 'msnbot'],
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://saltboxinteractive.com/sitemap.xml',
    host: 'https://saltboxinteractive.com',
  }
}
