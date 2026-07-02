import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://learngurukul.com",
      lastModified: new Date(),
    },
    {
      url: "https://learngurukul.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://learngurukul.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://learngurukul.com/courses",
      lastModified: new Date(),
    },
  ];
}