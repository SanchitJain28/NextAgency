import Header from "@/components/header-footer/Header";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, Target, BarChart3, Clock } from "lucide-react";
import DottedSeparator from "@/components/seperators/DottedSeperator";

export const metadata: Metadata = {
  title: "Shopify Conversion Rate Optimization Services | ScaleFront",
  description:
    "Increase your Shopify store conversions through UX improvements, A/B testing, and CRO strategies. Starting $8K.",
  keywords: [
    "Shopify conversion optimization",
    "Shopify CRO",
    "Shopify conversion rate optimization",
    "increase Shopify conversions",
    "Shopify A/B testing",
    "Shopify UX optimization"
  ],
  openGraph: {
    title: "Shopify Conversion Rate Optimization Services | ScaleFront",
    description: "Increase your Shopify store conversions through UX improvements, A/B testing, and CRO strategies.",
    type: "website",
  },
  alternates: {
    canonical: "/services/conversion-optimization",
  },
};

export default function ConversionOptimizationPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Conversion Rate Optimization",
            "provider": {
              "@type": "Organization",
              "name": "ScaleFront"
            },
            "description": "Increase your Shopify store conversions through UX improvements, A/B testing, and CRO strategies.",
            "offers": {
              "@type": "Offer",
              "priceRange": "$8,000+",
              "priceCurrency": "USD"
            }
          })
        }}
      />

      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
              <TrendingUp className="h-4 w-4" />
              <span>Conversion Optimization</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Conversion Rate Optimization
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Turn more visitors into customers. Data-driven CRO for Shopify stores.
            </p>

            <p className="text-base text-muted-foreground mb-8">
              You're spending money to drive traffic. Are you maximizing the value of each visitor? Even a 0.5% conversion increase can mean tens of thousands in additional revenue. We identify conversion barriers and implement proven improvements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button size="lg" asChild className="bg-[#60DB36] hover:bg-[#50CB26]">
                <Link href="/contact-us">
                  Schedule a CRO Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#pricing">View Pricing</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              ✓ Trusted by brands serious about improving their conversion rates
            </p>
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* Who This Is For */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Do You Need CRO Services?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Traffic Is Good But Sales Aren't",
                description: "Getting 10K+ monthly visitors but conversion under 2%? CRO can help identify what's stopping purchases."
              },
              {
                title: "High Cart Abandonment",
                description: "75%+ cart abandonment rate? Common issues like unexpected shipping costs or confusing checkout are fixable."
              },
              {
                title: "Mobile Conversion Lags Desktop",
                description: "Mobile traffic is 70%+ but conversion is 50% lower than desktop? Mobile-specific UX issues need addressing."
              },
              {
                title: "Revenue Plateau",
                description: "Revenue stuck despite increased traffic? Conversion optimization can unlock growth without increasing ad spend."
              },
              {
                title: "Before Scaling Ad Spend",
                description: "Planning to increase marketing budget? Optimize conversion first to maximize ROI on that increased spend."
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

      {/* Services */}
      <section id="pricing" className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            CRO Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "CRO Audit & Strategy",
                price: "$8,000-15,000",
                timeline: "2-3 weeks",
                features: [
                  "Funnel analysis (where visitors drop off)",
                  "Heatmaps and session recordings",
                  "Mobile vs. desktop analysis",
                  "Checkout flow audit",
                  "Trust signal assessment",
                  "Page speed analysis",
                  "Form usability review",
                  "Competitor benchmarking"
                ],
                deliverable: "Detailed CRO audit report with prioritized recommendations"
              },
              {
                name: "CRO Implementation",
                price: "$12,000-35,000",
                timeline: "4-8 weeks",
                features: [
                  "Product page optimization",
                  "Collection page improvements",
                  "Cart abandonment reduction",
                  "Checkout optimization",
                  "Mobile experience fixes",
                  "Trust signal additions",
                  "Speed optimization",
                  "Form improvements"
                ],
                deliverable: "Implemented improvements with before/after metrics",
                highlight: true
              },
              {
                name: "A/B Testing Program",
                price: "$15,000-40,000",
                timeline: "12-16 weeks",
                features: [
                  "Test hypothesis development",
                  "A/B test design and setup",
                  "Traffic allocation management",
                  "Statistical analysis",
                  "Winner implementation",
                  "Continuous testing cycle"
                ],
                deliverable: "Ongoing testing program with documented winners"
              },
              {
                name: "Full CRO Service",
                price: "$30,000-70,000",
                timeline: "6-12 months",
                features: [
                  "Complete CRO audit",
                  "Prioritized implementation",
                  "A/B testing program",
                  "Monthly performance reviews",
                  "Continuous optimization",
                  "Quarterly strategy sessions"
                ],
                deliverable: "Comprehensive CRO program"
              }
            ].map((service) => (
              <div
                key={service.name}
                className={`rounded-xl border ${
                  service.highlight ? "border-primary bg-primary/5" : "border-border bg-card"
                } p-8`}
              >
                <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-primary">{service.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">Timeline: {service.timeline}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground italic">
                  <strong>Deliverable:</strong> {service.deliverable}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-card rounded-xl border border-border p-6">
            <h4 className="font-semibold text-lg mb-4">Ongoing CRO Program: $5,000-12,000/month</h4>
            <div className="grid md:grid-cols-4 gap-4">
              {["Monthly optimization", "A/B testing", "Performance monitoring", "Strategy adjustments"].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* Common Improvements */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            What We Typically Optimize
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Product Pages",
                impact: "15-35% conversion increase",
                changes: [
                  "Above-fold product info optimization",
                  "Trust signals (reviews, guarantees, badges)",
                  "Better product photography and videos",
                  "Clear size guides and fit information",
                  "Prominent add-to-cart buttons",
                  "Social proof and urgency",
                  "Related products and upsells"
                ]
              },
              {
                title: "Checkout Flow",
                impact: "10-25% checkout completion increase",
                changes: [
                  "Reduce form fields",
                  "Add guest checkout option",
                  "Display security badges",
                  "Show shipping costs early",
                  "Progress indicators",
                  "Error message clarity",
                  "Mobile checkout optimization"
                ]
              },
              {
                title: "Mobile Experience",
                impact: "20-45% mobile conversion increase",
                changes: [
                  "Touch target optimization",
                  "Simplified navigation",
                  "Mobile-specific layouts",
                  "Form input optimization",
                  "Image loading optimization",
                  "Sticky add-to-cart buttons"
                ]
              },
              {
                title: "Trust & Credibility",
                impact: "12-28% conversion increase",
                changes: [
                  "Customer reviews prominent",
                  "Trust badges and security seals",
                  "Clear return policy",
                  "Money-back guarantee",
                  "Social proof (customer photos)",
                  "Professional photography"
                ]
              }
            ].map((category) => (
              <div key={category.title} className="bg-card rounded-xl border border-border p-6">
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-sm text-primary font-semibold mb-4">Average Impact: {category.impact}</p>
                <ul className="space-y-2">
                  {category.changes.map((change) => (
                    <li key={change} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{change}</span>
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
            How We Optimize Your Store
          </h2>

          <div className="space-y-12">
            {[
              {
                phase: "Phase 1: Audit & Analysis",
                duration: "2 weeks",
                items: [
                  "Install analytics and heatmap tools",
                  "Analyze conversion funnels",
                  "Review session recordings",
                  "Assess mobile experience",
                  "Benchmark against competitors",
                  "Identify top issues"
                ],
                deliverable: "CRO audit report with prioritized recommendations"
              },
              {
                phase: "Phase 2: Quick Wins",
                duration: "2-3 weeks",
                items: [
                  "Implement high-impact, low-effort changes",
                  "Fix obvious barriers",
                  "Add missing trust signals",
                  "Improve mobile experience",
                  "Optimize page speed"
                ],
                deliverable: "Quick improvements with measurable impact"
              },
              {
                phase: "Phase 3: Major Improvements",
                duration: "4-6 weeks",
                items: [
                  "Product page redesign",
                  "Checkout optimization",
                  "Collection page improvements",
                  "Advanced trust signals",
                  "Enhanced mobile experience"
                ],
                deliverable: "Comprehensive improvements implemented"
              },
              {
                phase: "Phase 4: Testing & Iteration",
                duration: "Ongoing",
                items: [
                  "A/B test major changes",
                  "Analyze results",
                  "Implement winners",
                  "Continue testing cycle",
                  "Monthly reporting"
                ],
                deliverable: "Continuous optimization"
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
              Real Results: Home Goods Brand CRO
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              A home decor brand had good traffic (25K monthly) but low conversion (1.3%). They were spending $15K/month on ads.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">Key Issues Found</h3>
                <ul className="space-y-2">
                  {[
                    "Product pages missing key information",
                    "82% cart abandonment",
                    "Mobile experience confusing",
                    "No trust signals",
                    "Slow page load (5.8s)"
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
                <h3 className="font-semibold text-lg mb-4">Improvements Made</h3>
                <ul className="space-y-2">
                  {[
                    "Added detailed product descriptions and dimensions",
                    "Simplified checkout process",
                    "Redesigned mobile product pages",
                    "Added customer reviews prominently",
                    "Optimized images (5.8s → 2.1s load)"
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
                { metric: "Conversion", value: "+100%", detail: "1.3% → 2.6%" },
                { metric: "Cart Abandonment", value: "82% → 68%", detail: "14% improvement" },
                { metric: "Mobile Conv.", value: "+142%", detail: "Mobile optimization" },
                { metric: "AOV", value: "+14%", detail: "Higher order value" },
                { metric: "Revenue", value: "+81%", detail: "$32K → $58K/mo" },
                { metric: "Investment", value: "$35K", detail: "CRO program" }
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
                ROI: $35K CRO investment → Additional $26K monthly revenue = $312K annually
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
                q: "How long before we see results?",
                a: "Quick wins in 2-4 weeks. Full program shows significant results in 3-6 months. CRO is iterative and continuous."
              },
              {
                q: "What conversion rate should we aim for?",
                a: "Industry average is 1-3%. Good stores achieve 3-5%. Exceptional stores 5%+. Depends on traffic quality, AOV, and product type."
              },
              {
                q: "Will CRO work for our niche?",
                a: "Yes. CRO principles apply across industries, though specific tactics vary by product type and audience."
              },
              {
                q: "Do you guarantee results?",
                a: "No guarantees, but we only recommend changes with proven track records. Average clients see 30-60% conversion improvement."
              },
              {
                q: "How does A/B testing work?",
                a: "We show different versions to different visitors, measure which performs better, and implement the winner."
              },
              {
                q: "Can we implement recommendations ourselves?",
                a: "Yes. Audit includes implementation guidance. Most clients prefer us to implement for speed and technical expertise."
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
            Ready to Increase Conversions?
          </h2>
          <p className="text-lg opacity-90">
            Let's identify what's holding your store back and create a roadmap to improvement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact-us">
                Schedule CRO Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
              <Link href="/pricing">View All Services</Link>
            </Button>
          </div>
          <p className="text-sm opacity-75">
            ✓ 30-minute assessment • ✓ Free mini-audit • ✓ Cost estimate
          </p>
        </div>
      </section>
    </div>
  );
}
