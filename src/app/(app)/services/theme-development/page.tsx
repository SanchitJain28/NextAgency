import Header from "@/components/header-footer/Header";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Palette, Sparkles, Layout, Code2, Clock, Zap, Brush, Package } from "lucide-react";
import DottedSeparator from "@/components/seperators/DottedSeperator";

export const metadata: Metadata = {
  title: "Shopify Theme Customization Services | ScaleFront",
  description:
    "Custom Shopify theme development and modifications. Premium themes tailored to your brand. Starting $12K.",
  keywords: [
    "Shopify theme customization",
    "custom Shopify theme",
    "Shopify theme development",
    "Shopify theme modifications",
    "premium Shopify theme",
    "Shopify theme design"
  ],
  openGraph: {
    title: "Shopify Theme Customization Services | ScaleFront",
    description: "Custom Shopify theme development and modifications. Premium themes tailored to your brand.",
    type: "website",
  },
  alternates: {
    canonical: "/services/theme-development",
  },
};

export default function ThemeDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Shopify Theme Customization",
            "provider": {
              "@type": "Organization",
              "name": "ScaleFront"
            },
            "description": "Custom Shopify theme development and modifications. Premium themes tailored to your brand.",
            "offers": {
              "@type": "Offer",
              "priceRange": "$12,000+",
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
              <Palette className="h-4 w-4" />
              <span>Theme Customization</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Shopify Theme Customization
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Make your Shopify store uniquely yours. Custom themes that match your brand perfectly.
            </p>

            <p className="text-base text-muted-foreground mb-8">
              Pre-built themes are a starting point, not the finish line. Whether you need extensive modifications to an existing theme or a completely custom theme from scratch, we build Shopify themes that feel premium and perform beautifully.
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
              ✓ Trusted by brands that refuse to look like everyone else
            </p>
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* Who This Is For */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Do You Need Theme Customization?
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">You Should Get Theme Customization If:</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Your Theme Feels Generic</h4>
                  <p className="text-muted-foreground">
                    Every brand using the same theme looks similar. Custom modifications make your store distinctive and aligned with your brand identity.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">You Need Features Your Theme Doesn't Have</h4>
                  <p className="text-muted-foreground">
                    Want custom product displays, unique filtering, specialized cart functionality, or features your theme doesn't support natively?
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Your Brand Has Specific Design Requirements</h4>
                  <p className="text-muted-foreground">
                    Premium brands need premium design. Off-the-shelf themes can't always match sophisticated brand guidelines.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">You're Launching a New Store</h4>
                  <p className="text-muted-foreground">
                    Starting fresh? A custom theme ensures your store launches with exactly the features and design you need.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Your Current Theme Is Slow or Buggy</h4>
                  <p className="text-muted-foreground">
                    Legacy themes with bloated code, poor performance, or constant bugs need replacement or major refactoring.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Theme Customization vs. Headless</h3>
              <div className="space-y-4">
                <div className="bg-card rounded-lg p-4 border border-border">
                  <h4 className="font-semibold mb-2">Theme Customization</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>$12-60K investment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Faster to market</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Easier to maintain</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border">
                  <h4 className="font-semibold mb-2">Headless Commerce</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span>$50-200K investment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span>Complete creative freedom</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span>Requires technical resources</span>
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  If you need unique design but don't need complete creative control, theme customization is more cost-effective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* What We Offer */}
      <section id="pricing" className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Theme Customization Services
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            From minor tweaks to complete custom builds, we offer flexible theme services.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {[
              {
                name: "Premium Theme Customization",
                price: "$12,000-35,000",
                timeline: "4-8 weeks",
                description: "Start with a premium theme and customize extensively",
                features: [
                  "Brand-specific design modifications",
                  "Custom section development",
                  "Advanced functionality additions",
                  "Mobile optimization",
                  "Performance optimization",
                  "Custom product page layouts",
                  "Unique collection pages",
                  "Custom cart and checkout styling",
                  "Integration with your apps"
                ],
                example: "Took the Dawn theme for a skincare brand, customized color schemes, typography, product page layout, added custom ingredient sections, before/after photo galleries, and subscription options.",
                bestFor: "Brands that like a premium theme's structure but need brand-specific design and features",
                highlight: true
              },
              {
                name: "Custom Theme from Scratch",
                price: "$35,000-80,000",
                timeline: "10-14 weeks",
                description: "Build a completely custom theme for your brand",
                features: [
                  "Custom design system",
                  "Bespoke component library",
                  "Unique page layouts",
                  "Advanced functionality",
                  "Performance-optimized code",
                  "Mobile-first responsive design",
                  "Theme settings for easy management",
                  "Complete theme documentation"
                ],
                example: "Built a custom theme for a luxury jewelry brand with custom 360° product viewers, appointment booking integration, virtual try-on for rings, and editorial lookbook sections.",
                bestFor: "Brands with unique requirements that existing themes can't accommodate, even with modifications"
              },
              {
                name: "Theme Rebuild/Migration",
                price: "$15,000-45,000",
                timeline: "6-10 weeks",
                description: "Migrate from an old theme while preserving customizations",
                features: [
                  "Audit current theme and features",
                  "Select or build new theme foundation",
                  "Migrate all custom features",
                  "Improve performance and code quality",
                  "Update deprecated code",
                  "Mobile optimization",
                  "Training on new theme"
                ],
                example: "Migrated a fashion brand from a 5-year-old custom theme to a modern foundation. Preserved all custom features, improved performance (4.2s → 1.8s load time), fixed mobile issues.",
                bestFor: "Brands with outdated themes experiencing performance issues, security concerns, or compatibility problems"
              },
              {
                name: "Minor Modifications",
                price: "$3,000-8,000",
                timeline: "1-2 weeks",
                description: "Small design tweaks and functionality additions",
                features: [
                  "Small design tweaks",
                  "Add a few custom sections",
                  "Styling adjustments",
                  "Basic functionality additions",
                  "Performance optimization"
                ],
                example: "Added custom FAQ sections, modified header design, improved mobile menu, and optimized images for a home goods store.",
                bestFor: "Brands needing quick improvements without major rebuilds"
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
                <p className="text-sm font-medium mb-6 text-muted-foreground">{tier.description}</p>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-secondary/40 rounded-lg p-4 mb-4">
                  <p className="text-xs text-muted-foreground italic">{tier.example}</p>
                </div>
                <p className="text-xs text-muted-foreground">
                  <strong>Best For:</strong> {tier.bestFor}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-xl border border-border p-6">
            <h4 className="font-semibold mb-4">Ongoing Maintenance: $500-2,000/month</h4>
            <div className="grid md:grid-cols-4 gap-4">
              {["Bug fixes", "Minor updates", "Shopify compatibility", "Performance monitoring"].map((item) => (
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

      {/* What We Can Customize */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            What We Can Customize
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Brush,
                title: "Design & Branding",
                items: [
                  "Custom color schemes and typography",
                  "Brand-specific layouts",
                  "Custom animations and interactions",
                  "Unique visual elements",
                  "Icon design and implementation"
                ]
              },
              {
                icon: Package,
                title: "Product Pages",
                items: [
                  "Custom product layouts",
                  "Size guides and fit finders",
                  "360° product viewers",
                  "Video integration",
                  "Before/after galleries"
                ]
              },
              {
                icon: Layout,
                title: "Collection Pages",
                items: [
                  "Advanced filtering and sorting",
                  "Custom grid layouts",
                  "Quick view functionality",
                  "Infinite scroll or pagination",
                  "Category-specific layouts"
                ]
              },
              {
                icon: Sparkles,
                title: "Homepage",
                items: [
                  "Hero sections with video/animation",
                  "Featured collections",
                  "Social proof sections",
                  "Editorial content blocks",
                  "Custom sliders and carousels"
                ]
              },
              {
                icon: Zap,
                title: "Cart & Checkout",
                items: [
                  "Cart drawer customization",
                  "Cart upsells and recommendations",
                  "Progress indicators",
                  "Trust badges",
                  "Custom checkout fields (Plus only)"
                ]
              },
              {
                icon: Code2,
                title: "Technical Enhancements",
                items: [
                  "Performance optimization",
                  "SEO improvements",
                  "Accessibility (WCAG 2.1)",
                  "Third-party integrations",
                  "Custom Liquid logic"
                ]
              }
            ].map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.title} className="bg-card rounded-xl border border-border p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
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

      {/* Process */}
      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            How We Customize Your Theme
          </h2>

          <div className="space-y-12">
            {[
              {
                phase: "Phase 1: Discovery & Planning",
                duration: "1 week",
                items: [
                  "Understand brand identity and goals",
                  "Audit current theme (if applicable)",
                  "Define customization requirements",
                  "Review inspiration and competitors",
                  "Select theme foundation (if applicable)",
                  "Create detailed specification"
                ],
                deliverable: "Project specification and timeline"
              },
              {
                phase: "Phase 2: Design",
                duration: "2-3 weeks",
                items: [
                  "Design mockups for key pages",
                  "Define design system (colors, typography, spacing)",
                  "Create interactive prototype",
                  "Revision rounds with your feedback",
                  "Finalize design assets"
                ],
                deliverable: "Complete designs and prototype"
              },
              {
                phase: "Phase 3: Development",
                duration: "4-8 weeks",
                items: [
                  "Set up theme development environment",
                  "Build custom sections and components",
                  "Implement design system",
                  "Develop custom functionality",
                  "Mobile optimization",
                  "Performance optimization",
                  "Cross-browser testing"
                ],
                deliverable: "Fully functional customized theme"
              },
              {
                phase: "Phase 4: Content & Testing",
                duration: "1-2 weeks",
                items: [
                  "Content migration (if applicable)",
                  "Comprehensive testing",
                  "Mobile device testing",
                  "Performance testing",
                  "Accessibility audit",
                  "User acceptance testing"
                ],
                deliverable: "Tested, production-ready theme"
              },
              {
                phase: "Phase 5: Launch & Support",
                duration: "1 week",
                items: [
                  "Pre-launch checklist",
                  "DNS and deployment",
                  "Post-launch monitoring",
                  "Team training",
                  "30 days support"
                ],
                deliverable: "Live theme with documentation and training"
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
              Real Results: Skincare Brand Theme Customization
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              A premium skincare brand was using a standard theme that didn't communicate their luxury positioning.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">The Challenge</h3>
                <ul className="space-y-2">
                  {[
                    "Generic theme didn't match premium brand",
                    "Product pages lacked ingredient education",
                    "No before/after photo showcase",
                    "Mobile experience felt cheap",
                    "Site speed: 5.2 seconds"
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
                <p className="text-muted-foreground mb-3">Customized the Impulse theme with:</p>
                <ul className="space-y-2">
                  {[
                    "Custom typography and color palette",
                    "Ingredient spotlight sections",
                    "Before/after photo galleries",
                    "Customer routine builder",
                    "Optimized images and code",
                    "Refined mobile experience"
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
                { metric: "Conversion", value: "+63%", detail: "1.9% → 3.1%" },
                { metric: "AOV", value: "+18%", detail: "Higher order value" },
                { metric: "Time on Site", value: "+52%", detail: "Better engagement" },
                { metric: "Page Load", value: "1.9s", detail: "From 5.2s" },
                { metric: "Mobile Conv.", value: "+71%", detail: "Mobile improvement" },
                { metric: "Investment", value: "$28K", detail: "Full customization" }
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
                ROI: $28K investment → $42K additional monthly revenue
              </p>
              <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground">
                "Finally looks like a luxury brand. The custom theme transformed how customers perceive our products."
              </blockquote>
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
                q: "How long does theme customization take?",
                a: "Minor modifications: 1-2 weeks. Premium customization: 4-8 weeks. Custom theme: 10-14 weeks. Timeline depends on complexity."
              },
              {
                q: "Can you customize any theme?",
                a: "Yes, though some themes are easier to work with than others. We'll advise if your current theme is suitable for customization or if a new foundation would be better."
              },
              {
                q: "Will my customizations break when the theme updates?",
                a: "We code customizations properly so theme updates don't break them. We provide documentation for future developers and can handle updates for you."
              },
              {
                q: "Can you make my theme look like [competitor]?",
                a: "We can create similar layouts and features, but we don't copy designs. We'll create something unique that achieves the same goals while respecting your brand identity."
              },
              {
                q: "What if I want changes after launch?",
                a: "We include 30 days post-launch support for bug fixes. After that, changes can be handled on hourly basis ($150/hr) or monthly retainer."
              },
              {
                q: "Can my team edit the customized theme?",
                a: "Yes. We use Shopify's section system so your team can manage content without code. We provide training and comprehensive documentation."
              },
              {
                q: "Will customizations slow down my site?",
                a: "Not if done correctly. We optimize all code and actually often improve performance during customization by removing bloat and optimizing assets."
              },
              {
                q: "Do you work with theme builders like Shogun or PageFly?",
                a: "We prefer native Shopify themes for performance and maintainability, but can work with page builders if needed for specific sections."
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
            Ready to Customize Your Theme?
          </h2>
          <p className="text-lg opacity-90">
            Let's discuss your brand vision and how we can bring it to life with a custom Shopify theme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact-us">
                Schedule Theme Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
              <Link href="/pricing">View All Services</Link>
            </Button>
          </div>
          <p className="text-sm opacity-75">
            ✓ 30-minute consultation • ✓ Cost estimates • ✓ No obligation
          </p>
        </div>
      </section>
    </div>
  );
}
