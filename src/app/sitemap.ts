import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog/posts";

type Entry = MetadataRoute.Sitemap[number];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.scalefront.io";

  const ownImage = (src?: string): string[] =>
    src && src.startsWith("/") ? [`${baseUrl}${src}`] : [];

  const page = (
    path: string,
    priority: number,
    changeFrequency: Entry["changeFrequency"] = "monthly",
    images?: string[],
  ): Entry => ({
    url: `${baseUrl}${path}`,
    changeFrequency,
    priority,
    ...(images?.length ? { images: images.map((i) => `${baseUrl}${i}`) } : {}),
  });

  const blogPosts = await getAllPosts();
  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post) => {
    const images = ownImage(post.image);
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.date),
      changeFrequency: "weekly",
      priority: 0.7,
      ...(images.length ? { images } : {}),
    };
  });

  const latestPostDate = blogPosts.length
    ? new Date(blogPosts[0].updatedAt || blogPosts[0].date)
    : undefined;

  return [
    // Core pages
    page("/", 1),
    page("/about-us", 0.8),
    page("/pricing", 0.8),
    page("/contact-us", 0.7),
    page("/earn", 0.8),

    page("/services/custom-shopify-development", 0.9),
    page("/services/headless-commerce", 0.9),
    page("/services/performance-optimization", 0.9),
    page("/services/custom-shopify-apps", 0.9),
    page("/services/mobile-apps", 0.9),
    page("/services/theme-development", 0.9),
    page("/services/backend-api", 0.9),
    page("/services/cro-optimization", 0.9),
    page("/services/custom-features", 0.9),
    page("/services/shopify-migration-services", 0.9),
    page("/services/shopify-plus-migration", 0.9),
    page("/services/integrations", 0.9),
    page("/services/audit-consulting", 0.9),

    // Blog
    { ...page("/blog", 0.9, "weekly"), lastModified: latestPostDate },
    ...blogUrls,
    // Static (non-markdown) blog page
    page(
      "/blog/headless-woocommerce-vs-traditional-woocommerce",
      0.8,
      "weekly",
    ),

    page("/work", 0.9, "weekly"),
    page("/work/aesthetika", 0.8, "monthly", [
      "/portfolio/aesthetica/covers/cover.png",
      "/portfolio/aesthetica/home/home-1.png",
      "/portfolio/aesthetica/home/home-2.png",
      "/portfolio/aesthetica/home/home-3.png",
      "/portfolio/aesthetica/collection/collection-1.png",
      "/portfolio/aesthetica/collection/collection-2.png",
      "/portfolio/aesthetica/product/product-1.png",
      "/portfolio/aesthetica/product/product-2.png",
      "/portfolio/aesthetica/cart/cart.png",
    ]),
    page("/work/360-alpha", 0.8, "monthly", [
      "/portfolio/360-alpha/covers/cover.png",
      "/portfolio/360-alpha/collection/collection-1.png",
      "/portfolio/360-alpha/product/product-1.png",
      "/portfolio/360-alpha/product/product-2.png",
      "/portfolio/360-alpha/cart/cart-1.png",
    ]),
    page("/work/industrial-supply-direct", 0.8, "monthly", [
      "/portfolio/industrial-supply-direct/covers/cover.png",
    ]),
    page("/work/iron-crate", 0.8, "monthly", [
      "/portfolio/iron-crate/covers/cover.png",
    ]),
    page("/work/recovrx", 0.8, "monthly", [
      "/portfolio/recovrx/covers/cover.png",
    ]),
    page("/work/flexform-athletics", 0.8, "monthly", [
      "/portfolio/flexform-athletics/covers/cover.png",
    ]),
    page("/work/maison-luxe", 0.8, "monthly", [
      "/portfolio/maison-luxe/covers/cover.png",
    ]),

    // Showcase & Apps
    page("/portfolio", 0.8),
    page("/upsell-cross-sell-app-shopify", 0.8),
    page("/upsell-cross-sell-app-shopify/faq", 0.6),
    page("/pairly/faq", 0.6),

    // Legal
    page("/privacy-policy", 0.4, "yearly"),
    page("/terms-of-service", 0.4, "yearly"),
    page("/upsell-cross-sell-app/privacy-policy", 0.3, "yearly"),
    page("/upsell-cross-sell-app-shopify/privacy-policy", 0.3, "yearly"),
    page("/pairly/privacy-policy", 0.3, "yearly"),
  ];
}
