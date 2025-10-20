import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sfwn.me",
      lastModified: new Date(),
      priority: 1,
      changeFrequency: "weekly",
      images: ["https://sfwn.me/sfwn-orange-rounded-20.webp"],
      alternates: {
        languages: {
          en: "https://sfwn.me/en",
          ar: "https://sfwn.me/ar",
        },
      },
    },
  ];
}
