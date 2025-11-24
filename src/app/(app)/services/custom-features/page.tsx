import { Header } from "@/components/header-footer/Header";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Wrench, Sparkles } from "lucide-react";
import DottedSeparator from "@/components/seperators/DottedSeperator";

export const metadata: Metadata = {
  title: "Custom Feature Development for Shopify | ScaleFront",
  description:
    "Unique features and functionality tailored specifically to your business requirements. Expert custom development.",
  keywords: ["custom Shopify features", "custom development", "Shopify customization"],
};

export default function CustomFeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
              <Wrench className="h-4 w-4" />
              <span>Custom Feature Development</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Custom Features Built for Your Unique Needs
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Bring your unique ideas to life with custom features and functionality designed specifically for your business requirements and workflows.
            </p>

            <Button size="lg" asChild>
              <Link href="/contact-us">
                Discuss Your Idea
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
            Custom Feature Examples
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Product Configurators",
                description: "Interactive tools for customers to customize products in real-time"
              },
              {
                title: "Advanced Calculators",
                description: "Custom pricing, shipping, or ROI calculators"
              },
              {
                title: "Booking Systems",
                description: "Appointment scheduling and reservation management"
              },
              {
                title: "Customer Portals",
                description: "Dedicated dashboards for account management"
              },
              {
                title: "Quote Requests",
                description: "Custom quote generation for B2B businesses"
              },
              {
                title: "Subscription Features",
                description: "Custom subscription and membership functionality"
              },
              {
                title: "Multi-vendor Marketplace",
                description: "Transform your store into a marketplace platform"
              },
              {
                title: "Custom Forms",
                description: "Advanced forms with conditional logic"
              },
              {
                title: "Virtual Try-On",
                description: "AR/VR features for product visualization"
              }
            ].map((feature) => (
              <div key={feature.title} className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DottedSeparator />

      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Our Development Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understand your requirements and business goals"
              },
              {
                step: "02",
                title: "Planning",
                description: "Design the feature architecture and user flow"
              },
              {
                step: "03",
                title: "Development",
                description: "Build and test the custom feature"
              },
              {
                step: "04",
                title: "Launch",
                description: "Deploy and provide ongoing support"
              }
            ].map((phase) => (
              <div key={phase.step} className="space-y-3">
                <div className="text-4xl font-bold text-primary/20">{phase.step}</div>
                <h3 className="font-semibold text-lg">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Have a Custom Feature in Mind?
          </h2>
          <p className="text-lg opacity-90">
            Let's build the exact functionality your business needs.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact-us">
              Start Building
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
