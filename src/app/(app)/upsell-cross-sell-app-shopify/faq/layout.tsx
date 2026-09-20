import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Upsell App FAQs & Setup Guide | ScaleFront",
  description:
    "Comprehensive FAQs and step-by-step setup guide for Real AI Related Products and Cross-Sell app for Shopify merchants.",
  alternates: {
    canonical: "/upsell-cross-sell-app-shopify/faq",
  },
};

export default function UpsellFaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
