import { Header } from "@/components/header-footer/Header";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Palette, Sparkles, Layout } from "lucide-react";
import DottedSeparator from "@/components/seperators/DottedSeperator";

export const metadata: Metadata = {
  title: "Shopify Theme Development & Customization | ScaleFront",
  description:
    "Beautiful, responsive Shopify themes built from scratch or customized to match your brand perfectly. Expert theme development services.",
  keywords: ["Shopify theme development", "custom Shopify themes", "theme customization"],
};

export default function ThemeDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
              <Palette className="h-4 w-4" />
              <span>Theme Development</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Custom Shopify Themes That Reflect Your Brand
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Build beautiful, responsive Shopify themes from scratch or customize existing themes to perfectly match your brand identity and business goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact-us">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <DottedSeparator />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Custom Theme Development
              </h2>
              <p className="text-muted-foreground mb-6">
                Create a unique storefront built from the ground up with Shopify's Liquid templating language, modern CSS, and JavaScript.
              </p>
              <ul className="space-y-3">
                {[
                  "100% custom design matching your brand",
                  "Optimized for speed and performance",
                  "Mobile-first responsive design",
                  "SEO-friendly structure",
                  "Conversion-focused layouts",
                  "Easy to maintain and update"
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Theme Customization
              </h2>
              <p className="text-muted-foreground mb-6">
                Modify existing Shopify themes to add unique features, improve performance, and align with your brand.
              </p>
              <ul className="space-y-3">
                {[
                  "Custom section development",
                  "Feature additions and modifications",
                  "Performance optimization",
                  "Third-party app integration",
                  "Custom product page layouts",
                  "Checkout customization"
                ].map((service) => (
                  <li key={service} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{service}</span>
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            What We Deliver
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Sparkles,
                title: "Pixel-Perfect Design",
                description: "Every element crafted with attention to detail and brand consistency."
              },
              {
                icon: Layout,
                title: "Responsive Layouts",
                description: "Flawless experience across all devices and screen sizes."
              },
              {
                icon: Palette,
                title: "Brand Alignment",
                description: "Themes that perfectly reflect your brand identity and values."
              }
            ].map((deliverable) => {
              const Icon = deliverable.icon;
              return (
                <div key={deliverable.title} className="bg-card rounded-xl border border-border p-6">
                  <div className="rounded-lg bg-primary/10 p-3 w-fit mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{deliverable.title}</h3>
                  <p className="text-muted-foreground text-sm">{deliverable.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready for a Stunning Shopify Theme?
          </h2>
          <p className="text-lg opacity-90">
            Let's create a beautiful, high-converting theme that sets you apart.
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
