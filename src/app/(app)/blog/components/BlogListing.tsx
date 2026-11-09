"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { createBlogSearch, type BlogListingPost } from "@/lib/blog/search";

import { BlogSearch } from "./BlogSearch";
import { CategoryFilter } from "./CategoryFilter";

interface BlogFilters {
  query: string;
  category: string;
}

interface BlogListingProps {
  posts: BlogListingPost[];
  initialFilters: BlogFilters;
}

const dateOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
};

function BlogCard({ post }: { post: BlogListingPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex outline-offset-4">
      <Card className="w-full gap-0 overflow-hidden rounded-none border-neutral-200 bg-white py-0 shadow-none transition-colors group-hover:border-neutral-900">
        {post.image ? (
          <div className="relative aspect-[16/10] overflow-hidden border-b border-neutral-200 bg-neutral-100">
            <Image
              src={post.image}
              alt=""
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className="flex aspect-[16/10] items-center justify-center border-b border-neutral-200 bg-neutral-100">
            <BookOpen aria-hidden="true" className="size-8 text-neutral-400" />
          </div>
        )}

        <CardContent className="flex-1 pt-6 pb-4">
          <Badge className="mb-3 rounded-md border-neutral-200 bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-800">
            {post.category}
          </Badge>
          <h3 className="mb-2 line-clamp-2 text-lg leading-snug font-bold text-neutral-900 transition-colors group-hover:text-[var(--sf-primary-deep)] sm:text-xl">
            {post.title}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-neutral-600">
            {post.description}
          </p>
        </CardContent>

        <CardFooter className="mx-6 justify-between border-t border-neutral-100 px-0 pt-4 pb-6 font-mono text-xs text-neutral-500">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", dateOptions)}
          </time>
          <span className="flex items-center gap-1 text-[11px] font-bold text-neutral-900 uppercase group-hover:text-[var(--sf-primary-deep)]">
            Read <ArrowRight aria-hidden="true" className="size-3.5" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}

export function BlogListing({ posts, initialFilters }: BlogListingProps) {
  const [filters, setFilters] = useState(initialFilters);
  const search = useMemo(() => createBlogSearch(posts), [posts]);
  const categories = useMemo(() => {
    const counts = new Map<string, { label: string; count: number }>();

    for (const { category } of posts) {
      if (!category) continue;
      const key = category.toLowerCase();
      const existing = counts.get(key);
      if (existing) {
        existing.count += 1;
      } else {
        counts.set(key, { label: category, count: 1 });
      }
    }

    return [...counts.values()];
  }, [posts]);

  useEffect(() => {
    function restoreFilters() {
      const params = new URLSearchParams(window.location.search);
      setFilters({
        query: params.get("q")?.trim() ?? "",
        category: params.get("category")?.trim() ?? "",
      });
    }

    window.addEventListener("popstate", restoreFilters);
    return () => window.removeEventListener("popstate", restoreFilters);
  }, []);

  function updateFilters(next: BlogFilters, history: "push" | "replace") {
    setFilters(next);
    const url = new URL(window.location.href);
    const { query, category } = next;

    url.searchParams.delete("q");
    url.searchParams.delete("category");
    if (query.trim()) url.searchParams.set("q", query.trim());
    if (category) url.searchParams.set("category", category);

    if (url.href === window.location.href) return;
    if (history === "push") {
      window.history.pushState(null, "", url);
    } else {
      window.history.replaceState(null, "", url);
    }
  }

  const query = filters.query.trim();
  const categoryKey = filters.category.toLowerCase();
  const results = useMemo(() => {
    const matches = search(query);
    return categoryKey
      ? matches.filter((post) => post.category.toLowerCase() === categoryKey)
      : matches;
  }, [query, categoryKey, search]);
  const filtered = Boolean(query || categoryKey);
  const resetFilters = () => updateFilters({ query: "", category: "" }, "push");

  return (
    <>
      <section className="border-b border-neutral-800 bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:pt-16 sm:pb-14 lg:px-8">
          <h1 className="mb-3 text-4xl leading-[1.12] font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Blogs
          </h1>
          <p className="mb-6 max-w-xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            Practical guides and case studies to help you build a faster
            Shopify store and turn more visits into sales.
          </p>
          <BlogSearch
            query={filters.query}
            onSearch={(value) => updateFilters({ ...filters, query: value }, "replace")}
          />
          <div className="mt-6 sm:mt-8">
            <CategoryFilter
              categories={categories}
              total={posts.length}
              selectedCategory={filters.category}
              onSelectCategory={(category) => updateFilters({ ...filters, category }, "push")}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-7 pb-14 sm:px-6 sm:pb-16 lg:px-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <div>
            <h2 className="text-xl font-bold tracking-tight">
              {filters.category || (query ? "Search results" : "All articles")}
            </h2>
            <p role="status" className="mt-1 text-sm text-neutral-600">
              {results.length} {results.length === 1 ? "article" : "articles"}
              {query && <> matching “{query}”</>}
            </p>
          </div>
          {filtered && (
            <Button
              type="button"
              variant="ghost"
              className="rounded-none text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
              onClick={resetFilters}
            >
              Clear filters
            </Button>
          )}
        </div>

        {results.length ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {results.map((post) => <BlogCard key={post.slug} post={post} />)}
          </div>
        ) : (
          <Card className="items-center gap-3 rounded-none border-dashed border-neutral-300 bg-[#faf9f6] px-6 py-12 text-center shadow-none">
            <BookOpen aria-hidden="true" className="size-9 text-neutral-500" />
            <h3 className="text-xl font-bold">No articles found</h3>
            <p className="text-sm text-neutral-600">Try another search term or category.</p>
            {filtered && (
              <Button
                type="button"
                className="mt-2 rounded-none bg-neutral-900 text-white hover:bg-neutral-700"
                onClick={resetFilters}
              >
                Reset filters
              </Button>
            )}
          </Card>
        )}
      </section>
    </>
  );
}
