'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPostMetadata } from '@/lib/blog/posts';
import { BlogSearch } from '@/components/blog/BlogSearch';
import { CategoryFilter } from '@/components/blog/CategoryFilter';
import { DarkModeToggle } from '@/components/blog/DarkModeToggle';

interface BlogPageClientProps {
  posts: BlogPostMetadata[];
  categories: string[];
  featuredPost: BlogPostMetadata | null;
}

export default function BlogPageClient({ posts, categories, featuredPost }: BlogPageClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    let filtered = posts;

    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Apply search filter
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(
        post =>
          post.title.toLowerCase().includes(lowerQuery) ||
          post.description.toLowerCase().includes(lowerQuery) ||
          post.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
          post.category.toLowerCase().includes(lowerQuery)
      );
    }

    return filtered;
  }, [posts, searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-gray-900">
      {/* Hero Section - Medium Style */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-[1192px] mx-auto px-6 py-20">
          <div className="flex items-start justify-between gap-6 mb-8">
            <div className="flex-1">
              <h1 className="text-[52px] md:text-[64px] font-bold text-[#292929] dark:text-white mb-6 leading-[1.1] tracking-tight font-serif">
                The ScaleFront Blog
              </h1>
              <p className="text-[24px] text-[#6B6B6B] dark:text-gray-300 leading-[1.4] font-serif max-w-[680px]">
                Expert insights on Shopify optimization, e-commerce growth, and online store success
              </p>
            </div>
            <DarkModeToggle />
          </div>

          {/* Search Bar */}
          <div className="max-w-[600px] mb-8">
            <BlogSearch onSearch={setSearchQuery} />
          </div>

          {/* Category Filters */}
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          {/* RSS Link */}
          <div className="mt-6">
            <a
              href="/blog/rss.xml"
              className="inline-flex items-center gap-2 text-[14px] text-[#6B6B6B] dark:text-gray-400 hover:text-[#292929] dark:hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z"/>
              </svg>
              Subscribe via RSS
            </a>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      {featuredPost && !searchQuery && !selectedCategory && (
        <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-[1192px] mx-auto px-6 py-12">
            <h2 className="text-[20px] font-bold text-[#6B6B6B] dark:text-gray-400 mb-6 uppercase tracking-wide">
              Featured Post
            </h2>
            <Link href={`/blog/${featuredPost.slug}`} className="group">
              <article className="grid md:grid-cols-2 gap-8">
                {featuredPost.image && (
                  <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-col justify-center">
                  <span className="text-[13px] text-[#6B6B6B] dark:text-gray-400 font-medium mb-3">
                    {featuredPost.category}
                  </span>
                  <h3 className="text-[36px] font-bold text-[#292929] dark:text-white mb-4 leading-[1.2] group-hover:text-black dark:group-hover:text-gray-200 transition-colors font-serif">
                    {featuredPost.title}
                  </h3>
                  <p className="text-[18px] text-[#6B6B6B] dark:text-gray-300 mb-6 leading-[1.5] font-serif">
                    {featuredPost.description}
                  </p>
                  <div className="flex items-center gap-2 text-[13px] text-[#6B6B6B] dark:text-gray-400">
                    <span className="font-medium text-[#292929] dark:text-white">{featuredPost.author}</span>
                    <span>·</span>
                    <time dateTime={featuredPost.date}>
                      {new Date(featuredPost.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                    <span>·</span>
                    <span>{featuredPost.readingTime}</span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </div>
      )}

      {/* Blog Grid */}
      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-[1192px] mx-auto px-6 py-16">
          {searchQuery || selectedCategory ? (
            <div className="mb-8">
              <p className="text-[16px] text-[#6B6B6B] dark:text-gray-400">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
                {searchQuery && ` for "${searchQuery}"`}
                {selectedCategory && ` in ${selectedCategory}`}
              </p>
            </div>
          ) : null}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group cursor-pointer"
              >
                <article className="h-full flex flex-col">
                  {post.image && (
                    <div className="relative aspect-[2/1] mb-5 overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-lg">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="mb-3">
                    <span className="text-[13px] text-[#6B6B6B] dark:text-gray-400 font-medium">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-[24px] font-bold text-[#292929] dark:text-white mb-3 leading-[1.3] group-hover:text-black dark:group-hover:text-gray-200 transition-colors line-clamp-3 font-serif">
                    {post.title}
                  </h2>

                  <p className="text-[16px] text-[#6B6B6B] dark:text-gray-300 mb-4 line-clamp-3 flex-grow leading-[1.5] font-serif">
                    {post.description}
                  </p>

                  <div className="flex items-center gap-2 text-[13px] text-[#6B6B6B] dark:text-gray-400">
                    <span className="font-medium text-[#292929] dark:text-white">{post.author}</span>
                    <span>·</span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                    <span>·</span>
                    <span>{post.readingTime}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#6B6B6B] dark:text-gray-400 text-[18px] font-serif mb-4">
                No posts found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
                }}
                className="text-[#292929] dark:text-white font-medium hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
