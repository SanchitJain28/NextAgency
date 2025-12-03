import { Header } from "@/components/header-footer/Header";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, ArrowUpCircle, Shield, Zap, Workflow,
  Users, DollarSign, Globe, Code, TrendingUp, Settings
} from "lucide-react";
import DottedSeparator from "@/components/seperators/DottedSeperator";

export const metadata: Metadata = {
  title: "Shopify Plus Migration Services | Enterprise Shopify Upgrade",
  description:
    "Migrate to Shopify Plus for enterprise features, unlimited staff accounts, automation, and wholesale. Expert migration from $25K.",
  keywords: [
    "Shopify Plus migration",
    "upgrade to Shopify Plus",
    "Shopify Plus migration services",
    "enterprise Shopify migration",
    "Shopify Plus upgrade",
    "Shopify enterprise"
  ],
  openGraph: {
    title: "Shopify Plus Migration Services | Enterprise Shopify Upgrade",
    description: "Migrate to Shopify Plus for enterprise features, unlimited staff accounts, automation, and wholesale.",
  },
  alternates: {
    canonical: "/services/shopify-plus-migration",
  },
};

export default function ShopifyPlusMigrationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Schema.org markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Shopify Plus Migration Services",
            "description": "Scale your business with enterprise-grade Shopify. Migrate safely with zero downtime",
            "provider": {
              "@type": "Organization",
              "name": "ScaleFront"
            },
            "offers": {
              "@type": "Offer",
              "priceRange": "$25,000-150,000+",
              "priceCurrency": "USD"
            }
          })
        }}
      />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
              <ArrowUpCircle className="h-4 w-4" />
              <span>Shopify Plus Migration</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Shopify Plus Migration Services
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Scale your business with enterprise-grade Shopify. Migrate safely with zero downtime.
            </p>

            <p className="text-base text-muted-foreground mb-8">
              When your business outgrows standard Shopify—hitting checkout customization limits, needing advanced automation, or managing B2B and wholesale—Shopify Plus provides the enterprise foundation you need.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-[#60DB36] hover:bg-[#50CB26]">
                <Link href="/contact-us">
                  Schedule a Migration Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact-us">
                  View Migration Checklist
                </Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Trusted by brands scaling from $5M to $100M+ annually
            </p>
          </div>
        </div>
      </section>

      <DottedSeparator />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            When to Upgrade to Shopify Plus
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-xl border border-border p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">You Should Upgrade If:</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "You're Doing $5M+ Annual Revenue",
                    description: "At this scale, the 0.15% transaction fee reduction often covers part of the Plus subscription. Plus, you need enterprise features to operate efficiently."
                  },
                  {
                    title: "You Need Advanced Checkout Customization",
                    description: "Want custom fields, modified checkout layout, one-page checkout, or post-purchase upsells? Plus unlocks checkout extensibility."
                  },
                  {
                    title: "You Have Multiple Sales Channels",
                    description: "Running B2B, wholesale, retail, and DTC? Plus lets you manage everything from one admin with custom pricing by channel."
                  },
                  {
                    title: "You're Managing 50+ Staff Accounts",
                    description: "Standard Shopify limits staff accounts. Plus offers unlimited staff with granular permissions—critical for large teams."
                  },
                  {
                    title: "You Need Automation at Scale",
                    description: "Shopify Flow (Plus-exclusive) automates hundreds of workflows: fraud detection, inventory alerts, customer tagging, order routing."
                  }
                ].map((item) => (
                  <div key={item.title} className="space-y-1">
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-secondary/20 rounded-xl border border-border p-8">
              <h3 className="text-2xl font-semibold mb-6">You Should Wait If:</h3>
              <ul className="space-y-3">
                {[
                  "Revenue under $3M annually (ROI unclear)",
                  "Standard Shopify features meet all your needs",
                  "You don't need B2B/wholesale capabilities",
                  "Staff account limits aren't an issue",
                  "Budget is a primary constraint"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
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
            What You Get with Shopify Plus
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Code,
                title: "Checkout Extensibility",
                description: "Complete checkout control: add custom fields, modify layout, create dynamic rules, post-purchase upsells, and subscription checkouts."
              },
              {
                icon: Workflow,
                title: "Shopify Flow",
                description: "Visual workflow automation for fraud detection, customer tagging, inventory management, order routing, and custom notifications."
              },
              {
                icon: Users,
                title: "B2B and Wholesale",
                description: "Native B2B storefront with custom pricing per customer, volume discounts, net terms, company accounts, and custom catalogs."
              },
              {
                icon: Shield,
                title: "Unlimited Staff Accounts",
                description: "Unlimited staff with granular permissions, custom roles, department access, and audit logs for compliance."
              },
              {
                icon: Zap,
                title: "LaunchPad",
                description: "Schedule product launches, automate flash sales, switch themes for campaigns, and manage high-volume events."
              },
              {
                icon: Globe,
                title: "Expansion Stores",
                description: "10 expansion stores at $250/month each for different markets, localized currency/language, and market-specific catalogs."
              },
              {
                icon: Settings,
                title: "Scripts & Functions",
                description: "Custom logic engine for shipping rates, dynamic discounts, payment restrictions, line item modifications, and cart validation."
              },
              {
                icon: TrendingUp,
                title: "Enhanced API Limits",
                description: "4x higher API rate limits, higher webhook limits, and better support for integrations and custom apps."
              },
              {
                icon: DollarSign,
                title: "Lower Transaction Fees",
                description: "Reduced fees for high-volume stores and priority support with dedicated merchant success manager."
              }
            ].map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="bg-card rounded-xl border border-border p-6">
                  <div className="inline-flex rounded-lg bg-primary/10 p-3 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <DottedSeparator />

      <section className="py-20" id="pricing">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Shopify Plus Migration Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional migration services with zero downtime
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Basic Migration",
                price: "$25,000-45,000",
                timeline: "6-8 weeks",
                description: "Straightforward migrations with minimal customization",
                features: [
                  "Pre-migration assessment and planning",
                  "Theme migration and setup",
                  "All data migration (products, customers, orders)",
                  "App compatibility review and setup",
                  "Checkout customization (basic)",
                  "5-10 Shopify Flow automations",
                  "Team training (2 sessions)",
                  "2 weeks post-launch support"
                ]
              },
              {
                name: "Standard Migration",
                price: "$45,000-90,000",
                timeline: "8-12 weeks",
                highlight: true,
                description: "Businesses with B2B needs and complex workflows",
                features: [
                  "All Basic Migration features",
                  "Custom checkout development",
                  "15-20 advanced Flow automations",
                  "B2B/wholesale setup",
                  "Custom integrations migration",
                  "Theme performance optimization",
                  "Extended team training (5 sessions)",
                  "4 weeks post-launch support"
                ]
              },
              {
                name: "Enterprise Migration",
                price: "$90,000-150,000+",
                timeline: "12-16 weeks",
                description: "Multi-brand portfolios and complex tech stacks",
                features: [
                  "All Standard Migration features",
                  "Multi-store setup (expansion stores)",
                  "Complex ERP/system integrations",
                  "Custom Functions development",
                  "Advanced checkout customization",
                  "Headless architecture (if needed)",
                  "White-glove migration management",
                  "Dedicated project manager",
                  "8 weeks post-launch support"
                ]
              }
            ].map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl border p-8 ${
                  tier.highlight
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card"
                }`}
              >
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <p className="text-3xl font-bold text-primary mb-1">{tier.price}</p>
                  <p className="text-sm text-muted-foreground mb-2">{tier.timeline}</p>
                  <p className="text-sm text-muted-foreground italic">{tier.description}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-[#60DB36] hover:bg-[#50CB26]" asChild>
                  <Link href="/contact-us">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-lg mb-4">What's NOT Included:</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              {[
                "Shopify Plus subscription ($2,000-2,300/month, paid to Shopify)",
                "App subscription fees",
                "Third-party service costs (email, SMS, etc.)",
                "Ongoing maintenance (available as retainer)",
                "Custom feature development beyond migration scope"
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <DottedSeparator />

      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
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
                <div key={guarantee.title} className="bg-card rounded-xl border border-border p-6 text-center">
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

      <DottedSeparator />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                question: "How long does a migration take?",
                answer: "Basic migrations: 6-8 weeks. Standard: 8-12 weeks. Enterprise: 12-16 weeks. Timeline depends on store complexity, customizations, and integrations."
              },
              {
                question: "Will there be any downtime?",
                answer: "No. We perform migrations with zero downtime. Your store remains operational throughout the entire process."
              },
              {
                question: "What happens to my existing Shopify store?",
                answer: "All your data (products, customers, orders, content) migrates to Shopify Plus. Your existing Shopify plan can be cancelled once migration is complete."
              },
              {
                question: "Can I keep my existing theme?",
                answer: "Yes, in most cases. We'll ensure your theme is optimized for Plus features and performance."
              },
              {
                question: "Do I need to change my apps?",
                answer: "Most apps work on Plus. We'll review your app stack for Plus compatibility and suggest better alternatives if needed."
              },
              {
                question: "What support do you provide after migration?",
                answer: "All packages include post-launch support (2-8 weeks depending on tier). Extended support available via monthly retainers starting at $2,000/month."
              }
            ].map((faq) => (
              <div key={faq.question} className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
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
