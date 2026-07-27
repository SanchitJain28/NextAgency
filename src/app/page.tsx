import { FAQS, SERVICES } from "@/data/data";
import type { Metadata } from "next";
import Hero from "@/components/index/hero";
import Stats from "@/components/index/stats";
import Services from "@/components/index/services";
import WhyUs from "@/components/index/why-us";
import CaseStudies from "@/components/index/case-studies";
import TechStack from "@/components/index/tech-stack";
import Testimonials from "@/components/index/testimonials";
import Blog from "@/components/index/blog";
import Process from "@/components/index/process";
import FAQ from "@/components/index/faq";
import CTA from "@/components/index/cta";

export const metadata: Metadata = {
  title:
    "Shopify Development Agency India | Custom Apps & Headless Commerce — ScaleFront",
  description:
    "ScaleFront is an expert Shopify development agency based in India. We build custom Shopify apps, headless storefronts, and high-converting themes for DTC brands doing $1M+. Shopify Plus partners.",
  alternates: { canonical: "https://scalefront.io/" },
  openGraph: {
    title: "Shopify Development Agency India — ScaleFront",
    description:
      "Expert Shopify development: custom apps, headless commerce, theme development, CRO, and Shopify Plus migration for scaling brands.",
    url: "https://scalefront.io",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "ScaleFront Shopify Development Services",
            itemListElement: SERVICES.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: s.title,
              description: s.desc,
              url: `https://scalefront.io${s.href}`,
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "ScaleFront",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "60",
              bestRating: "5",
            },
          }),
        }}
      />

      <main className="font-sans bg-white text-[#111111] leading-[1.55] antialiased overflow-x-hidden">
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <CaseStudies />
        <TechStack />
        <Testimonials />
        <Blog />
        <Process />
        <FAQ />
        <CTA />
      </main>
    </>
  );
}
