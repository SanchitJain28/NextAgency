import { Metadata } from "next";
import LandingPageClient from "./LandingPageClient";

export const metadata: Metadata = {
  title: "AI Related Products — Shopify Upsell App",
  description:
    "Boost Shopify sales and AOV with AI-powered related products. Automated smart upsell and cross-sell widgets with real semantic product recommendations.",
  keywords: [
    "shopify upsell app",
    "shopify cross sell app",
    "AI product recommendations shopify",
    "frequently bought together shopify",
    "increase AOV shopify",
    "shopify product recommendation widget",
    "AI upsell shopify",
    "smart product recommendations",
    "shopify sales optimization",
    "cart page upsell",
    "text embeddings ecommerce",
    "semantic product recommendations",
    "AI powered product bundles",
    "shopify revenue optimization",
  ],
  authors: [{ name: "ScaleFront" }],
  creator: "ScaleFront",
  publisher: "ScaleFront",
  alternates: {
    canonical: "/upsell-cross-sell-app-shopify",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.scalefront.io/upsell-cross-sell-app-shopify",
    siteName: "ScaleFront",
    title: "AI Related Products — Shopify Upsell App",
    description:
      "Boost Shopify sales and AOV with AI-powered related products. Automated smart upsell and cross-sell widgets with real semantic product recommendations.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Real AI Related Products - Shopify AI Upsell App Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Related Products — Shopify Upsell App",
    description:
      "Boost Shopify sales and AOV with AI-powered related products. Automated smart upsell and cross-sell widgets with real semantic product recommendations.",
    images: ["/og-image.png"],
  },
  applicationName: "Real AI Related Products",
  category: "E-commerce",
  other: {
    "shopify-app": "true",
    price: "Free to install",
  },
};

export default function Page() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Real AI Related Products",
    url: "https://www.scalefront.io/upsell-cross-sell-app-shopify",
    description:
      "AI-powered upsell and cross-sell app for Shopify stores using real text embeddings",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.scalefront.io/upsell-cross-sell-app-shopify",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ScaleFront",
    url: "https://www.scalefront.io",
    logo: "https://www.scalefront.io/logo.png",
    description: "Shopify design, development, and apps engineering agency",
    sameAs: ["https://github.com/SanchitJain28"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "support@scalefront.io",
    },
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Real AI Related Products",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      description: "Free to install with premium plans available",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
    description:
      "AI-powered upsell and cross-sell app using OpenAI text embeddings for semantic product recommendations",
    featureList: [
      "AI-Powered Related Products using text embeddings",
      "Smart Combo Builder for product bundles",
      "Customizable recommendation widgets",
      "Recently viewed products tracking",
      "New arrivals and best sellers widgets",
      "Zero-code plug and play setup",
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Real AI Related Products - Shopify App",
    description:
      "AI-powered upsell and cross-sell app using real OpenAI text embeddings for semantic product matching. Increase AOV by up to 35%.",
    brand: {
      "@type": "Brand",
      name: "ScaleFront",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://www.scalefront.io/upsell-cross-sell-app-shopify",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does Real AI Related Products use artificial intelligence?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Real AI Related Products uses OpenAI's text embedding technology to create semantic understanding of your products. Unlike basic algorithms that match keywords, our AI understands the meaning and context of products to suggest genuinely relevant recommendations.",
        },
      },
      {
        "@type": "Question",
        name: "How much can I increase my average order value?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Merchants using Real AI Related Products typically see an increase of 25-35% in average order value within the first month. Results vary based on product catalog and implementation.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to configure the app manually?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No! Real AI Related Products is completely plug-and-play. Once installed, the AI automatically analyzes your products and generates recommendations. No manual configuration or coding required.",
        },
      },
      {
        "@type": "Question",
        name: "How is this different from other recommendation apps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most apps use basic frequently bought together algorithms. Real AI Related Products uses actual OpenAI text embeddings and vector similarity search to understand product semantics, delivering far more relevant recommendations.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <LandingPageClient />
    </>
  );
}
