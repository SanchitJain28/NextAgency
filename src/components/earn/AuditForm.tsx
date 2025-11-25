'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, Sparkles, BarChart } from 'lucide-react';

interface AuditFormProps {
  onSubmit: (url: string) => void;
  loading: boolean;
}

export default function AuditForm({ onSubmit, loading }: AuditFormProps) {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const validateUrl = (url: string) => {
    try {
      let testUrl = url.trim();
      if (!testUrl.startsWith('http://') && !testUrl.startsWith('https://')) {
        testUrl = 'https://' + testUrl;
      }
      const urlObj = new URL(testUrl);
      return ['http:', 'https:'].includes(urlObj.protocol);
    } catch {
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!url.trim()) {
      setError('Store URL is required');
      return;
    }

    if (!validateUrl(url)) {
      setError('Please enter a valid URL');
      return;
    }

    let finalUrl = url.trim();
    if (!finalUrl.startsWith('http://') && !finalUrl.startsWith('https://')) {
      finalUrl = 'https://' + finalUrl;
    }

    setError('');
    onSubmit(finalUrl);
  };

  return (
    <>
      {/* Split-screen section - Form and Info */}
      <div className="px-6 py-12 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/30">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Form */}
          <div className="order-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-6 shadow-sm">
              <Sparkles className="h-4 w-4" />
              <span>Free Shopify Store Audit</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              <span className="text-blue-600">Earn</span> - Analyze Your Store
            </h1>

            <p className="text-lg text-gray-600 mb-4">
              Get instant insights into your Shopify store's performance, SEO, security, and sales optimization.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-8">
              <p className="text-sm text-gray-700">
                <strong className="font-semibold text-gray-900">Why Earn is different:</strong> While other tools just show you page speed, <strong>we analyze all factors that impact sales</strong> – from trust signals and conversion features to security and user experience. Because it's not always about page speed.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* URL Input */}
              <div>
                <label htmlFor="url" className="block text-sm font-semibold text-gray-900 mb-3">
                  Enter Your Store URL
                </label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="example.myshopify.com"
                    className={`w-full pl-12 pr-4 py-4 text-lg border-2 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all bg-white text-gray-900 placeholder-gray-400 ${
                      error ? 'border-red-400 bg-red-50/30' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    disabled={loading}
                    autoFocus
                  />
                </div>
                {error && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <span className="mr-1">⚠️</span>
                    {error}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading || !url.trim()}
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 shadow-lg hover:shadow-xl transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing Your Store...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <BarChart className="mr-2 h-5 w-5" />
                    Get Free Audit
                  </span>
                )}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                No sign-up required • Free forever • Takes 60 seconds
              </p>
            </form>
          </div>

          {/* Right Side - Info */}
          <div className="order-2">
            <div className="bg-white shadow-xl border border-gray-200 p-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">Earn</h2>
                <p className="text-xl text-gray-600 font-medium mb-1">Shopify Store Performance Auditor</p>
                <p className="text-sm text-gray-500">By ScaleFront.io</p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 p-4 text-center border border-blue-100">
                  <div className="text-3xl font-bold text-blue-600 mb-1">6</div>
                  <div className="text-xs text-gray-600 font-medium">Categories</div>
                </div>
                <div className="bg-blue-50 p-4 text-center border border-blue-100">
                  <div className="text-3xl font-bold text-blue-600 mb-1">100+</div>
                  <div className="text-xs text-gray-600 font-medium">Checks</div>
                </div>
                <div className="bg-blue-50 p-4 text-center border border-blue-100">
                  <div className="text-3xl font-bold text-blue-600 mb-1">60s</div>
                  <div className="text-xs text-gray-600 font-medium">Analysis</div>
                </div>
                <div className="bg-blue-50 p-4 text-center border border-blue-100">
                  <div className="text-3xl font-bold text-blue-600 mb-1">Free</div>
                  <div className="text-xs text-gray-600 font-medium">No Card</div>
                </div>
              </div>

              {/* What We Analyze */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">What We Analyze</h3>
                <div className="space-y-3">
                  {[
                    { icon: '🔍', label: 'SEO Optimization', desc: 'Meta tags, keywords, schema markup' },
                    { icon: '⚡', label: 'Performance', desc: 'Speed, load time, optimization' },
                    { icon: '♿', label: 'Accessibility', desc: 'ARIA labels, navigation' },
                    { icon: '🔒', label: 'Security', desc: 'HTTPS, headers, protection' },
                    { icon: '🛍️', label: 'Shopify Features', desc: 'Cart, checkout, products' },
                    { icon: '💰', label: 'Sales Optimization', desc: 'Conversion, tracking, upsells' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3 p-3 bg-gray-50 border border-gray-200">
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{item.label}</div>
                        <div className="text-xs text-gray-600">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* SEO Content Sections - Separate section below the split-screen */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {/* Main Content Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Free Shopify Store Auditor Tool - Optimize Your E-commerce Success
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-4">
              Earn is a comprehensive Shopify store auditor designed to help online merchants identify and fix critical issues that prevent sales growth. Our advanced analysis tool examines over 100 factors across six key categories to give you actionable insights that can increase your conversion rate by up to 40%.
            </p>
            <p className="leading-relaxed">
              Whether you're a new Shopify merchant or running an established e-commerce store, our free audit tool provides instant visibility into what's working and what needs improvement. From SEO optimization to sales conversion features, we analyze everything that impacts your store's performance and revenue.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Complete Shopify Store Analysis in 60 Seconds
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our comprehensive auditor examines every aspect of your Shopify store to uncover opportunities for growth and optimization.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🔍',
                title: 'SEO Analysis & Optimization',
                description: 'Check meta tags, headings, image alt text, schema markup, and identify SEO issues preventing your store from ranking on Google. Improve visibility and organic traffic.'
              },
              {
                icon: '⚡',
                title: 'Performance & Speed Testing',
                description: 'Measure page load time, identify render-blocking resources, check image optimization, and get recommendations to improve Core Web Vitals for better user experience.'
              },
              {
                icon: '♿',
                title: 'Accessibility Compliance',
                description: 'Ensure your store is accessible to all customers with ARIA labels, color contrast checks, keyboard navigation testing, and WCAG compliance verification.'
              },
              {
                icon: '🔒',
                title: 'Security & Trust Signals',
                description: 'Verify HTTPS implementation, security headers, SSL certificates, and trust badge presence to protect customer data and increase buyer confidence.'
              },
              {
                icon: '🛍️',
                title: 'Shopify-Specific Features',
                description: 'Analyze product pages, cart functionality, checkout process, theme optimization, and Shopify app integrations for maximum conversion potential.'
              },
              {
                icon: '💰',
                title: 'Sales Optimization Analysis',
                description: 'Detect upsells, cross-sells, product bundles, promo codes, live chat support, delivery estimates, wishlist features, and conversion tracking pixels to maximize revenue.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Use Earn Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Shopify Store Owners Trust Earn Auditor
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold">1</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Instant Results in 60 Seconds</h3>
                  <p className="text-gray-600">Get comprehensive audit results faster than any competitor tool. No waiting, no delays – just instant actionable insights.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold">2</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">100+ Critical Checks</h3>
                  <p className="text-gray-600">Our algorithm examines over 100 individual factors that impact your store's performance, from technical SEO to conversion optimization.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold">3</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Prioritized Recommendations</h3>
                  <p className="text-gray-600">Not all issues are equal. We categorize problems by severity and potential revenue impact, so you know exactly what to fix first.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold">4</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Sales Optimization Focus</h3>
                  <p className="text-gray-600">Unlike generic website auditors, we specifically analyze e-commerce features that drive sales: upsells, abandoned cart recovery, conversion tracking, and more.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold">5</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Completely Free Forever</h3>
                  <p className="text-gray-600">No credit card required, no hidden fees, no trial periods. Get unlimited free audits and comprehensive reports delivered to your email.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold">6</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Built by E-commerce Experts</h3>
                  <p className="text-gray-600">Created by ScaleFront.io, a team specializing in Shopify development and optimization for high-growth brands.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Check Section */}
        <section className="bg-white rounded-3xl border-2 border-gray-200 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Comprehensive Shopify Store Audit Checklist
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our auditor performs an exhaustive analysis of your Shopify store across multiple categories to ensure no opportunity is missed.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">📈</span>
                SEO & Technical Analysis
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> Meta title and description optimization</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> Heading structure (H1, H2, H3) analysis</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> Image alt text completeness check</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> Schema markup validation (Product, Organization)</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> Canonical URL verification</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> Open Graph and Twitter Card tags</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> Internal linking structure analysis</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> Mobile-friendliness testing</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">🚀</span>
                Performance & Speed
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> Page load time measurement</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> Image optimization and lazy loading check</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> JavaScript and CSS bundle analysis</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> Compression detection (Gzip/Brotli)</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> Browser caching validation</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> Render-blocking resource identification</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> Third-party script performance impact</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> Core Web Vitals scoring</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">💳</span>
                E-commerce & Conversion
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> Product page optimization check</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> Add-to-cart button analysis</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> Trust signals detection (reviews, badges)</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> Payment gateway identification</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> Shipping information visibility</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> Return policy accessibility</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> Product image quality assessment</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> Cart and checkout functionality</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">💰</span>
                Sales Optimization Features
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> Upsell and cross-sell detection</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> Product bundle offers analysis</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> Promo code field visibility</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> Customer support options (chat, WhatsApp, phone)</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> Delivery time estimate display</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> Wishlist functionality check</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> Abandoned cart recovery mechanism</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span> Conversion tracking pixels (GA4, Facebook, TikTok)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How Our Shopify Auditor Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enter Your Store URL</h3>
              <p className="text-gray-600">Simply paste your Shopify store URL into the form above. No sign-up, no account creation – just instant analysis.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Analysis</h3>
              <p className="text-gray-600">Our AI-powered auditor scans your store across 6 categories and 100+ checkpoints in just 60 seconds.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Actionable Report</h3>
              <p className="text-gray-600">View your results instantly on screen with prioritized recommendations that you can implement today.</p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Benefits of Regular Store Audits
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Regularly auditing your Shopify store helps maintain optimal performance and identifies new opportunities as your business grows.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '📊',
                title: 'Increase Conversion Rate',
                description: 'Identify and fix issues preventing customers from completing purchases'
              },
              {
                icon: '🔍',
                title: 'Improve SEO Rankings',
                description: 'Optimize meta tags, content, and technical SEO for better Google visibility'
              },
              {
                icon: '⚡',
                title: 'Boost Page Speed',
                description: 'Faster loading times lead to lower bounce rates and higher sales'
              },
              {
                icon: '💰',
                title: 'Maximize Revenue',
                description: 'Implement upsells, cross-sells, and optimization features that increase AOV'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: 'Is Earn really free to use?',
                answer: 'Yes! Earn is completely free forever. No credit card required, no hidden fees, no trial periods. We provide unlimited audits and comprehensive reports at no cost.'
              },
              {
                question: 'How long does a Shopify store audit take?',
                answer: 'Our auditor completes a full analysis of your store in approximately 60 seconds. You\'ll get instant results with detailed recommendations right on your screen.'
              },
              {
                question: 'Do I need a Shopify account to use Earn?',
                answer: 'No, you don\'t need any account to audit a store. Just enter any Shopify store URL and get instant results. However, the tool works best with Shopify stores.'
              },
              {
                question: 'What makes Earn different from other audit tools?',
                answer: 'Earn is specifically designed for Shopify stores and e-commerce. We check sales optimization features like upsells, abandoned cart recovery, and conversion tracking that generic website auditors miss.'
              },
              {
                question: 'Can I audit my competitors\' stores?',
                answer: 'Yes! You can audit any public Shopify store URL to benchmark your performance against competitors and identify features they\'re using successfully.'
              },
              {
                question: 'Will implementing these recommendations actually increase sales?',
                answer: 'Yes. Our recommendations are based on proven e-commerce best practices. Stores that fix critical issues typically see 15-40% improvement in conversion rates within weeks.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Optimize Your Shopify Store?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get your free comprehensive audit report in 60 seconds and start increasing your revenue today.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center gap-2"
          >
            <span>🚀</span>
            Start Free Audit Now
          </button>
          <p className="mt-6 text-sm opacity-75">
            No credit card required • Instant results • 100% free forever
          </p>
        </section>

        {/* About Section */}
        <section className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              About Earn - Your Online Store Partner
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Earn is developed and maintained by <strong className="text-blue-600">ScaleFront.io</strong>, a leading Shopify development and optimization agency. We've helped hundreds of e-commerce brands increase their revenue through technical optimization, conversion rate improvements, and strategic feature implementation.
            </p>
            <p className="text-gray-600 text-sm">
              Our expertise in Shopify development, performance optimization, and e-commerce best practices is built into every aspect of this free auditor tool. We created Earn to help Shopify store owners identify opportunities they might be missing and provide clear, actionable steps to improve their online business.
            </p>
          </div>
        </section>
        </div>
      </div>
    </>
  );
}
