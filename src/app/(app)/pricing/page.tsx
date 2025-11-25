"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import PlanCard from "@/components/pricing/plan-card";
import AddonsTable from "@/components/pricing/addons-table";
import Header from "@/components/header-footer/Header";
import { MovingReviews } from "@/components/reviews/MovingReviews";

const plans = [
  {
    name: "Core",
    price: "Rs 25,000",
    highlight: false,
    badge: null as string | null,
    productRange: "0–500 products",
    features: [
      "Home page + Product page",
      "Cart & Checkout",
      "User account & login",
      "Payment gateway",
      "Promocodes",
      "COD",
    ],
    cta: { label: "Get Core", href: "/contact?plan=core" },
  },
  {
    name: "Pro",
    price: "Rs 45,000",
    highlight: true,
    badge: "Best value",
    productRange: "500–2000 products",
    features: [
      "Home page + Product page",
      "Cart & Checkout",
      "User account & login",
      "Payment gateway",
      "Promocodes",
      "COD",
    ],
    cta: { label: "Get Pro", href: "/contact?plan=pro" },
  },
  {
    name: "Elite / Enterprise",
    price: "Get a quote",
    highlight: false,
    badge: null as string | null,
    productRange: "2000+ products",
    features: [
      "Home page + Product page",
      "Cart & Checkout",
      "User account & login",
      "Payment gateway",
      "Promocodes",
      "COD",
    ],
    cta: { label: "Talk to sales", href: "/contact?plan=enterprise" },
  },
];

export default function PricingPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <Header />
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-6 md:pt-14">
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              WooCommerce/Shopify backend • Next.js frontend
            </span>
          </motion.div>
          <motion.h1
            className="text-pretty text-3xl font-semibold md:text-4xl"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            Modern ecommerce that's fast, SEO‑friendly, and scalable
          </motion.h1>
          <motion.p
            className="mx-auto max-w-2xl text-balance text-sm md:text-base text-muted-foreground"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We migrate or build your store with a clean Next.js stack, optimized
            for conversions and performance.
          </motion.p>
          <motion.div
            className="flex items-center justify-center gap-3 pt-1"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="/contact?intent=book-call">
                Book a 15‑min call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              <Link href="#addons">See add‑ons</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="mx-auto max-w-6xl px-4 pb-10 md:pb-14">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <PlanCard plan={p} />
            </motion.div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          All plans include integration with either WooCommerce or Shopify as
          backend, and a Next.js frontend.
        </p>
      </section>

      {/* Add‑on plugins */}
      <section id="addons" className="mx-auto max-w-6xl px-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-pretty text-2xl font-semibold md:text-3xl">
            Add‑on features / plugins
          </h2>
          <span className="text-xs text-muted-foreground">
            Fixed, transparent pricing
          </span>
        </div>
        <AddonsTable />
        <div className="mt-6 flex flex-col items-center justify-center gap-3 md:flex-row">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Link href="/contact?intent=addons">Request add‑ons</Link>
          </Button>
          <p className="text-xs text-muted-foreground">
            Bundle multiple add‑ons for a custom quote.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <div className="py-8">
        <MovingReviews />
      </div>

      {/* CTA footer */}
      <section className="border-t border-primary/20 bg-secondary/20">
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-10">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h4 className="text-lg font-semibold">
                Ready to migrate or build?
              </h4>
              <p className="text-sm text-muted-foreground">
                Get a quick audit and a roadmap to launch on a modern Next.js
                stack.
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="/contact?intent=start-project">
                  Start a project
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent"
              >
                <Link href="/contact?intent=quote">Get a quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
