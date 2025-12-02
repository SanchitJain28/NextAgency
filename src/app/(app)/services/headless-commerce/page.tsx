import Header from "@/components/header-footer/Header";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, Code2, TrendingUp, Clock, DollarSign } from "lucide-react";
import DottedSeparator from "@/components/seperators/DottedSeperator";

export const metadata: Metadata = {
  title: "Headless Shopify Development Services | ScaleFront",
  description:
    "Build lightning-fast headless Shopify stores with Next.js, React, and custom frontends. Premium UX, enterprise performance. Starting $5,000.",
  keywords: [
    "headless Shopify development",
    "headless commerce",
    "Shopify headless architecture",
    "Next.js Shopify",
    "Shopify Storefront API",
    "headless ecommerce development"
  ],
  openGraph: {
    title: "Headless Shopify Development Services | ScaleFront",
    description: "Build lightning-fast headless Shopify stores with Next.js, React, and custom frontends.",
    type: "website",
  },
  alternates: {
    canonical: "/services/headless-commerce",
  },
};

export default function HeadlessCommercePage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Headless Shopify Development",
            "provider": {
              "@type": "Organization",
              "name": "ScaleFront"
            },
            "description": "Build lightning-fast headless Shopify stores with Next.js, React, and custom frontends.",
            "offers": {
              "@type": "Offer",
              "priceRange": "$5,000+",
              "priceCurrency": "USD"
            }
          })
        }}
      />

      <Header />

      {/* Hero Section with Contact CTA */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
              <Zap className="h-4 w-4" />
              <span>Headless Commerce</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Headless Shopify Development
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Break free from theme limitations. Build the premium digital experience your brand deserves.
            </p>

            <p className="text-base text-muted-foreground mb-8">
              Headless commerce separates your storefront (what customers see) from your backend (Shopify's commerce engine). This gives you complete creative freedom while keeping Shopify's operational reliability. Build editorial experiences. Create unique interactions. Deliver sub-second page loads. All while Shopify handles products, checkout, and orders.
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
              ✓ Trusted by D2C brands doing $5M+ annually
            </p>
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* Who This Is For */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Is Headless Right for Your Brand?
          </h2>

          <p className="text-lg text-muted-foreground mb-12">
            Headless commerce is not for everyone. It's a significant investment that makes sense in specific situations.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">You Should Consider Headless If:</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Your Brand Identity Demands It</h4>
                  <p className="text-muted-foreground">
                    Premium fashion, luxury goods, design-led brands—if your brand positioning requires a distinctive digital experience that themes cannot deliver, headless is the answer.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Visual Storytelling Is Your Competitive Edge</h4>
                  <p className="text-muted-foreground">
                    Editorial layouts, lookbook experiences, scroll-based narratives, immersive product presentations—these require custom frontend development.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">You're Scaling Beyond $5M Annual Revenue</h4>
                  <p className="text-muted-foreground">
                    The investment in headless ($50-150K+) requires sufficient revenue to justify the cost. Below $5M annually, optimize your existing theme instead.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Mobile Experience Is Critical</h4>
                  <p className="text-muted-foreground">
                    If 80%+ of your traffic is mobile and you need app-like performance, headless delivers sub-second page transitions that themes cannot match.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">You Should Wait If:</h3>
              <ul className="space-y-3">
                {[
                  "You're still finding product-market fit",
                  "Your revenue is under $5M annually",
                  "Standard theme functionality meets your needs",
                  "You lack technical resources for ongoing maintenance",
                  "Speed to market is more important than uniqueness"
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

      {/* What We Deliver */}
      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Our Headless Commerce Solution
          </h2>

          <p className="text-lg text-muted-foreground mb-12">
            We build production-ready headless storefronts that combine creative excellence with technical performance.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Frontend Framework",
                description: "Next.js 14 with React, TypeScript, and Tailwind CSS. Server-side rendering for SEO, incremental static regeneration for performance, image optimization built-in."
              },
              {
                title: "Shopify Integration",
                description: "Shopify Storefront API for products, cart, and customer data. Checkout remains on Shopify for security and payment processing. Real-time inventory sync."
              },
              {
                title: "Content Management",
                description: "Sanity or Contentful for editorial content, campaign pages, and rich media. Visual editing for non-technical team members."
              },
              {
                title: "Performance Optimization",
                description: "Edge caching via Vercel or Cloudflare. Image optimization with WebP/AVIF. Code splitting and lazy loading. Target: <1s page loads."
              },
              {
                title: "Mobile-First Design",
                description: "Touch-optimized interactions, gesture navigation, infinite scroll, native-app-like transitions. 60fps animations on mobile devices."
              },
              {
                title: "Developer Handoff",
                description: "Complete source code and documentation. Deployment pipeline setup. Team training and knowledge transfer. Ongoing support plan."
              }
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-xl border border-border p-8">
            <h3 className="text-2xl font-bold mb-6">What You Get</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-4">Complete Storefront</h4>
                <ul className="space-y-2">
                  {[
                    "Homepage with editorial flexibility",
                    "Collection pages with filtering and sorting",
                    "Product pages with dynamic layouts",
                    "Cart and checkout integration",
                    "Customer account portal",
                    "Search functionality",
                    "Multi-currency/multi-language support"
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Content Management & Analytics</h4>
                <ul className="space-y-2">
                  {[
                    "Visual page builder for marketing team",
                    "Editorial content management",
                    "Campaign page creation",
                    "Performance monitoring dashboard",
                    "Analytics integration (GA4, Segment)",
                    "A/B testing infrastructure",
                    "Content preview environments"
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* Our Process */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            How We Build Your Headless Store
          </h2>

          <div className="space-y-12">
            {[
              {
                phase: "Phase 1: Discovery & Strategy",
                duration: "3-4 weeks",
                items: [
                  "Deep dive into brand identity and vision",
                  "Audit existing site and identify pain points",
                  "Define technical requirements and integrations",
                  "Design system architecture and API planning",
                  "Performance benchmarks and targets"
                ],
                deliverable: "Technical specification, project timeline, risk assessment"
              },
              {
                phase: "Phase 2: Design & Prototyping",
                duration: "4-6 weeks",
                items: [
                  "Design system creation (typography, colors, components)",
                  "Key page designs (desktop, tablet, mobile)",
                  "Interactive prototype with real interactions",
                  "Accessibility standards (WCAG 2.1 AA)",
                  "Mobile and desktop user flows"
                ],
                deliverable: "Complete design system, high-fidelity designs, interactive prototype"
              },
              {
                phase: "Phase 3: Development",
                duration: "10-14 weeks",
                items: [
                  "Next.js application and design system setup",
                  "Shopify API and CMS integration",
                  "Core pages (homepage, products, collections, cart)",
                  "Advanced features (accounts, personalization, search)",
                  "Performance optimization and accessibility audit"
                ],
                deliverable: "Fully functional headless storefront"
              },
              {
                phase: "Phase 4: Content Migration & Launch",
                duration: "3-4 weeks",
                items: [
                  "Product data and content migration",
                  "Media optimization and upload",
                  "Comprehensive QA and load testing",
                  "Security audit and user acceptance testing",
                  "Deployment, DNS setup, and team training"
                ],
                deliverable: "Live headless store, documentation, training"
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
            Headless Commerce Pricing
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Headless is a significant investment. Here's transparent pricing based on project scope.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Standard Build",
                price: "$50,000-90,000",
                timeline: "5-7 months",
                bestFor: "Mid-market D2C brands ($5-25M annual revenue)",
                features: [
                  "Discovery and strategy phase",
                  "Complete design system",
                  "Next.js storefront development",
                  "Shopify Storefront API integration",
                  "CMS setup (Sanity or Contentful)",
                  "Product, collection, cart, checkout pages",
                  "Customer account portal",
                  "Mobile-responsive design",
                  "Performance optimization",
                  "Launch support"
                ]
              },
              {
                name: "Premium Build",
                price: "$90,000-200,000",
                timeline: "6-9 months",
                bestFor: "Premium brands ($25-100M annual revenue)",
                features: [
                  "Everything in Standard, plus:",
                  "Advanced animations and interactions",
                  "Custom product configurators",
                  "Personalization engine integration",
                  "Lookbook/editorial experiences",
                  "AR/VR integration",
                  "A/B testing infrastructure",
                  "Multi-region/multi-currency setup",
                  "Extended post-launch support"
                ],
                highlight: true
              },
              {
                name: "Enterprise",
                price: "$200,000+",
                timeline: "9-12 months",
                bestFor: "Enterprise brands ($100M+ annual revenue)",
                features: [
                  "Multi-brand/multi-store architecture",
                  "Advanced ERP/system integrations",
                  "Custom middleware and APIs",
                  "White-glove development process",
                  "Dedicated project team",
                  "Priority support SLA"
                ]
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
                <p className="text-sm font-medium mb-6">{tier.bestFor}</p>
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
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Essential Support: $2,000/month</h4>
                <ul className="space-y-2">
                  {["Bug fixes and updates", "Shopify API compatibility", "Performance monitoring", "Monthly analytics review"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Growth Support: $5,000/month</h4>
                <ul className="space-y-2">
                  {["Everything in Essential", "Feature development (10 hours/month)", "Conversion optimization", "A/B testing management", "Quarterly strategy sessions"].map((item) => (
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
              Real Results: Premium Fashion Brand
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">The Challenge</h3>
                <ul className="space-y-2">
                  {[
                    "Theme templates felt generic",
                    "Lookbooks were static blog posts",
                    "6-second average page load times",
                    "Editorial content difficult to manage"
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
                    "Next.js headless storefront with custom design",
                    "Sanity CMS for editorial content",
                    "Interactive lookbooks with product hotspots",
                    "Optimized for mobile-first experience"
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
                { metric: "Page Load Time", value: "70% faster", detail: "6s → 1.8s" },
                { metric: "Mobile Conversion", value: "+34%", detail: "Significant lift" },
                { metric: "Average Order Value", value: "+22%", detail: "More revenue" },
                { metric: "Pages per Session", value: "3.2 → 5.1", detail: "Better engagement" }
              ].map((stat) => (
                <div key={stat.metric} className="bg-card rounded-lg p-4 border border-border">
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-foreground">{stat.metric}</div>
                  <div className="text-xs text-muted-foreground">{stat.detail}</div>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground">
              "The headless rebuild transformed how customers experience our brand. We can now execute campaigns in hours, not weeks. The mobile experience feels like an app."
              <footer className="mt-2 text-sm font-medium text-foreground not-italic">— Founder</footer>
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
                q: "How long does a headless build take?",
                a: "Standard builds take 5-7 months from kickoff to launch. Premium builds take 6-9 months. Timeline depends on complexity, integrations, and content readiness. We provide detailed timeline during discovery."
              },
              {
                q: "Can I use my existing Shopify store?",
                a: "Yes. Headless keeps your existing Shopify backend (products, orders, customers, checkout). We just rebuild the customer-facing frontend. Your Shopify admin stays the same."
              },
              {
                q: "How much do hosting costs add?",
                a: "Hosting a Next.js headless store on Vercel or Netlify typically costs $500-1,000/month depending on traffic. This is separate from the development cost and Shopify plan fees."
              },
              {
                q: "Can my team manage content after launch?",
                a: "Yes. We set up a visual CMS (Sanity or Contentful) so your marketing team can update content, create campaign pages, and manage editorial sections without code."
              },
              {
                q: "What about SEO?",
                a: "Server-side rendering in Next.js means excellent SEO. Often better than theme stores because of faster load times and cleaner HTML. We implement all technical SEO best practices."
              },
              {
                q: "Can I add features later?",
                a: "Yes. One advantage of headless is flexibility. Want to add AR try-on? Custom quiz? Advanced personalization? We can add features without rebuilding the entire store."
              },
              {
                q: "Do you offer payment plans?",
                a: "We structure payments in milestones: 25% on signing, 25% after design approval, 25% mid-development, 25% on launch. Custom payment schedules possible for enterprise clients."
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
            Let's Build Something Exceptional
          </h2>
          <p className="text-lg opacity-90">
            Whether you're certain headless is right or still evaluating options, we're here to help you make the best decision for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact-us">
                Schedule Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
              <Link href="/pricing">View All Services</Link>
            </Button>
          </div>
          <p className="text-sm opacity-75">
            ✓ No pressure. Honest guidance. • ✓ Response within 24 hours
          </p>
        </div>
      </section>
    </div>
  );
}
