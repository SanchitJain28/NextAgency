import { Header } from "@/components/header-footer/Header";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, Code2, TrendingUp } from "lucide-react";
import DottedSeparator from "@/components/seperators/DottedSeperator";

export const metadata: Metadata = {
  title: "Headless Commerce Development | ScaleFront",
  description:
    "Build blazing-fast, decoupled Shopify storefronts with modern frameworks like Next.js and React. Expert headless commerce solutions.",
  keywords: ["headless commerce", "Shopify headless", "Next.js Shopify", "React Shopify"],
};

export default function HeadlessCommercePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
              <Zap className="h-4 w-4" />
              <span>Headless Commerce</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Build Lightning-Fast Shopify Storefronts with Headless Commerce
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Decouple your Shopify backend from the frontend to create blazing-fast, highly customizable storefronts using modern frameworks like Next.js, React, and Hydrogen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact-us">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <DottedSeparator />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            What is Headless Commerce?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Headless commerce separates your store's frontend (what customers see) from the backend (Shopify admin, product management, checkout). This architecture gives you complete freedom to build custom shopping experiences while leveraging Shopify's powerful eCommerce infrastructure.
              </p>
              <p className="text-muted-foreground">
                With headless Shopify, you can create unique, brand-focused storefronts that load instantly, rank higher in search engines, and convert better than traditional themes.
              </p>
            </div>

            <div className="bg-secondary/20 rounded-xl p-8">
              <h3 className="font-semibold text-xl mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {[
                  "3-5x faster page load times",
                  "Unlimited design flexibility",
                  "Better SEO performance",
                  "Enhanced mobile experience",
                  "Scalability for high traffic",
                  "Future-proof architecture"
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <DottedSeparator />

      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Our Headless Commerce Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Code2,
                title: "Next.js Storefronts",
                description: "Build server-side rendered storefronts with Next.js for optimal performance and SEO."
              },
              {
                icon: Zap,
                title: "Shopify Hydrogen",
                description: "Leverage Shopify's official React-based framework for headless commerce."
              },
              {
                icon: TrendingUp,
                title: "Custom React Apps",
                description: "Fully custom React applications tailored to your unique business needs."
              }
            ].map((solution) => {
              const Icon = solution.icon;
              return (
                <div key={solution.title} className="bg-card rounded-xl border border-border p-6">
                  <div className="rounded-lg bg-primary/10 p-3 w-fit mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{solution.title}</h3>
                  <p className="text-muted-foreground text-sm">{solution.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <DottedSeparator />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Our Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understand your business goals and technical requirements" },
              { step: "02", title: "Design", desc: "Create mockups and prototypes for your custom storefront" },
              { step: "03", title: "Development", desc: "Build your headless commerce solution with modern frameworks" },
              { step: "04", title: "Launch & Support", desc: "Deploy your store and provide ongoing maintenance" }
            ].map((phase) => (
              <div key={phase.step} className="space-y-2">
                <div className="text-4xl font-bold text-primary/20">{phase.step}</div>
                <h3 className="font-semibold text-lg">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Go Headless?
          </h2>
          <p className="text-lg opacity-90">
            Let's build a lightning-fast, highly customizable Shopify storefront that drives conversions.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact-us">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
