// app/page.tsx
import { Metadata } from "next";
import LandingPageClient from "./LandingPageClient";

// SEO Metadata - This is critical for search rankings
export const metadata: Metadata = {
  // Primary metadata
  title: {
    default: "Real AI Related Products - AI-Powered Shopify Upsell & Cross-Sell App",
    template: "%s | Real AI Related Products"
  },
  description: "Boost Shopify sales by up to 35% with AI-powered product recommendations. Uses real OpenAI text embeddings for semantic product matching. Smart upsell & cross-sell widgets. Install in seconds, no coding required.",
  
  // Keywords for better indexing
  keywords: [
    // Primary keywords
    "shopify upsell app",
    "shopify cross sell app",
    "AI product recommendations shopify",
    "frequently bought together shopify",
    "increase AOV shopify",
    // Secondary keywords
    "shopify product recommendation widget",
    "AI upsell shopify",
    "smart product recommendations",
    "shopify sales optimization",
    "cart page upsell",
    // Technical keywords
    "text embeddings ecommerce",
    "semantic product recommendations",
    "AI powered product bundles",
    "shopify revenue optimization",
    // Long-tail keywords
    "automatically recommend products shopify",
    "best shopify app for product recommendations",
    "how to increase average order value shopify"
  ],

  // Authors and creator
  authors: [{ name: "Topcom Solutions" }],
  creator: "Real AI Related Products",
  publisher: "Real AI Related Products",

  // Canonical URL - prevents duplicate content issues
  alternates: {
    canonical: "https://topcomsolutions.com/solllid"
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

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://topcomsolutions.com/solllid",
    siteName: "Real AI Related Products",
    title: "AI-Powered Shopify Upsell App - Increase Sales by 35% with Real AI",
    description: "Smart product recommendations using OpenAI text embeddings. Automatically boost your Shopify store's AOV with semantic AI recommendations. No setup required.",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Real AI Related Products - Shopify AI Upsell App Dashboard"
      }
    ]
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    site: "@YourTwitterHandle",
    creator: "@YourTwitterHandle",
    title: "AI-Powered Shopify Upsell App | Real AI Related Products",
    description: "Boost sales 35% with real AI recommendations using OpenAI embeddings. Smart upsell & cross-sell for Shopify stores.",
    images: ["/twitter-image.png"] // 1200x675px recommended
  },

  // Verification tags (add your actual verification codes)
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // App-specific metadata
  applicationName: "Real AI Related Products",
  category: "E-commerce",
  
  // Additional metadata
  other: {
    "shopify-app": "true",
    "price": "Free to install"
  }
};

export default function Page() {
  // JSON-LD Structured Data for rich snippets
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Real AI Related Products",
    "url": "https://topcomsolutions.com/solllid",
    "description": "AI-powered upsell and cross-sell app for Shopify stores using real text embeddings",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://topcomsolutions.com/solllid",
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Real AI Related Products",
    "url": "https://topcomsolutions.com/solllid",
    "logo": "https://topcomsolutions.com/solllid/logo.png",
    "description": "AI-powered product recommendation app for Shopify merchants",
    "sameAs": [
      "https://twitter.com/YourTwitterHandle",
      "https://www.linkedin.com/company/your-company",
      "https://github.com/SanchitJain28"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "support@realairelatedproducts.com"
    }
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Real AI Related Products",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "description": "Free to install with premium plans available"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "description": "AI-powered upsell and cross-sell app using OpenAI text embeddings for semantic product recommendations",
    "featureList": [
      "AI-Powered Related Products using text embeddings",
      "Smart Combo Builder for product bundles",
      "Customizable recommendation widgets",
      "Recently viewed products tracking",
      "New arrivals and best sellers widgets",
      "Zero-code plug and play setup"
    ],
    "screenshot": "https://realairelatedproducts.com/screenshot.png"
  };

  // Product schema for the app itself
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Real AI Related Products - Shopify App",
    "description": "AI-powered upsell and cross-sell app using real OpenAI text embeddings for semantic product matching. Increase AOV by up to 35%.",
    "brand": {
      "@type": "Brand",
      "name": "Real AI Related Products"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://topcomsolutions.com/solllid"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    },
    "image": "https://topcomsolutions.com/canva-hero-image.png"
  };

  // FAQ Schema for common questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does Real AI Related Products use artificial intelligence?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Real AI Related Products uses OpenAI's text embedding technology to create semantic understanding of your products. Unlike basic algorithms that match keywords, our AI understands the meaning and context of products to suggest genuinely relevant recommendations."
        }
      },
      {
        "@type": "Question",
        "name": "How much can I increase my average order value?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Merchants using Real AI Related Products typically see an increase of 25-35% in average order value within the first month. Results vary based on product catalog and implementation."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to configure the app manually?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No! Real AI Related Products is completely plug-and-play. Once installed, the AI automatically analyzes your products and generates recommendations. No manual configuration or coding required."
        }
      },
      {
        "@type": "Question",
        "name": "How is this different from other recommendation apps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most apps use basic frequently bought together algorithms. Real AI Related Products uses actual OpenAI text embeddings and vector similarity search to understand product semantics, delivering far more relevant recommendations."
        }
      }
    ]
  };

  // HowTo Schema for installation process
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Install Real AI Related Products on Shopify",
    "description": "Simple 3-step process to add AI-powered product recommendations to your Shopify store",
    "totalTime": "PT2M",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Install the App",
        "text": "One-click installation from Shopify App Store. Takes less than 30 seconds.",
        "url": "https://realairelatedproducts.com#how-it-works"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "AI Analyzes Your Products",
        "text": "Our AI automatically generates embeddings for all your products using advanced text analysis.",
        "url": "https://realairelatedproducts.com#how-it-works"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Start Selling More",
        "text": "Smart recommendations appear automatically on your store. Watch your sales grow!",
        "url": "https://realairelatedproducts.com#how-it-works"
      }
    ]
  };

  return (
    <>
      {/* Add all JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema).replace(/</g, '\\u003c')
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, '\\u003c')
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema).replace(/</g, '\\u003c')
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema).replace(/</g, '\\u003c')
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c')
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema).replace(/</g, '\\u003c')
        }}
      />

      {/* Client component with all the UI */}
      <LandingPageClient />
    </>
  );
}