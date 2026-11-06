import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog/posts";

const IMAGE_EXT = /\.(png|jpe?g|webp|gif|avif)$/i;

type Entry = MetadataRoute.Sitemap[number];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.scalefront.io";

  // Absolute URLs of all images under public/portfolio/<folder>, recursively.
  const portfolioImages = (folder: string): string[] => {
    const walk = (dir: string): string[] =>
      fs.existsSync(dir)
        ? fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
            const full = path.join(dir, e.name);
            return e.isDirectory() ? walk(full) : [full];
          })
        : [];
    const publicDir = path.join(process.cwd(), "public");
    return walk(path.join(publicDir, "portfolio", folder))
      .filter((f) => IMAGE_EXT.test(f))
      .sort()
      .map((f) => "/" + path.relative(publicDir, f).split(path.sep).join("/"));
  };

  // Self-hosted images referenced in a markdown post (e.g. /blog/<slug>/x.webp).
  const bodyImages = (slug: string): string[] => {
    const file = path.join(process.cwd(), "src/content/blog", `${slug}.md`);
    if (!fs.existsSync(file)) return [];
    const matches = fs
      .readFileSync(file, "utf8")
      .match(/\/[A-Za-z0-9_\-./]+\.(?:png|jpe?g|webp|gif|avif)/gi);
    return (matches ?? [])
      .filter((p) => fs.existsSync(path.join(process.cwd(), "public", p)))
      .map((p) => `${baseUrl}${p}`);
  };

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
    // Cover image + any self-hosted image used inside the post body.
    const images = Array.from(
      new Set([...ownImage(post.image), ...bodyImages(post.slug)]),
    );
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
    // Case studies: every image in public/portfolio/<folder> is picked up
    // automatically (new screenshots need no sitemap change).
    page("/work/aesthetika", 0.8, "monthly", portfolioImages("aesthetica")),
    page("/work/360-alpha", 0.8, "monthly", portfolioImages("360-alpha")),
    page(
      "/work/industrial-supply-direct",
      0.8,
      "monthly",
      portfolioImages("industrial-supply-direct"),
    ),
    page("/work/iron-crate", 0.8, "monthly", portfolioImages("iron-crate")),
    page("/work/recovrx", 0.8, "monthly", portfolioImages("recovrx")),
    page(
      "/work/flexform-athletics",
      0.8,
      "monthly",
      portfolioImages("flexform-athletics"),
    ),
    page("/work/maison-luxe", 0.8, "monthly", portfolioImages("maison-luxe")),

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
