export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-20">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-lg text-white/60">Last updated: October 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-6 py-12 sm:px-8 sm:py-16">
        <div className="space-y-12">
          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Introduction</h2>
            <p className="text-white/70 leading-relaxed">
              Real AI Related Products (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;Company&quot;) is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our
              Shopify app and related services.
            </p>
            <p className="text-white/70 leading-relaxed">
              Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do
              not use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white/90">Product Data</h3>
                <p className="mt-2 text-white/70 leading-relaxed">
                  When you install our app, we access your Shopify store&quot;s product information, including titles,
                  descriptions, images, prices, and categories. This data is essential for generating AI
                  recommendations.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white/90">Store Information</h3>
                <p className="mt-2 text-white/70 leading-relaxed">
                  We collect basic store information such as store name, URL, and configuration settings necessary to
                  operate the app.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white/90">Customer Interaction Data</h3>
                <p className="mt-2 text-white/70 leading-relaxed">
                  We may collect anonymized data about how customers interact with recommendations (clicks, views) to
                  improve recommendation accuracy. This data is not personally identifiable.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white/90">Account Information</h3>
                <p className="mt-2 text-white/70 leading-relaxed">
                  We collect your Shopify account email and any preferences you set within the app dashboard.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
            <ul className="space-y-3">
              <li className="flex gap-3 text-white/70">
                <span className="text-white/40 flex-shrink-0">•</span>
                <span>To generate AI-powered product recommendations for your store</span>
              </li>
              <li className="flex gap-3 text-white/70">
                <span className="text-white/40 flex-shrink-0">•</span>
                <span>To improve and optimize our recommendation algorithms</span>
              </li>
              <li className="flex gap-3 text-white/70">
                <span className="text-white/40 flex-shrink-0">•</span>
                <span>To provide customer support and troubleshooting</span>
              </li>
              <li className="flex gap-3 text-white/70">
                <span className="text-white/40 flex-shrink-0">•</span>
                <span>To send service updates and important notifications</span>
              </li>
              <li className="flex gap-3 text-white/70">
                <span className="text-white/40 flex-shrink-0">•</span>
                <span>To comply with legal obligations and protect our rights</span>
              </li>
              <li className="flex gap-3 text-white/70">
                <span className="text-white/40 flex-shrink-0">•</span>
                <span>To analyze usage patterns and improve our service</span>
              </li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Data Security</h2>
            <p className="text-white/70 leading-relaxed">
              We implement industry-standard security measures to protect your data, including:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-white/70">
                <span className="text-white/40 flex-shrink-0">•</span>
                <span>Encryption of data in transit and at rest</span>
              </li>
              <li className="flex gap-3 text-white/70">
                <span className="text-white/40 flex-shrink-0">•</span>
                <span>Regular security audits and vulnerability assessments</span>
              </li>
              <li className="flex gap-3 text-white/70">
                <span className="text-white/40 flex-shrink-0">•</span>
                <span>Compliance with Shopify&quot;s security standards</span>
              </li>
              <li className="flex gap-3 text-white/70">
                <span className="text-white/40 flex-shrink-0">•</span>
                <span>Limited access to data on a need-to-know basis</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed">
              However, no method of transmission over the internet is 100% secure. While we strive to protect your
              information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Third-Party Services</h2>
            <p className="text-white/70 leading-relaxed">
              Our app integrates with Shopify and may use third-party services for analytics, hosting, and AI
              processing. These third parties are contractually obligated to use your data only as necessary to provide
              services to us and are required to maintain the confidentiality and security of your information.
            </p>
          </section>

          {/* Your Rights */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Your Rights</h2>
            <p className="text-white/70 leading-relaxed">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-white/70">
                <span className="text-white/40 flex-shrink-0">•</span>
                <span>
                  <strong>Right to Access:</strong> Request a copy of the data we hold about you
                </span>
              </li>
              <li className="flex gap-3 text-white/70">
                <span className="text-white/40 flex-shrink-0">•</span>
                <span>
                  <strong>Right to Correction:</strong> Request corrections to inaccurate data
                </span>
              </li>
              <li className="flex gap-3 text-white/70">
                <span className="text-white/40 flex-shrink-0">•</span>
                <span>
                  <strong>Right to Deletion:</strong> Request deletion of your data (subject to legal obligations)
                </span>
              </li>
              <li className="flex gap-3 text-white/70">
                <span className="text-white/40 flex-shrink-0">•</span>
                <span>
                  <strong>Right to Opt-Out:</strong> Opt out of certain data processing activities
                </span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed">
              To exercise any of these rights, please contact us using the information provided in the Contact Us
              section below.
            </p>
          </section>

          {/* Cookies and Tracking */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Cookies and Tracking</h2>
            <p className="text-white/70 leading-relaxed">
              Our app may use cookies and similar tracking technologies to enhance functionality and analyze usage.
              These technologies help us understand how users interact with recommendations and improve our service. You
              can control cookie settings through your browser preferences.
            </p>
          </section>

          {/* Policy Updates */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Changes to This Privacy Policy</h2>
            <p className="text-white/70 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal
              requirements, or other factors. We will notify you of any material changes by updating the &quot;Last updated&quot;
              date at the top of this policy and, where required, by obtaining your consent.
            </p>
          </section>

          {/* Contact Us */}
          <section className="space-y-4 border-t border-white/10 pt-12">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p className="text-white/70 leading-relaxed">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="space-y-2 text-white/70">
              <p>
                <strong className="text-white/90">Email:</strong> privacy@realairelatedproducts.com
              </p>
              <p>
                <strong className="text-white/90">Support:</strong> Contact us through your app dashboard
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
