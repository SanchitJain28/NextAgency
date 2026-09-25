import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.scalefront.io";
  const lastModified = new Date();

  const blogPosts = await getAllPosts();

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    ...blogUrls,
    {
      url: baseUrl,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${baseUrl}/images/og-headless-woocommerce.png`],
    },
    // About page with profile image
    {
      url: `${baseUrl}/about-us`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${baseUrl}/images/og-headless-woocommerce.png`],
    },
    // Services page with service images
    {
      url: `${baseUrl}/pricing`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${baseUrl}/images/og-headless-woocommerce.png`],
    },
    // Individual Service Pages (High Priority for SEO)
    {
      url: `${baseUrl}/services/custom-shopify-development`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/headless-commerce`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/performance-optimization`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/custom-shopify-apps`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/mobile-apps`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/theme-development`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/backend-api`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/cro-optimization`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/custom-features`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/shopify-migration-services`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/shopify-plus-migration`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/integrations`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/audit-consulting`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Earn page (Shopify auditor)
    {
      url: `${baseUrl}/earn`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Contact page
    {
      url: `${baseUrl}/contact-us`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Blog main page
    {
      url: `${baseUrl}/blog`,
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Dynamically generated blog posts

    // Work / Portfolio Hub
    {
      url: `${baseUrl}/work`,
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Individual project pages & Case Studies
    {
      url: `${baseUrl}/work/industrial-supply-direct`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        `${baseUrl}/portfolio/industrial-supply-direct/covers/cover.png`,
      ],
    },
    {
      url: `${baseUrl}/work/iron-crate`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${baseUrl}/portfolio/iron-crate/covers/cover.png`],
    },
    {
      url: `${baseUrl}/work/recovrx`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${baseUrl}/portfolio/recovrx/covers/cover.png`],
    },
    {
      url: `${baseUrl}/work/flexform-athletics`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${baseUrl}/portfolio/flexform-athletics/covers/cover.png`],
    },
    {
      url: `${baseUrl}/work/maison-luxe`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${baseUrl}/portfolio/maison-luxe/covers/cover.png`],
    },
    // Showcase & Apps
    {
      url: `${baseUrl}/portfolio`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/upsell-cross-sell-app-shopify`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/upsell-cross-sell-app/privacy-policy`,
      lastModified: lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
