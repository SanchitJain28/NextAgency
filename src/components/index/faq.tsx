const FAQS = [
  {
    q: "How much does it cost to build a custom Shopify store in India?",
    a: "The cost of ecommerce website development in India varies based on complexity. A bespoke, highly customized Shopify store typically starts around ₹20,000, while a full headless Shopify architecture (using Next.js or Medusa.js) ranges from ₹50,000 to ₹1,00,000. Most full custom Shopify stores range between ₹50,000 to ₹75,000. We do not compete on being the cheapest; we compete on delivering enterprise-grade code that scales without breaking.",
  },
  {
    q: "Do you use pre-made Shopify themes or build from scratch?",
    a: "We never use bloated, pre-made marketplace themes. Every storefront we deliver is 100% custom-designed and built from scratch using clean Liquid, CSS, and vanilla JS (or a modern React framework for headless). This guarantees perfect Core Web Vitals scores and total control over your conversion funnel.",
  },
  {
    q: "How long does a custom Shopify or Headless build take?",
    a: "A standard custom Shopify theme development project usually takes 1 to 2 weeks from kickoff to launch. More complex projects, such as migrating a large catalog to a Headless Shopify architecture or integrating custom ERP systems, typically require 3 to 4 weeks of dedicated engineering.",
  },
  {
    q: "Why should I hire a Shopify development company instead of a freelancer?",
    a: "While freelancers can be cost-effective for simple tasks, scaling an e-commerce brand requires a multi-disciplinary approach. When you hire a top-tier Shopify development agency, you get a cohesive team of UI/UX designers, frontend engineers, backend integration experts, and QA testers working in unison to ensure your store can handle massive traffic spikes.",
  },
  {
    q: "What is the difference between traditional Shopify Plus and Headless Shopify?",
    a: "Traditional Shopify Plus uses Shopify's Liquid templating engine to render the frontend. Headless Shopify separates the backend (Shopify) from the frontend (built with Next.js, Remix, etc.). Headless provides sub-second page loads, limitless URL structures, and extreme customization, making it ideal for brands pushing boundaries.",
  },
  {
    q: "Will my store lose its SEO ranking during a migration to Shopify?",
    a: "No. Data and SEO migration is a critical part of our process. We meticulously map your existing URLs to your new Shopify store and implement strict 301 redirects to ensure your organic traffic and domain authority are completely preserved during the transition.",
  },
  {
    q: "Do you provide ongoing support after the store launches?",
    a: "Yes. Post-launch support is crucial for e-commerce. We offer retainer agreements for ongoing CRO (Conversion Rate Optimization), A/B testing, custom app development, and technical monitoring to ensure your store continues to grow and perform perfectly.",
  },
  {
    q: "Can you integrate our existing ERP/CRM with Shopify?",
    a: "Absolutely. We are experts in custom API development. We frequently integrate complex backend systems like NetSuite, Salesforce, SAP, and custom fulfillment software with Shopify to automate your operations and sync inventory in real-time.",
  },
  {
    q: "Why do you focus on Conversion Rate Optimization (CRO) in your builds?",
    a: "Beautiful design is useless if it doesn't sell. Our engineering process is heavily data-driven. We implement high-speed carts, frictionless checkouts, strategic micro-animations, and trust-building UI elements specifically designed to increase your Average Order Value (AOV) and overall conversion rate.",
  },
  {
    q: "What makes your agency different from other Shopify developers in India?",
    a: "We operate as a technical partner, not a task-runner. We don't have account managers playing telephone between you and the developers. You work directly with senior engineers. We focus exclusively on highly technical, custom builds for ambitious brands, maintaining a quality standard that rivals any top global agency.",
  },
];

export default function FAQ() {
  return (
    <section className="py-16 lg:py-24 px-7 bg-[var(--sf-paper)] border-t-2 border-[var(--sf-ink)]">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-12">
          <div className="text-[13px] font-semibold tracking-[0.14em] uppercase text-[var(--sf-primary)] mb-[14px]">
            FAQ
          </div>
          <h2
            className="m-0 leading-[1.02] tracking-[-0.03em] text-[var(--sf-ink)]"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px, 4.4vw, 52px)",
              textWrap: "balance",
            }}
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-[17px] text-[var(--sf-ink-soft)] font-medium leading-[1.5]">
            Everything you need to know about working with an elite Shopify
            development partner.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {FAQS.map((f, i) => (
            <details
              key={i}
              className="group border-2 border-[var(--sf-ink)] bg-white overflow-hidden transition-all duration-300 hover:shadow-[4px_4px_0_var(--sf-primary)]"
              style={{
                boxShadow: "4px 4px 0 var(--sf-ink)",
              }}
            >
              <summary className="p-5 md:p-6 text-[17px] font-bold tracking-[0.01em] cursor-pointer flex items-start justify-between list-none select-none text-[var(--sf-ink)] [&::-webkit-details-marker]:hidden">
                <span className="pr-6 leading-tight">{f.q}</span>
                <span className="flex-shrink-0 w-6 h-6 border-2 border-[var(--sf-ink)] rounded-full flex items-center justify-center text-[var(--sf-ink)] bg-[var(--sf-gold)] group-open:bg-[var(--sf-primary)] transition-colors">
                  <svg
                    className="w-3 h-3 group-open:rotate-180 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <div className="px-5 md:px-6 pb-6 text-[15.5px] text-[var(--sf-ink-soft)] leading-[1.65] font-medium border-t-2 border-dashed border-[color-mix(in_srgb,var(--sf-ink)_20%,transparent)] mt-1 pt-5">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
