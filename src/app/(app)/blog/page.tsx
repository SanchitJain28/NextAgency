import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/lib/blog/posts";

import { BlogListing } from "./components/BlogListing";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.scalefront.io"),
  title: "Blog | ScaleFront - Shopify Growth & E-commerce Insights",
  description:
    "Technical guides on Shopify architecture, custom app development, conversion optimization, and headless commerce for scaling DTC brands.",
  alternates: {
    canonical: "https://www.scalefront.io/blog",
    types: {
      "application/rss+xml": "https://www.scalefront.io/blog/rss.xml",
    },
  },
  openGraph: {
    title: "ScaleFront Blog - E-commerce Growth & Shopify Engineering",
    description:
      "Technical guides on Shopify architecture, custom app development, conversion optimization, and headless commerce.",
    type: "website",
    url: "https://www.scalefront.io/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScaleFront Blog - E-commerce Growth & Shopify Engineering",
    description:
      "Technical guides on Shopify architecture, custom app development, conversion optimization, and headless commerce.",
  },
};

interface BlogPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

function firstParam(value: string | string[] | undefined) {
  return (Array.isArray(value) ? value[0] : value)?.trim() ?? "";
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const [params, allPosts] = await Promise.all([searchParams, getAllPosts()]);
  const initialFilters = {
    query: firstParam(params.q),
    category: firstParam(params.category),
  };
  const posts = allPosts.map(({ slug, title, description, date, image, category, tags }) => ({
    slug,
    title,
    description,
    date,
    image,
    category,
    tags,
  }));

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased">
      <BlogListing
        key={JSON.stringify(initialFilters)}
        posts={posts}
        initialFilters={initialFilters}
      />
      <section className="py-16 border-t border-neutral-200 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-neutral-200 bg-white p-8 sm:p-12 text-center max-w-4xl mx-auto">
            <h2
              className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-3"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Looking to scale your Shopify store?
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto mb-8 leading-relaxed font-sans">
              We engineer custom themes, private apps, and headless storefronts
              designed for speed and conversion.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild className="h-10 rounded-none bg-[var(--sf-primary-deep)] px-6 font-mono text-xs font-bold tracking-wider text-white uppercase hover:bg-[var(--sf-primary-press)]">
                <Link href="/contact-us">Discuss Your Project</Link>
              </Button>
              <Button asChild variant="outline" className="h-10 rounded-none border-neutral-300 bg-white px-6 font-mono text-xs font-bold tracking-wider text-neutral-900 uppercase hover:bg-neutral-100 hover:text-neutral-900">
                <Link href="/earn">Run Free Store Audit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
