"use client";

import { motion } from "framer-motion";
import { HelpCircle, Layers, Zap, ShieldCheck, Coins } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Bitcount_Grid_Single } from "next/font/google";

// Ensure this font is configured in your project, or switch to your app's main font
const bitcount_Grid_Single = Bitcount_Grid_Single({
  subsets: ["latin"],
  weight: ["400"], // Adjusted weight for readability
});

const font_className = bitcount_Grid_Single.className;

export default function FAQPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const faqSections = [
    {
      title: "General & Setup",
      icon: <HelpCircle className="w-5 h-5" />,
      items: [
        {
          q: "What is Pairly?",
          a: "Pairly is an all-in-one AOV (Average Order Value) booster for Shopify. We combine powerful bundling logic (Fixed Bundles, Volume Discounts, Buy X Get Y) with an AI recommendation engine to help you sell more on every order.",
        },
        {
          q: "Does Pairly replace other apps?",
          a: "Yes. Instead of paying for separate apps for Bundles, Volume Discounts, Upsells, and Related Products, Pairly handles it all in one lightweight, high-performance dashboard.",
        },
        {
          q: "Does it slow down my theme?",
          a: "Absolutely not. Pairly uses Shopify's native 'Theme App Extensions' and 'Cart Transforms API'. We don't inject heavy JavaScript code into your theme, ensuring your site remains lightning fast.",
        },
        {
          q: "Is it compatible with Shopify Plus?",
          a: "Yes, Pairly is fully optimized for Shopify Plus and works seamlessly with Checkout Extensibility.",
        },
      ],
    },
    {
      title: "Bundles & Discounts",
      icon: <Layers className="w-5 h-5" />,
      items: [
        {
          q: "How do your bundles work?",
          a: "We use Shopify's native Cart Transforms API. This means when a customer adds a bundle to their cart, we merge the items into a single line item clean and tidy. No duplicate variants or messy cart scripts.",
        },
        {
          q: "Can I run Volume Discounts and Bundles together?",
          a: "Yes! You can set up Volume Discounts (e.g., 'Buy 3, save 15%') alongside Fixed Bundles (e.g., 'The Summer Kit'). Our logic ensures the best discount is applied without breaking your margins.",
        },
        {
          q: "What is 'Buy X, Get Y'?",
          a: "This is a classic promotion type supported by Pairly. For example, 'Buy a T-Shirt, get a Hat for 50% off'. You can configure the specific trigger products (X) and the reward products (Y) easily in our dashboard.",
        },
        {
          q: "Do I need to create new products for bundles?",
          a: "No. Pairly creates 'virtual' bundles mapping to your existing inventory. Inventory is automatically deducted from the individual child items when a bundle is sold.",
        },
      ],
    },
    {
      title: "AI Recommendations",
      icon: <Zap className="w-5 h-5" />,
      items: [
        {
          q: "How does the 'Frequently Bought Together' AI work?",
          a: "Our AI engine analyzes your store's historical order data to find patterns. It identifies which products are actually purchased together by real customers and generates smart suggestions.",
        },
        {
          q: "What if I don't have enough order history?",
          a: "No problem. If the AI doesn't have enough data yet, Pairly automatically falls back to smart collection-based or tag-based recommendations so your widgets are never empty.",
        },
        {
          q: "Where can I display recommendations?",
          a: "You can inject recommendation widgets on Product Pages, the Cart Drawer, Collection Pages, or even the Thank You page using the Shopify Theme Editor.",
        },
      ],
    },
    {
      title: "Billing & Privacy",
      icon: <ShieldCheck className="w-5 h-5" />,
      items: [
        {
          q: "How does billing work?",
          a: "We offer a free tier for development stores and startups. Paid plans are based on the volume of orders generated through Pairly bundles and upsells. You only pay as you grow.",
        },
        {
          q: "Is my data private?",
          a: "Yes. We represent the gold standard in privacy compliance. We fully support GDPR/CCPA requests and only store the minimum data required to function. We never sell your data to third parties.",
        },
        {
          q: "Do you offer support?",
          a: "We offer 24/7 email support and priority chat support for our Growth and Enterprise plans. Our engineers are available to help with custom theme integrations if needed.",
        },
      ],
    },
  ];

  return (
    <div className={`${font_className}`}>
      <div className="min-h-screen text-white bg-black selection:bg-white/20 selection:text-white">
        {/* Navigation */}
        <nav className="fixed top-0 z-50 w-full border-b bg-black/80 backdrop-blur-md border-white/10">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 bg-white rounded-lg">
                  <span className="text-xl font-bold text-black">P</span>
                </div>
                <span className="text-lg font-bold tracking-tight">Pairly</span>
              </Link>
              <div className="flex gap-6 text-sm font-medium">
                <Link
                  href="/features"
                  className="text-gray-400 transition hover:text-white"
                >
                  Features
                </Link>
                <Link
                  href="/pricing"
                  className="text-gray-400 transition hover:text-white"
                >
                  Pricing
                </Link>
                <Link href="/" className="text-white">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-4 pt-32 pb-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="text-center"
            >
              <motion.div variants={fadeInUp} className="inline-block mb-6">
                <span className="px-4 py-2 text-xs font-bold tracking-wider text-white uppercase border rounded-full bg-white/10 border-white/20">
                  Help Center
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="mb-6 text-5xl font-bold leading-tight lg:text-7xl text-balance"
              >
                Common Questions. <br />
                <span className="text-white/50">Straight Answers.</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="max-w-2xl mx-auto text-xl leading-relaxed text-gray-400"
              >
                Everything you need to know about setting up bundles, volume
                discounts, and AI recommendations with Pairly.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {faqSections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="flex items-center gap-3 pb-4 mb-6 border-b border-white/10">
                  <div className="p-2 text-white rounded-md bg-white/10">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-bold text-white lg:text-2xl">
                    {section.title}
                  </h2>
                </div>

                <Accordion type="single" collapsible className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: itemIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <AccordionItem
                        value={`${sectionIndex}-${itemIndex}`}
                        className="border border-white/10 rounded-lg px-4 bg-white/5 data-[state=open]:bg-white/10 transition-colors duration-300"
                      >
                        <AccordionTrigger className="text-left text-base sm:text-lg font-medium text-white hover:text-white/80 transition py-6 hover:no-underline group [&[data-state=open]>span]:text-white">
                          <span className="text-balance">{item.q}</span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-6 text-base leading-relaxed text-gray-400">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-24 border-t sm:px-6 lg:px-8 border-white/10">
          <div className="relative max-w-4xl mx-auto overflow-hidden text-center">
            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 blur-[100px] rounded-full -z-10 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold lg:text-5xl text-balance">
                Still confused?
              </h2>
              <p className="max-w-xl mx-auto text-lg text-gray-400">
                Our team is standing by to help you configure your first bundle
                or troubleshoot any issues.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button className="w-full px-8 py-4 text-lg font-bold text-black transition bg-white rounded-lg hover:bg-gray-200 sm:w-auto">
                  Contact Support
                </button>
                <button className="w-full px-8 py-4 text-lg font-bold text-white transition bg-transparent border rounded-lg border-white/20 hover:bg-white/10 sm:w-auto">
                  Documentation
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 py-12 text-gray-500 bg-black border-t border-white/10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 mx-auto max-w-7xl sm:flex-row">
            <p>&copy; 2026 Pairly. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="transition hover:text-white">
                Privacy
              </Link>
              <Link href="/terms" className="transition hover:text-white">
                Terms
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
