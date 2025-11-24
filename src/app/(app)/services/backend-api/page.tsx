import { Header } from "@/components/header-footer/Header";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Database, Server, Workflow } from "lucide-react";
import DottedSeparator from "@/components/seperators/DottedSeperator";

export const metadata: Metadata = {
  title: "Shopify Backend & API Development | ScaleFront",
  description:
    "Robust backend solutions, custom APIs, and integrations to power your Shopify ecosystem. Expert backend development.",
  keywords: ["Shopify API", "backend development", "Shopify integrations"],
};

export default function BackendAPIPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
              <Database className="h-4 w-4" />
              <span>Backend & API Work</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Powerful Backend Solutions for Your Shopify Store
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Build robust backend systems, custom APIs, and seamless integrations that power your Shopify ecosystem and streamline operations.
            </p>

            <Button size="lg" asChild>
              <Link href="/contact-us">
                Discuss Your Needs
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
            Backend Development Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Custom API Development",
                items: [
                  "RESTful and GraphQL APIs",
                  "Webhook management",
                  "Real-time data sync",
                  "API authentication & security",
                  "Rate limiting & caching"
                ]
              },
              {
                title: "System Integrations",
                items: [
                  "ERP system connections",
                  "CRM integrations",
                  "Inventory management",
                  "Shipping providers",
                  "Payment gateways"
                ]
              },
              {
                title: "Data Management",
                items: [
                  "Database design & optimization",
                  "Data migration services",
                  "Bulk operations",
                  "Import/export automation",
                  "Data synchronization"
                ]
              },
              {
                title: "Automation & Workflows",
                items: [
                  "Order processing automation",
                  "Inventory updates",
                  "Email notifications",
                  "Custom business logic",
                  "Scheduled tasks"
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

      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Technologies We Use
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Server,
                title: "Backend Frameworks",
                description: "Node.js, Express, Next.js API routes, and serverless functions."
              },
              {
                icon: Database,
                title: "Databases",
                description: "MongoDB, PostgreSQL, MySQL, and Firebase for data storage."
              },
              {
                icon: Workflow,
                title: "Integration Tools",
                description: "Zapier, Make, custom webhooks, and event-driven architectures."
              }
            ].map((tech) => {
              const Icon = tech.icon;
              return (
                <div key={tech.title} className="bg-card rounded-xl border border-border p-6">
                  <div className="rounded-lg bg-primary/10 p-3 w-fit mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{tech.title}</h3>
                  <p className="text-muted-foreground text-sm">{tech.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Need Backend Development?
          </h2>
          <p className="text-lg opacity-90">
            Let's build the robust backend infrastructure your Shopify store needs.
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
