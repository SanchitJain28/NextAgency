"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Bitcount_Grid_Single } from "next/font/google";

const bitcount_Grid_Single = Bitcount_Grid_Single({
  subsets: ["latin"],
  weight: ["300"],
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
      title: "Getting Started",
      items: [
        {
          q: "What is Real AI Related Products?",
          a: "Real AI Related Products is an AI-powered Shopify app that automatically recommends related products, bundles, and combos to your customers. It uses advanced AI technology to understand your products and suggest the most relevant items, helping increase your sales through smart upselling and cross-selling.",
        },
        {
          q: "Do I need coding skills to use this app?",
          a: "No! The app is completely plug-and-play. Once installed, it automatically syncs your products and starts generating AI recommendations. No coding or technical configuration required.",
        },
        {
          q: "How long does setup take?",
          a: "Installation is instant. However, the initial AI setup time depends on your store size: Small stores (under 100 products): 5-15 minutes, Medium stores (100-1,000 products): 15-45 minutes, Large stores (1,000+ products): 1-3 hours. The app works in the background, so you can continue managing your store while setup completes.",
        },
        {
          q: "Which pages can display recommendations?",
          a: "You can show AI recommendations on: Product pages, Cart page, Collection pages, Home page, Any custom page or section you choose.",
        },
      ],
    },
    {
      title: "AI & Recommendations",
      items: [
        {
          q: "How does the AI work?",
          a: "The app analyzes each product's title and description to understand what it's about. It then finds products that are semantically similar — meaning they're related in meaning, not just matching keywords. For example, if you sell a book called 'Ikigai,' it might recommend 'The Subtle Art of Not Giving a F*ck' or 'Living Longer, Happier' because they're all about personal development and well-being.",
        },
        {
          q: "What recommendation widgets are available?",
          a: "The app offers: AI Related Products – Smart product recommendations for product and cart pages, Recently Viewed – Shows items customers have browsed, New Arrivals – Highlights your latest products, Best Sellers – Displays top-performing items.",
        },
        {
          q: "Can I manually choose recommendations?",
          a: "Yes! While AI handles recommendations automatically, you have full control to manually select specific products to recommend for any item in your store.",
        },
        {
          q: "How accurate are the recommendations?",
          a: "The AI ensures recommendations stay within the same or similar categories, making them highly relevant. The more detailed your product descriptions, the better the recommendations will be.",
        },
        {
          q: "Will recommendations update when I add new products?",
          a: "Yes, when you add new products, the app automatically generates AI embeddings for them and includes them in future recommendations.",
        },
      ],
    },
    {
      title: "Customization",
      items: [
        {
          q: "Can I customize how widgets look?",
          a: "You can customize: Widget placement and position, Style and layout, Colors and fonts, Number of products displayed, Widget titles and labels. All customization is done through an easy-to-use interface – no coding needed.",
        },
        {
          q: "Can I turn recommendations on/off for specific pages?",
          a: "Yes, you have complete control over where widgets appear. Enable or disable them on any page or section of your store.",
        },
        {
          q: "Will the widgets match my theme?",
          a: "The widgets are designed to integrate seamlessly with any Shopify theme. You can further customize them to perfectly match your brand aesthetic.",
        },
      ],
    },
    {
      title: "Performance & Technical",
      items: [
        {
          q: "Will this app slow down my store?",
          a: "No. The app is optimized for performance and won't negatively impact your store's loading speed.",
        },
        {
          q: "What if I have thousands of products?",
          a: "The app handles stores of all sizes. For large catalogs, we use background processing to ensure smooth operation without affecting your store's performance.",
        },
        {
          q: "Is my data secure?",
          a: "Yes. We follow Shopify's security best practices and only access the product data necessary to generate recommendations.",
        },
        {
          q: "Does this work with my existing apps?",
          a: "Yes, the app is designed to work alongside your other Shopify apps without conflicts.",
        },
      ],
    },
    {
      title: "Pricing & Value",
      items: [
        {
          q: "How does this increase my revenue?",
          a: "The app boosts sales through: Higher Average Order Value (AOV) – Customers discover complementary products, Better conversion rates – Relevant recommendations keep customers engaged, Reduced cart abandonment – Smart cart page suggestions encourage completion, Automated upselling – No manual work required to suggest related items.",
        },
        {
          q: "Do I need to maintain the recommendations?",
          a: "No ongoing maintenance required! The AI continuously works in the background. You can optionally add manual recommendations whenever you want, but it's not necessary.",
        },
      ],
    },
    {
      title: "Troubleshooting",
      items: [
        {
          q: "What if recommendations aren't showing up?",
          a: "Check that: 1) Initial setup has completed (check your dashboard), 2) Widgets are enabled for the page you're viewing, 3) You have enough products in your catalog (minimum 3-5 recommended), 4) Product descriptions are filled out.",
        },
        {
          q: "Can I preview recommendations before going live?",
          a: "Yes, you can preview how widgets will appear on your store before enabling them for customers.",
        },
        {
          q: "What if I don't like certain recommendations?",
          a: "You can manually override any AI recommendation. Simply select which products you'd prefer to show for specific items.",
        },
        {
          q: "How do I get support?",
          a: "Contact our support team through the app dashboard or email us directly. We're here to help you maximize your results!",
        },
      ],
    },
    {
      title: "Best Practices",
      items: [
        {
          q: "How can I get better recommendations?",
          a: "Write detailed, descriptive product titles, Include comprehensive product descriptions, Use consistent category naming, Keep product information up-to-date.",
        },
        {
          q: "Where should I place widgets for maximum impact?",
          a: "Product pages: Below product description or above 'Add to Cart', Cart page: Before checkout button, Collection pages: At the top or between product rows, Home page: In featured sections.",
        },
        {
          q: "Should I use AI or manual recommendations?",
          a: "Start with AI recommendations – they work great out of the box. Add manual recommendations only for strategic pairings or promotions you want to highlight.",
        },
      ],
    },
  ];

  return (
    <div className={`${font_className}`}>
      <div className="min-h-screen text-white bg-black">
        {/* Navigation */}
        <nav className="fixed top-0 z-50 w-full border-b bg-black/80 backdrop-blur-md border-white/10">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 bg-white rounded-lg">
                  <HelpCircle className="w-5 h-5 text-black" />
                </div>
                <span className="text-lg font-bold">Recommendations AI</span>
              </Link>
              <Link
                href="/shopify"
                className="text-gray-400 transition hover:text-white"
              >
                Back to Home
              </Link>
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
                <span className="px-4 py-2 text-sm font-medium text-white border rounded-full bg-white/10 border-white/20">
                  Frequently Asked Questions
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="mb-6 text-5xl font-bold leading-tight lg:text-6xl text-balance"
              >
                Got Questions? We&apos;ve Got Answers
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="max-w-2xl mx-auto text-xl leading-relaxed text-gray-400"
              >
                Everything you need to know about Real AI Related Products and
                how to maximize your store&apos;s potential.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqSections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="mb-8 text-2xl font-bold text-white lg:text-3xl">
                  {section.title}
                </h2>

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
                        className="border-b border-white/10 last:border-b-0"
                      >
                        <AccordionTrigger className="py-4 text-lg font-semibold text-left text-white transition hover:text-gray-300 hover:no-underline group">
                          <span className="text-balance">{item.q}</span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-4 leading-relaxed text-gray-400">
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
        {/* <section className="px-4 py-20 sm:px-6 lg:px-8 bg-white/5 border-y border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl text-balance">
                Still have questions?
              </h2>
              <p className="mb-8 text-lg text-gray-400">
                Our support team is here to help. Reach out anytime through the
                app dashboard or email us directly.
              </p>
              <button className="px-8 py-4 text-lg font-semibold text-black transition bg-white rounded-full hover:bg-gray-200">
                Contact Support
              </button>
            </motion.div>
          </div>
        </section> */}

        {/* Footer */}
        <footer className="px-4 py-12 text-gray-400 bg-black border-t border-white/10 sm:px-6 lg:px-8">
          <div className="mx-auto text-center max-w-7xl">
            <p>&copy; 2025 Recommendations AI. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
