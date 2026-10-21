import Link from "next/link";
import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { MovingReviews } from "@/components/reviews/MovingReviews";
import { Clock, Zap, ArrowRight } from "lucide-react";
import { DirectContactChannels } from "@/components/contact/DirectContactChannels";
import { CONTACT_INFO } from "@/config/contact";

export const metadata: Metadata = {
  title: "Contact Us — Get a Project Proposal",
  description:
    "Tell us about your Shopify store goals. Get a direct reply from our development team with clear steps, timelines, and pricing within 24 hours.",
  keywords: [
    "contact Shopify developers",
    "Shopify development consultation",
    "custom Shopify apps contact",
    "Shopify expert contact",
    "Shopify agency contact",
  ],
  openGraph: {
    title: "Contact Us — Get a Project Proposal | ScaleFront",
    description:
      "Direct developer response within 24 hours. Custom Shopify apps, custom theme builds, and speed optimization.",
    url: "https://www.scalefront.io/contact-us",
    siteName: "ScaleFront",
    type: "website",
  },
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full bg-[var(--sf-paper-sunken)] text-[var(--sf-ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            mainEntity: {
              "@type": "Organization",
              name: "ScaleFront",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: `+${CONTACT_INFO.phoneE164}`,
                  contactType: "customer service",
                  availableLanguage: ["English", "Hindi"],
                  description:
                    "Shopify development consultation and technical support",
                },
              ],
              email: CONTACT_INFO.email,
              url: "https://scalefront.io/contact-us",
            },
          }),
        }}
      />

      <article className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 pt-8 pb-20">
        <header className="mb-10 text-center max-w-4xl mx-auto">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--sf-ink)] leading-[1.05] tracking-[-0.035em] mb-5"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Tell us about your store.
          </h1>

          <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed max-w-2xl mx-auto">
            Whether you need a custom Shopify app, a faster site, or a full
            rebuild, tell us what you want to build. You will get a direct reply
            with clear steps and pricing.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--sf-sage-soft)] border-1.5 border-[var(--sf-ink)] shadow-[2px_2px_0_var(--sf-ink)] font-mono text-[11px] font-bold text-[var(--sf-sage)]">
              <Clock className="w-3.5 h-3.5" />
              <span>Replies within 24 hours</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--sf-gold-soft)] border-1.5 border-[var(--sf-ink)] shadow-[2px_2px_0_var(--sf-ink)] font-mono text-[11px] font-bold text-[var(--sf-ink)]">
              <Zap className="w-3.5 h-3.5 text-[var(--sf-primary)]" />
              <span>Direct developer response</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border-1.5 border-[var(--sf-ink)] shadow-[2px_2px_0_var(--sf-ink)] font-mono text-[11px] font-bold text-[var(--sf-ink-soft)]">
              <span>Gurgaon &bull; Worldwide Delivery</span>
            </div>
          </div>
        </header>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-5 xl:col-span-5 lg:sticky lg:top-8 order-1">
            <div className="bg-[var(--sf-paper)] border-2 border-[var(--sf-ink)] shadow-[8px_8px_0_var(--sf-ink)] p-6 sm:p-8">
              <div className="border-b-2 border-[var(--sf-ink)] pb-4 mb-6">
                <div className="font-mono text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--sf-primary)] mb-1">
                  PROJECT INQUIRY
                </div>
                <h2
                  className="text-2xl font-extrabold text-[var(--sf-ink)]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Send Project Details
                </h2>
              </div>

              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-7 xl:col-span-7 space-y-10 order-2">
            <section className="bg-[var(--sf-paper)] border-2 border-[var(--sf-ink)] shadow-[6px_6px_0_var(--sf-ink)] p-6 sm:p-8">
              <div className="mb-6">
                <span className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase text-[var(--sf-primary)]">
                  DIRECT CHANNELS
                </span>
                <h2
                  className="text-2xl font-extrabold text-[var(--sf-ink)] mt-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Prefer to Talk Directly?
                </h2>
              </div>

              <DirectContactChannels />
            </section>

            <section className="bg-[var(--sf-paper)] border-2 border-[var(--sf-ink)] shadow-[6px_6px_0_var(--sf-ink)] p-6 sm:p-8">
              <div className="mb-6">
                <span className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase text-[var(--sf-primary)]">
                  CAPABILITIES
                </span>
                <h2
                  className="text-2xl font-extrabold text-[var(--sf-ink)] mt-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  How ScaleFront Can Help
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Custom Shopify Apps",
                    tag: "EXTENSIONS & REMIX",
                    description:
                      "Custom Shopify apps, checkout extensions, and backend tools built specifically for how your store runs.",
                    link: "/services/custom-shopify-apps",
                  },
                  {
                    title: "Headless Commerce",
                    tag: "NEXT.JS & STOREFRONT",
                    description:
                      "Next.js storefronts with fast page loads and full layout freedom when standard theme settings reach their limits.",
                    link: "/services/headless-commerce",
                  },
                  {
                    title: "Theme Development",
                    tag: "CUSTOM LIQUID",
                    description:
                      "Custom Liquid themes built from scratch to match your products without slowing down your store with heavy apps.",
                    link: "/services/theme-development",
                  },
                  {
                    title: "Speed & Performance",
                    tag: "CORE WEB VITALS",
                    description:
                      "Code cleanup, image optimization, and app audit that get your store loading in under 2 seconds on mobile.",
                    link: "/services/performance-optimization",
                  },
                  {
                    title: "Shopify Plus Migration",
                    tag: "STORE MIGRATION",
                    description:
                      "Move products, customer accounts, order history, and SEO URLs from Magento, WooCommerce, or Salesforce without downtime.",
                    link: "/services/shopify-plus-migration",
                  },
                  {
                    title: "Store Audit & CRO",
                    tag: "CONVERSION FIXES",
                    description:
                      "A thorough review finding the biggest drop-offs in your store and the exact fixes needed to lift sales.",
                    link: "/services/audit-consulting",
                  },
                ].map((service) => (
                  <Link
                    key={service.title}
                    href={service.link}
                    className="bg-[var(--sf-paper-sunken)] border-2 border-[var(--sf-ink)] shadow-[3px_3px_0_var(--sf-ink)] p-5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--sf-primary)] transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="font-mono text-[10px] font-bold text-[var(--sf-primary)] tracking-wider mb-1.5">
                        {service.tag}
                      </div>
                      <h3
                        className="font-bold text-[16px] text-[var(--sf-ink)] mb-2 group-hover:text-[var(--sf-primary)] transition-colors"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-[13px] text-[var(--sf-ink-soft)] leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[var(--sf-ink)]/15 flex items-center justify-between text-[12px] font-bold text-[var(--sf-ink)]">
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <section className="bg-[var(--sf-paper)] border-2 border-[var(--sf-ink)] shadow-[6px_6px_0_var(--sf-ink)] p-6 sm:p-8">
              <div className="mb-6">
                <span className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase text-[var(--sf-primary)]">
                  FAQ
                </span>
                <h2
                  className="text-2xl font-extrabold text-[var(--sf-ink)] mt-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-3.5">
                {[
                  {
                    q: "How quickly will I hear back after submitting?",
                    a: "You will receive a response within 24 hours during business days. Our engineers review your store details directly and send back clear technical suggestions, next steps, and project pricing.",
                  },
                  {
                    q: "Do you offer free technical consultations?",
                    a: "Yes. We offer a free 30-minute consultation call. An engineer reviews your store live on screen, answers your technical questions, and points out the highest-impact fixes before you commit.",
                  },
                  {
                    q: "What details should I include in my message?",
                    a: "Include your store URL, the main problem you want solved, your target launch date, and any specific app requirements. This helps us prepare a detailed, accurate quote right from the start.",
                  },
                  {
                    q: "Can you sign an NDA before we share store access?",
                    a: "Yes. We regularly sign mutual non-disclosure agreements before reviewing private store code, custom ERP workflows, sales data, or upcoming product launch details. Simply email us your standard agreement or request ours.",
                  },
                ].map((faq) => (
                  <details
                    key={faq.q}
                    className="bg-[var(--sf-paper-sunken)] border-2 border-[var(--sf-ink)] shadow-[2px_2px_0_var(--sf-ink)] p-4.5 cursor-pointer group"
                  >
                    <summary
                      className="font-bold text-[15px] text-[var(--sf-ink)] list-none flex items-center justify-between focus:outline-none"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      <span className="pr-4">{faq.q}</span>
                      <span className="font-mono text-lg font-bold transition-transform group-open:rotate-45 shrink-0">
                        +
                      </span>
                    </summary>
                    <p className="mt-2.5 text-[13.5px] text-[var(--sf-ink-soft)] leading-relaxed border-t border-[var(--sf-ink)]/15 pt-2.5">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>

      <div className="w-full pb-12">
        <MovingReviews />
      </div>
    </main>
  );
}
