import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://scalefront.io'
  const lastModified = new Date()

  return [
    // Homepage with featured images
    {
      url: baseUrl,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      images: [
        `${baseUrl}/images/og-headless-woocommerce.png`,
        // `${baseUrl}/featured-project.jpg`,
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
        `${baseUrl}//images/og-headless-woocommerce.png`
        // `${baseUrl}/services/mobile-app.jpg`,
        // `${baseUrl}/services/consulting.jpg`,
      ],
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
      priority: 0.6,
    },
    // Blog posts with featured images
    {
      url: `${baseUrl}/blog/best-of-woo-and-shopify`,
      lastModified: new Date('2024-01-15'),
      changeFrequency: 'monthly',
      priority: 0.5,
      images: [`/images/og-headless-woocommerce.png`],
    },
    {
      url: `${baseUrl}/blog/headless-woocommerce-with-nextjs`,
      lastModified: new Date('2024-02-01'),
      changeFrequency: 'monthly',
      priority: 0.5,
      images: [`${baseUrl}/images/og-headless-woocommerce.png`],
    },
    // Portfolio with project images
    {
      url: `${baseUrl}/blog/nextjs-headless-frontend`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [
        `${baseUrl}/images/og-headless-woocommerce.png`
      ],
    },
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