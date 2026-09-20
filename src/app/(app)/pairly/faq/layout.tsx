import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pairly Shopify App FAQs & Setup Guide | ScaleFront",
  description:
    "Frequently asked questions, theme extension setup instructions, and integration support for Pairly Shopify app.",
  alternates: {
    canonical: "/pairly/faq",
  },
};

export default function PairlyFaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
