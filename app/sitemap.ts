import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://learnora-academy.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://learnora-academy.vercel.app/courses",
      lastModified: new Date(),
    },
    {
      url: "https://learnora-academy.vercel.app/sat-math-preparation",
      lastModified: new Date(),
    },
    {
      url: "https://learnora-academy.vercel.app/online-python-classes",
      lastModified: new Date(),
    },
  ];
}
