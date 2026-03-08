
export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen font-sans text-white bg-black selection:bg-white/20">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="max-w-3xl px-6 py-16 mx-auto sm:px-8 sm:py-20">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-white/60">Last updated: March 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl px-6 py-12 mx-auto sm:px-8 sm:py-16">
        <div className="space-y-12">
          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Introduction</h2>
            <p className="leading-relaxed text-white/70">
              Pairly (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is
              committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you use our Shopify application ("the App") to create bundles,
              volume discounts, and AI-driven product recommendations.
            </p>
            <p className="leading-relaxed text-white/70">
              By installing and using the App, you agree to the collection and
              use of information in accordance with this policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Information We Collect</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-white/90">
                  1. Merchant Information
                </h3>
                <p className="mt-2 leading-relaxed text-white/70">
                  When you install the App, we are automatically able to access
                  certain types of information from your Shopify account:
                </p>
                <ul className="pl-5 mt-2 space-y-1 list-disc text-white/70">
                  <li>Shop URL, shop name, and contact email.</li>
                  <li>
                    Timezone and currency settings to ensure accurate discount
                    scheduling.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white/90">
                  2. Store Data (Products & Collections)
                </h3>
                <p className="mt-2 leading-relaxed text-white/70">
                  To function correctly, the App syncs and stores:
                </p>
                <ul className="pl-5 mt-2 space-y-1 list-disc text-white/70">
                  <li>
                    Product titles, IDs, images, prices, and variant data.
                  </li>
                  <li>
                    Collection information to help you map discounts to specific
                    categories.
                  </li>
                  <li>
                    Inventory levels (read-only) to prevent bundling
                    out-of-stock items.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white/90">
                  3. End-Customer Information
                </h3>
                <p className="mt-2 leading-relaxed text-white/70">
                  To power our AI recommendations ("Frequently Bought Together")
                  and Cart Transforms, we process:
                </p>
                <ul className="pl-5 mt-2 space-y-1 list-disc text-white/70">
                  <li>
                    <strong>Order History:</strong> We analyze historical order
                    data to train our AI models on which products are purchased
                    together.
                  </li>
                  <li>
                    <strong>Cart Contents:</strong> We read the items in a
                    customer's cart to apply dynamic bundle logic and discounts
                    via Shopify Functions.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              How We Use Your Information
            </h2>
            <ul className="space-y-3">
              <li className="flex gap-3 text-white/70">
                <span className="flex-shrink-0 text-white/40">•</span>
                <span>
                  To provide the core functionality of the App (creating
                  bundles, applying volume discounts, and BxGy offers).
                </span>
              </li>
              <li className="flex gap-3 text-white/70">
                <span className="flex-shrink-0 text-white/40">•</span>
                <span>
                  To train our AI algorithms to suggest relevant "Frequently
                  Bought Together" products based on your store's sales history.
                </span>
              </li>
              <li className="flex gap-3 text-white/70">
                <span className="flex-shrink-0 text-white/40">•</span>
                <span>
                  To communicate with you regarding updates, technical issues,
                  or billing inquiries.
                </span>
              </li>
              <li className="flex gap-3 text-white/70">
                <span className="flex-shrink-0 text-white/40">•</span>
                <span>
                  To improve the App's performance and fix technical bugs.
                </span>
              </li>
            </ul>
          </section>

          {/* Data Retention */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Data Retention</h2>
            <p className="leading-relaxed text-white/70">
              We retain your data only for as long as the App is installed on
              your Shopify store. If you uninstall the App, we will delete your
              configuration data and synced product information from our
              databases within 48 hours, in compliance with Shopify's data
              retention policies.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Third-Party Sub-processors
            </h2>
            <p className="leading-relaxed text-white/70">
              We use trusted third-party services to help us operate the App.
              These partners are contractually obligated to protect your data:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-white/70">
                <span className="flex-shrink-0 text-white/40">•</span>
                <span>
                  <strong>Shopify:</strong> To host the e-commerce platform and
                  handle authentication.
                </span>
              </li>
              <li className="flex gap-3 text-white/70">
                <span className="flex-shrink-0 text-white/40">•</span>
                <span>
                  <strong>Redis/Prisma (Database Providers):</strong> To
                  securely store your bundle configurations and cache AI
                  results.
                </span>
              </li>
              <li className="flex gap-3 text-white/70">
                <span className="flex-shrink-0 text-white/40">•</span>
                <span>
                  <strong>AI Infrastructure:</strong> To process order data and
                  generate recommendations (data is anonymized before
                  processing).
                </span>
              </li>
            </ul>
          </section>

          {/* Your Rights */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Your Rights (GDPR & CCPA)
            </h2>
            <p className="leading-relaxed text-white/70">
              As a merchant using Shopify, you have control over your data.
              Additionally, your customers have rights regarding their personal
              information.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-white/70">
                <span className="flex-shrink-0 text-white/40">•</span>
                <span>
                  <strong>Merchant Rights:</strong> You may request to access,
                  correct, or delete the data we hold about your store by
                  contacting us.
                </span>
              </li>
              <li className="flex gap-3 text-white/70">
                <span className="flex-shrink-0 text-white/40">•</span>
                <span>
                  <strong>Customer Rights:</strong> We fully support Shopify's
                  mandatory webhooks for GDPR requests
                  (`customers/data_request`, `customers/redact`). When you
                  receive a request from a customer, Shopify forwards it to us,
                  and we process it automatically.
                </span>
              </li>
            </ul>
          </section>

          {/* Contact Us */}
          <section className="pt-12 space-y-4 border-t border-white/10">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p className="leading-relaxed text-white/70">
              If you have questions about this Privacy Policy or need assistance
              with data privacy, please contact us:
            </p>
            <div className="space-y-2 text-white/70">
              <p>
                <strong className="text-white/90">App Developer:</strong> Pairly
                Team
              </p>
              <p>
                <strong className="text-white/90">Email:</strong>{" "}
                privacy@pairly.app
              </p>
              <p>
                <strong className="text-white/90">Mailing Address:</strong>{" "}
                [Your Business Address Here]
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
