import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vastraaglobal.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },

    {
      url: `${baseUrl}/blogs/what-is-dobby-fabric`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/blogs/what-is-slub-yarn`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/blogs/what-is-poplin-fabric`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...[
      "wholesale-cotton-fabrics",
      "wholesale-silk-fabrics",
      "wholesale-linen-fabrics",
      "wholesale-blended-fabrics",
      "wholesale-jute-fabric",
      "wholesale-modal-fabric",
      "wholesale-rayon-fabric",
      "wholesale-viscose-fabric",
      "wholesale-tencel-fabric",
    ].map((route) => ({
      url: `${baseUrl}/fabrics/${route}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    })),
  ];
}