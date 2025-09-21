import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Better font loading performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // Better font loading performance
});

export const metadata: Metadata = {
  title: {
    default: "Top Com Agency - Headless WooCommerce & Next.js eCommerce Development",
    template: "%s | Top Com Agency - Fast eCommerce Solutions"
  },
  icons:{
    icon:"/logo.ico"
  },
  description: "Expert Next.js eCommerce development agency specializing in headless WooCommerce, Shopify migrations, and lightning-fast online stores. Transform your slow eCommerce site into a high-performance Next.js powerhouse.",
  keywords: [
    "headless WooCommerce Next.js",
    "WooCommerce speed optimization", 
    "Shopify headless frontend",
    "WooCommerce Next.js migration",
    "Next.js eCommerce development",
    "WooCommerce Shopify hybrid",
    "headless eCommerce India",
    "WooCommerce frontend performance",
    "Next.js for eCommerce scalability",
    "Shopify speed optimization India",
    "how to make WooCommerce faster with Next.js",
    "best headless CMS for WooCommerce 2025",
    "WooCommerce SEO optimization Next.js",
    "eCommerce website speed optimization"
  ],
  authors: [{ name: "Top Com Agency" }],
  creator: "Top Com Agency",
  publisher: "Top Com Agency",
  metadataBase: new URL("https://topcomagency.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://topcomagency.com", // Replace with your actual domain
    siteName: "Top Com Agency",
    title: "Top Com Agency - Headless WooCommerce & Next.js eCommerce Experts",
    description: "Transform your slow WooCommerce or Shopify store into a lightning-fast Next.js eCommerce website. Expert headless development, migrations, and performance optimization.",
    images: [
      {
        url: "/og-image.jpg", // Add your OG image
        width: 1200,
        height: 630,
        alt: "Top Com Agency - Fast Next.js eCommerce Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Com Agency - Headless WooCommerce & Next.js eCommerce Development",
    description: "Expert Next.js eCommerce development. Make your WooCommerce/Shopify store 10x faster with headless architecture.",
    images: ["/twitter-image.jpg"], // Add your Twitter image
    creator: "@topcomagency", // Replace with your actual Twitter handle
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
    google: "your-google-verification-code", // Add your Google Search Console verification
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "eCommerce Development Agency",
  other: {
    "geo.region": "IN",
    "geo.country": "India",
    "geo.placename": "India",
    "contact": "contact@topcomagency.com", // Replace with your actual email
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
              "name": "Top Com Agency",
              "description": "Expert Next.js eCommerce development agency specializing in headless WooCommerce and Shopify solutions",
              "url": "https://topcomagency.com",
              "logo": "https://topcomagency.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-XXXXXXXXXX", // Add your phone number
                "contactType": "customer service",
                "email": "contact@topcomagency.com",
                "availableLanguage": ["English", "Hindi"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressRegion": "India"
              },
              "sameAs": [
                "https://linkedin.com/company/topcomagency", // Add your social profiles
                "https://twitter.com/topcomagency",
                "https://github.com/topcomagency"
              ],
              "offers": {
                "@type": "Service",
                "serviceType": "eCommerce Development",
                "description": "Headless WooCommerce and Shopify development with Next.js"
              }
            })
          }}
        />
        
        {/* Additional service-specific structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Headless WooCommerce Next.js Development",
              "description": "Transform your slow WooCommerce store into a lightning-fast Next.js eCommerce website",
              "provider": {
                "@type": "Organization",
                "name": "Top Com Agency"
              },
              "areaServed": "India",
              "serviceType": "Web Development",
              "category": "eCommerce Development"
            })
          }}
        />
      </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        
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