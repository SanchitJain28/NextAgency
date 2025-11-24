import { Header } from "@/components/header-footer/Header";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardCheck, Search, TrendingUp } from "lucide-react";
import DottedSeparator from "@/components/seperators/DottedSeperator";

export const metadata: Metadata = {
  title: "Shopify Store Audit & Consulting | ScaleFront",
  description:
    "Comprehensive store audits and expert consulting to identify growth opportunities and optimize your Shopify store.",
  keywords: ["Shopify audit", "Shopify consulting", "store optimization"],
};

export default function AuditConsultingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
              <ClipboardCheck className="h-4 w-4" />
              <span>Store Audit & Consulting</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Expert Shopify Store Audits & Consulting
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Get a comprehensive analysis of your Shopify store with actionable recommendations to improve performance, conversions, and revenue.
            </p>

            <Button size="lg" asChild>
              <Link href="/contact-us">
                Get Your Free Audit
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
            What We Audit
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Performance & Speed",
                items: [
                  "Page load times",
                  "Core Web Vitals",
                  "Image optimization",
                  "Code efficiency",
                  "Server response times"
                ]
              },
              {
                title: "SEO Analysis",
                items: [
                  "On-page SEO",
                  "Technical SEO",
                  "Meta tags & descriptions",
                  "URL structure",
                  "Sitemap & robots.txt"
                ]
              },
              {
                title: "Conversion Optimization",
                items: [
                  "Checkout flow",
                  "Cart abandonment rate",
                  "Product pages",
                  "Call-to-actions",
                  "Trust signals"
                ]
              },
              {
                title: "User Experience",
                items: [
                  "Navigation structure",
                  "Mobile responsiveness",
                  "Search functionality",
                  "Product discovery",
                  "Accessibility"
                ]
              },
              {
                title: "Security & Compliance",
                items: [
                  "SSL certificates",
                  "Payment security",
                  "GDPR compliance",
                  "Privacy policies",
                  "Data protection"
                ]
              },
              {
                title: "App Ecosystem",
                items: [
                  "Installed apps review",
                  "App conflicts",
                  "Performance impact",
                  "Cost optimization",
                  "Better alternatives"
                ]
              }
            ].map((category) => (
              <div key={category.title} className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-semibold text-lg mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Consulting Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Strategic Consulting</h3>
              <p className="text-muted-foreground">
                Work directly with our Shopify experts to develop strategies for growth, optimization, and scaling your eCommerce business.
              </p>
              <ul className="space-y-3">
                {[
                  "Growth strategy development",
                  "Technology stack recommendations",
                  "Conversion rate optimization",
                  "Multi-channel selling strategy",
                  "International expansion planning",
                  "Platform migration consulting"
                ].map((service) => (
                  <li key={service} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Technical Consulting</h3>
              <p className="text-muted-foreground">
                Get expert technical guidance on architecture, integrations, and custom development projects.
              </p>
              <ul className="space-y-3">
                {[
                  "Architecture reviews",
                  "Code quality assessment",
                  "API integration planning",
                  "Performance optimization",
                  "Security best practices",
                  "Headless commerce strategy"
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

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Audit Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Search,
                step: "01",
                title: "Analysis",
                description: "Deep dive into your store's performance and setup"
              },
              {
                icon: ClipboardCheck,
                step: "02",
                title: "Report",
                description: "Detailed audit report with findings and issues"
              },
              {
                icon: TrendingUp,
                step: "03",
                title: "Recommendations",
                description: "Prioritized action plan with clear next steps"
              },
              {
                icon: CheckCircle2,
                step: "04",
                title: "Implementation",
                description: "Optional: We can implement the recommendations"
              }
            ].map((phase) => {
              const Icon = phase.icon;
              return (
                <div key={phase.step} className="text-center space-y-3">
                  <div className="inline-flex rounded-lg bg-primary/10 p-4 mb-2">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary/20">{phase.step}</div>
                  <h3 className="font-semibold text-lg">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <DottedSeparator />

      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What You'll Receive
            </h2>
            <div className="bg-card rounded-xl border border-border p-8 text-left">
              <ul className="space-y-4">
                {[
                  "Comprehensive 30+ page audit report",
                  "Performance metrics and benchmarks",
                  "Prioritized list of improvements",
                  "Cost estimates for recommendations",
                  "Implementation timeline",
                  "30-minute consultation call",
                  "3 months of email support"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Optimize Your Store?
          </h2>
          <p className="text-lg opacity-90">
            Get a free comprehensive audit and discover opportunities for growth.
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
