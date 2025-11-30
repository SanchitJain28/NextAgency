import type { Metadata } from "next";
import "@fontsource/stack-sans-text/200.css";
import "@fontsource/stack-sans-text/300.css";
import "@fontsource/stack-sans-text/400.css";
import "@fontsource/stack-sans-text/500.css";
import "@fontsource/stack-sans-text/600.css";
import "@fontsource/stack-sans-text/700.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
export const metadata: Metadata = {
  title: {
    default: "ScaleFront - Elite Shopify Development Agency | Custom Apps & Themes",
    template: "%s | ScaleFront - Expert Shopify Solutions"
  },
  icons:{
    icon:"/logos/scalefrontonlyicon.png"
  },
  description: "Elite Shopify development agency specializing in headless commerce, custom apps, theme development, and performance optimization. Transform your Shopify store with cutting-edge solutions.",
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
    "custom Shopify features"
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
    description: "Transform your Shopify store with expert development services: custom apps, headless commerce, theme customization, and performance optimization.",
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
    description: "Expert Shopify development: custom apps, headless commerce, theme development, and performance optimization for growing brands.",
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
    google: "your-google-verification-code",
  },
  category: "technology",
  classification: "Shopify Development Agency",
  other: {
    "geo.region": "IN",
    "geo.country": "India",
    "geo.placename": "India",
    "contact": "hello@scalefront.io",
    "distribution": "global",
    "rating": "general",
    "robots": "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO tags that can't be handled by Next.js metadata */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ScaleFront",
              "description": "Elite Shopify development agency specializing in custom apps, headless commerce, theme development, and performance optimization",
              "url": "https://scalefront.io",
              "logo": "https://scalefront.io/logos/scalefrontsquarelogo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+919650296375",
                "contactType": "customer service",
                "email": "hello@scalefront.io",
                "availableLanguage": ["English", "Hindi"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressRegion": "India"
              },
              "sameAs": [
                "https://linkedin.com/company/scalefront",
                "https://twitter.com/scalefront",
                "https://github.com/scalefront"
              ],
              "makesOffer": [
                {
                  "@type": "Service",
                  "serviceType": "Headless Commerce Development",
                  "description": "Custom headless Shopify solutions for enterprise-level performance"
                },
                {
                  "@type": "Service",
                  "serviceType": "Custom Shopify App Development",
                  "description": "Tailored Shopify apps to extend your store's functionality"
                },
                {
                  "@type": "Service",
                  "serviceType": "Shopify Theme Development",
                  "description": "Custom theme development and optimization"
                },
                {
                  "@type": "Service",
                  "serviceType": "Shopify Plus Migration",
                  "description": "Seamless migration to Shopify Plus"
                }
              ]
            })
          }}
        />

        {/* Professional Services structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "ScaleFront",
              "image": "https://scalefront.io/logos/scalefrontsquarelogo.png",
              "description": "Expert Shopify development agency offering custom apps, headless commerce, and performance optimization",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "priceRange": "$$",
              "telephone": "+919650296375",
              "url": "https://scalefront.io"
            })
          }}
        />
      </head>
      
      <body
        className="antialiased"
      >
        {children}
        <Analytics/>
        
        {/* Google Analytics - Replace with your tracking ID */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'GA_TRACKING_ID');
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}