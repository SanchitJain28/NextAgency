import Header from "@/components/header-footer/Header";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Plug2, Workflow, Link2, Database, Clock, DollarSign, Zap, AlertCircle } from "lucide-react";
import DottedSeparator from "@/components/seperators/DottedSeperator";

export const metadata: Metadata = {
  title: "Shopify Third-Party Integration Services | API Integration | ScaleFront",
  description:
    "Connect Shopify with ERP, WMS, CRM, accounting, and custom systems. Expert API integration services. Seamless data flow between platforms. Starting $15K.",
  keywords: [
    "Shopify third-party integration",
    "Shopify API integration",
    "ERP Shopify integration",
    "Shopify system integration",
    "WMS Shopify integration",
    "CRM Shopify integration",
    "Shopify accounting integration",
    "Shopify custom integration"
  ],
  openGraph: {
    title: "Shopify Third-Party Integration Services | ScaleFront",
    description: "Connect Shopify to your business ecosystem with seamless integrations. Expert API integration services.",
    type: "website",
  },
  alternates: {
    canonical: "/services/integrations",
  },
};

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Shopify Third-Party Integrations",
            "provider": {
              "@type": "Organization",
              "name": "ScaleFront"
            },
            "description": "Professional Shopify integration services connecting your store with ERP, WMS, CRM, accounting systems, and custom platforms.",
            "offers": {
              "@type": "Offer",
              "priceRange": "$15,000-150,000",
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
              <Plug2 className="h-4 w-4" />
              <span>Third-Party Integrations</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Shopify Third-Party Integrations
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Connect Shopify to your business ecosystem. Seamless data flow between systems.
            </p>

            <p className="text-base text-muted-foreground mb-8">
              Your business runs on multiple platforms—ERP, WMS, CRM, accounting software, fulfillment systems. When these systems don't talk to each other, you're stuck with manual data entry, errors, and inefficiency. We build robust integrations that sync data automatically and reliably.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button size="lg" asChild className="bg-[#60DB36] hover:bg-[#50CB26]">
                <Link href="/contact-us">
                  Schedule an Integration Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#pricing">View Integration Pricing</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              ✓ Trusted by brands tired of manual data entry and disconnected systems
            </p>
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* Who Needs Integration */}
      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Do You Need a Third-Party Integration?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">You Need Integration If:</h3>
              <ul className="space-y-3">
                {[
                  {
                    title: "You're Doing Manual Data Entry",
                    desc: "Copying orders from Shopify to your ERP. Updating inventory across systems. Even 30 minutes daily = 180 hours/year wasted."
                  },
                  {
                    title: "Data Is Out of Sync",
                    desc: "Inventory shows available in Shopify but out of stock in warehouse. Customer data doesn't match your CRM."
                  },
                  {
                    title: "You're Scaling and Hitting Limits",
                    desc: "Processing 50+ orders daily makes manual workflows unsustainable. You're hiring people just to move data."
                  },
                  {
                    title: "You Need Real-Time Data",
                    desc: "Instant inventory updates when orders are fulfilled. Real-time customer data for personalization."
                  },
                  {
                    title: "Complex Business Logic",
                    desc: "Custom pricing rules in ERP need to sync to Shopify. Inventory allocation across warehouses."
                  },
                  {
                    title: "Compliance Requirements",
                    desc: "Need unified customer data for GDPR. Require complete order trails. Need real-time financial data."
                  }
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium mb-1">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="text-xl font-semibold mb-4">You Can Wait If:</h3>
              <ul className="space-y-3">
                {[
                  "Processing under 20 orders daily",
                  "Manual processes take under 2 hours/week",
                  "Your systems have built-in integrations that work",
                  "Budget under $15K",
                  "You're still figuring out your tech stack"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Not sure?</strong> Schedule a free consultation to discuss your specific needs and whether integration makes sense for your business stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* Integration Types */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Common Shopify Integrations We Build
          </h2>

          <div className="space-y-8">
            {[
              {
                name: "ERP Integration",
                price: "$35,000-90,000",
                timeline: "10-16 weeks",
                systems: ["SAP Business One", "Oracle NetSuite", "Microsoft Dynamics 365", "Odoo", "Custom ERPs"],
                dataFlows: [
                  "Products: Sync data, pricing, descriptions, images from ERP to Shopify",
                  "Inventory: Real-time inventory updates both ways",
                  "Orders: Orders from Shopify pushed to ERP for processing",
                  "Customers: Customer master data synchronized",
                  "Accounting: Order data flows to financial modules",
                  "Fulfillment: Shipping updates sync back to Shopify"
                ],
                example: "Fashion brand with 1,200 SKUs. Products managed in SAP, automatically sync to Shopify. Orders flow to SAP for fulfillment. Inventory updates every 15 minutes. Eliminated 12 hours/week of manual data entry."
              },
              {
                name: "WMS/3PL Integration",
                price: "$25,000-65,000",
                timeline: "8-12 weeks",
                systems: ["Manhattan WMS", "Blue Yonder", "Oracle WMS", "ShipBob", "ShipStation", "Custom 3PLs"],
                dataFlows: [
                  "Orders: From Shopify to WMS for picking/packing",
                  "Inventory: Real-time stock levels from warehouse to Shopify",
                  "Fulfillment: Tracking numbers and shipping status back to Shopify",
                  "Returns: Return processing and inventory updates",
                  "Location Management: Multi-warehouse inventory allocation"
                ],
                example: "Beauty brand using 3 fulfillment centers. Orders automatically route to nearest warehouse based on location and inventory. Real-time inventory sync prevents overselling. Tracking updates automatically in Shopify."
              },
              {
                name: "CRM Integration",
                price: "$20,000-45,000",
                timeline: "6-10 weeks",
                systems: ["Salesforce", "HubSpot", "Zoho CRM", "Microsoft Dynamics CRM", "Custom CRMs"],
                dataFlows: [
                  "Customers: Customer data syncs from Shopify to CRM",
                  "Orders: Order history available in CRM",
                  "Marketing: Customer segments from CRM used in Shopify",
                  "Support: Order data accessible in CRM for support team",
                  "Analytics: Customer lifetime value and behavior tracking"
                ],
                example: "D2C brand with 50K+ customers. Customer data syncs to Salesforce. Support team accesses order history in CRM. Marketing segments customers based on CRM data for personalized campaigns."
              },
              {
                name: "Accounting Software Integration",
                price: "$15,000-30,000",
                timeline: "5-8 weeks",
                systems: ["QuickBooks (Online & Desktop)", "Xero", "Sage", "Custom accounting systems"],
                dataFlows: [
                  "Orders: Order data becomes invoices in accounting software",
                  "Payments: Payment reconciliation",
                  "Taxes: Tax calculation and reporting",
                  "Expenses: Product costs and COGS tracking",
                  "Inventory: Inventory valuation sync"
                ],
                example: "E-commerce brand processing 200+ orders daily. Orders automatically create invoices in QuickBooks. Payments reconciled automatically. Tax reports generated directly. Saves 20+ hours monthly in manual data entry."
              },
              {
                name: "POS Integration",
                price: "$25,000-50,000",
                timeline: "8-12 weeks",
                systems: ["Lightspeed", "Square", "Clover", "Custom POS systems"],
                dataFlows: [
                  "Inventory: Unified inventory across online and retail",
                  "Products: Product catalog synced between systems",
                  "Customers: Customer data accessible across channels",
                  "Orders: All orders (online and offline) in one system",
                  "Analytics: Combined reporting for all channels"
                ],
                example: "Fashion brand with 5 retail stores. Integrated existing POS with Shopify online store. Inventory syncs in real-time. Customers can return online purchases in-store."
              },
              {
                name: "Marketing Platform Integration",
                price: "$12,000-35,000",
                timeline: "5-8 weeks",
                systems: ["Klaviyo", "Segment", "Google Analytics 4", "Facebook/Meta", "SMS platforms"],
                dataFlows: [
                  "Customer Data: Rich customer profiles for personalization",
                  "Order Data: Purchase history for segmentation",
                  "Product Data: Product catalogs for dynamic ads",
                  "Events: Custom events for analytics and attribution",
                  "Campaigns: Triggered campaigns based on behavior"
                ],
                example: "Beauty brand integrated advanced analytics with Shopify. Custom event tracking, attribution modeling, customer journey analysis. 28% improvement in marketing ROI."
              }
            ].map((integration, index) => (
              <div key={index} className="bg-card rounded-xl border border-border p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{integration.name}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {integration.systems.map((system) => (
                        <span
                          key={system}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {system}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-left md:text-right">
                    <div className="text-3xl font-bold text-primary mb-1">{integration.price}</div>
                    <div className="text-sm text-muted-foreground">Timeline: {integration.timeline}</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Typical Data Flows:</h4>
                    <ul className="space-y-2">
                      {integration.dataFlows.map((flow) => (
                        <li key={flow} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{flow}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-secondary/20 rounded-lg">
                    <h4 className="font-semibold mb-2 text-sm">Real Example:</h4>
                    <p className="text-sm text-muted-foreground">{integration.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* Integration Process */}
      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            How We Build Your Integration
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                phase: "Phase 1",
                title: "Discovery & Analysis",
                duration: "1-2 weeks",
                icon: Database,
                activities: [
                  "Business process mapping",
                  "System API assessment",
                  "Data flow architecture design",
                  "Field mapping documentation"
                ]
              },
              {
                phase: "Phase 2",
                title: "Development",
                duration: "4-12 weeks",
                icon: Workflow,
                activities: [
                  "API integration development",
                  "Data transformation logic",
                  "Error handling & retry mechanisms",
                  "Admin dashboard creation"
                ]
              },
              {
                phase: "Phase 3",
                title: "Testing",
                duration: "1-2 weeks",
                icon: CheckCircle2,
                activities: [
                  "Unit and integration testing",
                  "Data accuracy validation",
                  "Load and performance testing",
                  "User acceptance testing"
                ]
              },
              {
                phase: "Phase 4",
                title: "Deployment",
                duration: "1 week",
                icon: Zap,
                activities: [
                  "Production deployment",
                  "Team training",
                  "Documentation delivery",
                  "30 days post-launch support"
                ]
              }
            ].map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.phase} className="bg-card rounded-xl border border-border p-6">
                  <div className="inline-flex rounded-lg bg-primary/10 p-3 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-sm font-semibold text-primary mb-2">{step.phase}</div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <div className="text-sm text-muted-foreground mb-4">{step.duration}</div>
                  <ul className="space-y-2">
                    {step.activities.map((activity) => (
                      <li key={activity} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Integration Pricing
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Simple Integration",
                price: "$15,000-30,000",
                timeline: "5-8 weeks",
                description: "Single system integration with straightforward data flow.",
                scope: [
                  "Single system integration",
                  "Straightforward data flow (orders, products, inventory)",
                  "Standard API with good documentation",
                  "Scheduled sync (hourly or daily)",
                  "Basic error handling and logging",
                  "Admin dashboard"
                ],
                examples: ["QuickBooks order sync", "Simple CRM customer sync", "Basic 3PL fulfillment integration"]
              },
              {
                name: "Standard Integration",
                price: "$30,000-65,000",
                timeline: "8-12 weeks",
                description: "Complex system or multiple simple systems with bidirectional sync.",
                scope: [
                  "Single complex system or multiple simple systems",
                  "Bidirectional data sync",
                  "Complex data transformations",
                  "Real-time sync requirements",
                  "Advanced error handling",
                  "Retry mechanisms and queuing",
                  "Comprehensive admin dashboard"
                ],
                examples: ["Full ERP integration", "Multi-warehouse WMS", "CRM with advanced segmentation", "POS with real-time inventory"],
                popular: true
              },
              {
                name: "Complex Enterprise",
                price: "$65,000-150,000+",
                timeline: "12-20 weeks",
                description: "Multiple system integrations with complex business logic.",
                scope: [
                  "Multiple system integrations",
                  "Complex business logic",
                  "High-volume data processing",
                  "Custom middleware development",
                  "Advanced features (routing, allocation)",
                  "White-glove development",
                  "Extended post-launch support"
                ],
                examples: ["Multi-system ecosystem", "Custom manufacturing integration", "Legacy system integration", "Multi-brand integration hub"]
              }
            ].map((tier, index) => (
              <div key={index} className={`bg-card rounded-xl border p-8 ${tier.popular ? 'border-primary border-2 relative' : 'border-border'}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-primary mb-2">{tier.price}</div>
                <div className="text-sm text-muted-foreground mb-4">Timeline: {tier.timeline}</div>
                <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>

                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-sm">Typical Scope:</h4>
                  <ul className="space-y-2">
                    {tier.scope.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold text-sm mb-2">Examples:</h4>
                  {tier.examples.map((example) => (
                    <div key={example} className="text-xs text-muted-foreground mb-1">• {example}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6">What's Included in All Packages</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Integration architecture and design",
                "Complete development",
                "Testing and QA",
                "Documentation",
                "Deployment to production",
                "Team training",
                "30 days post-launch support",
                "Source code ownership"
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl border border-border p-6">
              <h4 className="font-semibold mb-4">What's NOT Included:</h4>
              <ul className="space-y-2">
                {[
                  "Monthly hosting costs ($200-500/month for middleware)",
                  "Third-party API costs (if applicable)",
                  "iPaaS platform fees (Zapier, Workato, etc.)",
                  "Ongoing maintenance beyond 30 days",
                  "Changes to source systems or APIs"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-xl border border-border p-6">
              <h4 className="font-semibold mb-4">Ongoing Maintenance:</h4>
              <div className="space-y-3">
                <div>
                  <div className="font-semibold text-sm mb-1">Essential Support: $1,000/month</div>
                  <div className="text-xs text-muted-foreground">Bug fixes, API monitoring, error resolution, monthly reports</div>
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1">Standard Support: $2,000/month</div>
                  <div className="text-xs text-muted-foreground">Essential + minor enhancements (5 hours), performance optimization</div>
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1">Premium Support: $4,000/month</div>
                  <div className="text-xs text-muted-foreground">Standard + feature additions (12 hours), priority SLA, proactive monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* Case Study */}
      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Real Results: D2C Beauty Brand ERP Integration
          </h2>

          <div className="bg-card rounded-xl border border-border p-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3">The Challenge</h3>
              <p className="text-muted-foreground mb-4">
                A rapidly growing beauty brand was manually entering 150+ orders daily from Shopify into their ERP system. Inventory was out of sync, causing overselling and customer complaints.
              </p>
              <ul className="space-y-2">
                {[
                  "3 people spending 4 hours/day on manual data entry (12 person-hours daily)",
                  "Inventory sync happening once daily, causing overselling",
                  "Order entry errors causing fulfillment delays",
                  "No real-time visibility into actual inventory",
                  "Customer data disconnected between systems",
                  "Financial reporting delayed by manual reconciliation"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3">The Solution</h3>
              <p className="text-muted-foreground mb-4">
                Built a bidirectional integration between Shopify and their ERP:
              </p>
              <ul className="space-y-2">
                {[
                  "Orders: Automatically pushed to ERP every 5 minutes",
                  "Inventory: Real-time sync (15-minute intervals)",
                  "Products: New products from ERP sync to Shopify automatically",
                  "Customers: Customer master data synchronized",
                  "Fulfillment: Tracking numbers flow back to Shopify",
                  "Pricing: Special pricing rules from ERP enforced in Shopify"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">The Results</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { metric: "Time Saved", result: "12 person-hours/day = 3,120 hours/year" },
                  { metric: "Labor Cost Savings", result: "$75,000/year" },
                  { metric: "Inventory Accuracy", result: "75% → 99.2%" },
                  { metric: "Order Processing", result: "8 hours → 5 minutes" },
                  { metric: "Error Reduction", result: "8% → <0.1%" },
                  { metric: "Revenue Impact", result: "+$120K annually from reduced stockouts" },
                  { metric: "Financial Reporting", result: "5 days → 1 day month-end close" }
                ].map((item) => (
                  <div key={item.metric}>
                    <div className="text-sm font-semibold text-primary mb-1">{item.metric}</div>
                    <div className="text-sm text-muted-foreground">{item.result}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-primary/20">
                <div className="text-2xl font-bold text-primary mb-2">Total Annual Benefit: $195K</div>
                <div className="text-sm text-muted-foreground">$75K labor savings + $120K revenue increase</div>
                <div className="mt-2">
                  <span className="font-semibold">ROI:</span> Integration paid for itself in 4 months
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* FAQ Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "How long does an integration take?",
                answer: "Simple integrations: 5-8 weeks. Standard: 8-12 weeks. Complex: 12-20 weeks. Timeline depends on systems involved, API quality, and complexity."
              },
              {
                question: "Can you integrate with any system?",
                answer: "If it has an API, we can integrate with it. If no API exists, we can sometimes scrape data or find workarounds, though this is less reliable. During discovery, we assess API availability and quality."
              },
              {
                question: "What if the third-party system has poor documentation?",
                answer: "We've dealt with this many times. We reverse-engineer APIs, contact vendors for support, and find creative solutions. It takes longer but is usually possible. We'll be honest upfront about feasibility."
              },
              {
                question: "Will the integration break if systems update?",
                answer: "Well-built integrations handle minor API changes. Major breaking changes (rare) may require updates. This is why many clients opt for maintenance retainers to ensure continuous operation."
              },
              {
                question: "Can we modify the integration later?",
                answer: "Yes. We document everything clearly and can add features or modify logic as your business evolves. You own all the source code, so you can also work with other developers if needed."
              },
              {
                question: "What happens if the integration fails?",
                answer: "We build error handling, retry logic, and alerting into every integration. You'll be notified immediately if something fails. With a maintenance retainer, we can fix issues within hours. Without a retainer, we provide emergency support at hourly rates."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Connect Your Systems?
          </h2>
          <p className="text-lg opacity-90">
            Let's assess your integration needs and design the right solution. Schedule a free consultation to discuss your systems, challenges, and goals.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact-us">
              Schedule Integration Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <p className="text-sm opacity-75">
            No obligation. Honest advice. We'll tell you if integration makes sense for your business stage.
          </p>
        </div>
      </section>
    </div>
  );
}
