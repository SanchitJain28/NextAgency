import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Header } from "@/components/header-footer/Header";
import Footer from "@/components/header-footer/Footer";
import "@fontsource/stack-sans-text/400.css";
import "@fontsource/stack-sans-text/500.css";
import "@fontsource/stack-sans-text/600.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    default:
      "ScaleFront - Elite Shopify Development Agency | Custom Apps & Themes",
    template: "%s | ScaleFront - Expert Shopify Solutions",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  description:
    "Elite Shopify development agency specializing in headless commerce, custom apps, theme development, and performance optimization. Transform your Shopify store with cutting-edge solutions.",
  keywords: [
    "Shopify development agency",
    "custom Shopify apps",
    "Shopify theme development",
    "headless Shopify commerce",
    "Shopify Plus migration",
    "Shopify performance optimization",
    "Shopify mobile apps",
    "Shopify API development",
    "Shopify conversion optimization",
    "Shopify third-party integrations",
    "Shopify store audit",
    "Shopify consulting services",
    "Shopify backend development",
    "custom Shopify features",
  ],
  authors: [{ name: "ScaleFront" }],
  creator: "ScaleFront",
  publisher: "ScaleFront",
  metadataBase: new URL("https://scalefront.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://scalefront.io",
    siteName: "ScaleFront",
    title: "ScaleFront - Elite Shopify Development Agency",
    description:
      "Transform your Shopify store with expert development services: custom apps, headless commerce, theme customization, and performance optimization.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ScaleFront - Elite Shopify Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScaleFront - Elite Shopify Development Agency",
    description:
      "Expert Shopify development: custom apps, headless commerce, theme development, and performance optimization for growing brands.",
    images: ["/twitter-image.jpg"],
    creator: "@scalefront",
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
  verification: {
    // Replace with your real code from Google Search Console
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  category: "technology",
  other: {
    "geo.region": "IN",
    "geo.country": "India",
    "geo.placename": "India",
    contact: "hello@scalefront.io",
    distribution: "global",
  },
};

export const viewport: Viewport = {
  themeColor: "#1677ff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://scalefront.io/#organization",
        name: "ScaleFront",
        description:
          "Elite Shopify development agency specializing in custom apps, headless commerce, theme development, and performance optimization",
        url: "https://scalefront.io",
        image: "https://scalefront.io/logos/scalefrontsquarelogo.png",
        logo: "https://scalefront.io/logos/scalefrontsquarelogo.png",
        priceRange: "$$",
        telephone: "+919650296375",
        email: "hello@scalefront.io",
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+919650296375",
          contactType: "customer service",
          email: "hello@scalefront.io",
          availableLanguage: ["English", "Hindi"],
        },
        sameAs: [
          "https://linkedin.com/company/scalefront",
          "https://twitter.com/scalefront",
          "https://github.com/scalefront",
        ],
        makesOffer: [
          {
            "@type": "Service",
            serviceType: "Headless Commerce Development",
            description:
              "Custom headless Shopify solutions for enterprise-level performance",
          },
          {
            "@type": "Service",
            serviceType: "Custom Shopify App Development",
            description:
              "Tailored Shopify apps to extend your store's functionality",
          },
          {
            "@type": "Service",
            serviceType: "Shopify Theme Development",
            description: "Custom theme development and optimization",
          },
          {
            "@type": "Service",
            serviceType: "Shopify Plus Migration",
            description: "Seamless migration to Shopify Plus",
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300..800&family=Hanken+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>

      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <Analytics />

        {process.env.NODE_ENV === "production" &&
          process.env.NEXT_PUBLIC_GA_ID && (
            <>
              <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              />
              <Script id="gtag-init" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `}
              </Script>
            </>
          )}
      </body>
    </html>
  );
}
