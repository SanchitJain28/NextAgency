import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  getAllPosts,
  getAllCategories,
  getFeaturedPost,
} from "@/lib/blog/posts";
import { Search, X, Clock, ArrowRight, BookOpen } from "lucide-react";

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
  searchParams?: Promise<{
    q?: string;
    category?: string;
  }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedParams = searchParams ? await searchParams : {};
  const searchQuery = (resolvedParams.q || "").trim();
  const selectedCategory = resolvedParams.category
    ? decodeURIComponent(resolvedParams.category)
    : null;

  const allPosts = await getAllPosts();
  const categories = await getAllCategories();
  const featuredPost = await getFeaturedPost();

  let filteredPosts = allPosts;

  if (selectedCategory) {
    filteredPosts = filteredPosts.filter(
      (post) => post.category?.toLowerCase() === selectedCategory.toLowerCase(),
    );
  }

  if (searchQuery) {
    const lowerQuery = searchQuery.toLowerCase();
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowerQuery) ||
        post.description.toLowerCase().includes(lowerQuery) ||
        post.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
        post.category?.toLowerCase().includes(lowerQuery),
    );
  }

  const activeFeatured =
    featuredPost && !searchQuery && !selectedCategory ? featuredPost : null;

  const gridPosts = activeFeatured
    ? filteredPosts.filter((post) => post.slug !== activeFeatured.slug)
    : filteredPosts;

  return (
    <div className="min-h-screen bg-[#faf9f6] text-neutral-900 antialiased">
      <section className="pt-14 pb-10 sm:pt-18 sm:pb-12 border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.05] mb-4"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              The ScaleFront Blog
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 font-sans leading-relaxed mb-8">
              Technical guides on Shopify architecture, custom app development,
              conversion optimization, and headless commerce.
            </p>

            <form
              action="/blog"
              method="GET"
              className="relative max-w-lg w-full mb-8"
            >
              {selectedCategory && (
                <input type="hidden" name="category" value={selectedCategory} />
              )}
              <input
                type="text"
                name="q"
                defaultValue={searchQuery}
                placeholder="Search articles by topic, keyword, or title..."
                className="w-full px-4 py-3 pl-11 pr-24 bg-white border border-neutral-300 text-neutral-900 placeholder:text-neutral-400 font-sans text-sm focus:outline-none focus:border-neutral-900 transition-colors"
              />
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />

              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                {searchQuery && (
                  <Link
                    href={
                      selectedCategory
                        ? `/blog?category=${encodeURIComponent(selectedCategory)}`
                        : "/blog"
                    }
                    className="p-1 text-neutral-400 hover:text-neutral-900 transition-colors"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </Link>
                )}
                <button
                  type="submit"
                  className="px-2.5 py-1 bg-neutral-900 text-white font-mono text-xs uppercase font-bold tracking-wider hover:bg-[var(--sf-primary)] transition-colors"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          <div className="relative flex items-center pt-2">
            <div className="flex items-center gap-2 overflow-x-auto scroll-smooth py-1 px-0.5 no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full">
              <Link
                href={
                  searchQuery
                    ? `/blog?q=${encodeURIComponent(searchQuery)}`
                    : "/blog"
                }
                className={`flex-shrink-0 px-3.5 py-1.5 border font-mono text-xs uppercase font-bold tracking-wider transition-colors whitespace-nowrap no-underline ${
                  selectedCategory === null
                    ? "bg-[var(--sf-primary)] text-white border-[var(--sf-primary)]"
                    : "bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-100 hover:border-neutral-400"
                }`}
              >
                All Articles ({allPosts.length})
              </Link>

              {categories.map((category) => {
                const count = allPosts.filter(
                  (p) => p.category?.toLowerCase() === category.toLowerCase(),
                ).length;
                const isSelected =
                  selectedCategory?.toLowerCase() === category.toLowerCase();

                const targetUrl = isSelected
                  ? searchQuery
                    ? `/blog?q=${encodeURIComponent(searchQuery)}`
                    : "/blog"
                  : searchQuery
                    ? `/blog?category=${encodeURIComponent(category)}&q=${encodeURIComponent(searchQuery)}`
                    : `/blog?category=${encodeURIComponent(category)}`;

                return (
                  <Link
                    key={category}
                    href={targetUrl}
                    className={`flex-shrink-0 px-3.5 py-1.5 border font-mono text-xs uppercase font-bold tracking-wider transition-colors whitespace-nowrap no-underline ${
                      isSelected
                        ? "bg-[var(--sf-primary)] text-white border-[var(--sf-primary)]"
                        : "bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-100 hover:border-neutral-400"
                    }`}
                  >
                    {category} {count > 0 && `(${count})`}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {activeFeatured && (
        <section className="py-10 sm:py-12 border-b border-neutral-200 bg-[#faf9f6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href={`/blog/${activeFeatured.slug}`}
              className="block group no-underline"
            >
              <article className="border border-neutral-200 bg-white hover:border-neutral-400 transition-all duration-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
                {activeFeatured.image ? (
                  <div className="relative aspect-[16/10] lg:aspect-auto lg:col-span-6 border-b lg:border-b-0 lg:border-r border-neutral-200 overflow-hidden bg-neutral-100">
                    <Image
                      src={activeFeatured.image}
                      alt={activeFeatured.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </div>
                ) : (
                  <div className="lg:col-span-6 p-12 bg-neutral-100 border-b lg:border-b-0 lg:border-r border-neutral-200 flex flex-col justify-center items-center text-center">
                    <BookOpen className="w-12 h-12 text-neutral-400 mb-3" />
                    <span className="font-mono text-xs uppercase font-bold tracking-wider text-neutral-700">
                      Featured Guide
                    </span>
                  </div>
                )}

                <div className="p-6 sm:p-10 lg:p-12 lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4 font-mono text-xs">
                      <span className="px-2.5 py-1 border border-neutral-200 bg-neutral-100 text-neutral-800 font-bold uppercase tracking-wider">
                        {activeFeatured.category}
                      </span>

                      <span className="text-neutral-300">&bull;</span>
                      <time
                        dateTime={activeFeatured.date}
                        className="text-neutral-500"
                      >
                        {new Date(activeFeatured.date).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          },
                        )}
                      </time>
                    </div>

                    <h2
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 group-hover:text-[var(--sf-primary)] transition-colors leading-tight mb-4"
                      style={{
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                      }}
                    >
                      {activeFeatured.title}
                    </h2>

                    <p className="text-sm sm:text-base text-neutral-600 font-sans leading-relaxed line-clamp-3 mb-6">
                      {activeFeatured.description}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-neutral-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-neutral-900 text-white font-mono text-xs font-bold flex items-center justify-center">
                        {activeFeatured.author?.charAt(0) || "S"}
                      </div>
                      <span className="font-mono text-xs font-bold text-neutral-800 uppercase">
                        {activeFeatured.author}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-neutral-900 group-hover:text-[var(--sf-primary)] group-hover:translate-x-1 transition-all">
                      Read Article <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      )}

      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {(searchQuery || selectedCategory) && (
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-neutral-200">
              <h2
                className="text-xl sm:text-2xl font-bold text-neutral-900"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                {selectedCategory
                  ? `${selectedCategory} (${filteredPosts.length})`
                  : `Results for "${searchQuery}" (${filteredPosts.length})`}
              </h2>
              <Link
                href="/blog"
                className="font-mono text-xs font-bold text-neutral-700 hover:text-[var(--sf-primary)] underline uppercase"
              >
                Clear all filters
              </Link>
            </div>
          )}

          {gridPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white border border-neutral-200 hover:border-neutral-900 transition-all duration-200 no-underline"
                >
                  {post.image ? (
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 border-b border-neutral-200">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[16/10] bg-neutral-100 border-b border-neutral-200 flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-neutral-400" />
                    </div>
                  )}

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-1 border border-neutral-200 bg-neutral-100 text-neutral-800 font-mono text-[11px] font-bold uppercase tracking-wider">
                          {post.category}
                        </span>
                      </div>

                      <h3
                        className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-[var(--sf-primary)] transition-colors leading-snug mb-2 line-clamp-2"
                        style={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                        }}
                      >
                        {post.title}
                      </h3>

                      <p className="text-sm text-neutral-600 font-sans line-clamp-2 leading-relaxed mb-4">
                        {post.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-neutral-100 flex items-center justify-between font-mono text-xs text-neutral-500 mt-auto">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                      <span className="font-bold text-neutral-900 group-hover:text-[var(--sf-primary)] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform uppercase text-[11px]">
                        Read <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-[#faf9f6] border border-dashed border-neutral-300 p-8">
              <BookOpen className="w-10 h-10 text-neutral-400 mx-auto mb-3" />
              <h3
                className="text-xl font-bold text-neutral-900 mb-2"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                No articles found
              </h3>
              <p className="text-neutral-600 text-sm max-w-sm mx-auto mb-6">
                Try adjusting your search terms or clearing your category
                filters.
              </p>
              <Link
                href="/blog"
                className="inline-block px-5 py-2.5 bg-neutral-900 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[var(--sf-primary)] transition-colors"
              >
                Reset Filters
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 border-t border-neutral-200 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-neutral-200 bg-white p-8 sm:p-12 text-center max-w-4xl mx-auto">
            <h2
              className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-3"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Looking to scale your Shopify store?
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto mb-8 leading-relaxed font-sans">
              We engineer custom themes, private apps, and headless storefronts
              designed for speed and conversion.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact-us"
                className="px-6 py-3 bg-[var(--sf-primary)] hover:bg-[var(--sf-primary-deep)] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Discuss Your Project
              </Link>
              <Link
                href="/earn"
                className="px-6 py-3 border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-900 font-mono text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Run Free Store Audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
