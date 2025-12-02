import Footer from "@/components/header-footer/Footer";
import Header from "@/components/header-footer/Header";
import { MovingReviews } from "@/components/reviews/MovingReviews";
import { Metadata } from "next";
import { CheckCircle2, Users, Award, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "About ScaleFront - Elite Shopify Development Agency",
  description: "Learn about ScaleFront, your trusted partner for Shopify development, custom apps, headless commerce, and expert consulting services.",
  keywords: [
    "Shopify development agency",
    "Shopify experts",
    "custom Shopify apps",
    "headless Shopify",
    "Shopify Plus migration",
  ],
  openGraph: {
    title: "About ScaleFront - Elite Shopify Development Agency",
    description: "Expert Shopify developers helping brands build, optimize, and scale their online stores with cutting-edge solutions.",
    type: "website",
  },
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "ScaleFront",
              "description": "Elite Shopify development agency specializing in custom apps, headless commerce, and performance optimization",
              "specialty": [
                "Custom Shopify App Development",
                "Headless Commerce Solutions",
                "Shopify Theme Development",
                "Performance Optimization",
                "Shopify Plus Migration"
              ]
            }
          })
        }}
      />

      <Header />

      <article className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        {/* Hero Section */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About ScaleFront
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're a team of passionate Shopify developers dedicated to building exceptional eCommerce experiences that drive growth and maximize conversions.
          </p>
        </header>

        {/* Who We Are */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Who We Are
          </h2>

          <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground">
            <p>
              We are <strong className="text-foreground">ScaleFront</strong> – and our name tells our story. <em>Scale</em> represents our commitment to helping you technically scale your business, handling growth challenges with robust infrastructure and optimized performance. <em>Front</em> represents your storefront, the face of your business where customers experience your brand and make purchasing decisions.
            </p>

            <p>
              Together, ScaleFront means we're here to help your e-commerce business leap to greatness – combining technical excellence with exceptional user experiences that convert visitors into loyal customers.
            </p>

            <p>
              <strong className="text-foreground">Our focus is singular and intentional: e-commerce.</strong> We chose to specialize exclusively in e-commerce because we know e-commerce inside and out. We understand the unique challenges of online retail – from cart abandonment and conversion optimization to inventory management and payment processing. We speak your language because we've dedicated ourselves to mastering this space.
            </p>

            <p>
              We're not just developers; we're a <strong className="text-foreground">passionate team</strong> that wakes up every day looking for ways to improve e-commerce. Whether it's discovering a new optimization technique, implementing cutting-edge technology, or finding creative solutions to complex problems, we're constantly pushing boundaries and staying ahead of industry trends.
            </p>

            <p>
              When you work with us, you're not just hiring an agency – you're partnering with a team that genuinely cares about your success. We pride ourselves on two pillars: <strong className="text-foreground">Innovation + Great Service</strong>. Innovation means we bring fresh, modern solutions that give you a competitive edge. Great Service means we're responsive, reliable, and committed to your satisfaction at every step.
            </p>

            <p>
              <strong className="text-foreground">You will be fully satisfied working with us.</strong> That's not just a promise – it's our standard. We don't consider a project complete until you're thrilled with the results. From the initial consultation to post-launch support, we ensure every interaction exceeds your expectations.
            </p>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16 bg-secondary/20 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            What Sets Us Apart
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Users,
                title: "Client-Centric Approach",
                description: "Your success is our success. We work as an extension of your team, understanding your business goals and delivering solutions that drive real results."
              },
              {
                icon: Award,
                title: "Technical Excellence",
                description: "We don't just write code—we craft elegant, performant solutions using the latest technologies and best practices in Shopify development."
              },
              {
                icon: Clock,
                title: "Long-Term Partnership",
                description: "We're not just here for the launch. Our ongoing support and maintenance ensure your store continues to perform at its best."
              },
              {
                icon: CheckCircle2,
                title: "Proven Track Record",
                description: "With 100+ successful projects and 50+ happy clients, we have the experience and expertise to handle projects of any complexity."
              }
            ].map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Our Expertise */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Our Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Headless Commerce Architecture",
              "Custom Shopify App Development",
              "Theme Development & Customization",
              "Performance Optimization",
              "Shopify Plus Migration",
              "Third-Party Integrations",
              "Mobile App Development",
              "Conversion Rate Optimization",
              "Backend & API Development",
              "Store Audits & Consulting",
              "Multi-channel Selling",
              "Subscription & Membership Sites"
            ].map((expertise) => (
              <div key={expertise} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-medium">{expertise}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16 bg-primary text-primary-foreground rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Why Choose ScaleFront?
          </h2>

          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-lg">Deep Shopify Expertise</strong>
                <p className="opacity-90">We live and breathe Shopify. Our team has in-depth knowledge of the platform's capabilities and limitations.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-lg">Custom Solutions</strong>
                <p className="opacity-90">No cookie-cutter approaches. Every solution is tailored to your unique business needs and goals.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-lg">24/7 Support</strong>
                <p className="opacity-90">We're always here when you need us. Our support team ensures your store runs smoothly around the clock.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-lg">Results-Driven</strong>
                <p className="opacity-90">We measure our success by your success. Our solutions are designed to drive conversions and grow revenue.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="border-b border-border pb-6">
              <h3 className="font-semibold text-lg mb-3 text-foreground">
                What types of Shopify projects do you work on?
              </h3>
              <p className="text-muted-foreground">
                We handle everything from custom app development and theme customization to complete headless commerce builds and Shopify Plus migrations. No project is too small or too complex.
              </p>
            </div>

            <div className="border-b border-border pb-6">
              <h3 className="font-semibold text-lg mb-3 text-foreground">
                How long does a typical project take?
              </h3>
              <p className="text-muted-foreground">
                Project timelines vary based on complexity. A custom app might take 4-8 weeks, while a complete headless commerce build could take 3-4 months. We'll provide detailed timelines during our discovery phase.
              </p>
            </div>

            <div className="border-b border-border pb-6">
              <h3 className="font-semibold text-lg mb-3 text-foreground">
                Do you provide ongoing support after launch?
              </h3>
              <p className="text-muted-foreground">
                Absolutely! We offer comprehensive maintenance and support packages to ensure your store continues to perform optimally. We're your long-term partner in success.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="font-semibold text-lg mb-3 text-foreground">
                Can you help with Shopify Plus migration?
              </h3>
              <p className="text-muted-foreground">
                Yes! We specialize in seamless Shopify Plus migrations with zero downtime. We'll handle everything from data migration to post-launch optimization.
              </p>
            </div>
          </div>
        </section>
      </article>

      <div className="pb-12">
        <MovingReviews />
      </div>
      <Footer/>
    </main>
  );
}
