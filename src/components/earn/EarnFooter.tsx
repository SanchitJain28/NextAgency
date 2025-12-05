'use client';

export default function EarnFooter() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 mt-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* About Section - SEO Rich Content */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Earn</h3>
                <p className="text-sm text-gray-400">Your Online Store Partner</p>
              </div>
            </div>

            <h4 className="text-white font-semibold mb-3">
              Free Shopify Store Audit & Conversion Optimization Tool
            </h4>

            <p className="text-gray-400 mb-4 leading-relaxed">
              Earn is a <strong className="text-white">comprehensive Shopify website auditor</strong> and
              <strong className="text-white"> conversion rate optimization tool</strong> built by the experts at
              <strong className="text-white"> ScaleFront.io</strong>. We help e-commerce store owners,
              Shopify merchants, and online retailers identify exactly what's preventing their stores
              from converting visitors into customers.
            </p>

            <p className="text-gray-400 mb-4 leading-relaxed">
              Our <strong className="text-white">free Shopify SEO audit tool</strong> analyzes over 100+
              critical factors including <strong className="text-white">website performance</strong>,
              <strong className="text-white"> technical SEO</strong>, <strong className="text-white">accessibility</strong>,
              <strong className="text-white"> security vulnerabilities</strong>, and
              <strong className="text-white"> sales optimization features</strong> that directly impact your
              store's revenue.
            </p>

            <div className="mt-6">
              <p className="text-sm text-blue-400 font-semibold mb-2">🏆 Built by Shopify Experts</p>
              <p className="text-xs text-gray-500">
                By <a href="https://scalefront.io" className="text-blue-400 hover:text-blue-300 underline">
                ScaleFront.io
                </a> - Official Shopify Partners specializing in headless commerce,
                performance optimization, and conversion rate optimization.
              </p>
            </div>
          </div>

          {/* Why We Created This Tool */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 border-b border-gray-700 pb-2">
              Why We Built This Tool
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✓</span>
                <span>
                  <strong className="text-white">Identify Revenue Leaks:</strong> Most Shopify stores lose
                  60-70% of potential customers due to fixable technical issues
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✓</span>
                <span>
                  <strong className="text-white">Democratize Optimization:</strong> Professional Shopify audits
                  cost $500-2000. We made it free and instant
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✓</span>
                <span>
                  <strong className="text-white">Data-Driven Decisions:</strong> Stop guessing what to fix.
                  Get prioritized recommendations based on conversion impact
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✓</span>
                <span>
                  <strong className="text-white">Competitive Advantage:</strong> See how your store compares
                  to industry best practices and top-performing Shopify stores
                </span>
              </li>
            </ul>
          </div>

          {/* How It Helps Stores */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 border-b border-gray-700 pb-2">
              How This Increases Conversions
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">📈</span>
                <span>
                  <strong className="text-white">Fix Page Speed:</strong> Every 1-second delay = 7% conversion loss.
                  We identify all speed bottlenecks
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">📈</span>
                <span>
                  <strong className="text-white">Optimize Product Pages:</strong> Missing trust signals, unclear CTAs,
                  and poor images reduce conversions by 30-50%
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">📈</span>
                <span>
                  <strong className="text-white">Implement Upsells:</strong> Cross-sell and upsell features
                  increase average order value by 10-30%
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">📈</span>
                <span>
                  <strong className="text-white">Recover Abandoned Carts:</strong> 70% of carts are abandoned.
                  We show you how to recover 10-15%
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">📈</span>
                <span>
                  <strong className="text-white">Mobile Optimization:</strong> 60%+ of traffic is mobile.
                  Poor mobile experience kills conversions
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">📈</span>
                <span>
                  <strong className="text-white">SEO Improvements:</strong> Better SEO = more organic traffic =
                  more sales without ad spend
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* What We Audit Section */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            What Our Shopify Store Audit Tool Analyzes
          </h3>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <div className="text-3xl mb-2">🔍</div>
              <h5 className="text-white font-semibold mb-2">SEO Audit</h5>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• Meta tags optimization</li>
                <li>• Schema markup</li>
                <li>• URL structure</li>
                <li>• Sitemap analysis</li>
                <li>• Keyword density</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <div className="text-3xl mb-2">⚡</div>
              <h5 className="text-white font-semibold mb-2">Performance</h5>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• Page load speed</li>
                <li>• Image optimization</li>
                <li>• Core Web Vitals</li>
                <li>• JS/CSS minification</li>
                <li>• Caching headers</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <div className="text-3xl mb-2">♿</div>
              <h5 className="text-white font-semibold mb-2">Accessibility</h5>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• WCAG compliance</li>
                <li>• Screen reader support</li>
                <li>• Color contrast</li>
                <li>• Keyboard navigation</li>
                <li>• ARIA labels</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <div className="text-3xl mb-2">🔒</div>
              <h5 className="text-white font-semibold mb-2">Security</h5>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• HTTPS/SSL check</li>
                <li>• Security headers</li>
                <li>• Cookie security</li>
                <li>• XSS protection</li>
                <li>• Mixed content</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <div className="text-3xl mb-2">💰</div>
              <h5 className="text-white font-semibold mb-2">Sales Features</h5>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• Upsell/Cross-sell</li>
                <li>• Cart recovery</li>
                <li>• Wishlist</li>
                <li>• Live chat</li>
                <li>• Loyalty programs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Keywords Section for SEO */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <h3 className="text-xl font-bold text-white text-center mb-6">
            Trusted by E-commerce Merchants Worldwide
          </h3>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400">500+</div>
              <div className="text-sm text-gray-400">Stores Audited</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">100+</div>
              <div className="text-sm text-gray-400">Checks Per Audit</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">60s</div>
              <div className="text-sm text-gray-400">Average Audit Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">Free</div>
              <div className="text-sm text-gray-400">No Credit Card</div>
            </div>
          </div>
        </div>

        {/* Rich Keywords Section */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white mb-4">
              Popular Searches for Shopify Store Optimization
            </h3>
            <p className="text-sm text-gray-400 max-w-3xl mx-auto">
              Whether you're looking for a <strong className="text-white">Shopify SEO audit tool</strong>,
              <strong className="text-white"> e-commerce conversion optimizer</strong>,
              <strong className="text-white"> Shopify performance checker</strong>, or
              <strong className="text-white"> online store health analyzer</strong> - Earn provides
              comprehensive insights to grow your Shopify business.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 text-xs">
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
              Shopify store audit tool
            </span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
              Free Shopify SEO checker
            </span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
              Shopify conversion rate optimization
            </span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
              E-commerce website analyzer
            </span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
              Shopify performance audit
            </span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
              Online store speed test
            </span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
              Shopify SEO optimization tool
            </span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
              Website health check Shopify
            </span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
              Shopify accessibility audit
            </span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
              E-commerce security scanner
            </span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
              Shopify cart abandonment checker
            </span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
              Free website audit tool
            </span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
              Shopify mobile optimization
            </span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
              Core Web Vitals checker
            </span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
              Shopify technical SEO audit
            </span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
              Increase Shopify sales
            </span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
              Shopify store optimization
            </span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
              E-commerce analytics tool
            </span>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to Increase Your Shopify Store Conversions?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get your free comprehensive audit in 60 seconds. Discover what's holding back your sales
              and get actionable recommendations to increase revenue by 10-30%.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            >
              Start Free Audit Now →
            </button>
            <p className="text-xs text-gray-400 mt-4">
              No credit card required • 100% Free • Instant Results
            </p>
          </div>
        </div>

        {/* Implementation Services */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-3">
              Need Help Implementing These Optimizations?
            </h3>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Our team at <strong className="text-white">ScaleFront.io</strong> specializes in
              Shopify development, conversion rate optimization, and performance enhancement.
              We don't just identify issues – we fix them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700">
              <div className="text-4xl mb-3">🚀</div>
              <h4 className="text-white font-bold mb-2">Shopify Development</h4>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Custom theme development</li>
                <li>• Headless commerce (Next.js)</li>
                <li>• App integration & custom apps</li>
                <li>• Migration & replatforming</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700">
              <div className="text-4xl mb-3">📈</div>
              <h4 className="text-white font-bold mb-2">CRO & Optimization</h4>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Conversion rate optimization</li>
                <li>• A/B testing & analytics</li>
                <li>• Speed optimization (2-3s loads)</li>
                <li>• Mobile experience enhancement</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="text-white font-bold mb-2">Marketing & SEO</h4>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Technical SEO implementation</li>
                <li>• Content strategy & optimization</li>
                <li>• Email & SMS marketing setup</li>
                <li>• Conversion tracking & pixels</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://scalefront.io/contact-us"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 <a href="https://scalefront.io" className="text-blue-400 hover:text-blue-300">ScaleFront.io</a>.
              All rights reserved. |
              <span className="ml-1">Official Shopify Partners</span>
            </div>

            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="https://scalefront.io" className="hover:text-white transition-colors">About Us</a>
              <a href="https://scalefront.io/contact-us" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-500">
              <strong className="text-gray-400">Disclaimer:</strong> Earn is an independent audit tool created by ScaleFront.io.
              We are Shopify Partners but not officially affiliated with or endorsed by Shopify Inc.
              Results and recommendations are based on industry best practices and may vary by store configuration.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
