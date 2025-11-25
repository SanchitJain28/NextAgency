import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Earn - Free Shopify Store Auditor Tool | Analyze All Sales Factors, Not Just Page Speed',
  description: 'Get a comprehensive free audit of your Shopify store in 60 seconds. Analyze SEO, performance, accessibility, security, and sales optimization. 100+ checks to increase your conversion rate by up to 40%. No credit card required.',
  keywords: [
    'shopify store auditor',
    'free shopify audit tool',
    'shopify seo audit',
    'shopify performance audit',
    'shopify store analyzer',
    'ecommerce audit tool',
    'shopify optimization tool',
    'shopify conversion rate optimization',
    'shopify security audit',
    'shopify accessibility checker',
    'shopify speed test',
    'shopify sales optimization',
    'free ecommerce audit',
    'shopify store analysis',
    'shopify audit report'
  ],
  authors: [{ name: 'ScaleFront.io' }],
  openGraph: {
    title: 'Free Shopify Store Auditor - Earn by ScaleFront',
    description: 'Analyze your Shopify store across 100+ factors in 60 seconds. Get actionable insights to increase conversion rates and sales.',
    url: 'https://scalefront.io/earn',
    siteName: 'ScaleFront',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image-earn.png',
        width: 1200,
        height: 630,
        alt: 'Earn - Free Shopify Store Auditor Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Shopify Store Auditor - Earn by ScaleFront',
    description: 'Get instant insights into your Shopify store\'s performance, SEO, and sales optimization. 100+ checks in 60 seconds.',
    images: ['/og-image-earn.png'],
  },
  alternates: {
    canonical: 'https://scalefront.io/earn',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function EarnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
