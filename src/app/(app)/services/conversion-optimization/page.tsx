import { Header } from "@/components/header-footer/Header";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, Target, BarChart3 } from "lucide-react";
import DottedSeparator from "@/components/seperators/DottedSeperator";

export const metadata: Metadata = {
  title: "Conversion Optimization for Shopify | ScaleFront",
  description:
    "Data-driven features designed to boost conversions, reduce cart abandonment, and increase AOV. Expert conversion optimization services.",
  keywords: ["conversion optimization", "Shopify CRO", "increase conversions"],
};

export default function ConversionOptimizationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
              <TrendingUp className="h-4 w-4" />
              <span>Conversion Optimization</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Turn More Visitors Into Customers
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Data-driven conversion optimization features that reduce cart abandonment, increase average order value, and maximize your store's revenue potential.
            </p>

            <Button size="lg" asChild>
              <Link href="/contact-us">
                Boost Your Conversions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <DottedSeparator />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Conversion-Focused Features
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Cart Abandonment Recovery",
                items: [
                  "Exit-intent popups",
                  "Abandoned cart emails",
                  "Cart save functionality",
                  "Discount incentives",
                  "Progress indicators"
                ]
              },
              {
                title: "Upsell & Cross-sell",
                items: [
                  "Product recommendations",
                  "Frequently bought together",
                  "Bundle deals",
                  "One-click upsells",
                  "Post-purchase offers"
                ]
              },
              {
                title: "Trust & Social Proof",
                items: [
                  "Customer reviews integration",
                  "Trust badges",
                  "Live visitor counters",
                  "Stock urgency alerts",
                  "Recent purchase notifications"
                ]
              },
              {
                title: "Checkout Optimization",
                items: [
                  "One-page checkout",
                  "Multiple payment options",
                  "Guest checkout",
                  "Address autocomplete",
                  "Progress indicators"
                ]
              },
              {
                title: "Personalization",
                items: [
                  "Dynamic content",
                  "Geo-targeting",
                  "Customer segmentation",
                  "Personalized recommendations",
                  "Custom landing pages"
                ]
              },
              {
                title: "Performance Features",
                items: [
                  "Quick add to cart",
                  "Predictive search",
                  "Smart filtering",
                  "Wishlist functionality",
                  "Compare products"
                ]
              }
            ].map((feature) => (
              <div key={feature.title} className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-semibold text-lg mb-4">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.items.map((item) => (
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
            Our Approach
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: BarChart3,
                title: "Data Analysis",
                description: "Analyze your store's metrics to identify optimization opportunities."
              },
              {
                icon: Target,
                title: "Strategic Implementation",
                description: "Implement proven conversion optimization tactics tailored to your store."
              },
              {
                icon: TrendingUp,
                title: "Continuous Testing",
                description: "A/B testing and iteration to maximize results over time."
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
            Ready to Increase Your Conversions?
          </h2>
          <p className="text-lg opacity-90">
            Let's implement conversion-focused features that drive more sales.
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
