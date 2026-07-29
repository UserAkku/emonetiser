import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://emonetiser.com"; // PLACEHOLDER

  const routes = [
    "",
    "/publishers/web-monetization",
    "/publishers/app-monetization",
    "/publishers/ctv-monetization",
    "/advertisers/programmatic-advertising",
    "/advertisers/omnichannel-advertising",
    "/advertisers/retargeting",
    "/advertisers/audience-targeting",
    "/advertisers/brand-awareness",
    "/company/about",
    "/company/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
