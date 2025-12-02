import Header from "@/components/header-footer/Header";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, TrendingUp, AlertCircle, Timer, DollarSign } from "lucide-react";
import DottedSeparator from "@/components/seperators/DottedSeperator";

export const metadata: Metadata = {
  title: "Shopify Performance Optimization Services | ScaleFront",
  description:
    "Speed up your Shopify store. Core Web Vitals optimization, image optimization, code cleanup. Improve conversions with faster page loads. Starting $800.",
  keywords: [
    "Shopify speed optimization",
    "Shopify performance optimization",
    "Shopify page speed",
    "Core Web Vitals Shopify",
    "Shopify store optimization",
    "Shopify load time"
  ],
  openGraph: {
    title: "Shopify Performance Optimization Services | ScaleFront",
    description: "Speed up your Shopify store and improve conversions with professional performance optimization.",
    type: "website",
  },
  alternates: {
    canonical: "/services/performance-optimization",
  },
};

export default function PerformanceOptimizationPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Shopify Performance Optimization",
            "provider": {
              "@type": "Organization",
              "name": "ScaleFront"
            },
            "description": "Professional Shopify store speed optimization services to improve Core Web Vitals and conversions.",
            "offers": {
              "@type": "Offer",
              "priceRange": "$800-30,000",
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
              <span>Performance Optimization</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Shopify Performance Optimization
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Make your store lightning fast. Every second counts.
            </p>

            <p className="text-base text-muted-foreground mb-8">
              A 1-second delay in page load decreases conversions by 7%. If your store loads in 5 seconds instead of 2, you're losing 21% of potential sales. We optimize Shopify stores to load in under 2 seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button size="lg" asChild className="bg-[#60DB36] hover:bg-[#50CB26]">
                <Link href="/contact-us">
                  Schedule a Speed Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#pricing">View Pricing</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              ✓ Trusted by brands serious about performance
            </p>
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* Why Speed Matters */}
      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            The Cost of Slow Stores
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card rounded-xl border border-border p-6">
              <TrendingUp className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-3">Conversion Impact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 1-second delay = 7% conversion decrease</li>
                <li>• 5-second load vs. 2-second = 21% fewer sales</li>
                <li>• Mobile users especially sensitive to speed</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl border border-border p-6">
              <Zap className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-3">SEO Impact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Google ranks faster sites higher</li>
                <li>• Core Web Vitals are ranking factors</li>
                <li>• Slow sites lose organic traffic</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl border border-border p-6">
              <AlertCircle className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-3">User Experience</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 53% mobile users abandon sites taking 3+ seconds</li>
                <li>• Slow sites feel unprofessional</li>
                <li>• Speed affects brand perception</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8">
            <h3 className="font-semibold text-lg mb-4">Real Example</h3>
            <p className="text-muted-foreground mb-4">
              A store doing $50K monthly revenue with 3% conversion and 5-second load time.
            </p>
            <p className="font-semibold text-lg text-primary">
              Optimizing to 2 seconds could add $10.5K monthly revenue (21% conversion boost).
            </p>
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* Services */}
      <section id="pricing" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Performance Optimization Services
          </h2>

          <div className="space-y-8">
            {[
              {
                name: "Speed Audit & Quick Wins",
                price: "$5,000-8,000",
                timeline: "1-2 weeks",
                results: "30-50% load time reduction",
                description: "Comprehensive performance analysis with immediate improvements.",
                analyze: [
                  "Page load times (desktop/mobile)",
                  "Core Web Vitals (LCP, FID, CLS)",
                  "Image optimization opportunities",
                  "JavaScript/CSS bloat",
                  "App performance impact",
                  "Third-party script analysis",
                  "Hosting and CDN configuration"
                ],
                implement: [
                  "Image optimization and lazy loading",
                  "Remove unused apps",
                  "Optimize third-party scripts",
                  "Enable caching",
                  "Minify CSS/JavaScript"
                ]
              },
              {
                name: "Complete Performance Overhaul",
                price: "$12,000-30,000",
                timeline: "4-6 weeks",
                results: "50-70% load time reduction, perfect Core Web Vitals",
                description: "Comprehensive optimization for maximum performance.",
                analyze: [],
                implement: [
                  "Everything in Speed Audit",
                  "Theme code optimization",
                  "Custom liquid optimization",
                  "Advanced image optimization",
                  "App audit and replacement",
                  "Font loading optimization",
                  "Critical CSS implementation",
                  "JavaScript optimization",
                  "Mobile-specific optimization",
                  "Core Web Vitals perfection"
                ]
              },
              {
                name: "Ongoing Performance Monitoring",
                price: "$1,000-3,000/month",
                timeline: "Ongoing retainer",
                results: "Maintained fast performance",
                description: "Continuous monitoring and optimization.",
                analyze: [],
                implement: [
                  "Weekly performance monitoring",
                  "Monthly optimization updates",
                  "App performance tracking",
                  "New issue identification",
                  "Core Web Vitals monitoring",
                  "Mobile performance focus"
                ]
              }
            ].map((service, index) => (
              <div key={index} className="bg-card rounded-xl border border-border p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary mb-1">{service.price}</div>
                    <div className="text-sm text-muted-foreground">Timeline: {service.timeline}</div>
                    <div className="text-sm font-medium text-foreground mt-1">{service.results}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {service.analyze.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3">What We Analyze:</h4>
                      <ul className="space-y-2">
                        {service.analyze.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold mb-3">{service.analyze.length > 0 ? "What We Implement:" : "What's Included:"}</h4>
                    <ul className="space-y-2">
                      {service.implement.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* Common Issues */}
      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            What Slows Down Shopify Stores
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Unoptimized Images",
                percentage: "40% of issues",
                problems: [
                  "Images too large (MB instead of KB)",
                  "Wrong formats (JPG instead of WebP)",
                  "No lazy loading",
                  "No responsive images"
                ],
                fixes: [
                  "Compress all images",
                  "Convert to WebP/AVIF",
                  "Implement lazy loading",
                  "Responsive image serving"
                ],
                impact: "2-4 second improvement"
              },
              {
                title: "Too Many Apps",
                percentage: "30% of issues",
                problems: [
                  "15+ apps installed",
                  "Unused apps still loading code",
                  "Overlapping functionality",
                  "Heavy apps (reviews, popups)"
                ],
                fixes: [
                  "Audit all apps",
                  "Remove unused apps",
                  "Replace heavy apps",
                  "Consolidate functionality"
                ],
                impact: "1-3 second improvement"
              },
              {
                title: "Bloated Theme Code",
                percentage: "15% of issues",
                problems: [
                  "Old theme with legacy code",
                  "Multiple unused features",
                  "Inefficient Liquid code",
                  "Unminified CSS/JS"
                ],
                fixes: [
                  "Remove unused code",
                  "Optimize Liquid logic",
                  "Minify assets",
                  "Lazy load JavaScript"
                ],
                impact: "1-2 second improvement"
              },
              {
                title: "Third-Party Scripts",
                percentage: "10% of issues",
                problems: [
                  "Google Analytics loading slowly",
                  "Facebook Pixel blocking render",
                  "Chat widgets",
                  "All loading synchronously"
                ],
                fixes: [
                  "Async loading",
                  "Defer non-critical scripts",
                  "Remove unnecessary scripts",
                  "Optimize loading order"
                ],
                impact: "0.5-1.5 second improvement"
              }
            ].map((issue) => (
              <div key={issue.title} className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">{issue.title}</h3>
                  <span className="text-sm font-medium text-primary">{issue.percentage}</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Problems:</h4>
                    <ul className="space-y-1">
                      {issue.problems.map((problem) => (
                        <li key={problem} className="flex items-start gap-2">
                          <div className="rounded-full bg-muted p-1 mt-0.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                          </div>
                          <span className="text-sm text-muted-foreground">{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-foreground">Our Fix:</h4>
                    <ul className="space-y-1">
                      {issue.fixes.map((fix) => (
                        <li key={fix} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{fix}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <span className="text-sm font-medium text-primary">Impact: {issue.impact}</span>
                  </div>
                </div>
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
              Real Results: Fashion Brand Speed Optimization
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              A fashion brand with beautiful imagery had 7.2-second page loads on mobile. High bounce rate (72%) and low mobile conversion (1.1%).
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">Performance Issues Found</h3>
                <ul className="space-y-2">
                  {[
                    "Hero images: 4.2MB each",
                    "18 apps installed (6 unused)",
                    "No lazy loading",
                    "Unoptimized theme code",
                    "Heavy JavaScript libraries"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Optimizations Made</h3>
                <ul className="space-y-2">
                  {[
                    "Compressed and converted images to WebP",
                    "Removed 6 unused apps",
                    "Implemented lazy loading",
                    "Cleaned up theme code",
                    "Deferred non-critical JavaScript",
                    "Optimized mobile experience"
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
                { metric: "Page Load Time", value: "7.2s → 1.9s", detail: "74% improvement" },
                { metric: "Bounce Rate", value: "72% → 51%", detail: "Significant drop" },
                { metric: "Mobile Conversion", value: "+109%", detail: "1.1% → 2.3%" },
                { metric: "Core Web Vitals", value: "All Green", detail: "Perfect scores" }
              ].map((stat) => (
                <div key={stat.metric} className="bg-card rounded-lg p-4 border border-border">
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-foreground">{stat.metric}</div>
                  <div className="text-xs text-muted-foreground">{stat.detail}</div>
                </div>
              ))}
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="h-6 w-6 text-primary" />
                <span className="font-semibold text-lg">ROI</span>
              </div>
              <p className="text-muted-foreground">
                <strong className="text-foreground">$15K investment.</strong> Mobile revenue increased <strong className="text-primary">$18K/month</strong>
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
                q: "How fast can you make our store?",
                a: "We aim for <2 seconds on mobile. Typically achieve 1.5-2.5 seconds depending on starting point and content."
              },
              {
                q: "Will optimization break our theme?",
                a: "No. We test thoroughly and maintain all functionality. Performance improvements should never break features."
              },
              {
                q: "How long do improvements last?",
                a: "Permanent, unless you add heavy apps or large unoptimized images. That's why we offer monitoring retainers."
              },
              {
                q: "Can you optimize any theme?",
                a: "Yes. Some themes are easier to optimize than others, but all can be improved significantly."
              },
              {
                q: "What if we keep adding content?",
                a: "We can set up automated image optimization and provide guidelines for maintaining performance."
              },
              {
                q: "Do you optimize apps?",
                a: "We can't change app code, but we can remove heavy apps, find lighter alternatives, or optimize how apps load."
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
            Ready to Speed Up Your Store?
          </h2>
          <p className="text-lg opacity-90">
            Let's run a free speed test and show you what's possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact-us">
                Get Free Speed Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
              <Link href="/pricing">View All Services</Link>
            </Button>
          </div>
          <p className="text-sm opacity-75">
            ✓ No obligation • ✓ Response within 24 hours
          </p>
        </div>
      </section>
    </div>
  );
}
