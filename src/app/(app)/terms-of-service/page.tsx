import { Metadata } from "next";
import { Header } from "@/components/header-footer/Header";
import Footer from "@/components/header-footer/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | ScaleFront",
  description:
    "ScaleFront terms of service covering client engagements, Shopify development contracts, intellectual property, and service agreements.",
  alternates: {
    canonical: "https://www.scalefront.io/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | ScaleFront",
    description: "Terms governing use of our website and client service engagements.",
    url: "https://www.scalefront.io/terms-of-service",
    type: "website",
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fafafa] dark:bg-gray-900 text-[#292929] dark:text-gray-100 py-16 px-6">
        <div className="max-w-[800px] mx-auto bg-white dark:bg-gray-800 p-8 md:p-12 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 font-serif">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
            Last updated: September 20, 2026
          </p>

          <div className="space-y-8 text-base leading-relaxed font-sans text-gray-700 dark:text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-[#292929] dark:text-white mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing this website (scalefront.io) or contracting ScaleFront for Shopify development, design, and conversion rate optimization services, you agree to comply with and be bound by these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#292929] dark:text-white mb-3">
                2. Scope of Services
              </h2>
              <p>
                ScaleFront provides bespoke Shopify theme customization, headless commerce development, custom application engineering, and technical audits as detailed in individual Statement of Work (SOW) documents signed between the parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#292929] dark:text-white mb-3">
                3. Intellectual Property
              </h2>
              <p>
                Unless otherwise specified in a written agreement, upon full payment of project invoices, all custom source code created specifically for the client becomes the property of the client, excluding pre-existing agency libraries and frameworks.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#292929] dark:text-white mb-3">
                4. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, ScaleFront shall not be liable for any indirect, incidental, or consequential damages resulting from third-party app conflicts, platform downtime on Shopify, or unauthorized third-party access.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#292929] dark:text-white mb-3">
                5. Governing Law
              </h2>
              <p>
                These terms are governed by and construed in accordance with applicable laws. Inquiries regarding service contracts may be directed to{" "}
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
