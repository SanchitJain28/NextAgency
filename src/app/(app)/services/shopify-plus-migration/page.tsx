import { Header } from "@/components/header-footer/Header";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ArrowUpCircle, Shield, Zap } from "lucide-react";
import DottedSeparator from "@/components/seperators/DottedSeperator";

export const metadata: Metadata = {
  title: "Shopify Plus Migration Services | ScaleFront",
  description:
    "Seamless migration to Shopify Plus with zero downtime. Expert migration and optimization services.",
  keywords: ["Shopify Plus migration", "upgrade to Shopify Plus", "Shopify enterprise"],
};

export default function ShopifyPlusMigrationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
              <ArrowUpCircle className="h-4 w-4" />
              <span>Shopify Plus Migration</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Seamless Migration to Shopify Plus
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Upgrade to Shopify Plus with zero downtime. Expert migration services to unlock enterprise-level features and scalability for your growing business.
            </p>

            <Button size="lg" asChild>
              <Link href="/contact-us">
                Plan Your Migration
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
            Why Upgrade to Shopify Plus?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Unlimited Scalability",
                description: "Handle high-volume traffic and sales without performance issues"
              },
              {
                title: "Advanced Automation",
                description: "Shopify Flow for complex workflow automation"
              },
              {
                title: "Customizable Checkout",
                description: "Full control over checkout experience and branding"
              },
              {
                title: "Multi-Store Management",
                description: "Manage multiple stores from one account"
              },
              {
                title: "Dedicated Support",
                description: "24/7 priority support from Shopify Plus team"
              },
              {
                title: "Lower Transaction Fees",
                description: "Reduced fees for high-volume stores"
              },
              {
                title: "B2B Functionality",
                description: "Native B2B features for wholesale operations"
              },
              {
                title: "Custom Integrations",
                description: "Advanced API access and custom integrations"
              },
              {
                title: "Enhanced Security",
                description: "Enterprise-grade security and compliance"
              }
            ].map((benefit) => (
              <div key={benefit.title} className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-start gap-3 mb-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <h3 className="font-semibold text-lg">{benefit.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground ml-8">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DottedSeparator />

      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Our Migration Process
          </h2>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Assessment & Planning",
                description: "Comprehensive audit of your current store and migration requirements",
                tasks: [
                  "Review current store setup",
                  "Identify custom features to migrate",
                  "Plan data migration strategy",
                  "Define success metrics"
                ]
              },
              {
                step: "02",
                title: "Store Setup & Configuration",
                description: "Set up Shopify Plus environment with optimized configurations",
                tasks: [
                  "Configure Shopify Plus account",
                  "Set up multi-channel selling",
                  "Configure Shopify Flow",
                  "Implement security measures"
                ]
              },
              {
                step: "03",
                title: "Data Migration",
                description: "Carefully migrate all store data with zero data loss",
                tasks: [
                  "Migrate products & collections",
                  "Transfer customer data",
                  "Migrate order history",
                  "Preserve SEO rankings"
                ]
              },
              {
                step: "04",
                title: "Testing & Optimization",
                description: "Rigorous testing to ensure everything works perfectly",
                tasks: [
                  "Comprehensive QA testing",
                  "Performance optimization",
                  "Integration testing",
                  "User acceptance testing"
                ]
              },
              {
                step: "05",
                title: "Launch & Support",
                description: "Go live with minimal disruption and ongoing support",
                tasks: [
                  "Execute launch plan",
                  "DNS cutover",
                  "Post-launch monitoring",
                  "Team training & handoff"
                ]
              }
            ].map((phase) => (
              <div key={phase.step} className="bg-card rounded-xl border border-border p-6">
                <div className="flex gap-6">
                  <div className="text-4xl font-bold text-primary/20">{phase.step}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                    <p className="text-muted-foreground mb-4">{phase.description}</p>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {phase.tasks.map((task) => (
                        <li key={task} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DottedSeparator />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Migration Guarantees
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Zero Downtime",
                description: "Seamless migration with no interruption to your business"
              },
              {
                icon: Shield,
                title: "Data Protection",
                description: "Complete data backup and secure migration process"
              },
              {
                icon: CheckCircle2,
                title: "SEO Preservation",
                description: "Maintain your search rankings and organic traffic"
              }
            ].map((guarantee) => {
              const Icon = guarantee.icon;
              return (
                <div key={guarantee.title} className="bg-secondary/20 rounded-xl p-6 text-center">
                  <div className="inline-flex rounded-lg bg-primary/10 p-4 mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{guarantee.title}</h3>
                  <p className="text-sm text-muted-foreground">{guarantee.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Scale with Shopify Plus?
          </h2>
          <p className="text-lg opacity-90">
            Let's plan your seamless migration to Shopify Plus.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact-us">
              Schedule Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
