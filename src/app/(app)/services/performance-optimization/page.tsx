import { Header } from "@/components/header-footer/Header";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, Gauge, Rocket } from "lucide-react";
import DottedSeparator from "@/components/seperators/DottedSeperator";

export const metadata: Metadata = {
  title: "Shopify Performance Optimization | ScaleFront",
  description:
    "Speed optimization, Core Web Vitals improvements, and performance audits for lightning-fast Shopify stores.",
  keywords: ["Shopify speed optimization", "performance optimization", "Core Web Vitals"],
};

export default function PerformanceOptimizationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
              <Zap className="h-4 w-4" />
              <span>Performance Optimization</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Make Your Shopify Store Lightning Fast
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Speed optimization, Core Web Vitals improvements, and comprehensive performance audits to create a blazing-fast shopping experience.
            </p>

            <Button size="lg" asChild>
              <Link href="/contact-us">
                Get Performance Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <DottedSeparator />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Why Speed Matters
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-secondary/20 rounded-xl p-6">
              <div className="text-4xl font-bold text-primary mb-2">53%</div>
              <p className="text-sm text-muted-foreground">
                of mobile users abandon sites that take longer than 3 seconds to load
              </p>
            </div>
            <div className="bg-secondary/20 rounded-xl p-6">
              <div className="text-4xl font-bold text-primary mb-2">100ms</div>
              <p className="text-sm text-muted-foreground">
                Every 100ms delay decreases conversions by 7%
              </p>
            </div>
            <div className="bg-secondary/20 rounded-xl p-6">
              <div className="text-4xl font-bold text-primary mb-2">2x</div>
              <p className="text-sm text-muted-foreground">
                Fast sites rank 2x higher in Google search results
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-6">
            Our Optimization Services
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Image Optimization",
                items: [
                  "Lazy loading implementation",
                  "Next-gen formats (WebP, AVIF)",
                  "Responsive images",
                  "CDN optimization",
                  "Compression techniques"
                ]
              },
              {
                title: "Code Optimization",
                items: [
                  "Minify CSS & JavaScript",
                  "Remove unused code",
                  "Optimize Liquid templates",
                  "Reduce HTTP requests",
                  "Implement code splitting"
                ]
              },
              {
                title: "Loading Strategy",
                items: [
                  "Critical CSS optimization",
                  "Deferred JavaScript",
                  "Preload key resources",
                  "Optimize web fonts",
                  "Browser caching"
                ]
              },
              {
                title: "Core Web Vitals",
                items: [
                  "Improve LCP (Largest Contentful Paint)",
                  "Optimize FID (First Input Delay)",
                  "Reduce CLS (Cumulative Layout Shift)",
                  "Enhance INP (Interaction to Next Paint)",
                  "Mobile optimization"
                ]
              }
            ].map((service) => (
              <div key={service.title} className="bg-card rounded-xl border border-border p-6">
                <h4 className="font-semibold text-lg mb-4">{service.title}</h4>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DottedSeparator />

      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Process
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Gauge,
                title: "Audit & Analysis",
                description: "Comprehensive performance audit to identify bottlenecks"
              },
              {
                icon: Rocket,
                title: "Optimization",
                description: "Implement proven optimization techniques"
              },
              {
                icon: Zap,
                title: "Monitoring",
                description: "Ongoing monitoring and continuous improvements"
              }
            ].map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="bg-card rounded-xl border border-border p-6">
                  <div className="rounded-lg bg-primary/10 p-3 w-fit mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Speed Up Your Store?
          </h2>
          <p className="text-lg opacity-90">
            Get a free performance audit and discover how fast your store can be.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact-us">
              Get Free Audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
