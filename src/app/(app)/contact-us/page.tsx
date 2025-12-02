import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/header-footer/Header";
import { MovingReviews } from "@/components/reviews/MovingReviews";
import Footer from "@/components/header-footer/Footer";
import { ContactForm } from "@/components/ContactForm";
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
      <Button asChild className="bg-[#60DB36] hover:bg-[#50CB26] text-white font-medium">
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

      <Button asChild className="bg-[#60DB36] hover:bg-[#50CB26] text-white font-medium">
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
    <main className="min-h-screen bg-white light">
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to take your Shopify store to the next level? Let's discuss how we can help you achieve your eCommerce goals.
          </p>
        </header>

        {/* Contact Form Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Send Us Your Project Details
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours with a detailed response
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-xl p-8">
                <ContactForm />
              </div>
            </div>

            {/* What to Expect Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-8 sticky top-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  What to Expect
                </h3>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#60DB36] text-white flex items-center justify-center font-bold text-sm">
                        1
                      </div>
                      <h4 className="font-semibold text-sm text-gray-900">Initial Consultation</h4>
                    </div>
                    <p className="text-xs text-gray-600 ml-10">
                      We'll discuss your project requirements, goals, and timeline.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#60DB36] text-white flex items-center justify-center font-bold text-sm">
                        2
                      </div>
                      <h4 className="font-semibold text-sm text-gray-900">Proposal & Quote</h4>
                    </div>
                    <p className="text-xs text-gray-600 ml-10">
                      Receive a detailed proposal with scope, timeline, and pricing.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#60DB36] text-white flex items-center justify-center font-bold text-sm">
                        3
                      </div>
                      <h4 className="font-semibold text-sm text-gray-900">Project Kickoff</h4>
                    </div>
                    <p className="text-xs text-gray-600 ml-10">
                      Once approved, we'll begin development with regular updates.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#60DB36] text-white flex items-center justify-center font-bold text-sm">
                        4
                      </div>
                      <h4 className="font-semibold text-sm text-gray-900">Ongoing Support</h4>
                    </div>
                    <p className="text-xs text-gray-600 ml-10">
                      Post-launch support and maintenance to ensure success.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-600 text-center">
                    <strong className="text-gray-900">Response Time:</strong><br />
                    Within 24 hours during business days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Options */}
        <div className="mb-16">
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Prefer to Chat Directly?
              </h2>
              <p className="text-gray-600">
                Get immediate assistance via WhatsApp or email
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <WhatsAppButtons />
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-[#60DB36]/10 p-2">
                  <Mail className="h-5 w-5 text-[#60DB36]" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-900 mb-1">Email</h3>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-[#60DB36] hover:underline text-sm font-medium"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-[#60DB36]/10 p-2">
                  <Phone className="h-5 w-5 text-[#60DB36]" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-900 mb-1">Phone</h3>
                  <a
                    href={`tel:${TEL_INTERNATIONAL}`}
                    className="text-[#60DB36] hover:underline text-sm font-medium"
                  >
                    {DISPLAY_PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-[#60DB36]/10 p-2">
                  <MessageCircle className="h-5 w-5 text-[#60DB36]" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-900 mb-1">WhatsApp</h3>
                  <p className="text-sm text-gray-600">
                    Fastest response
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
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
              <div key={service.title} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-gray-900">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Common Questions
          </h2>

          <div className="space-y-4">
            <details className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <summary className="font-semibold cursor-pointer text-gray-900">
                What's your response time?
              </summary>
              <p className="mt-3 text-gray-600">
                We typically respond to WhatsApp messages within 30 minutes during business hours (Mon-Fri, 9am-6pm IST). Email inquiries are answered within 24 hours.
              </p>
            </details>

            <details className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <summary className="font-semibold cursor-pointer text-gray-900">
                Do you offer free consultations?
              </summary>
              <p className="mt-3 text-gray-600">
                Yes! We offer a complimentary 30-minute consultation to discuss your project requirements and provide initial recommendations.
              </p>
            </details>

            <details className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <summary className="font-semibold cursor-pointer text-gray-900">
                What information should I provide?
              </summary>
              <p className="mt-3 text-gray-600">
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
