import { Header } from "@/components/header-footer/Header";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Code2, Puzzle, Rocket } from "lucide-react";
import DottedSeparator from "@/components/seperators/DottedSeperator";

export const metadata: Metadata = {
  title: "Custom Shopify App Development | ScaleFront",
  description:
    "Tailored Shopify apps to extend your store's functionality and solve unique business challenges. Expert custom app development.",
  keywords: ["custom Shopify apps", "Shopify app development", "private Shopify apps"],
};

export default function CustomShopifyAppsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
              <Code2 className="h-4 w-4" />
              <span>Custom Shopify Apps</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Custom Shopify Apps Built for Your Unique Business Needs
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Extend your Shopify store's functionality with tailored apps designed to solve your specific business challenges and streamline operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact-us">
                  Discuss Your App Idea
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
            Why Build a Custom Shopify App?
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-muted-foreground">
                While the Shopify App Store offers thousands of apps, sometimes your business needs are unique. A custom Shopify app gives you complete control over functionality, integration, and user experience.
              </p>

              <div className="space-y-4">
                {[
                  "Solve specific business problems",
                  "Integrate with your existing systems",
                  "Own your data and functionality",
                  "No monthly subscription fees",
                  "Competitive advantage",
                  "Scalable to your growth"
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Popular Use Cases</h3>
              <div className="grid gap-4">
                {[
                  "Advanced inventory management",
                  "Custom pricing rules",
                  "B2B wholesale portals",
                  "Subscription management",
                  "Custom reporting dashboards",
                  "Third-party API integrations",
                  "Automated workflows",
                  "Custom checkout experiences"
                ].map((useCase) => (
                  <div key={useCase} className="flex items-start gap-2 bg-secondary/20 rounded-lg p-4">
                    <Puzzle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <DottedSeparator />

      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Development Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Code2,
                title: "Public Apps",
                description: "Apps listed on the Shopify App Store for merchants worldwide."
              },
              {
                icon: Rocket,
                title: "Private Apps",
                description: "Custom apps built exclusively for your store's unique requirements."
              },
              {
                icon: Puzzle,
                title: "Embedded Apps",
                description: "Seamlessly integrated apps within the Shopify admin interface."
              }
            ].map((type) => {
              const Icon = type.icon;
              return (
                <div key={type.title} className="bg-card rounded-xl border border-border p-6">
                  <div className="rounded-lg bg-primary/10 p-3 w-fit mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{type.title}</h3>
                  <p className="text-muted-foreground text-sm">{type.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Have an App Idea?
          </h2>
          <p className="text-lg opacity-90">
            Let's bring your custom Shopify app to life and solve your unique business challenges.
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
