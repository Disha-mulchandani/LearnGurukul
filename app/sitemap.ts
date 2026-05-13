import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://learnora-academy.vercel.app',
      lastModified: new Date(),
    },
  ]
}