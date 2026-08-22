const FAQS = [
  {
    q: "How much does it cost to build a custom Shopify store in India?",
    a: "Custom Shopify store development starts at ₹25,000 for standard theme setups. Full custom Liquid themes range between ₹50,000 and ₹75,000, while complex headless builds start at ₹1,00,000 depending on integrations and catalog size.",
  },
  {
    q: "Do you use pre-made Shopify themes or build from scratch?",
    a: "We build custom themes from scratch using clean Liquid, CSS, and vanilla JavaScript. We do not use bloated marketplace themes, ensuring fast page load speeds and custom sections you can easily edit yourself.",
  },
  {
    q: "How long does a custom Shopify or Headless build take?",
    a: "A custom Shopify theme build typically takes 2 to 3 weeks from start to launch. Larger projects involving headless Next.js storefronts, custom apps, or deep ERP connections take 4 to 6 weeks.",
  },
  {
    q: "Why work with ScaleFront instead of a large agency?",
    a: "You work directly with the developer building your store instead of account managers or project middlemen. This means faster turnarounds, clear technical communication, and no inflated agency markups on your build.",
  },
  {
    q: "What is the difference between custom Liquid themes and Headless Shopify?",
    a: "Custom Liquid themes run directly on Shopify's native theme engine and are easy for merchants to edit. Headless uses a separate Next.js frontend, offering custom web app functionality for a higher development investment.",
  },
  {
    q: "Will my store lose SEO ranking during a migration to Shopify?",
    a: "No. We carefully map your existing page URLs, product links, and metadata to Shopify. We set up 301 redirects for every old page so your Google rankings and organic search traffic remain protected.",
  },
  {
    q: "Do you provide support after the store launches?",
    a: "Yes. Every build includes a post-launch support period to fix bugs, adjust layouts, and help your team update content. We also offer monthly retainers for ongoing improvements, speed checks, and new features.",
  },
  {
    q: "Can you connect our warehouse or ERP system to Shopify?",
    a: "Yes. We use the Shopify Admin API and webhooks to build private integrations with warehouse tools, ERPs like NetSuite and SAP, custom CRMs, and 3PL fulfillment platforms for automatic inventory updates.",
  },
  {
    q: "How do you improve store conversion rates during a build?",
    a: "We build fast slide-out carts with free shipping bars, clean 1-click variant selectors, clear mobile navigation, and trust badges, removing friction so more visitors complete their purchase without abandoning carts.",
  },
  {
    q: "Can I edit text and replace images myself after launch?",
    a: "Yes. All custom themes are built with Shopify Online Store 2.0. You can easily add sections, swap banner photos, edit product descriptions, and change homepage blocks in the Shopify admin without touching code.",
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
            Common questions about pricing, timelines, custom themes, and our
            development process.
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
