import type { Metadata } from "next";
import Hero from "@/components/index/hero";
import LogoMarquee from "@/components/index/logo-marquee";
import IntroArticle from "@/components/index/intro-article";
import FeaturedWork from "@/components/index/featured-work";
import Services from "@/components/index/services";
import CaseStudies from "@/components/index/case-studies";
import ResultsBand from "@/components/index/stats";
import Testimonials from "@/components/index/testimonials";
import SecondaryArticle from "@/components/index/secondary-article";
import Pricing from "@/components/index/pricing";
import FAQ from "@/components/index/faq";
import ContactCTA from "@/components/index/contact-cta";

export const metadata: Metadata = {
  title: "Shopify Development Agency India | ScaleFront",
  description:
    "ScaleFront is an expert Shopify development agency based in India. We build custom Shopify apps, headless storefronts, and high-converting themes for DTC brands doing $1M+. Shopify Plus partners.",
  alternates: { canonical: "https://scalefront.io/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Shopify Development Agency India — ScaleFront",
    description:
      "Custom Shopify apps, headless commerce, theme development, CRO, and Shopify Plus migration for scaling brands.",
    url: "https://scalefront.io",
    siteName: "ScaleFront",
    type: "website",
    images: [
      {
        url: "https://scalefront.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ScaleFront — Shopify Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Development Agency India — ScaleFront",
    description:
      "Custom Shopify apps, headless commerce, and Shopify Plus development for DTC brands.",
    images: ["https://scalefront.io/og-image.jpg"],
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://scalefront.io/#organization",
        name: "ScaleFront",
        url: "https://scalefront.io",
        logo: "https://scalefront.io/logo/updated_logo.png",
        sameAs: [
          "https://twitter.com/scalefront",
          "https://linkedin.com/company/scalefront",
          "https://github.com/scalefront",
        ],
        email: "hello@scalefront.io",
        telephone: "+91-9650296375",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="w-full overflow-clip bg-[var(--sf-paper)]">
        <Hero />
        <LogoMarquee />
        <IntroArticle />
        <FeaturedWork />
        <Services />
        <CaseStudies />
        <ResultsBand />
        <Testimonials />
        <SecondaryArticle />
        <Pricing />
        <FAQ />
        <ContactCTA />
      </main>
    </>
  );
}
