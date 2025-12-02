import Header from "@/components/header-footer/Header";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Smartphone, Tablet, Monitor, Clock, Zap, Users, Bell, ShoppingCart, Heart } from "lucide-react";
import DottedSeparator from "@/components/seperators/DottedSeperator";

export const metadata: Metadata = {
  title: "Shopify Mobile App Development Services | iOS & Android | ScaleFront",
  description:
    "Native iOS and Android mobile apps for your Shopify store. Enhanced shopping experience, push notifications, offline access. Starting $40K.",
  keywords: [
    "Shopify mobile app development",
    "Shopify iOS app",
    "Shopify Android app",
    "mobile app for Shopify",
    "native mobile app development",
    "e-commerce mobile app"
  ],
  openGraph: {
    title: "Shopify Mobile App Development Services | iOS & Android | ScaleFront",
    description: "Native iOS and Android mobile apps for your Shopify store. Enhanced shopping experience, push notifications, offline access.",
    type: "website",
  },
  alternates: {
    canonical: "/services/mobile-apps",
  },
};

export default function MobileAppsPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Mobile App Development for Shopify",
            "provider": {
              "@type": "Organization",
              "name": "ScaleFront"
            },
            "description": "Native iOS and Android mobile apps for your Shopify store. Enhanced shopping experience, push notifications, offline access.",
            "offers": {
              "@type": "Offer",
              "priceRange": "$40,000+",
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
              <Smartphone className="h-4 w-4" />
              <span>Mobile Apps</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Mobile Apps for Shopify Stores
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Build native iOS and Android apps for your Shopify store.
            </p>

            <p className="text-base text-muted-foreground mb-8">
              70%+ of e-commerce traffic is mobile, but mobile web conversion rates lag desktop. A native app provides the premium mobile experience your customers expect. Push notifications, faster performance, offline browsing, and app-like UX that drives engagement and sales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button size="lg" asChild className="bg-[#60DB36] hover:bg-[#50CB26]">
                <Link href="/contact-us">
                  Schedule a Mobile App Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#pricing">View Pricing</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              ✓ Trusted by brands serious about mobile commerce
            </p>
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* When Mobile Apps Make Sense */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            When Mobile Apps Make Sense
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">You Should Build a Mobile App If:</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">High Mobile Traffic</h4>
                  <p className="text-muted-foreground">
                    If 70%+ of your traffic is mobile and you process 500+ orders monthly, an app can significantly improve mobile conversion.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Repeat Purchase Business</h4>
                  <p className="text-muted-foreground">
                    Subscription boxes, consumables, beauty products, supplements—businesses with repeat customers benefit most from apps.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Strong Brand Loyalty</h4>
                  <p className="text-muted-foreground">
                    Customers love your brand and would download an app. Apps work best when customers want to engage regularly.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Push Notification Value</h4>
                  <p className="text-muted-foreground">
                    You have restock alerts, personalized promotions, or time-sensitive offers where push notifications drive sales.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Premium Positioning</h4>
                  <p className="text-muted-foreground">
                    Luxury and premium brands where an app enhances brand perception and provides elevated experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Apps May Not Make Sense If:</h3>
              <ul className="space-y-3">
                {[
                  "Low repeat purchase rate (one-time purchases)",
                  "Revenue under $1M annually",
                  "Limited mobile traffic (<60%)",
                  "Customers unlikely to download app",
                  "Budget under $40K"
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
            Mobile App Development Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Standard E-Commerce App",
                price: "$40,000-70,000",
                timeline: "4-6 months",
                description: "Full-featured native app for iOS and Android",
                features: [
                  "Product browsing and search",
                  "Shopping cart & secure checkout",
                  "Customer accounts & order tracking",
                  "Wishlist functionality",
                  "Push notifications",
                  "Apple Pay & Google Pay",
                  "Analytics integration",
                  "Custom UI matching brand",
                  "Mobile-first UX",
                  "Native performance"
                ],
                bestFor: "Mid-market brands ($1-10M revenue)"
              },
              {
                name: "Premium E-Commerce App",
                price: "$70,000-120,000",
                timeline: "6-8 months",
                description: "Everything in Standard, plus advanced features",
                features: [
                  "All Standard features",
                  "AR product visualization",
                  "Barcode scanning",
                  "Loyalty program integration",
                  "Subscription management",
                  "Social features & reviews",
                  "Advanced personalization",
                  "Offline browsing",
                  "Apple Watch integration",
                  "In-app customer service"
                ],
                bestFor: "Premium brands ($10-50M revenue)",
                highlight: true
              },
              {
                name: "Enterprise Mobile App",
                price: "$120,000-250,000+",
                timeline: "8-12 months",
                description: "Complete mobile commerce platform",
                features: [
                  "All Premium features",
                  "Multi-store/multi-brand support",
                  "B2B and B2C in one app",
                  "Advanced inventory management",
                  "Custom integrations (ERP, CRM)",
                  "White-label capabilities",
                  "Advanced analytics",
                  "A/B testing infrastructure",
                  "Multi-market localization",
                  "Dedicated project team"
                ],
                bestFor: "Enterprise brands ($50M+ revenue)"
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
                <p className="text-xs text-muted-foreground italic">Best For: {tier.bestFor}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-card rounded-xl border border-border p-8">
            <h3 className="text-xl font-bold mb-6">App Maintenance & Updates</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-primary">$3,000-8,000/month</h4>
                <p className="text-muted-foreground mb-4">Ongoing maintenance after launch to keep your app running smoothly.</p>
                <ul className="space-y-2">
                  {[
                    "Bug fixes and updates",
                    "OS updates (iOS/Android)",
                    "Feature enhancements",
                    "Performance optimization",
                    "Security updates",
                    "App Store management"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-secondary/20 rounded-lg p-6">
                <h4 className="font-semibold mb-4">App Store Costs (Separate)</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Apple Developer</span>
                    <span className="font-semibold">$99/year</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Google Play</span>
                    <span className="font-semibold">$25 one-time</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">No additional transaction fees from app stores</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* Native vs Hybrid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Why We Build Native Apps
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border-2 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Native Apps (Our Approach)</h3>
              </div>
              <p className="text-muted-foreground mb-6">Built specifically for iOS (Swift) and Android (Kotlin)</p>
              <ul className="space-y-3">
                {[
                  "Best performance and speed",
                  "Full access to device features",
                  "Superior user experience",
                  "Better offline capabilities",
                  "More expensive initially but worth it"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary/20 rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Tablet className="h-6 w-6 text-muted-foreground" />
                <h3 className="text-xl font-bold">Hybrid Apps (Flutter/React Native)</h3>
              </div>
              <p className="text-muted-foreground mb-6">Single codebase for both platforms</p>
              <ul className="space-y-3">
                {[
                  "Good performance (but not native-level)",
                  "Some device feature limitations",
                  "Lower initial cost ($30-50K)",
                  "Faster development time",
                  "Compromises on UX quality"
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
          </div>

          <div className="mt-8 bg-card rounded-xl border border-border p-6">
            <p className="text-lg font-semibold text-foreground mb-2">Our Recommendation</p>
            <p className="text-muted-foreground">
              For e-commerce, native apps provide the premium experience that converts. The investment difference is worth it for serious brands building long-term mobile presence.
            </p>
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* Development Process */}
      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            How We Build Your Mobile App
          </h2>

          <div className="space-y-12">
            {[
              {
                phase: "Phase 1: Discovery & Planning",
                duration: "3-4 weeks",
                items: [
                  "Define app features and functionality",
                  "Understand target audience and user needs",
                  "Review Shopify store integration requirements",
                  "Define success metrics and KPIs",
                  "Competitive analysis of similar apps",
                  "System architecture design and API planning"
                ],
                deliverable: "Technical specification, project timeline, cost estimate"
              },
              {
                phase: "Phase 2: UX/UI Design",
                duration: "4-6 weeks",
                items: [
                  "User flow mapping and wireframes",
                  "Interaction design and onboarding flow",
                  "Brand-aligned visual design",
                  "Mobile design system creation",
                  "Icon and animation design",
                  "Interactive prototype creation"
                ],
                deliverable: "Complete designs, interactive prototype for testing"
              },
              {
                phase: "Phase 3: Development",
                duration: "12-20 weeks",
                items: [
                  "Native Swift development for iOS",
                  "Native Kotlin development for Android",
                  "Shopify API integration",
                  "Apple Pay & Google Pay integration",
                  "Push notification infrastructure",
                  "Analytics and crash reporting setup"
                ],
                deliverable: "Fully functional mobile apps for iOS and Android"
              },
              {
                phase: "Phase 4: Testing",
                duration: "4-6 weeks",
                items: [
                  "Functionality testing across all features",
                  "Device testing on 20+ devices",
                  "Performance and load testing",
                  "Security testing and audit",
                  "User acceptance testing with beta users"
                ],
                deliverable: "Tested, production-ready apps"
              },
              {
                phase: "Phase 5: Launch",
                duration: "2-3 weeks",
                items: [
                  "App Store optimization (ASO)",
                  "Screenshots, videos, and store listings",
                  "App Store and Google Play submission",
                  "Launch coordination and monitoring",
                  "Post-launch quick fixes and optimization"
                ],
                deliverable: "Live apps on App Store and Google Play"
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

      {/* Key Features */}
      <section id="pricing" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            What Makes Great Shopping Apps
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Fast Performance",
                description: "Native apps load instantly. Product pages in <0.5s, smooth scrolling, no lag."
              },
              {
                icon: Bell,
                title: "Push Notifications",
                description: "Abandoned cart reminders, back-in-stock alerts, personalized promotions, order updates."
              },
              {
                icon: ShoppingCart,
                title: "Seamless Checkout",
                description: "One-tap checkout with saved payment info, Apple Pay/Google Pay, biometric authentication."
              },
              {
                icon: Monitor,
                title: "Offline Browsing",
                description: "Browse products without connection, cache product data, sync when online."
              },
              {
                icon: Users,
                title: "Personalization",
                description: "Product recommendations, personalized home feed, recent views based on behavior."
              },
              {
                icon: Heart,
                title: "Social Proof",
                description: "Reviews, ratings, customer photos, social sharing, influencer content integration."
              }
            ].map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="bg-card rounded-xl border border-border p-6">
                  <div className="rounded-lg bg-primary/10 p-3 w-fit mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* Case Study */}
      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Real Results: Beauty Brand Mobile App
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              A subscription beauty brand with 60K customers launched a mobile app to improve mobile conversion and retention.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">Key App Features</h3>
                <ul className="space-y-2">
                  {[
                    "Easy subscription management",
                    "Personalized product recommendations",
                    "AR makeup try-on",
                    "Push notifications for shipments",
                    "Loyalty points in-app",
                    "One-tap reordering"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Results After 6 Months</h3>
                <ul className="space-y-2">
                  {[
                    "12,000 app downloads (20% of customer base)",
                    "App conversion: 8.2% vs. 2.1% mobile web (+290%)",
                    "App AOV: $78 vs. $52 mobile web (+50%)",
                    "App repeat purchase: 45% higher",
                    "Push notification open rate: 42%",
                    "28% of revenue from app users"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="rounded-full bg-primary p-1 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <p className="text-lg text-foreground font-medium mb-2">
                ROI: $85K investment → $45K additional monthly revenue from app
              </p>
              <p className="text-muted-foreground">
                Despite only 12% of customers downloading the app, they generated 28% of total revenue due to significantly higher conversion rates and order values.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DottedSeparator />

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "How long does app development take?",
                a: "Standard apps: 4-6 months. Premium apps: 6-8 months. Enterprise: 8-12 months. Timeline depends on complexity and feature scope."
              },
              {
                q: "Why is mobile app development so expensive?",
                a: "Native app development requires building separately for iOS and Android. Design, development, testing, and App Store management all require specialized expertise. Quality e-commerce apps are complex products."
              },
              {
                q: "Can we launch with just iOS first?",
                a: "Yes. Many clients launch iOS first (typically generates 60% of revenue), then Android 3-6 months later. This reduces initial cost and allows you to iterate based on user feedback."
              },
              {
                q: "What about React Native or Flutter?",
                a: "We can build hybrid apps for $30-50K, but native apps provide better performance and UX for e-commerce. For serious brands, the investment in native is worth it."
              },
              {
                q: "Do we need to pay Apple and Google?",
                a: "Yes. Apple charges $99/year for Developer account. Google charges $25 one-time fee. No transaction fees or revenue sharing required."
              },
              {
                q: "What happens after launch?",
                a: "Apps require ongoing maintenance for OS updates, bug fixes, and features. Most clients opt for monthly retainers ($3K-8K/month) to keep apps updated and add features."
              },
              {
                q: "How do we market the app?",
                a: "We provide in-store prompts, email campaigns, and App Store optimization strategies. Marketing plan is included in launch phase."
              },
              {
                q: "Can the app work without internet?",
                a: "Yes. We can enable offline product browsing with cached data. Checkout and account features require internet connection."
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
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-lg opacity-90">
            Let's discuss your mobile strategy and design the right app for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact-us">
                Schedule App Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
              <Link href="/pricing">View All Services</Link>
            </Button>
          </div>
          <p className="text-sm opacity-75">
            ✓ 60-minute consultation • ✓ Timeline and cost estimates • ✓ No obligation
          </p>
        </div>
      </section>
    </div>
  );
}
