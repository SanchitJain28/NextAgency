import { Header } from "@/components/header-footer/Header";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Smartphone, Tablet, Monitor } from "lucide-react";
import DottedSeparator from "@/components/seperators/DottedSeperator";

export const metadata: Metadata = {
  title: "Shopify Mobile Apps Development | ScaleFront",
  description:
    "Native mobile applications for your Shopify store. iOS and Android apps to reach customers on any device.",
  keywords: ["Shopify mobile app", "iOS app", "Android app", "React Native"],
};

export default function MobileAppsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
              <Smartphone className="h-4 w-4" />
              <span>Mobile Apps</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Native Mobile Apps for Your Shopify Store
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Reach customers on iOS and Android with native mobile apps that provide a seamless shopping experience and drive mobile commerce growth.
            </p>

            <Button size="lg" asChild>
              <Link href="/contact-us">
                Build Your App
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
            Why Build a Mobile App?
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Mobile commerce is growing exponentially. A native mobile app provides a superior shopping experience, increases customer loyalty, and unlocks powerful mobile-specific features.
              </p>

              <div className="space-y-4">
                {[
                  "Better user experience than mobile web",
                  "Push notifications for marketing",
                  "Offline functionality",
                  "Access to device features (camera, GPS)",
                  "Higher conversion rates",
                  "Increased customer retention",
                  "Brand presence on app stores",
                  "Competitive advantage"
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-secondary/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">App Features</h3>
              <ul className="space-y-3">
                {[
                  "Product browsing & search",
                  "Shopping cart & checkout",
                  "User account management",
                  "Order tracking",
                  "Wishlist & favorites",
                  "Push notifications",
                  "In-app payments",
                  "Barcode scanning",
                  "AR product preview",
                  "Social sharing",
                  "Live chat support",
                  "Loyalty program integration"
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
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
            Development Platforms
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Smartphone,
                title: "Native iOS & Android",
                description: "Separate native apps for optimal performance and native features"
              },
              {
                icon: Tablet,
                title: "React Native",
                description: "Cross-platform development for faster time-to-market"
              },
              {
                icon: Monitor,
                title: "PWA (Progressive Web App)",
                description: "Web-based apps that work offline and feel native"
              }
            ].map((platform) => {
              const Icon = platform.icon;
              return (
                <div key={platform.title} className="bg-card rounded-xl border border-border p-6">
                  <div className="rounded-lg bg-primary/10 p-3 w-fit mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{platform.title}</h3>
                  <p className="text-muted-foreground text-sm">{platform.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <DottedSeparator />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Development Process
          </h2>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Strategy", desc: "Define app goals and features" },
              { step: "02", title: "Design", desc: "Create UI/UX mockups" },
              { step: "03", title: "Development", desc: "Build the app" },
              { step: "04", title: "Testing", desc: "QA and user testing" },
              { step: "05", title: "Launch", desc: "App store submission" }
            ].map((phase) => (
              <div key={phase.step} className="space-y-2">
                <div className="text-3xl font-bold text-primary/20">{phase.step}</div>
                <h3 className="font-semibold">{phase.title}</h3>
                <p className="text-xs text-muted-foreground">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Launch Your Mobile App?
          </h2>
          <p className="text-lg opacity-90">
            Let's build a mobile app that drives sales and delights your customers.
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
