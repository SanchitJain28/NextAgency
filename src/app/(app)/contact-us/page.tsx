import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/header-footer/Header";
import { MovingReviews } from "@/components/reviews/MovingReviews";
import Footer from "@/components/header-footer/Footer";
import { Metadata } from "next";
import { Mail, Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact ScaleFront - Get Your Free Shopify Consultation",
  description: "Ready to transform your Shopify store? Contact ScaleFront for expert development, custom apps, and optimization services. Free consultation available.",
  keywords: [
    "contact Shopify developers",
    "Shopify development consultation",
    "custom Shopify apps contact",
    "Shopify expert contact",
    "Shopify agency contact",
  ],
  openGraph: {
    title: "Contact ScaleFront - Expert Shopify Development",
    description: "Get your Shopify store optimized by expert developers. Contact us for custom apps, headless commerce, and performance optimization.",
    type: "website",
  },
  alternates: {
    canonical: "/contact-us",
  },
};

const PHONE_E164 = "919650296375";
const DISPLAY_PHONE = "+91-965-029-6375";
const TEL_INTERNATIONAL = "+919650296375";
const EMAIL = "hello@scalefront.io";

function WhatsAppButtons() {
  const waBase = `https://wa.me/${PHONE_E164}`;
  const waPrefilled = `${waBase}?text=${encodeURIComponent(
    "Hi! I'm interested in your Shopify development services. I'd like to discuss my project."
  )}`;

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <Button asChild className="bg-primary hover:bg-primary/90">
        <a
          href={waPrefilled}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact ScaleFront on WhatsApp"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Chat on WhatsApp
        </a>
      </Button>

      <Button asChild variant="outline">
        <a
          href={`mailto:${EMAIL}`}
          aria-label="Email ScaleFront"
        >
          <Mail className="mr-2 h-4 w-4" />
          Send Email
        </a>
      </Button>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "ScaleFront",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+919650296375",
                  "contactType": "customer service",
                  "availableLanguage": ["English", "Hindi"],
                  "description": "Expert Shopify development consultation and support"
                }
              ],
              "email": "hello@scalefront.io",
              "url": "https://scalefront.io/contact-us",
            }
          })
        }}
      />

      <Header />

      <article className="mx-auto w-full max-w-4xl px-6 py-16 md:py-24">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to take your Shopify store to the next level? Let's discuss how we can help you achieve your eCommerce goals.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Let's Start a Conversation
              </h2>
              <p className="text-muted-foreground mb-6">
                Whether you need a custom Shopify app, want to optimize your store's performance, or are considering a headless commerce solution, we're here to help.
              </p>
              <WhatsAppButtons />
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-primary hover:underline"
                  >
                    {EMAIL}
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    For detailed project inquiries
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a
                    href={`tel:${TEL_INTERNATIONAL}`}
                    className="text-primary hover:underline"
                  >
                    {DISPLAY_PHONE}
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Mon-Fri, 9am-6pm IST
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                  <a
                    href={`https://wa.me/${PHONE_E164}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {DISPLAY_PHONE}
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Fastest response time
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div className="bg-secondary/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              What to Expect
            </h2>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <h3 className="font-semibold">Initial Consultation</h3>
                </div>
                <p className="text-sm text-muted-foreground ml-10">
                  We'll discuss your project requirements, goals, and timeline.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <h3 className="font-semibold">Proposal & Quote</h3>
                </div>
                <p className="text-sm text-muted-foreground ml-10">
                  Receive a detailed proposal with scope, timeline, and pricing.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <h3 className="font-semibold">Project Kickoff</h3>
                </div>
                <p className="text-sm text-muted-foreground ml-10">
                  Once approved, we'll begin development with regular updates.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    4
                  </div>
                  <h3 className="font-semibold">Ongoing Support</h3>
                </div>
                <p className="text-sm text-muted-foreground ml-10">
                  Post-launch support and maintenance to ensure success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            How We Can Help
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Custom Development",
                description: "Tailored Shopify apps and features built specifically for your business needs."
              },
              {
                title: "Performance Optimization",
                description: "Speed up your store and improve Core Web Vitals for better SEO and conversions."
              },
              {
                title: "Headless Commerce",
                description: "Modern, decoupled storefronts with Next.js for ultimate performance."
              },
              {
                title: "Theme Customization",
                description: "Beautiful, responsive themes that perfectly match your brand identity."
              },
              {
                title: "Shopify Plus Migration",
                description: "Seamless migration to Shopify Plus with zero downtime."
              },
              {
                title: "Expert Consulting",
                description: "Strategic guidance to maximize your Shopify store's potential."
              }
            ].map((service) => (
              <div key={service.title} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-secondary/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Common Questions
          </h2>

          <div className="space-y-4">
            <details className="bg-card border border-border rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">
                What's your response time?
              </summary>
              <p className="mt-3 text-muted-foreground">
                We typically respond to WhatsApp messages within 30 minutes during business hours (Mon-Fri, 9am-6pm IST). Email inquiries are answered within 24 hours.
              </p>
            </details>

            <details className="bg-card border border-border rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">
                Do you offer free consultations?
              </summary>
              <p className="mt-3 text-muted-foreground">
                Yes! We offer a complimentary 30-minute consultation to discuss your project requirements and provide initial recommendations.
              </p>
            </details>

            <details className="bg-card border border-border rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">
                What information should I provide?
              </summary>
              <p className="mt-3 text-muted-foreground">
                Include your store URL, a brief description of what you need help with, your timeline, and any specific features or requirements. This helps us provide a more accurate initial assessment.
              </p>
            </details>
          </div>
        </section>
      </article>

      <div className="pb-12">
        <MovingReviews />
      </div>

      <Footer />
    </main>
  );
}
