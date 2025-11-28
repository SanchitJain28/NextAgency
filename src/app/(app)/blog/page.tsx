import { Metadata } from 'next';
import { getAllPosts, getAllCategories, getFeaturedPost } from '@/lib/blog/posts';
import { Header } from '@/components/header-footer/Header';
import Footer from '@/components/header-footer/Footer';
import BlogPageClient from './page_new';

export const metadata: Metadata = {
  title: 'Blog | ScaleFront - Shopify Growth & E-commerce Insights',
  description: 'Learn how to grow your Shopify store with expert insights on e-commerce, conversion optimization, and store performance. Tips and strategies for online success.',
  openGraph: {
    title: 'ScaleFront Blog - E-commerce Growth Insights',
    description: 'Expert tips and strategies for growing your Shopify store',
    type: 'website',
    url: 'https://scalefront.io/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ScaleFront Blog - E-commerce Growth Insights',
    description: 'Expert tips and strategies for growing your Shopify store',
  },
  alternates: {
    types: {
      'application/rss+xml': 'https://scalefront.io/blog/rss.xml',
    },
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const featuredPost = getFeaturedPost();

  return (
    <>
      <Header />
      <BlogPageClient posts={posts} categories={categories} featuredPost={featuredPost} />
      <Footer />
    </>
  );
}
