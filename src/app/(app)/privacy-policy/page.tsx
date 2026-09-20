import { Metadata } from "next";
import { Header } from "@/components/header-footer/Header";
import Footer from "@/components/header-footer/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Protection Guidelines | ScaleFront",
  description:
    "ScaleFront privacy policy outlining how we collect, use, and protect your personal information when using our ecommerce services and website.",
  alternates: {
    canonical: "https://www.scalefront.io/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | ScaleFront",
    description: "Our commitment to data privacy, transparency, and information security.",
    url: "https://www.scalefront.io/privacy-policy",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fafafa] dark:bg-gray-900 text-[#292929] dark:text-gray-100 py-16 px-6">
        <div className="max-w-[800px] mx-auto bg-white dark:bg-gray-800 p-8 md:p-12 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 font-serif">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
            Last updated: September 20, 2026
          </p>

          <div className="space-y-8 text-base leading-relaxed font-sans text-gray-700 dark:text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-[#292929] dark:text-white mb-3">
                1. Introduction
              </h2>
              <p>
                ScaleFront (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect personal information when you visit our website (scalefront.io) or use our specialized Shopify development and conversion optimization services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#292929] dark:text-white mb-3">
                2. Information We Collect
              </h2>
              <p className="mb-2">
                We collect information you provide directly to us when contacting us, requesting an audit, or engaging our engineering team:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Contact details: Name, business email, phone number, and company name.</li>
                <li>Store information: Shopify store URL, ecommerce metrics, and technical requirements.</li>
                <li>Technical analytics: IP address, browser type, and interaction metrics gathered via privacy-focused analytics cookies.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#292929] dark:text-white mb-3">
                3. How We Use Your Information
              </h2>
              <p>
                We use the information we collect to deliver customized proposals, conduct store audits, develop bespoke Shopify themes and applications, improve our site performance, and communicate project updates. We never sell your personal data to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#292929] dark:text-white mb-3">
                4. Data Security
              </h2>
              <p>
                We implement industry-standard encryption, strict access controls, and regular vulnerability audits to ensure your business data and credentials remain safeguarded at all times.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#292929] dark:text-white mb-3">
                5. Contact Us
              </h2>
              <p>
                If you have questions regarding this Privacy Policy or your data rights, please contact our privacy officer at{" "}
                <a href="mailto:hello@scalefront.io" className="text-blue-600 dark:text-blue-400 underline">
                  hello@scalefront.io
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
