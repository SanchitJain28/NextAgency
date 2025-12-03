import Header from "@/components/header-footer/Header";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Database, Server, Workflow, Code2, Clock, Zap, Cloud, Shield } from "lucide-react";
import DottedSeparator from "@/components/seperators/DottedSeperator";

export const metadata: Metadata = {
  title: "Shopify Backend & API Development Services | ScaleFront",
  description:
    "Custom backend systems, APIs, and server-side logic for Shopify. Complex data processing, integrations, and middleware. Starting $18K.",
  keywords: [
    "Shopify backend development",
    "Shopify API development",
    "custom Shopify backend",
    "Shopify server-side development",
    "Shopify middleware",
    "Shopify integration development"
  ],
  openGraph: {
    title: "Shopify Backend & API Development Services | ScaleFront",
    description: "Custom backend systems, APIs, and server-side logic for Shopify. Complex data processing, integrations, and middleware.",
    type: "website",
  },
  alternates: {
    canonical: "/services/backend-api",
  },
};

export default function BackendAPIPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Backend & API Development for Shopify",
            "provider": {
              "@type": "Organization",
              "name": "ScaleFront"
            },
            "description": "Custom backend systems, APIs, and server-side logic for Shopify. Complex data processing, integrations, and middleware.",
            "offers": {
              "@type": "Offer",
              "priceRange": "$18,000+",
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
              <Database className="h-4 w-4" />
              <span>Backend & API Development</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Backend & API Development for Shopify
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Build the infrastructure your business needs. Custom backends, APIs, and server-side logic.
            </p>

            <p className="text-base text-muted-foreground mb-8">
              Shopify handles the storefront, but sometimes you need custom backend systems for complex business logic, data processing, integrations, or specialized workflows. We build robust backend systems that scale with your business.
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
              ✓ Trusted by brands with complex technical requirements
            </p>
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* Who This Is For */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Do You Need Custom Backend Development?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Complex Data Processing",
                description: "Real-time analytics, complex calculations, data transformations, batch processing that Shopify's frontend can't handle efficiently."
              },
              {
                title: "Custom Business Logic",
                description: "Pricing algorithms, inventory allocation rules, fulfillment routing logic too complex for apps or Shopify's native capabilities."
              },
              {
                title: "High-Performance Requirements",
                description: "Operations that need to handle thousands of requests per second, real-time data sync, or heavy computational workloads."
              },
              {
                title: "Advanced Integrations",
                description: "Connect multiple systems (ERP, WMS, CRM, custom databases) with complex data transformation and business rules."
              },
              {
                title: "API Development",
                description: "Build APIs for mobile apps, partner integrations, or to expose your business data securely to third parties."
              },
              {
                title: "Webhook Processing",
                description: "Complex webhook handling, queuing, retry logic, and processing that goes beyond simple integrations."
              }
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* What We Build */}
      <section id="pricing" className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Backend Development Services
          </h2>

          <div className="space-y-8">
            {[
              {
                name: "Custom API Development",
                price: "$18,000-45,000",
                timeline: "6-10 weeks",
                icon: Code2,
                description: "Build APIs for Your Ecosystem",
                features: [
                  "REST APIs: Standard HTTP APIs for web and mobile apps",
                  "GraphQL APIs: Flexible query language for efficient data fetching",
                  "Webhook Handlers: Process Shopify webhooks reliably",
                  "Partner APIs: Expose data securely to partners or franchises",
                  "Mobile App APIs: Backend for iOS/Android apps",
                  "Internal APIs: Connect internal systems and tools"
                ],
                example: "Built a GraphQL API for a fashion brand's mobile app, providing personalized product recommendations, real-time inventory, and order management. Handles 50K+ requests daily with <100ms response time."
              },
              {
                name: "Data Processing & Analytics",
                price: "$20,000-50,000",
                timeline: "8-12 weeks",
                icon: Database,
                description: "Complex Data Operations",
                features: [
                  "Real-Time Analytics: Process orders, customer behavior, inventory in real-time",
                  "Data Pipelines: ETL processes for moving data between systems",
                  "Batch Processing: Nightly jobs for reports, reconciliation, cleanup",
                  "Data Aggregation: Combine data from multiple sources",
                  "Profit Analysis: Calculate true profit including COGS, shipping, returns",
                  "Customer Segmentation: Advanced RFM analysis, predictive models"
                ],
                example: "Built a profit analytics system processing 10K+ daily orders across 5 brands, calculating real-time profit by product, channel, and customer segment. Revealed $180K annual profit leakage."
              },
              {
                name: "Integration Middleware",
                price: "$25,000-60,000",
                timeline: "10-14 weeks",
                icon: Workflow,
                description: "Connect Systems Reliably",
                features: [
                  "Multi-System Integration: Connect 3+ systems with complex rules",
                  "Data Transformation: Clean, normalize, enrich data between systems",
                  "Message Queuing: Reliable async processing with retry logic",
                  "Error Handling: Sophisticated error detection and resolution",
                  "Monitoring: Real-time alerts and performance tracking",
                  "Sync Orchestration: Coordinate data flow across systems"
                ],
                example: "Built middleware connecting Shopify, ERP, WMS, and CRM for a distributor. Handles 500+ orders daily with complex routing rules, customer-specific pricing, and multi-warehouse allocation.",
                highlight: true
              },
              {
                name: "Custom Business Logic Engines",
                price: "$22,000-55,000",
                timeline: "8-12 weeks",
                icon: Zap,
                description: "Unique Algorithms and Rules",
                features: [
                  "Pricing Engines: Dynamic pricing, customer-specific pricing, complex discounts",
                  "Inventory Allocation: Multi-warehouse, priority rules, safety stock",
                  "Order Routing: Route orders based on location, product, customer, inventory",
                  "Recommendation Engines: Custom product recommendation logic",
                  "Fraud Detection: Custom rules beyond Shopify's basic fraud analysis",
                  "Subscription Logic: Complex subscription rules and billing"
                ],
                example: "Built a dynamic pricing engine for a B2B distributor with contract-specific pricing, volume tiers, promotional rules, and customer-specific discounts. Handles 200+ customers with unique pricing matrices."
              },
              {
                name: "Serverless Functions",
                price: "$15,000-35,000",
                timeline: "5-8 weeks",
                icon: Cloud,
                description: "Event-Driven Processing",
                features: [
                  "Shopify Functions: Custom discount logic, shipping rates, payment methods",
                  "Lambda Functions: AWS Lambda for scalable processing",
                  "Background Jobs: Async processing without blocking main flow",
                  "Scheduled Tasks: Cron jobs for recurring operations",
                  "Event Handlers: React to specific triggers across your systems"
                ],
                example: "Built serverless functions for a subscription business handling complex renewal logic, dunning management, and automated customer communications. Processes 5K+ subscriptions daily."
              }
            ].map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.name}
                  className={`rounded-xl border ${
                    service.highlight ? "border-primary bg-primary/5" : "border-border bg-card"
                  } p-8`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-2xl font-bold text-primary">{service.price}</span>
                        <span className="text-sm text-muted-foreground">• {service.timeline}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-secondary/40 rounded-lg p-4">
                    <p className="text-xs text-muted-foreground italic"><strong>Example:</strong> {service.example}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl border border-border p-6">
              <h4 className="font-semibold text-lg mb-4">Enterprise Backend</h4>
              <p className="text-3xl font-bold text-primary mb-2">$60,000-150,000+</p>
              <p className="text-sm text-muted-foreground mb-4">Timeline: 14-20 weeks</p>
              <p className="text-sm text-muted-foreground">
                Complete backend infrastructure with multiple services, advanced features, high scalability requirements.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h4 className="font-semibold text-lg mb-4">Ongoing Maintenance</h4>
              <p className="text-3xl font-bold text-primary mb-2">$1,500-5,000/month</p>
              <p className="text-sm text-muted-foreground">
                Monitoring, updates, bug fixes, minor feature additions, scaling adjustments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* Tech Stack */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Technologies We Use
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Backend Languages",
                items: ["Node.js (Express, Fastify, Next.js API)", "Python (Django, Flask, FastAPI)", "Ruby (Rails, Sinatra)", "Go (for high-performance needs)"]
              },
              {
                title: "Databases",
                items: ["PostgreSQL (relational data)", "MongoDB (document storage)", "Redis (caching, queues)", "DynamoDB (serverless)"]
              },
              {
                title: "Cloud Infrastructure",
                items: ["AWS (Lambda, EC2, RDS, S3)", "Vercel (Next.js serverless)", "Railway (simplified deployment)", "Google Cloud Platform"]
              },
              {
                title: "APIs & Integration",
                items: ["REST API design", "GraphQL servers", "Webhook processing", "Message queues (Bull, SQS)"]
              }
            ].map((category) => (
              <div key={category.title} className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-semibold text-lg mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* Process */}
      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            How We Build Your Backend
          </h2>

          <div className="space-y-12">
            {[
              {
                phase: "Phase 1: Discovery & Architecture",
                duration: "1-2 weeks",
                items: [
                  "Understand business requirements",
                  "Map data flows and dependencies",
                  "Identify performance requirements",
                  "Design system architecture",
                  "Plan for scalability",
                  "Assess security requirements"
                ],
                deliverable: "Technical architecture document"
              },
              {
                phase: "Phase 2: Development",
                duration: "4-10 weeks",
                items: [
                  "Set up development environment",
                  "Build core backend infrastructure",
                  "Implement business logic",
                  "Integrate with Shopify and third parties",
                  "Build monitoring and logging",
                  "Comprehensive testing"
                ],
                deliverable: "Functional backend system"
              },
              {
                phase: "Phase 3: Testing & Deployment",
                duration: "2-3 weeks",
                items: [
                  "Load testing",
                  "Security audit",
                  "Integration testing",
                  "Deployment to production",
                  "Monitoring setup",
                  "Documentation"
                ],
                deliverable: "Live backend system"
              },
              {
                phase: "Phase 4: Support & Optimization",
                duration: "Ongoing",
                items: [
                  "Monitor performance",
                  "Bug fixes",
                  "Feature additions",
                  "Scaling adjustments",
                  "Security updates"
                ],
                deliverable: "Maintained, optimized system"
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

      {/* Case Study */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Real Results: Multi-Brand Backend System
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              A company operating 4 D2C brands needed unified backend infrastructure for inventory, order processing, and analytics.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">The Challenge</h3>
                <ul className="space-y-2">
                  {[
                    "Each brand on separate Shopify stores",
                    "No unified inventory visibility",
                    "Manual order aggregation for fulfillment",
                    "No cross-brand analytics",
                    "Customer data siloed by brand"
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
                <p className="text-muted-foreground mb-3">Built a custom backend system:</p>
                <ul className="space-y-2">
                  {[
                    "Unified API aggregating all 4 stores",
                    "Real-time inventory sync across brands",
                    "Intelligent order routing to 2 fulfillment centers",
                    "Cross-brand customer identification",
                    "Unified analytics dashboard"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                { metric: "Inventory Costs", value: "-18%", detail: "Better visibility" },
                { metric: "Manual Work", value: "-15 hrs/wk", detail: "Time saved" },
                { metric: "Processing Time", value: "4h → 15min", detail: "Order processing" },
                { metric: "Investment", value: "$65K", detail: "System build" },
                { metric: "Annual Savings", value: "$45K+", detail: "Plus growth enabled" },
                { metric: "New Brands", value: "2 launched", detail: "Foundation built" }
              ].map((stat) => (
                <div key={stat.metric} className="bg-card rounded-lg p-4 border border-border">
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-foreground">{stat.metric}</div>
                  <div className="text-xs text-muted-foreground">{stat.detail}</div>
                </div>
              ))}
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <p className="text-lg text-foreground font-medium mb-2">
                ROI: $65K investment → $45K annual savings + enabled growth
              </p>
              <p className="text-muted-foreground">
                The unified backend became the foundation for launching 2 additional brands, creating economies of scale impossible without custom infrastructure.
              </p>
            </div>
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
                q: "Why not use Shopify's built-in features?",
                a: "Shopify is excellent for standard e-commerce but has limitations for complex custom logic, high-performance processing, or advanced integrations. Custom backends handle what Shopify can't."
              },
              {
                q: "How long does backend development take?",
                a: "Simple APIs: 6-10 weeks. Complex systems: 10-20 weeks. Timeline depends on scope, integrations, and complexity of business logic."
              },
              {
                q: "Where is the backend hosted?",
                a: "We typically use AWS, Vercel, or Railway. We recommend based on your needs (performance, cost, scalability) and can work with your preferred platform."
              },
              {
                q: "How much does hosting cost?",
                a: "Typically $200-1,000/month depending on traffic, data processing, and storage needs. We provide detailed estimates during planning phase."
              },
              {
                q: "Can you scale the backend as we grow?",
                a: "Yes. We architect for scalability from day one and can adjust infrastructure as your traffic and processing needs increase."
              },
              {
                q: "What if APIs change?",
                a: "We monitor API changes from Shopify and third parties, and update integrations as needed. This is included in maintenance retainers."
              },
              {
                q: "Do we own the code?",
                a: "Yes, completely. You receive all source code, deployment instructions, and documentation. You can host it anywhere and modify it as needed."
              },
              {
                q: "Can our team maintain it?",
                a: "If you have technical resources, yes. We provide comprehensive documentation. Most clients opt for maintenance retainers for peace of mind."
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
            Ready to Build Your Backend?
          </h2>
          <p className="text-lg opacity-90">
            Let's discuss your technical requirements and design the right backend solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact-us">
                Schedule Technical Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
              <Link href="/pricing">View All Services</Link>
            </Button>
          </div>
          <p className="text-sm opacity-75">
            ✓ 60-minute technical consultation • ✓ Architecture review • ✓ Cost estimates
          </p>
        </div>
      </section>
    </div>
  );
}
