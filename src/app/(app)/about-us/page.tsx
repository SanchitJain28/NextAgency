import Footer from "@/components/header-footer/Footer";
import Header from "@/components/header-footer/Header";
import { MovingReviews } from "@/components/reviews/MovingReviews";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Top Com Agency - Headless WooCommerce & Next.js eCommerce Experts",
  description: "Learn how we transformed from slow eCommerce struggles to building lightning-fast headless WooCommerce and Shopify Next.js stores. Expert developers solving real eCommerce problems with 24/7 support.",
  keywords: [
    "headless WooCommerce Next.js experts",
    "WooCommerce speed optimization specialists",
    "Shopify headless frontend developers",
    "Next.js eCommerce development agency",
    "how to make WooCommerce faster",
    "WooCommerce Next.js migration experts",
    "headless eCommerce India",
    "fast eCommerce website development"
  ],
  openGraph: {
    title: "About Top Com Agency - From Slow Stores to Lightning-Fast eCommerce",
    description: "We've been where you are - dealing with slow, unreliable eCommerce sites. Now we help businesses build fast, headless WooCommerce and Shopify stores with Next.js.",
    type: "article",
    publishedTime: "2025-01-01T00:00:00.000Z", // Update with actual date
    authors: ["Top Com Agency"],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main
      className="min-h-[60vh] bg-[#FFFFFF] text-[#333333]"
    >
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Top Com Agency",
              "description": "Expert Next.js eCommerce development agency specializing in headless WooCommerce and Shopify solutions",
              "founder": {
                "@type": "Person",
                "description": "Experienced developers who solved their own eCommerce speed problems"
              },
              "specialty": [
                "Headless WooCommerce Next.js Development",
                "WooCommerce Speed Optimization",
                "Shopify Next.js Migration",
                "eCommerce Performance Optimization"
              ],
              "serviceArea": "India"
            }
          })
        }}
      />

      <Header />
      
      <article className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <header className="mb-6">
          <h1 className="text-pretty text-3xl font-bold md:text-4xl">
            About Top Com Agency - Your Headless WooCommerce & Next.js Experts
          </h1>
          <span
            aria-hidden="true"
            className="mt-3 block h-1 w-16 rounded bg-[#16A34A]"
          />
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            From struggling with slow eCommerce sites to becoming India&apos;s leading 
            <strong> headless WooCommerce Next.js development agency</strong>. 
            We&apos;ve been in your shoes - and we know exactly how to fix your speed problems.
          </p>
        </header>

        <section className="flex flex-col gap-6 leading-relaxed">
          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Why We Started Building Fast eCommerce Websites
          </h2>
          
          <p>
            We were tired of running a <strong>slow, unreliable eCommerce website</strong>. 
            Our hosting would go down, DDoS attacks would hit, the UI broke constantly — 
            and our traditional setup only made things worse. The theme was overloaded with 
            features we didn&apos;t even need (we used maybe 40% of it). Customers started 
            complaining: <em>&apos;Why is your website always slow or down?&apos;</em>
          </p>

          <p>
            As experienced developers, we couldn&apos;t ignore this anymore. So we made the 
            switch to <strong>headless WooCommerce with Next.js</strong> — and everything changed.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            Why We Choose WooCommerce Over Shopify for Headless Development
          </h3>

          <p>
            We tried Shopify first, but it turned out to be less customizable and more 
            expensive for our clients. A 2% transaction fee on every sale? With limited 
            flexibility for <strong>Shopify headless frontend</strong> customization? 
            No thanks. Everything required another app, and while that works for some 
            businesses, it wasn&apos;t the right solution for building truly 
            <strong> fast eCommerce websites</strong>.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            The Results: Lightning-Fast WooCommerce Performance
          </h3>

          <p>
            Now, our customers are thrilled. With our <strong>WooCommerce Next.js migration</strong> 
            approach, we can customize everything exactly how businesses need it. The checkout 
            is smoother, upselling works seamlessly, and complex features like gift boxes — 
            something that was clunky on traditional WordPress or Shopify — now work perfectly. 
            That&apos;s the real benefit of a <strong>custom headless eCommerce website</strong> 
            built by experienced developers.
          </p>

          <p>
            And with today&apos;s AI tools, it&apos;s possible to achieve <strong>WooCommerce speed optimization</strong> 
            and advanced functionality with fewer resources than ever before. Honestly, 
            it&apos;s the perfect time to switch to <strong>headless eCommerce architecture</strong>.
          </p>
        </section>

        <section
          className="mt-10 rounded-md p-6 md:p-8 bg-[#F1F5F9]"
        >
          <h2 className="mb-4 text-pretty text-2xl font-semibold">
            Why Choose Top Com Agency for Your eCommerce Transformation?
          </h2>
          
          <div className="flex flex-col gap-6 leading-relaxed">
            <p>
              We know the exact struggles you&apos;re facing because <strong>we&apos;ve faced them too</strong>. 
              Whether it&apos;s figuring out <em>&apos;how to make WooCommerce faster&apos;</em> or planning 
              a complete <strong>Shopify to Next.js migration</strong>, we don&apos;t just build 
              websites — we solve the problems that keep eCommerce owners up at night.
            </p>

            <div className="bg-white p-4 rounded border-l-4 border-green-500">
              <h3 className="font-semibold text-lg mb-2">Our Guarantee:</h3>
              <ul className="space-y-2 text-sm">
                <li>✅ <strong>24/7 Support</strong> - We maintain your site long-term</li>
                <li>✅ <strong>Speed Optimization</strong> - 90+ PageSpeed scores guaranteed</li>
                <li>✅ <strong>Headless Expertise</strong> - WooCommerce & Shopify specialists</li>
                <li>✅ <strong>India-Based Team</strong> - Affordable, high-quality development</li>
              </ul>
            </div>

            <p>
              We don&apos;t just hand over the website and disappear — we&apos;re your long-term 
              <strong> headless eCommerce development partners</strong>. Whether you need 
              help with <strong>WooCommerce 500+ products site optimization</strong> or 
              want to understand the <strong>Shopify Next.js migration cost in India</strong>, 
              we&apos;re here to guide you through every step.
            </p>

            <p>
              <strong>We&apos;re the best team you can have</strong> to ensure your website is 
              fast, secure, scalable, and built to grow your business for years to come.
            </p>
          </div>
        </section>

        {/* FAQ Section for Additional SEO */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">
                How do you make WooCommerce websites faster?
              </h3>
              <p className="text-gray-700">
                We use <strong>headless WooCommerce with Next.js</strong> architecture, 
                which separates the frontend from the backend. This allows for lightning-fast 
                loading times, better SEO, and superior user experience compared to traditional 
                WordPress themes.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">
                What&apos;s the difference between headless WooCommerce and regular WooCommerce?
              </h3>
              <p className="text-gray-700">
                Traditional WooCommerce uses WordPress themes, which can be slow and limiting. 
                <strong>Headless WooCommerce</strong> uses WooCommerce as a backend (for managing 
                products, orders) while serving a modern Next.js frontend that&apos;s 10x faster and 
                infinitely more customizable.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">
                Do you handle Shopify migrations too?
              </h3>
              <p className="text-gray-700">
                Yes! We specialize in both <strong>WooCommerce and Shopify headless migrations</strong>. 
                We can help you move from either platform to a faster, more flexible Next.js 
                frontend while keeping your preferred backend for managing products and orders.
              </p>
            </div>
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