import Header from "@/components/header-footer/Header";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Code2, Zap, DollarSign, Clock, TrendingUp, Package, Settings, Puzzle } from "lucide-react";
import DottedSeparator from "@/components/seperators/DottedSeperator";

export const metadata: Metadata = {
  title: "Custom Shopify App Development Services | ScaleFront",
  description:
    "Build custom Shopify apps for unique business logic, integrations, and workflows. Public & private apps. Starting $20K.",
  keywords: [
    "custom Shopify app development",
    "Shopify app development",
    "private Shopify app",
    "custom Shopify integration"
  ],
  openGraph: {
    title: "Custom Shopify App Development Services | ScaleFront",
    description: "Build custom Shopify apps for unique business logic, integrations, and workflows.",
    type: "website",
  },
  alternates: {
    canonical: "/services/custom-shopify-apps",
  },
};

export default function CustomShopifyAppsPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Custom Shopify App Development",
            "provider": {
              "@type": "Organization",
              "name": "ScaleFront"
            },
            "description": "Build custom Shopify apps for unique business logic, integrations, and workflows. Public & private apps.",
            "offers": {
              "@type": "Offer",
              "priceRange": "$20,000+",
              "priceCurrency": "USD"
            }
          })
        }}
      />

      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
              <Code2 className="h-4 w-4" />
              <span>Custom Shopify Apps</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Custom Shopify App Development
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Build the exact functionality your business needs. No compromises. No workarounds. No monthly app fees.
            </p>

            <p className="text-base text-muted-foreground mb-8">
              When existing Shopify apps don't solve your problem—or cost $500/month for features you barely use—a custom app might be your answer. We build private apps for your store's unique workflows and public apps for the Shopify App Store.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button size="lg" asChild className="bg-[#60DB36] hover:bg-[#50CB26]">
                <Link href="/contact-us">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#pricing">View Pricing</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              ✓ Trusted by brands tired of app subscriptions and limitations
            </p>
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* Who This Is For */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Should You Build a Custom Shopify App?
          </h2>

          <p className="text-lg text-muted-foreground mb-12">
            Custom apps aren't always the answer. Here's when they make sense.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">You Should Build a Custom App If:</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">You're Spending $500+/Month on Apps</h4>
                  <p className="text-muted-foreground">
                    If you're paying multiple apps for overlapping features or paying for features you don't use, a custom app can pay for itself in 18-24 months.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Existing Apps Don't Solve Your Problem</h4>
                  <p className="text-muted-foreground">
                    You've tested 10+ apps and none do what you need. You're forced to use workarounds or manual processes that waste hours every week.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">You Need Complex Integrations</h4>
                  <p className="text-muted-foreground">
                    Connect Shopify to your ERP, WMS, custom CRM, or proprietary systems. Existing integration apps are too rigid or don't support your specific workflow.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Your Business Logic Is Unique</h4>
                  <p className="text-muted-foreground">
                    Custom pricing rules, complex inventory allocation, specialized fulfillment workflows, unique customer segmentation—logic that no generic app can handle.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">You Want to Own the Code</h4>
                  <p className="text-muted-foreground">
                    No more worrying about apps shutting down, raising prices, or changing features. You own the codebase and control your destiny.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">You Should Use Existing Apps If:</h3>
              <ul className="space-y-3">
                {[
                  "Commodity functionality (email marketing, reviews, live chat)",
                  "You need features quickly (custom apps take 2-4 months)",
                  "Your budget is under $15K",
                  "The app ecosystem has mature, reliable solutions",
                  "You don't have technical resources for maintenance"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="rounded-full bg-muted p-1 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* What We Build */}
      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Custom App Categories
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-xl border border-border p-8">
              <div className="flex items-center gap-3 mb-4">
                <Package className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Integration Apps</h3>
              </div>
              <p className="text-muted-foreground mb-4">Connect Shopify to Your Business Systems</p>
              <ul className="space-y-2">
                {[
                  "ERP Integration (SAP, Oracle, Microsoft Dynamics)",
                  "WMS Integration & fulfillment automation",
                  "Accounting Software (QuickBooks, Xero, Sage)",
                  "CRM Integration (Salesforce, HubSpot)",
                  "POS Systems & 3PL/Fulfillment centers"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground italic">
                  Built a WMS integration for a D2C beauty brand managing 800+ SKUs across 3 warehouses with real-time stock sync. Eliminated 15 hours/week of manual order entry.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border p-8">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Workflow Automation Apps</h3>
              </div>
              <p className="text-muted-foreground mb-4">Automate Repetitive Tasks and Complex Business Logic</p>
              <ul className="space-y-2">
                {[
                  "Order Processing & automated fraud checks",
                  "Inventory Management & multi-warehouse allocation",
                  "Customer Management & automated segmentation",
                  "Pricing Automation & dynamic discounts",
                  "Product Management & bulk updates"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground italic">
                  Built an automated B2B pricing app for a distributor with customer-specific pricing, volume tiers, and contract-based discounts. Handles 200+ customers with unique pricing.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border p-8">
              <div className="flex items-center gap-3 mb-4">
                <Puzzle className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Customer Experience Apps</h3>
              </div>
              <p className="text-muted-foreground mb-4">Unique Frontend Features and Interactions</p>
              <ul className="space-y-2">
                {[
                  "Product Configurators with real-time pricing",
                  "Advanced Search and AI-powered recommendations",
                  "Pre-Order Management & deposits",
                  "Custom Subscription Logic",
                  "Personalization based on custom logic"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground italic">
                  Built a 3D furniture configurator allowing customers to customize fabric, wood finish, and dimensions with real-time pricing. Increased AOV by 41%.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border p-8">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Analytics & Reporting Apps</h3>
              </div>
              <p className="text-muted-foreground mb-4">Business Intelligence Custom to Your Needs</p>
              <ul className="space-y-2">
                {[
                  "Custom Dashboards for your KPIs",
                  "Advanced Reporting & cohort analysis",
                  "Data Export & automated pipelines",
                  "Profit Analysis including COGS and returns",
                  "Multi-store analytics"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground italic">
                  Built a profit dashboard for an 8-brand D2C portfolio showing real-time profit by brand, product, channel, and customer segment. Replaced 3 apps costing $1,200/month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* Development Process */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            How We Build Your Custom App
          </h2>

          <div className="space-y-12">
            {[
              {
                phase: "Phase 1: Discovery & Requirements",
                duration: "1-2 weeks",
                items: [
                  "Deep dive into your business process",
                  "Document current pain points and workarounds",
                  "Define success criteria and KPIs",
                  "Map data flow and integrations needed",
                  "Identify edge cases and error scenarios"
                ],
                deliverable: "Functional specification document, project timeline, fixed-price quote"
              },
              {
                phase: "Phase 2: Design & Architecture",
                duration: "1-2 weeks",
                items: [
                  "Database schema design",
                  "API integration design",
                  "Authentication and security planning",
                  "Performance and scaling considerations",
                  "User interface mockups (if applicable)"
                ],
                deliverable: "Technical architecture document, UI mockups, data models"
              },
              {
                phase: "Phase 3: Development",
                duration: "6-10 weeks",
                items: [
                  "App infrastructure setup and OAuth implementation",
                  "Shopify API integration and business logic",
                  "Third-party integrations and background jobs",
                  "Admin interface and configuration screens",
                  "Testing, edge case handling, security audit"
                ],
                deliverable: "Fully functional app"
              },
              {
                phase: "Phase 4: Testing & Launch",
                duration: "2-3 weeks",
                items: [
                  "Install on staging store and test workflows",
                  "Performance testing under load",
                  "User acceptance testing",
                  "Production setup and team training",
                  "Launch monitoring and support"
                ],
                deliverable: "Live app, documentation, training"
              }
            ].map((phase, index) => (
              <div key={index} className="border-l-4 border-primary pl-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">{phase.phase}</h3>
                  <span className="text-sm text-muted-foreground">({phase.duration})</span>
                </div>
                <ul className="space-y-2 mb-4">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-medium text-foreground">
                  <strong>Deliverable:</strong> {phase.deliverable}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Custom App Pricing
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Pricing varies significantly based on complexity. Here's transparent pricing based on app types.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Simple Private App",
                price: "$20,000-40,000",
                timeline: "2-3 months",
                features: [
                  "Single integration (e.g., ERP sync)",
                  "Basic admin interface",
                  "Automated data sync",
                  "Simple business logic",
                  "Error handling and logging",
                  "Documentation"
                ],
                examples: "Inventory sync, order tagging, product import/export"
              },
              {
                name: "Medium Complexity App",
                price: "$40,000-80,000",
                timeline: "3-4 months",
                features: [
                  "Multiple integrations",
                  "Complex business logic",
                  "Custom admin dashboards",
                  "Real-time processing",
                  "Advanced error handling",
                  "Customer-facing components (optional)"
                ],
                examples: "B2B portal, multi-warehouse management, product configurator",
                highlight: true
              },
              {
                name: "Complex Enterprise App",
                price: "$80,000-150,000+",
                timeline: "4-6 months",
                features: [
                  "Multi-system integrations",
                  "Complex data transformations",
                  "Advanced admin interface",
                  "High-performance requirements",
                  "Extensive testing and QA",
                  "White-glove development"
                ],
                examples: "Full ERP integration, multi-store platform, AI recommendation engine"
              }
            ].map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl border ${
                  tier.highlight ? "border-primary bg-primary/5" : "border-border bg-card"
                } p-8`}
              >
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-primary">{tier.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Timeline: {tier.timeline}</p>
                <p className="text-sm font-medium mb-6 text-muted-foreground italic">{tier.examples}</p>
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-card rounded-xl border border-border p-8">
            <h3 className="text-xl font-bold mb-6">Ongoing Maintenance</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Essential: $1,000/month</h4>
                <ul className="space-y-2">
                  {["Bug fixes and updates", "Shopify API compatibility", "Performance monitoring"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Standard: $2,000/month</h4>
                <ul className="space-y-2">
                  {["Everything in Essential", "Minor feature additions", "Quarterly reviews"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Premium: $4,000/month</h4>
                <ul className="space-y-2">
                  {["Everything in Standard", "Feature development", "Priority support SLA"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* Case Study */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Real Results: Furniture Retailer Custom App
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">The Challenge</h3>
                <ul className="space-y-2">
                  {[
                    "Multiple apps with overlapping features ($900/month)",
                    "Manual order processing for custom furniture (8+ hours weekly)",
                    "Complex pricing based on materials and dimensions",
                    "Orders getting stuck between apps"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="rounded-full bg-muted p-1 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">The Solution</h3>
                <ul className="space-y-2">
                  {[
                    "Single custom app with furniture configurator",
                    "Automatic pricing based on materials and labor",
                    "Integration with manufacturing system",
                    "Production tracking and customer updates"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { metric: "App Savings", value: "$10,800/yr", detail: "Eliminated subscriptions" },
                { metric: "Labor Savings", value: "$15,000/yr", detail: "8 hrs/week saved" },
                { metric: "Error Reduction", value: "15% → <1%", detail: "Configuration errors" },
                { metric: "AOV Increase", value: "+28%", detail: "Better upsells" }
              ].map((stat) => (
                <div key={stat.metric} className="bg-card rounded-lg p-4 border border-border">
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-foreground">{stat.metric}</div>
                  <div className="text-xs text-muted-foreground">{stat.detail}</div>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground">
              "We should have built this 2 years ago. The app subscriptions were bleeding us dry, and we still had manual work. Now everything's automated."
              <footer className="mt-2 text-sm font-medium text-foreground not-italic">— Operations Manager</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* FAQ */}
      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "How long does it take to build a custom app?",
                a: "Simple apps: 2-3 months. Medium complexity: 3-4 months. Complex apps: 4-6 months. Timeline depends on scope, integrations, and your responsiveness during the project."
              },
              {
                q: "Do I own the code?",
                a: "Yes, completely. You receive all source code, documentation, and deployment instructions. You can host it yourself, hire another developer to maintain it, or work with us ongoing."
              },
              {
                q: "What if the app breaks?",
                a: "We include 30 days post-launch support for bug fixes. After that, you can hire us on retainer ($1-4K/month) or handle maintenance yourself. We document everything clearly."
              },
              {
                q: "How much does hosting cost?",
                a: "Typically $200-500/month depending on traffic and database usage. We can deploy to Vercel, Railway, AWS, or your preferred platform."
              },
              {
                q: "What happens if Shopify changes their API?",
                a: "Shopify API changes are rare and usually backward-compatible. If breaking changes occur, we can update your app. This is why many clients opt for maintenance retainers."
              },
              {
                q: "Can you help us decide between custom vs. existing apps?",
                a: "Absolutely. We'll honestly tell you if existing apps are a better solution. We've turned down projects where apps made more sense."
              },
              {
                q: "What if we want to add features later?",
                a: "Easy. We can add features on a project basis or through ongoing retainer. Clean code means features are addable without rebuilding from scratch."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-card rounded-lg border border-border p-6">
                <h3 className="font-semibold text-lg mb-3">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Build Your Custom App?
          </h2>
          <p className="text-lg opacity-90">
            Whether you're certain you need a custom app or still evaluating, we're here to provide honest guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact-us">
                Schedule Discovery Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
              <Link href="/pricing">View All Services</Link>
            </Button>
          </div>
          <p className="text-sm opacity-75">
            ✓ No obligation. Honest advice. • ✓ Response within 24 hours
          </p>
        </div>
      </section>
    </div>
  );
}
