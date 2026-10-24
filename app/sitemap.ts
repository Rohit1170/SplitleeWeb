import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const SITE_URL = 'https://splitlee-weld.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/privacy-policy`, changeFrequency: 'yearly', priority: 0.5 },
  ];
}
