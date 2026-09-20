import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Development Pricing & Plans",
  description:
    "Transparent Shopify development pricing. Fixed rates for custom themes, bespoke Shopify apps, CRO audits, and headless commerce solutions.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Shopify Development Pricing & Plans | ScaleFront",
    description:
      "Transparent Shopify development pricing. Fixed rates for custom themes, bespoke Shopify apps, CRO audits, and headless commerce solutions.",
    url: "https://www.scalefront.io/pricing",
    siteName: "ScaleFront",
    type: "website",
    images: [
      {
        url: "https://www.scalefront.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ScaleFront Shopify Development Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Development Pricing & Plans | ScaleFront",
    description:
      "Transparent Shopify development pricing. Fixed rates for custom themes, bespoke Shopify apps, CRO audits, and headless commerce solutions.",
    images: ["https://www.scalefront.io/og-image.jpg"],
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
