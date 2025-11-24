import { Header } from "@/components/header-footer/Header";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Plug2, Workflow, Link2 } from "lucide-react";
import DottedSeparator from "@/components/seperators/DottedSeperator";

export const metadata: Metadata = {
  title: "Third-Party Integrations for Shopify | ScaleFront",
  description:
    "Connect your Shopify store with ERPs, CRMs, and other business-critical systems. Expert integration services.",
  keywords: ["Shopify integrations", "ERP integration", "CRM integration"],
};

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
              <Plug2 className="h-4 w-4" />
              <span>Third-Party Integrations</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Connect Shopify with Your Business Systems
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Seamlessly integrate your Shopify store with ERPs, CRMs, and other business-critical systems to streamline operations and improve efficiency.
            </p>

            <Button size="lg" asChild>
              <Link href="/contact-us">
                Discuss Integration Needs
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
            Popular Integration Categories
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "ERP Systems",
                description: "Enterprise resource planning integrations",
                examples: ["SAP", "Oracle NetSuite", "Microsoft Dynamics", "Odoo", "QuickBooks"]
              },
              {
                title: "CRM Platforms",
                description: "Customer relationship management",
                examples: ["Salesforce", "HubSpot", "Zoho CRM", "Pipedrive", "ActiveCampaign"]
              },
              {
                title: "Inventory Management",
                description: "Stock and warehouse management",
                examples: ["TradeGecko", "Cin7", "Stocky", "Brightpearl", "SkuVault"]
              },
              {
                title: "Shipping & Logistics",
                description: "Shipping carriers and fulfillment",
                examples: ["ShipStation", "Easyship", "ShipBob", "FedEx", "DHL"]
              },
              {
                title: "Accounting Software",
                description: "Financial management systems",
                examples: ["Xero", "QuickBooks", "FreshBooks", "Sage", "Wave"]
              },
              {
                title: "Marketing Automation",
                description: "Email and marketing platforms",
                examples: ["Klaviyo", "Mailchimp", "Omnisend", "Drip", "SendGrid"]
              },
              {
                title: "POS Systems",
                description: "Point of sale integrations",
                examples: ["Square", "Lightspeed", "Vend", "Toast", "Clover"]
              },
              {
                title: "Payment Gateways",
                description: "Payment processing platforms",
                examples: ["Stripe", "PayPal", "Authorize.net", "Razorpay", "Adyen"]
              },
              {
                title: "Analytics & BI",
                description: "Business intelligence tools",
                examples: ["Google Analytics", "Mixpanel", "Heap", "Segment", "Tableau"]
              }
            ].map((category) => (
              <div key={category.title} className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.examples.map((example) => (
                    <span
                      key={example}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DottedSeparator />

      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Integration Services We Offer
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "API Integration",
                items: [
                  "RESTful API connections",
                  "GraphQL integrations",
                  "Real-time data synchronization",
                  "Webhook setup and management",
                  "Custom middleware development"
                ]
              },
              {
                title: "Data Migration",
                items: [
                  "Bulk data imports",
                  "Historical data migration",
                  "Data mapping and transformation",
                  "Automated sync schedules",
                  "Data validation and cleanup"
                ]
              },
              {
                title: "Workflow Automation",
                items: [
                  "Order management automation",
                  "Inventory synchronization",
                  "Customer data sync",
                  "Automated reporting",
                  "Multi-channel management"
                ]
              },
              {
                title: "Custom Development",
                items: [
                  "Custom integration solutions",
                  "Middleware applications",
                  "API wrappers",
                  "Data transformation pipelines",
                  "Integration monitoring tools"
                ]
              }
            ].map((service) => (
              <div key={service.title} className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-semibold text-xl mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DottedSeparator />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Integration Benefits
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Workflow,
                title: "Streamlined Operations",
                description: "Automate workflows and reduce manual data entry"
              },
              {
                icon: Link2,
                title: "Data Consistency",
                description: "Ensure accurate data across all your systems"
              },
              {
                icon: CheckCircle2,
                title: "Improved Efficiency",
                description: "Save time and reduce errors with automation"
              }
            ].map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="bg-secondary/20 rounded-xl p-6 text-center">
                  <div className="inline-flex rounded-lg bg-primary/10 p-4 mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Need to Integrate Your Systems?
          </h2>
          <p className="text-lg opacity-90">
            Let's connect your Shopify store with your business tools.
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
