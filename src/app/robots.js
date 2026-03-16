export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        // Block AI scrapers from training on your content
        userAgent: ['GPTBot', 'CCBot', 'anthropic-ai', 'Google-Extended'],
        disallow: ['/'],
      },
    ],
    sitemap: 'https://srishtisolarpower.com/sitemap.xml',
  }
}