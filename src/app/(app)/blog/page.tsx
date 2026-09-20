import { Metadata } from "next";
import {
  getAllPosts,
  getAllCategories,
  getFeaturedPost,
} from "@/lib/blog/posts";
import { Header } from "@/components/header-footer/Header";
import Footer from "@/components/header-footer/Footer";
import BlogPageClient from "./page_new";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.scalefront.io"),
  title: "Blog | ScaleFront - Shopify Growth & E-commerce Insights",
  description:
    "Learn how to grow your Shopify store with expert insights on e-commerce, conversion optimization, and store performance. Tips and strategies for online success.",
  alternates: {
    canonical: "https://www.scalefront.io/blog",
    types: {
      "application/rss+xml": "https://www.scalefront.io/blog/rss.xml",
    },
  },
  openGraph: {
    title: "ScaleFront Blog - E-commerce Growth Insights",
    description: "Expert tips and strategies for growing your Shopify store",
    type: "website",
    url: "https://www.scalefront.io/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScaleFront Blog - E-commerce Growth Insights",
    description: "Expert tips and strategies for growing your Shopify store",
  },
};
export default async function BlogPage() {
  const posts = await getAllPosts();
  const categories = await getAllCategories();
  const featuredPost = await getFeaturedPost();

  return (
    <>
      <Header />
      <BlogPageClient
        posts={posts}
        categories={categories}
        featuredPost={featuredPost}
      />
      <Footer />
    </>
  );
}