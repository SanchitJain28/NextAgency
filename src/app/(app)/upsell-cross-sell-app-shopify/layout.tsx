import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Crossell, Upsell & Related Products AI | Smart Shopify Recommendations by ScaleFront',
  description: 'Boost your average order value with AI-powered product recommendations. Intelligent cross-sells, upsells, and related products based on customer behavior. Easy integration with your Shopify store.',
  keywords: [
    'shopify upsell app',
    'shopify cross-sell',
    'product recommendations ai',
    'shopify recommendation engine',
    'increase average order value',
    'ai product suggestions',
    'shopify related products',
    'smart upsell',
    'conversion optimization',
    'shopify sales boost',
    'product bundling',
    'personalized recommendations'
  ],
  authors: [{ name: 'ScaleFront.io' }],
  openGraph: {
    title: 'Crossell, Upsell & Related Products AI - ScaleFront',
    description: 'AI-powered product recommendations to increase your Shopify store\'s average order value',
    url: 'https://scalefront.io/solllid',
    siteName: 'ScaleFront',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image-solllid.png',
        width: 1200,
        height: 630,
        alt: 'Crossell, Upsell & Related Products AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crossell, Upsell & Related Products AI - ScaleFront',
    description: 'Boost AOV with intelligent product recommendations powered by AI',
    images: ['/og-image-solllid.png'],
  },
  alternates: {
    canonical: 'https://scalefront.io/solllid',
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

export default function SollidLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
