import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://goodluck-steel.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://goodluck-steel.vercel.app/luckyshiba',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://goodluck-steel.vercel.app/mypage',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
  ];
}
