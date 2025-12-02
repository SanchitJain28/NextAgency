"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/header-footer/Header";
import { MovingReviews } from "@/components/reviews/MovingReviews";

const services = [
  {
    name: "Custom Shopify App Development",
    price: "Starting at $2,000",
    description: "Build custom apps tailored to your unique business needs with full Shopify integration.",
  },
  {
    name: "Headless Commerce Solutions",
    price: "Starting at $5,000",
    description: "Modern, decoupled storefronts with Next.js for blazing-fast performance and SEO.",
  },
  {
    name: "Theme Development & Customization",
    price: "Starting at $1,500",
    description: "Beautiful, responsive themes that perfectly match your brand identity.",
  },
  {
    name: "Performance Optimization",
    price: "Starting at $800",
    description: "Speed up your store and improve Core Web Vitals for better rankings and conversions.",
  },
  {
    name: "Conversion Rate Optimization",
    price: "Starting at $1,200",
    description: "Data-driven improvements to maximize your store's conversion rate and revenue.",
  },
  {
    name: "Shopify Plus Migration",
    price: "Starting at $3,500",
    description: "Seamless migration to Shopify Plus with zero downtime and data integrity.",
  },
  {
    name: "Mobile App Development",
    price: "Starting at $4,000",
    description: "Native iOS and Android apps integrated with your Shopify store.",
  },
  {
    name: "Third-Party Integrations",
    price: "Starting at $600",
    description: "Connect your store with ERPs, CRMs, payment gateways, and other platforms.",
  },
  {
    name: "Store Audits & Consulting",
    price: "Starting at $500",
    description: "Comprehensive technical audits and strategic guidance to optimize your store.",
  },
  {
    name: "Backend & API Development",
    price: "Starting at $1,800",
    description: "Custom backend solutions and API integrations for complex business logic.",
  },
  {
    name: "Subscription & Membership Sites",
    price: "Starting at $2,500",
    description: "Recurring billing systems and membership portals for subscription-based businesses.",
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
              <Link href="/contact?intent=quote">Get a quote</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 pb-10 md:pb-14">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-semibold md:text-3xl mb-2">Our Services</h2>
          <p className="text-sm text-muted-foreground">Transparent pricing for all your Shopify needs</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-lg border border-primary/15 bg-card p-6 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
              <p className="text-2xl font-bold text-primary mb-3">{service.price}</p>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          All prices are estimates. Final pricing depends on project scope and complexity. Contact us for a detailed quote.
        </p>
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
