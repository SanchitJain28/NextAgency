import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://scalefront.io'
  const lastModified = new Date()

  // Get all blog posts dynamically
  const blogPosts = getAllPosts()

  return [
    // Homepage with featured images
    {
      url: baseUrl,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      images: [
        `${baseUrl}/images/og-headless-woocommerce.png`,
      ],
    },
    // About page with profile image
    {
      url: `${baseUrl}/about-us`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [`${baseUrl}/images/og-headless-woocommerce.png`],
    },
    // Services page with service images
    {
      url: `${baseUrl}/pricing`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [
        `${baseUrl}/images/og-headless-woocommerce.png`
      ],
    },
    // Individual Service Pages (High Priority for SEO)
    {
      url: `${baseUrl}/services/headless-commerce`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/performance-optimization`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/custom-shopify-apps`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/mobile-apps`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/theme-development`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/backend-api`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/conversion-optimization`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/custom-features`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/shopify-plus-migration`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/integrations`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/audit-consulting`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Earn page (Shopify auditor)
    {
      url: `${baseUrl}/earn`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Contact page
    {
      url: `${baseUrl}/contact-us`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Blog main page
    {
      url: `${baseUrl}/blog`,
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Dynamically generated blog posts
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      images: post.image ? [post.image] : [],
    })),
    // Individual project pages
    // {
    //   url: `${baseUrl}/portfolio/ecommerce-website`,
    //   lastModified: new Date('2024-01-20'),
    //   changeFrequency: 'yearly',
    //   priority: 0.6,
    //   images: [
    //     `${baseUrl}/portfolio/ecommerce/screenshot1.jpg`,
    //     `${baseUrl}/portfolio/ecommerce/screenshot2.jpg`,
    //   ],
    // },
    // {
    //   url: `${baseUrl}/portfolio/mobile-app`,
    //   lastModified: new Date('2024-01-25'),
    //   changeFrequency: 'yearly',
    //   priority: 0.6,
    //   images: [
    //     `${baseUrl}/portfolio/mobile-app/app-screen1.jpg`,
    //     `${baseUrl}/portfolio/mobile-app/app-screen2.jpg`,
    //   ],
    // },
    // Legal pages
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}