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
  title: "Shopify Development Agency & Experts",
  description:
    "ScaleFront is an elite Shopify development agency. We engineer custom themes, private apps, headless stores, and CRO fixes for scaling brands.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Shopify Development Agency & Experts | ScaleFront",
    description:
      "ScaleFront is an elite Shopify development agency. We engineer custom themes, private apps, headless stores, and CRO fixes for scaling brands.",
    url: "https://www.scalefront.io",
    siteName: "ScaleFront",
    type: "website",
    images: [
      {
        url: "https://www.scalefront.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ScaleFront — Shopify Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Development Agency & Experts | ScaleFront",
    description:
      "ScaleFront is an elite Shopify development agency. We engineer custom themes, private apps, headless stores, and CRO fixes for scaling brands.",
    images: ["https://www.scalefront.io/og-image.jpg"],
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.scalefront.io/#organization",
        name: "ScaleFront",
        url: "https://www.scalefront.io",
        logo: "https://www.scalefront.io/logo/updated_logo.png",
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
