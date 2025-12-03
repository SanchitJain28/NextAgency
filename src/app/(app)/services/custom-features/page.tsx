import { Header } from "@/components/header-footer/Header";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, Wrench, Calculator, Calendar,
  Users, ShoppingBag, Sparkles, Gift, Layers, Video
} from "lucide-react";
import DottedSeparator from "@/components/seperators/DottedSeperator";

export const metadata: Metadata = {
  title: "Custom Shopify Features Development | ScaleFront",
  description:
    "Add unique functionality to your Shopify store. Product configurators, calculators, quizzes, custom tools. Starting $10K.",
  keywords: [
    "custom Shopify features",
    "Shopify custom functionality",
    "Shopify feature development",
    "product configurators",
    "Shopify customization",
    "custom Shopify development"
  ],
  openGraph: {
    title: "Custom Shopify Features Development | ScaleFront",
    description: "Add unique functionality to your Shopify store. Product configurators, calculators, quizzes, custom tools.",
  },
  alternates: {
    canonical: "/services/custom-features",
  },
};

export default function CustomFeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Schema.org markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Custom Shopify Features Development",
            "description": "Build unique functionality that sets your store apart with custom features and tools",
            "provider": {
              "@type": "Organization",
              "name": "ScaleFront"
            },
            "offers": {
              "@type": "Offer",
              "priceRange": "$8,000-80,000",
              "priceCurrency": "USD"
            }
          })
        }}
      />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
              <Wrench className="h-4 w-4" />
              <span>Custom Feature Development</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Custom Features for Shopify
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Build unique functionality that sets your store apart.
            </p>

            <p className="text-base text-muted-foreground mb-8">
              Shopify provides core e-commerce features, but your business might need something special—product configurators, custom calculators, interactive quizzes, or unique tools your competitors don't have. We build custom features that become your competitive advantage.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-[#60DB36] hover:bg-[#50CB26]">
                <Link href="/contact-us">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact-us">
                  View Feature Examples
                </Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Trusted by brands that refuse to be limited by standard functionality
            </p>
          </div>
        </div>
      </section>

      <DottedSeparator />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Custom Features We Build
          </h2>

          <div className="space-y-12">
            {[
              {
                icon: Layers,
                title: "Product Configurators",
                subtitle: "Let Customers Design Their Product",
                description: "Build-to-order functionality where customers customize products in real-time with pricing updates.",
                examples: [
                  "Furniture (fabric, wood, dimensions, finishing)",
                  "Jewelry (metal, stones, engraving)",
                  "Apparel (custom text, colors, designs)",
                  "Gift boxes (select items, add message)",
                  "Tech products (specs, accessories, cases)"
                ],
                features: [
                  "Visual preview as customers customize",
                  "Real-time pricing calculations",
                  "Configuration validation",
                  "Save/share configurations",
                  "Integration with production systems"
                ],
                investment: "$15,000-50,000",
                timeline: "8-14 weeks",
                example: "Built a furniture configurator showing 3D preview with fabric/wood choices. Increased AOV 34% and reduced returns 28%."
              },
              {
                icon: Sparkles,
                title: "Interactive Quizzes & Finders",
                subtitle: "Guide Customers to Right Products",
                description: "Help customers find products through interactive questions.",
                examples: [
                  "Skincare routine finder",
                  "Style quiz for fashion",
                  "Product recommendation quiz",
                  "Size/fit finder",
                  "Gift finder",
                  "Need assessment tool"
                ],
                features: [
                  "Branching logic based on answers",
                  "Product recommendations at end",
                  "Email capture during quiz",
                  "Results sharing",
                  "Analytics on quiz performance"
                ],
                investment: "$10,000-30,000",
                timeline: "6-10 weeks",
                example: "Built a skincare quiz that reduced product returns 41% and increased conversion 23% by matching customers better."
              },
              {
                icon: Calculator,
                title: "Calculators & Tools",
                subtitle: "Help Customers Make Informed Decisions",
                description: "Custom calculators that assist purchase decisions.",
                examples: [
                  "ROI/savings calculators",
                  "Size/quantity calculators",
                  "Cost comparison tools",
                  "Coverage calculators (paint, flooring, etc.)",
                  "Compatibility checkers",
                  "Custom pricing calculators"
                ],
                features: [
                  "Custom algorithms",
                  "Results visualization",
                  "PDF report generation",
                  "Email results",
                  "CRM integration"
                ],
                investment: "$8,000-25,000",
                timeline: "4-8 weeks",
                example: "Built an ROI calculator for B2B SaaS showing 5-year savings. Increased B2B conversion 67%."
              },
              {
                icon: ShoppingBag,
                title: "Subscription Features",
                subtitle: "Beyond Standard Subscription Apps",
                description: "Custom subscription logic that Recharge/Bold can't handle.",
                examples: [
                  "Build-your-box subscriptions",
                  "Tiered subscription levels",
                  "Credits-based subscriptions",
                  "Usage-based billing",
                  "Custom renewal logic",
                  "Subscription swaps/modifications"
                ],
                investment: "$18,000-45,000",
                timeline: "8-12 weeks",
                example: "Built a coffee subscription with custom blending, delivery calendar control, and rollover credits."
              },
              {
                icon: Calendar,
                title: "Booking & Scheduling",
                subtitle: "Appointment or Rental Booking",
                description: "Integrated booking systems for services or rentals.",
                examples: [
                  "Appointment scheduling",
                  "Equipment rentals",
                  "Class/event bookings",
                  "Consultation scheduling",
                  "Rental calendar management",
                  "Resource allocation"
                ],
                features: [
                  "Real-time availability",
                  "Calendar integration",
                  "Automated reminders",
                  "Deposit handling",
                  "Cancellation management"
                ],
                investment: "$15,000-40,000",
                timeline: "8-12 weeks",
                example: "Built a jewelry appointment system integrating with store calendar and sending automated reminders."
              },
              {
                icon: Gift,
                title: "Membership & Loyalty",
                subtitle: "Custom Loyalty Programs",
                description: "Beyond standard loyalty apps when you need unique rules.",
                examples: [
                  "Point systems with custom rules",
                  "Tiered memberships",
                  "Exclusive product access",
                  "Member pricing",
                  "Referral systems",
                  "Custom rewards logic"
                ],
                investment: "$12,000-35,000",
                timeline: "6-10 weeks",
                example: "Built a tiered membership with exclusive product drops and early access increasing repeat purchase rate 48%."
              },
              {
                icon: Users,
                title: "B2B Portals",
                subtitle: "Custom B2B Functionality",
                description: "Beyond Shopify Plus native B2B when you need more.",
                examples: [
                  "Custom pricing by customer",
                  "Quote requests",
                  "Approval workflows",
                  "Net terms management",
                  "Bulk ordering",
                  "Custom catalogs by customer",
                  "Purchase order tracking"
                ],
                investment: "$20,000-55,000",
                timeline: "10-14 weeks",
                example: "Built a B2B portal with custom pricing matrices for 150+ wholesale customers."
              },
              {
                icon: Video,
                title: "AR/VR Features",
                subtitle: "Augmented Reality Product Visualization",
                description: "Let customers visualize products in their space or on themselves.",
                examples: [
                  "AR product placement (furniture, decor)",
                  "Virtual try-on (glasses, jewelry, makeup)",
                  "360° product viewers",
                  "Product visualization tools"
                ],
                investment: "$20,000-60,000",
                timeline: "10-16 weeks",
                example: "Built AR furniture placement tool reducing returns 31% and increasing conversion 19%."
              }
            ].map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="bg-card rounded-xl border border-border p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="inline-flex rounded-lg bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{feature.title}</h3>
                      <p className="text-lg font-medium text-primary mb-3">{feature.subtitle}</p>
                      <p className="text-muted-foreground mb-4">{feature.description}</p>
                    </div>
                  </div>

                  {feature.examples && (
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-foreground mb-2">Common Use Cases:</p>
                      <div className="flex flex-wrap gap-2">
                        {feature.examples.map((example) => (
                          <span
                            key={example}
                            className="px-3 py-1 bg-secondary text-foreground text-xs rounded-md"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {feature.features && (
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-foreground mb-2">Key Features:</p>
                      <div className="grid md:grid-cols-2 gap-2">
                        {feature.features.map((feat) => (
                          <div key={feat} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-border">
                    <div>
                      <p className="text-xs text-muted-foreground">Investment</p>
                      <p className="text-lg font-semibold text-foreground">{feature.investment}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Timeline</p>
                      <p className="text-lg font-semibold text-foreground">{feature.timeline}</p>
                    </div>
                  </div>

                  {feature.example && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground italic">{feature.example}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <DottedSeparator />

      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Our Development Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understand your requirements and business goals",
                tasks: [
                  "Feature requirements analysis",
                  "Define user flows",
                  "Technical feasibility assessment",
                  "Create detailed specification"
                ]
              },
              {
                step: "02",
                title: "Design",
                description: "Design the feature architecture and user experience",
                tasks: [
                  "UI/UX design",
                  "User flow mapping",
                  "Interactive prototype",
                  "Design revisions"
                ]
              },
              {
                step: "03",
                title: "Development",
                description: "Build and test the custom feature",
                tasks: [
                  "Backend logic development",
                  "Frontend implementation",
                  "Shopify integration",
                  "Testing and QA"
                ]
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "Deploy and provide ongoing support",
                tasks: [
                  "Deployment",
                  "User testing",
                  "Team training",
                  "Documentation",
                  "Post-launch support"
                ]
              }
            ].map((phase) => (
              <div key={phase.step} className="bg-card rounded-xl border border-border p-6">
                <div className="text-4xl font-bold text-primary/20 mb-4">{phase.step}</div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{phase.description}</p>
                <ul className="space-y-1">
                  {phase.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3 w-3 text-primary flex-shrink-0 mt-1" />
                      <span className="text-xs text-muted-foreground">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DottedSeparator />

      <section className="py-20" id="pricing">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Custom Feature Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pricing depends on complexity and scope
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Simple Features",
                price: "$8,000-18,000",
                timeline: "4-8 weeks",
                features: [
                  "Calculators",
                  "Simple quizzes",
                  "Basic tools",
                  "Standard integrations",
                  "30 days support"
                ]
              },
              {
                name: "Medium Complexity",
                price: "$18,000-40,000",
                timeline: "8-12 weeks",
                highlight: true,
                features: [
                  "Product configurators",
                  "Booking systems",
                  "Advanced quizzes",
                  "Custom workflows",
                  "60 days support"
                ]
              },
              {
                name: "Complex Features",
                price: "$40,000-80,000",
                timeline: "12-18 weeks",
                features: [
                  "AR/VR features",
                  "Advanced B2B portals",
                  "Complex subscription systems",
                  "Enterprise integrations",
                  "90 days support"
                ]
              }
            ].map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl border p-8 ${
                  tier.highlight
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card"
                }`}
              >
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <p className="text-3xl font-bold text-primary mb-1">{tier.price}</p>
                  <p className="text-sm text-muted-foreground">{tier.timeline}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-[#60DB36] hover:bg-[#50CB26]" asChild>
                  <Link href="/contact-us">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DottedSeparator />

      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Real Results: Custom Jewelry Configurator
          </h2>

          <div className="bg-card rounded-xl border border-border p-8 md:p-12">
            <div className="max-w-4xl">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                <p className="text-muted-foreground">
                  A jewelry brand wanted customers to design custom rings with real-time pricing and 3D preview.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">The Solution</h3>
                <p className="text-muted-foreground mb-4">Built a custom configurator with:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Metal selection (gold, platinum, silver)",
                    "Stone selection (type, size, quality)",
                    "Band style options",
                    "Engraving",
                    "Real-time 3D rendering",
                    "Live pricing updates"
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">The Results</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { label: "Average Order Value", value: "$850 → $1,240", change: "+46%" },
                    { label: "Conversion Rate", value: "8.7%", note: "(vs. 2.1% regular products)" },
                    { label: "Revenue from Configured Products", value: "34%", note: "" },
                    { label: "Returns Reduced", value: "42%", note: "(better expectations)" }
                  ].map((result) => (
                    <div key={result.label} className="bg-secondary/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">{result.label}</p>
                      <p className="text-2xl font-bold text-primary">{result.value}</p>
                      {result.change && <p className="text-sm text-muted-foreground">{result.change}</p>}
                      {result.note && <p className="text-xs text-muted-foreground mt-1">{result.note}</p>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <p className="text-lg font-semibold text-foreground">
                  ROI: $42K investment. $85K additional monthly revenue
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DottedSeparator />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                question: "Can you build any feature?",
                answer: "If it's technically possible and makes business sense, yes. We'll advise on feasibility and alternatives during our discovery phase."
              },
              {
                question: "How long do custom features take?",
                answer: "Simple features: 4-8 weeks. Medium complexity: 8-12 weeks. Complex features: 12-18 weeks. Timeline depends on complexity and requirements."
              },
              {
                question: "Will features slow down our site?",
                answer: "Not if built correctly. We optimize for performance. Many features actually improve engagement time and conversions."
              },
              {
                question: "Can features be updated later?",
                answer: "Yes. We build with future modifications in mind. You own the code and can adjust as needed."
              },
              {
                question: "Do you maintain features after launch?",
                answer: "We include 30 days support. Extended maintenance available on retainer starting at $1,000/month."
              },
              {
                question: "What if our idea is very unique?",
                answer: "That's what we specialize in. We've built everything from custom configurators to AR experiences. Schedule a consultation to discuss your vision."
              }
            ].map((faq) => (
              <div key={faq.question} className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Build Your Custom Feature?
          </h2>
          <p className="text-lg opacity-90">
            Let's discuss your vision and how we can bring it to life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact-us">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="/contact-us">
                View Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
