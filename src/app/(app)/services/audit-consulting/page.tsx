import Header from "@/components/header-footer/Header";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardCheck, Search, TrendingUp, Zap, Target, BarChart3, Shield, AlertCircle, Smartphone, Code2 } from "lucide-react";
import DottedSeparator from "@/components/seperators/DottedSeperator";

export const metadata: Metadata = {
  title: "Shopify Store Audit & Consulting Services India | Expert Review | ScaleFront",
  description:
    "Comprehensive Shopify store audit covering performance, UX, conversion, SEO, and technical issues. Actionable recommendations from India-based experts. Starting ₹75k.",
  keywords: [
    "Shopify store audit",
    "Shopify consulting India",
    "Shopify performance audit",
    "Shopify conversion audit",
    "Shopify SEO audit",
    "Shopify technical audit",
    "Shopify store review",
    "Shopify optimization India"
  ],
  openGraph: {
    title: "Shopify Store Audit & Consulting Services | ScaleFront",
    description: "Comprehensive Shopify store audit and consulting services. Identify growth opportunities and optimization areas.",
    type: "website",
  },
  alternates: {
    canonical: "/services/audit-consulting",
  },
};

export default function AuditConsultingPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Shopify Store Audit & Consulting",
            "provider": {
              "@type": "Organization",
              "name": "ScaleFront"
            },
            "description": "Professional Shopify store audits covering performance, UX, conversion, SEO, and technical aspects. Expert consulting services.",
            "offers": {
              "@type": "Offer",
              "priceRange": "₹75,000-250,000",
              "priceCurrency": "INR"
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
              <ClipboardCheck className="h-4 w-4" />
              <span>Store Audit & Consulting</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Shopify Store Audit & Consulting
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Identify what's holding your store back. Get a roadmap to improve performance, conversions, and revenue.
            </p>

            <p className="text-base text-muted-foreground mb-8">
              Your store might look fine, but underneath there could be performance issues, UX problems, SEO gaps, or conversion killers costing you revenue every day. We conduct comprehensive audits across 8 critical areas and provide a prioritized action plan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button size="lg" asChild className="bg-[#60DB36] hover:bg-[#50CB26]">
                <Link href="/contact-us">
                  Get Your Store Audited
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#pricing">View Audit Packages</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              ✓ Trusted by D2C brands serious about improving their Shopify stores
            </p>
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* Who Needs Audit */}
      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Do You Need a Store Audit?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">You Should Get an Audit If:</h3>
              <ul className="space-y-3">
                {[
                  {
                    title: "Traffic Is Good But Sales Are Low",
                    desc: "Getting visitors but not converting? Something's wrong with UX, trust signals, or checkout flow."
                  },
                  {
                    title: "You've Hit a Revenue Plateau",
                    desc: "Revenue stuck at the same level for 6+ months? An audit identifies optimization opportunities you haven't considered."
                  },
                  {
                    title: "Site Speed Is Slow",
                    desc: "Long load times kill conversions. If your store takes 5+ seconds to load, you're losing 40%+ of visitors."
                  },
                  {
                    title: "Not Sure What to Fix Next",
                    desc: "Limited budget and time. Should you fix mobile? Improve checkout? Add reviews? An audit prioritizes what will move the needle."
                  },
                  {
                    title: "Before Major Investment",
                    desc: "Planning a theme redesign, app implementation, or marketing push? Audit first to ensure solid foundations."
                  },
                  {
                    title: "Post-Migration or Redesign",
                    desc: "Just migrated to Shopify or launched a redesign? Audit helps catch issues before they compound."
                  },
                  {
                    title: "SEO Rankings Dropped",
                    desc: "Lost organic traffic? Technical SEO issues might be the culprit. An audit identifies and fixes problems."
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
              <ul className="space-y-3 mb-6">
                {[
                  "Store is brand new (under 3 months old)",
                  "You're still figuring out product-market fit",
                  "Monthly traffic under 5,000 visitors",
                  "Revenue under ₹5 lakh/month",
                  "Major redesign already planned and budgeted"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                <h4 className="font-semibold mb-2">Real Example</h4>
                <p className="text-sm text-muted-foreground">
                  Fashion brand stuck at ₹45L/month for 8 months. Audit revealed mobile page load of 9.2 seconds, hidden reviews, and 82% checkout abandonment. After fixes: +49% revenue increase to ₹67L/month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* 8 Audit Areas */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            8-Area Comprehensive Audit
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            We audit every critical aspect of your Shopify store and provide actionable recommendations.
          </p>

          <div className="space-y-8">
            {[
              {
                title: "1. Performance & Speed Audit",
                icon: Zap,
                analyze: [
                  "Page load times (desktop and mobile)",
                  "Core Web Vitals (LCP, FID, CLS)",
                  "Server response times",
                  "Image optimization",
                  "JavaScript and CSS bloat",
                  "App performance impact",
                  "Third-party script impact",
                  "Caching and CDN usage",
                  "Mobile performance specifically"
                ],
                deliverable: "Performance score with benchmarks, specific bottlenecks, app recommendations, image optimization opportunities, estimated conversion impact.",
                example: "Homepage loads in 8.2 seconds on mobile. Top issues: Unoptimized hero image (3.2MB), 14 unused apps adding JavaScript, no lazy loading. Fixing would reduce load time to ~2.1 seconds, potentially increasing mobile conversion by 28%."
              },
              {
                title: "2. User Experience (UX) Audit",
                icon: Target,
                analyze: [
                  "Mobile experience (80%+ of traffic is mobile)",
                  "Navigation and menu structure",
                  "Product discovery flow",
                  "Filter and search functionality",
                  "Product page layout and information architecture",
                  "Cart and checkout UX",
                  "Form design and usability",
                  "Trust signals and social proof",
                  "Mobile-specific issues (tap targets, scrolling, zoom)"
                ],
                deliverable: "Annotated screenshots highlighting issues, user flow diagrams showing friction points, mobile-specific recommendations, comparison to best-in-class examples.",
                example: "Mobile product page requires 7 taps to see product details, size guide, and reviews. 43% of mobile users bounce at this stage. Recommend collapsible accordions to reduce interaction cost."
              },
              {
                title: "3. Conversion Rate Optimization (CRO) Audit",
                icon: TrendingUp,
                analyze: [
                  "Checkout flow and abandonment points",
                  "Product page conversion elements",
                  "Trust signals (reviews, badges, guarantees)",
                  "Call-to-action placement and copy",
                  "Urgency and scarcity tactics",
                  "Free shipping thresholds",
                  "Return policy visibility",
                  "Payment and security badges",
                  "Discount and promotional effectiveness"
                ],
                deliverable: "Conversion funnel analysis, specific abandonment points, A/B test recommendations prioritized by impact, quick wins vs. major improvements, estimated revenue impact.",
                example: "Checkout abandonment at 78% (industry avg: 69%). Main issues: Unexpected shipping costs at final step, no guest checkout, required account creation. Fixing could recover ₹12L annually based on current traffic."
              },
              {
                title: "4. SEO & Content Audit",
                icon: Search,
                analyze: [
                  "Technical SEO (crawlability, indexing, schema)",
                  "On-page SEO (titles, descriptions, headings)",
                  "Content quality and keyword optimization",
                  "Internal linking structure",
                  "Image alt text and optimization",
                  "URL structure",
                  "Sitemap and robots.txt",
                  "Duplicate content issues",
                  "Blog content strategy (if applicable)"
                ],
                deliverable: "Technical SEO issues prioritized by severity, keyword opportunity analysis, content improvement recommendations, structured data implementation, SEO roadmap with traffic impact.",
                example: "47 products missing meta descriptions. 23 products have duplicate content from manufacturer descriptions. Blog hasn't been updated in 8 months. Fixing meta descriptions and creating product-focused content could increase organic traffic by 40%+ over 6 months."
              },
              {
                title: "5. Mobile Experience Audit",
                icon: Smartphone,
                analyze: [
                  "Mobile-specific UX issues",
                  "Touch target sizes and spacing",
                  "Mobile navigation usability",
                  "Form input experience",
                  "Mobile page speed",
                  "Responsive design issues",
                  "Mobile checkout flow",
                  "App-like features (if applicable)"
                ],
                deliverable: "Mobile experience score, device-specific testing results (iOS, Android), mobile conversion killers identified, mobile-first redesign recommendations.",
                example: "Mobile navigation menu requires precise tapping. Buttons are 36px (minimum is 44px). Product images don't zoom properly. 62% of mobile traffic but only 38% of conversions. Mobile optimization could add ₹8L annual revenue."
              },
              {
                title: "6. Technical & Code Audit",
                icon: Code2,
                analyze: [
                  "Theme code quality",
                  "Liquid code efficiency",
                  "JavaScript errors and console warnings",
                  "Deprecated code or APIs",
                  "App conflicts",
                  "Security issues",
                  "Accessibility (WCAG 2.1)",
                  "Browser compatibility",
                  "Checkout extensibility opportunities (Plus only)"
                ],
                deliverable: "Technical debt assessment, code quality score, security vulnerabilities identified, accessibility compliance report, technical improvement roadmap.",
                example: "Theme using deprecated Shopify APIs that will break in 6 months. 8 JavaScript errors on every page load. No accessibility considerations (violates WCAG 2.1). Recommend theme update before issues compound."
              },
              {
                title: "7. App & Integration Audit",
                icon: CheckCircle2,
                analyze: [
                  "Installed apps and actual usage",
                  "App performance impact",
                  "Redundant or overlapping apps",
                  "App cost vs. value analysis",
                  "Integration quality and reliability",
                  "Alternative app recommendations"
                ],
                deliverable: "App inventory with usage analysis, performance impact score per app, cost savings opportunities, better alternative recommendations, apps to remove immediately.",
                example: "Paying ₹42,000/month for 18 apps. 6 apps haven't been used in 3+ months. 4 apps have overlapping functionality. 3 apps significantly slow page load. Removing/consolidating could save ₹24,000/month and improve load time by 2.1 seconds."
              },
              {
                title: "8. Analytics & Tracking Audit",
                icon: BarChart3,
                analyze: [
                  "Google Analytics 4 setup",
                  "Conversion tracking accuracy",
                  "E-commerce tracking configuration",
                  "Event tracking implementation",
                  "Goal setup and tracking",
                  "Attribution modeling",
                  "Customer journey tracking",
                  "Funnel analysis"
                ],
                deliverable: "Tracking accuracy assessment, missing events identified, GA4 configuration recommendations, custom reporting suggestions, data quality issues fixed.",
                example: "GA4 not tracking 32% of transactions due to checkout redirect issues. No event tracking for add-to-cart or product views. Unable to analyze customer journey or optimize marketing spend. Fixing tracking would enable data-driven optimization."
              }
            ].map((audit) => {
              const Icon = audit.icon;
              return (
                <div key={audit.title} className="bg-card rounded-xl border border-border p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="inline-flex rounded-lg bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{audit.title}</h3>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm mb-2">What We Analyze:</h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {audit.analyze.map((item) => (
                              <div key={item} className="flex items-start gap-2">
                                <span className="text-primary text-xs mt-1">•</span>
                                <span className="text-sm text-muted-foreground">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-sm mb-2">What You Get:</h4>
                          <p className="text-sm text-muted-foreground">{audit.deliverable}</p>
                        </div>

                        <div className="p-4 bg-secondary/20 rounded-lg">
                          <h4 className="font-semibold text-sm mb-2">Example Finding:</h4>
                          <p className="text-sm text-muted-foreground italic">&ldquo;{audit.example}&rdquo;</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* Deliverables */}
      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            What You Receive
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="text-xl font-bold mb-4">Comprehensive Audit Report</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Executive Summary (2-3 pages)</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Overall store health score</li>
                    <li>• Top 10 issues prioritized by impact</li>
                    <li>• Quick wins (implement immediately)</li>
                    <li>• Long-term improvements</li>
                    <li>• Estimated revenue impact of fixes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Detailed Findings (40-60 pages)</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Section for each of 8 audit areas</li>
                    <li>• Specific issues with annotated screenshots</li>
                    <li>• Technical details and explanation</li>
                    <li>• Industry benchmark comparisons</li>
                    <li>• Before/after examples where applicable</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Action Plan (5-10 pages)</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Prioritized recommendations</li>
                    <li>• Implementation complexity (easy/medium/hard)</li>
                    <li>• Estimated time and cost for each fix</li>
                    <li>• Expected impact on metrics</li>
                    <li>• 90-day roadmap</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="text-xl font-bold mb-4">90-Minute Presentation</h3>
                <p className="text-sm text-muted-foreground mb-4">Video conference walk-through where we:</p>
                <ul className="space-y-2">
                  {[
                    "Present findings and recommendations",
                    "Answer your questions",
                    "Discuss priorities based on your goals",
                    "Provide implementation guidance",
                    "Discuss budget and timeline"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="text-xl font-bold mb-4">30 Days Follow-Up Support</h3>
                <p className="text-sm text-muted-foreground mb-4">Post-audit support includes:</p>
                <ul className="space-y-2">
                  {[
                    "Answer implementation questions via email",
                    "Review changes you've made",
                    "Clarify any audit findings",
                    "Additional mini-reviews of specific areas"
                  ].map((item) => (
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

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Audit Packages
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Quick Audit",
                price: "₹75,000",
                timeline: "3-5 days",
                bestFor: "Small stores wanting quick assessment",
                includes: [
                  "Performance audit",
                  "Mobile experience audit",
                  "Basic UX audit",
                  "Quick wins identification",
                  "15-page report",
                  "45-minute presentation call",
                  "7 days email support"
                ]
              },
              {
                name: "Standard Audit",
                price: "₹1,50,000",
                timeline: "7-10 days",
                bestFor: "Growing stores needing comprehensive review",
                popular: true,
                includes: [
                  "All 8 audit areas (comprehensive)",
                  "50-page detailed report",
                  "Prioritized action plan",
                  "90-minute presentation call",
                  "30 days email support",
                  "One follow-up review session"
                ]
              },
              {
                name: "Premium Audit",
                price: "₹2,50,000",
                timeline: "10-14 days",
                bestFor: "Enterprise stores or major optimization initiatives",
                includes: [
                  "All Standard Audit features",
                  "Competitor analysis (3 competitors)",
                  "Custom Google Analytics dashboards",
                  "A/B test plan with mockups",
                  "Implementation support for 2 months",
                  "Monthly check-in calls",
                  "Priority support"
                ]
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
                <p className="text-sm font-medium mb-6">Best for: {tier.bestFor}</p>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-sm">Includes:</h4>
                  <ul className="space-y-2">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-xl border border-border p-8">
            <h3 className="text-xl font-bold mb-6">Ongoing Consulting</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">₹1,00,000-3,00,000/month</div>
                <p className="text-sm text-muted-foreground mb-4">Retainer-based consulting for continuous optimization</p>
                <p className="text-sm font-medium mb-4">For stores serious about continuous improvement</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-3">Includes:</h4>
                <ul className="space-y-2">
                  {[
                    "Monthly audits and reviews",
                    "Continuous optimization recommendations",
                    "Implementation support (varies by retainer)",
                    "Performance monitoring",
                    "A/B testing guidance",
                    "Strategy sessions",
                    "Priority support"
                  ].map((item) => (
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

      {/* Implementation Services */}
      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            We Can Fix What We Find
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            Many agencies audit and disappear. We can implement the fixes too.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Quick Wins Implementation",
                price: "₹1,00,000-2,50,000",
                timeline: "3-4 weeks",
                description: "Fix the top 10-15 issues from audit",
                includes: [
                  "Performance optimization",
                  "Mobile UX fixes",
                  "Basic CRO improvements",
                  "Simple code fixes",
                  "App cleanup"
                ]
              },
              {
                name: "Comprehensive Implementation",
                price: "₹3,00,000-6,00,000",
                timeline: "8-12 weeks",
                description: "Address all major audit findings",
                includes: [
                  "Performance optimization",
                  "UX improvements",
                  "CRO implementation",
                  "SEO improvements",
                  "Code refactoring",
                  "New features if needed"
                ]
              },
              {
                name: "Full Redesign",
                price: "₹8,00,000+",
                timeline: "12-16 weeks",
                description: "Complete rebuild based on audit findings",
                includes: [
                  "Complete theme redesign",
                  "Mobile-first approach",
                  "Performance-optimized from ground up",
                  "Implementation of all recommendations"
                ]
              }
            ].map((service, index) => (
              <div key={index} className="bg-card rounded-xl border border-border p-6">
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <div className="text-2xl font-bold text-primary mb-1">{service.price}</div>
                <div className="text-sm text-muted-foreground mb-4">Timeline: {service.timeline}</div>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.includes.map((item) => (
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

      {/* Case Studies */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Real Results from Store Audits
          </h2>

          <div className="space-y-8">
            {[
              {
                title: "Fashion Brand",
                situation: "Revenue stuck at ₹45L/month for 8 months despite increasing traffic.",
                findings: [
                  "Mobile page load: 9.2 seconds",
                  "Product page required 5 taps to see size guide",
                  "No trust signals (reviews hidden)",
                  "Checkout abandonment: 82%"
                ],
                actions: [
                  "Optimized images and removed 6 unused apps",
                  "Improved mobile product page layout",
                  "Added prominent reviews",
                  "Simplified checkout flow"
                ],
                results: [
                  { metric: "Mobile page load", value: "9.2s → 2.1s" },
                  { metric: "Mobile conversion", value: "+41%" },
                  { metric: "Overall conversion", value: "1.8% → 2.7% (+50%)" },
                  { metric: "Monthly revenue", value: "₹45L → ₹67L (+49%)" }
                ],
                roi: "Audit cost ₹1.5L. Revenue increase: ₹22L/month = ₹2.64Cr annually"
              },
              {
                title: "Home Decor Store",
                situation: "High bounce rate (72%) despite good SEO traffic.",
                findings: [
                  "Homepage loaded 22 JavaScript files",
                  "No product filtering on collections",
                  "Images not optimized (averaging 2.1MB each)",
                  "Mobile navigation confusing"
                ],
                actions: [
                  "Removed redundant apps",
                  "Added advanced filtering",
                  "Optimized all images",
                  "Redesigned mobile navigation"
                ],
                results: [
                  { metric: "Bounce rate", value: "72% → 48%" },
                  { metric: "Pages per session", value: "2.1 → 4.3" },
                  { metric: "Conversion rate", value: "1.2% → 2.1% (+75%)" },
                  { metric: "Organic revenue", value: "+118%" }
                ],
                roi: "Audit + implementation cost ₹4.5L. Revenue increase: ₹15L/month"
              },
              {
                title: "Beauty Brand",
                situation: "Spending ₹3L/month on ads but poor ROAS.",
                findings: [
                  "GA4 tracking only capturing 58% of conversions",
                  "Checkout abandonment: 79%",
                  "Mobile checkout broken on iOS",
                  "No product recommendations"
                ],
                actions: [
                  "Fixed GA4 tracking",
                  "Streamlined checkout",
                  "Fixed iOS-specific bugs",
                  "Added AI product recommendations"
                ],
                results: [
                  { metric: "Conversion tracking", value: "58% → 100%" },
                  { metric: "Checkout conversion", value: "+32%" },
                  { metric: "AOV", value: "₹1,850 → ₹2,440 (+32%)" },
                  { metric: "ROAS", value: "2.1x → 3.8x" }
                ],
                roi: "Better ad optimization alone saved ₹90k/month in wasted ad spend"
              }
            ].map((study, index) => (
              <div key={index} className="bg-card rounded-xl border border-border p-8">
                <h3 className="text-2xl font-bold mb-4">{study.title}</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Situation:</h4>
                    <p className="text-muted-foreground">{study.situation}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Audit Findings:</h4>
                      <ul className="space-y-2">
                        {study.findings.map((finding) => (
                          <li key={finding} className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{finding}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Actions Taken:</h4>
                      <ul className="space-y-2">
                        {study.actions.map((action) => (
                          <li key={action} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6">
                    <h4 className="font-semibold mb-4">Results:</h4>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      {study.results.map((result) => (
                        <div key={result.metric}>
                          <div className="text-sm font-semibold text-primary mb-1">{result.metric}</div>
                          <div className="text-sm text-muted-foreground">{result.value}</div>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-primary/20">
                      <div className="font-semibold">ROI: {study.roi}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "How long does an audit take?",
                answer: "Quick Audit: 3-5 days. Standard: 7-10 days. Premium: 10-14 days. Timeline depends on store size and complexity."
              },
              {
                question: "Do you need access to our store?",
                answer: "Yes. We need admin access, Google Analytics access, and any relevant app logins. We sign NDAs and maintain strict confidentiality."
              },
              {
                question: "Can you audit our store while it's live?",
                answer: "Yes. Audits are non-invasive. We analyze your store without making any changes."
              },
              {
                question: "Do you provide implementation services?",
                answer: "Yes. We can implement all audit recommendations or just the ones you choose. Implementation is separate from audit pricing."
              },
              {
                question: "How do you prioritize recommendations?",
                answer: "We prioritize based on: (1) potential revenue impact, (2) implementation complexity, (3) time to implement, (4) your specific goals."
              },
              {
                question: "What if you don't find any issues?",
                answer: "Rare, but possible for very well-optimized stores. We'd tell you honestly and refund a portion of the fee. Has never happened in 100+ audits."
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
            Ready to Optimize Your Store?
          </h2>
          <p className="text-lg opacity-90">
            Get a comprehensive audit and discover opportunities for growth. Let's identify what's holding your store back and create a roadmap to improvement.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact-us">
              Schedule Audit Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <p className="text-sm opacity-75">
            No obligation. No pressure. We'll discuss your store, challenges, and how an audit can help.
          </p>
        </div>
      </section>
    </div>
  );
}
