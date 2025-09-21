import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/header-footer/Header";
import { MovingReviews } from "@/components/reviews/MovingReviews";
import Footer from "@/components/header-footer/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Top Com Agency - Get Your Fast Headless eCommerce Quote Today",
  description: "Ready to transform your slow WooCommerce or Shopify store? Contact Top Com Agency for expert Next.js headless eCommerce development. Free consultation on WhatsApp +919650296375",
  keywords: [
    "contact headless eCommerce developers",
    "WooCommerce speed optimization consultation",
    "Next.js eCommerce development quote",
    "Shopify headless migration contact",
    "headless eCommerce agency India",
    "WooCommerce Next.js consultation",
    "fast eCommerce website developers contact",
    "eCommerce speed optimization experts India"
  ],
  openGraph: {
    title: "Contact Top Com Agency - Fast Headless eCommerce Development",
    description: "Get your slow eCommerce store transformed into a lightning-fast Next.js website. Contact our headless WooCommerce & Shopify experts on WhatsApp for free consultation.",
    type: "website",
  },
  alternates: {
    canonical: "/contact",
  },
};

const PHONE_E164 = "919650296375"; // E.164 without &apos;+&apos; for wa.me
const DISPLAY_PHONE = "+919650296375";
const TEL_INTERNATIONAL = "+919650296375";

function WhatsAppButtons() {
  const waBase = `https://wa.me/${PHONE_E164}`;
  const waPrefilled = `${waBase}?text=${encodeURIComponent(
    "Hi! I came from your website and would like to discuss making my eCommerce store faster with Next.js headless development."
  )}`;
  
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      {/* Button 1: plain WhatsApp chat */}
      <Button asChild className="bg-[#F97316] hover:bg-[#ea6a10] text-white">
        <a
          href={waBase}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Top Com Agency on WhatsApp for headless eCommerce consultation"
        >
          Get Free Quote on WhatsApp
        </a>
      </Button>

      {/* Button 2: pre-filled WhatsApp message */}
      <Button asChild className="bg-[#F97316] hover:bg-[#ea6a10] text-white">
        <a
          href={waPrefilled}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Top Com Agency with pre-filled message about eCommerce optimization"
        >
          Quick Start Consultation
        </a>
      </Button>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-[60vh] bg-white text-[#333333]">
      {/* Structured Data for Contact Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Top Com Agency",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+919650296375",
                  "contactType": "customer service",
                  "availableLanguage": ["English", "Hindi"],
                  "description": "Expert consultation for headless WooCommerce and Shopify Next.js development"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "url": "https://topcomsolutions.com/contact-us",
              "sameAs": [
                "https://wa.me/919650296375"
              ]
            }
          })
        }}
      />

      <Header />
      
      <article className="mx-auto w-full max-w-2xl px-4 py-12">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Contact Top Com Agency - Your Headless eCommerce Experts
          </h1>
          <div className="mt-2 h-1 w-16 bg-[#16A34A] mx-auto" aria-hidden="true" />
          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
            Ready to transform your <strong>slow eCommerce store</strong> into a 
            lightning-fast Next.js website? Get your free consultation today!
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Get Your Free eCommerce Speed Audit
          </h2>
          <p className="text-gray-700 mb-6">
            Whether you&apos;re struggling with <strong>WooCommerce speed optimization</strong> or 
            need a complete <strong>Shopify headless migration</strong>, we&apos;re here to help. 
            Our team specializes in <strong>Next.js eCommerce development</strong> and can 
            show you exactly how to make your website 10x faster.
          </p>
        </section>

        <div className="rounded-lg border border-[#F1F5F9] p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
          
          <dl className="space-y-4">
            <div className="flex flex-col gap-1">
              <dt className="text-sm text-[#333333]/70 font-medium">
                Phone & WhatsApp
              </dt>
              <dd>
                <Link
                  href={`tel:${TEL_INTERNATIONAL}`}
                  className="font-medium text-[#333333] underline-offset-4 hover:underline text-lg"
                >
                  {DISPLAY_PHONE}
                </Link>
              </dd>
              <dd className="text-sm text-gray-600">
                Available for <strong>headless eCommerce consultations</strong> and 
                <strong> WooCommerce speed optimization</strong> discussions
              </dd>
            </div>

            <div className="flex flex-col gap-1">
              <dt className="text-sm text-[#333333]/70 font-medium">
                WhatsApp Business
              </dt>
              <dd>
                <Link
                  href={`https://wa.me/${PHONE_E164}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#333333] underline-offset-4 hover:underline text-lg"
                >
                  {DISPLAY_PHONE}
                </Link>
              </dd>
              <dd className="text-sm text-gray-600">
                Fastest way to get answers about <strong>Next.js eCommerce development</strong> 
                and pricing for your project
              </dd>
            </div>
          </dl>

          <div className="mt-6">
            <WhatsAppButtons />
          </div>

          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">
              💡 What to Include in Your Message:
            </h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Current eCommerce platform (WooCommerce, Shopify, etc.)</li>
              <li>• Main issues you&apos;re facing (slow loading, downtime, etc.)</li>
              <li>• Approximate number of products</li>
              <li>• Your website URL (for free speed analysis)</li>
            </ul>
          </div>

          <p className="mt-6 text-sm text-[#333333]/70">
            We typically respond within 30 minutes on WhatsApp. For the fastest service, 
            include your website URL so we can provide an instant speed analysis.
          </p>
        </div>

        {/* Service Areas Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Our Headless eCommerce Services
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">
                WooCommerce Speed Optimization
              </h3>
              <p className="text-sm text-gray-600">
                Transform your slow WooCommerce store with <strong>headless Next.js architecture</strong>. 
                Get 90+ PageSpeed scores and happier customers.
              </p>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">
                Shopify Headless Migration
              </h3>
              <p className="text-sm text-gray-600">
                Keep Shopify&apos;s powerful backend while getting a lightning-fast 
                <strong> Next.js frontend</strong>. Best of both worlds.
              </p>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">
                Custom Next.js Development
              </h3>
              <p className="text-sm text-gray-600">
                Built from scratch for maximum performance. Perfect for businesses 
                with <strong>500+ products</strong> or complex requirements.
              </p>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">
                24/7 Maintenance & Support
              </h3>
              <p className="text-sm text-gray-600">
                We don&apos;t just build and disappear. Ongoing support ensures your 
                <strong> fast eCommerce website</strong> stays optimized.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Quick Answers Before You Contact Us
          </h2>
          
          <div className="space-y-4">
            <details className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">
                How much does headless WooCommerce development cost?
              </summary>
              <p className="mt-3 text-gray-700">
                <strong>Shopify Next.js migration cost in India</strong> varies based on 
                your store&apos;s complexity. Simple stores start from ₹50,000, while complex 
                <strong> WooCommerce 500+ products sites</strong> may cost more. Contact us 
                for a precise quote based on your requirements.
              </p>
            </details>
            
            <details className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">
                How long does it take to make my WooCommerce store faster?
              </summary>
              <p className="mt-3 text-gray-700">
                Most <strong>WooCommerce speed optimization</strong> projects are completed 
                in 2-4 weeks. This includes migrating to <strong>headless architecture</strong>, 
                testing, and ensuring everything works perfectly before going live.
              </p>
            </details>
            
            <details className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">
                Do you provide ongoing support after the website is live?
              </summary>
              <p className="mt-3 text-gray-700">
                Yes! Unlike other agencies, we provide <strong>24/7 support and maintenance</strong>. 
                We monitor your site&apos;s performance, handle updates, and ensure your 
                <strong> fast eCommerce website</strong> continues running smoothly.
              </p>
            </details>
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