import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Shopify Migration Services | WooCommerce, Magento & WordPress",
  },
  description:
    "Move your WooCommerce, Magento, or WordPress store to Shopify. We handle products, customers, orders, metafields, media, URLs, testing, and launch preparation.",
  alternates: {
    canonical: "/services/shopify-migration-services",
  },
  openGraph: {
    title: "Shopify Migration Services | WooCommerce, Magento & WordPress",
    description:
      "Move your WooCommerce, Magento, or WordPress store to Shopify. We handle products, customers, orders, metafields, media, URLs, testing, and launch preparation.",
    url: "https://www.scalefront.io/services/shopify-migration-services",
    siteName: "ScaleFront",
    type: "website",
    images: [
      {
        url: "https://scalefront.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shopify Migration Services by ScaleFront",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Migration Services | WooCommerce, Magento & WordPress",
    description:
      "Move your WooCommerce, Magento, or WordPress store to Shopify. We handle products, customers, orders, metafields, media, URLs, testing, and launch preparation.",
    images: ["https://scalefront.io/og-image.jpg"],
  },
};

export default function ShopifyMigrationServicesPage() {
  const faqData = [
    {
      question: "Will my WooCommerce store go offline during the migration?",
      answer:
        "Your WooCommerce store can remain live while the Shopify store is being prepared. We test the new store before launch and plan the final domain switch around the remaining migration work.",
    },
    {
      question: "Can you migrate my products and variants?",
      answer:
        "Yes. We map WooCommerce products, variations, attributes, images, and related data to the appropriate Shopify products, variants, options, and metafields.",
    },
    {
      question: "Can you migrate my customer data?",
      answer:
        "Yes. Customer profiles such as names, emails, addresses, and other supported fields can be migrated. Customer passwords cannot be transferred from WooCommerce to Shopify, so account access needs a separate setup process.",
    },
    {
      question: "Can you migrate historical orders?",
      answer:
        "Yes. Historical orders need separate handling because Shopify's normal product CSV doesn't provide a general CSV import for past orders. Depending on the store, we can use APIs or a migration application.",
    },
    {
      question: "What happens to my WooCommerce plugins?",
      answer:
        "We review each important plugin to understand what it does and what data or business process depends on it. Then we decide whether Shopify's native features, an app, or custom development is the right replacement.",
    },
    {
      question: "Will my old URLs still work?",
      answer:
        "Important old URLs can be mapped to their new Shopify URLs using redirects. We review the existing URL structure before migration and test the redirects after the new store launches.",
    },
    {
      question: "How long does a Shopify migration take?",
      answer:
        "It depends on the catalog size, data structure, integrations, custom functionality, and testing requirements. A simple migration can be relatively straightforward, while a complex store needs more planning and development time.",
    },
    {
      question: "Do I need Shopify Plus for my migration?",
      answer:
        "No. Many stores can migrate to standard Shopify plans. Shopify Plus becomes relevant when the business has requirements that need Plus-specific features or enterprise-level configuration.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://scalefront.io/services/shopify-migration-services#service",
        name: "Shopify Migration Services",
        serviceType: "Shopify Store Migration",
        description:
          "Move your WooCommerce, Magento, or WordPress store to Shopify. We handle products, customers, orders, metafields, media, integrations, URLs, testing, and launch preparation.",
        provider: {
          "@type": "Organization",
          name: "ScaleFront",
          url: "https://scalefront.io",
          logo: "https://scalefront.io/logo/updated_logo.png",
          email: "hello@scalefront.io",
          telephone: "+919650296375",
        },
        areaServed: "Worldwide",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Shopify Migration Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "WooCommerce to Shopify Migration",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Magento to Shopify Migration",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "WordPress to Shopify Migration",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "301 Redirect Mapping & SEO Preservation",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://scalefront.io/services/shopify-migration-services#faq",
        mainEntity: faqData.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://scalefront.io",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://scalefront.io/services/custom-shopify-development",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Shopify Migration Services",
            item: "https://scalefront.io/services/shopify-migration-services",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article
        className="min-h-screen bg-[var(--sf-paper)] text-[var(--sf-ink)] selection:bg-[var(--sf-primary-soft)] selection:text-[var(--sf-ink)]"
        style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
      >
        {/* Top Breadcrumbs Bar */}
        <div className="border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="hover:text-[var(--sf-primary)] transition-colors uppercase font-bold"
              >
                Home
              </Link>
              <span className="text-[var(--sf-ink-mute)]">/</span>
              <span className="text-[var(--sf-ink-mute)] uppercase">
                Services
              </span>
              <span className="text-[var(--sf-ink-mute)]">/</span>
              <span className="text-[var(--sf-primary)] font-bold uppercase">
                Shopify Migration Services
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--sf-primary-soft)] border border-[var(--sf-primary)] text-[var(--sf-ink)] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--sf-primary)] animate-pulse" />
                Data &amp; Workflow Continuity
              </span>
              <span className="hidden sm:inline-block text-[var(--sf-ink-mute)]">
                Tested Before Launch
              </span>
            </div>
          </div>
        </div>

        {/* MAIN CONTAINER */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* HERO SECTION */}
          <header
            id="hero"
            className="mb-16 pb-12 border-b-2 border-[var(--sf-ink)]"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[var(--sf-ink)] bg-[var(--sf-paper)] text-xs font-mono font-bold uppercase tracking-wider mb-6">
              <RefreshCw className="w-3.5 h-3.5 text-[var(--sf-primary)]" />
              <span>WooCommerce, Magento &amp; WordPress</span>
            </div>

            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--sf-ink)] leading-[1.05] mb-6 max-w-4xl"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Shopify Migration Services
            </h1>

            <p className="text-xl sm:text-2xl text-[var(--sf-ink-soft)] leading-relaxed mb-4 max-w-3xl">
              Move your WooCommerce, Magento, or WordPress store to Shopify without losing the data and workflows your business depends on.
            </p>

            <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed mb-8 max-w-3xl">
              We handle product and variant data, customer records, order history, custom fields, media, integrations, and old URLs. We first map the existing store, test the migration, and verify the new Shopify store before launch.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact-us"
                className="px-7 py-3.5 border-2 border-[var(--sf-ink)] bg-[var(--sf-primary)] hover:bg-[var(--sf-primary-deep)] text-white text-sm font-bold uppercase tracking-wider transition-all hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 inline-flex items-center gap-2.5"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  boxShadow: "var(--sf-shadow-sm)",
                }}
              >
                <Image
                  src="/icons/call.png"
                  alt="Call icon"
                  width={18}
                  height={18}
                  className="w-4 h-4 object-contain brightness-0 invert"
                />
                Plan Your Migration
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919650296375"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] hover:bg-white text-[var(--sf-ink)] text-sm font-bold uppercase tracking-wider transition-all hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 inline-flex items-center gap-2.5"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  boxShadow: "var(--sf-shadow-sm)",
                }}
              >
                <Image
                  src="/icons/whatsapp.png"
                  alt="WhatsApp icon"
                  width={18}
                  height={18}
                  className="w-4.5 h-4.5 object-contain"
                />
                Chat on WhatsApp
              </a>
            </div>
          </header>

          {/* SECTION 1: WHAT A SHOPIFY MIGRATION ACTUALLY INVOLVES */}
          <section id="what-it-involves" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              What a Shopify migration actually involves
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed">
              <p>
                A Shopify migration is more than exporting products from your old store and importing them into Shopify.
              </p>
              <p>
                Your existing store may contain products and variants, customer records, order history, custom fields, images, URLs, and data created by plugins or other integrations. Not all of that maps directly to Shopify.
              </p>
              <p>
                The first step is to identify what your current store contains and decide where each piece of data belongs in Shopify.
              </p>
              <p>For example:</p>

              <div className="border-l-2 border-[var(--sf-primary)] pl-5 space-y-2 text-base text-[var(--sf-ink-soft)] my-6 font-mono">
                <p>
                  • <strong>WooCommerce product data</strong> → Shopify products and variants
                </p>
                <p>
                  • <strong>Custom fields</strong> → Shopify metafields
                </p>
                <p>
                  • <strong>Categories</strong> → Shopify collections and product data
                </p>
                <p>
                  • <strong>Old URLs</strong> → Shopify URLs + redirects
                </p>
                <p>
                  • <strong>Order history</strong> → API-based migration or another supported import method
                </p>
              </div>

              <p>
                The exact approach depends on how your store is built. A simple catalog may need very little transformation, while a store with custom fields, complex products, subscriptions, or external integrations needs more planning.
              </p>
              <p className="font-bold text-[var(--sf-ink)]">
                This is where the migration should start: understanding the existing store before moving the data.
              </p>
            </div>
          </section>

          {/* SECTION 2: WOOCOMMERCE PRODUCTS -> SHOPIFY PRODUCTS AND VARIANTS */}
          <section id="products-variants" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              WooCommerce products → Shopify products and variants
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed">
              <p>
                WooCommerce and Shopify organize product data differently, so a product export cannot always be imported into Shopify without changes. WooCommerce supports product types such as simple, variable, grouped, external, virtual, and downloadable products, while Shopify uses a product-and-variant structure.
              </p>
              <p>
                For a migration, we first identify how each WooCommerce product is structured and then map it to the closest Shopify structure.
              </p>
              <p>For example:</p>

              <div className="border-l-2 border-[var(--sf-ink)] pl-5 space-y-2 text-base text-[var(--sf-ink-soft)] my-6 font-mono">
                <p>
                  • <strong>Simple product</strong> → Shopify product with a variant
                </p>
                <p>
                  • <strong>Variable product</strong> → Shopify product with its variant options
                </p>
                <p>
                  • <strong>Product attributes</strong> → Shopify options or metafields, depending on how they are used
                </p>
                <p>
                  • <strong>WooCommerce product slug</strong> → Shopify product handle
                </p>
                <p>
                  • <strong>Product images</strong> → Shopify product media
                </p>
              </div>

              <p>
                The important part is the <strong>variant mapping</strong>. A WooCommerce store may use attributes such as size, color, material, or finish to create variations. Those attributes need to be mapped into Shopify&apos;s product and variant structure rather than simply copied as separate fields.
              </p>
              <p>
                Some products also need a different approach. Grouped or external products may not have a direct Shopify equivalent, while products with complex variation structures may need to be split, reorganized, or created programmatically.
              </p>
              <p className="font-bold text-[var(--sf-ink)]">
                The goal is not just to move the product records. It is to make sure the products still behave correctly after the migration.
              </p>
            </div>
          </section>

          {/* SECTION 3: WOOCOMMERCE CUSTOM FIELDS -> SHOPIFY METAFIELDS */}
          <section id="custom-fields" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              WooCommerce custom fields → Shopify metafields
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed">
              <p>
                Customer and product data often contain information that is not part of the standard WooCommerce fields.
              </p>
              <p>For example, a WooCommerce store might have fields such as:</p>

              <div className="my-6 p-5 border-2 border-[var(--sf-ink)] bg-white shadow-[3px_3px_0_var(--sf-ink)] font-mono text-sm text-[var(--sf-ink)] leading-relaxed max-w-md">
                <pre>{`material
technical_drawing
care_instructions
product_width
product_height`}</pre>
              </div>

              <p>
                These don&apos;t simply become ordinary Shopify product fields. We first decide what each field represents and then map it to the appropriate Shopify metafield.
              </p>
              <p>For example:</p>

              <div className="my-6 p-5 border-2 border-[var(--sf-ink)] bg-white shadow-[3px_3px_0_var(--sf-ink)] font-mono text-sm text-[var(--sf-ink)] leading-relaxed max-w-md">
                <pre>{`material
        ↓
custom.material

product_width
        ↓
custom.product_width

care_instructions
        ↓
custom.care_instructions`}</pre>
              </div>

              <p>
                The metafield definitions need to be set up in Shopify before the corresponding data is imported. Simple product-level metafields can be handled through Shopify&apos;s CSV tools when they use supported data types, while more complex data or variant-level metafields may require programmatic processing through the Admin API.
              </p>
              <p className="font-bold text-[var(--sf-ink)]">
                The important part is not just moving the values. We need to preserve what those fields are used for in the old store and make sure the new Shopify theme, apps, and workflows can use the migrated data correctly.
              </p>
            </div>
          </section>

          {/* SECTION 4: WOOCOMMERCE MEDIA -> SHOPIFY MEDIA */}
          <section id="media" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              WooCommerce media → Shopify media
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed">
              <p>
                Product images and other media are handled differently in WooCommerce and Shopify.
              </p>
              <p>
                In WooCommerce, product images are usually stored on the WordPress server under <code className="px-1.5 py-0.5 bg-[var(--sf-paper-sunken)] border border-[var(--sf-ink)] font-mono text-sm">/wp-content/uploads/</code> and connected to products through the WordPress Media Library. Shopify handles product media through its own hosted media system.
              </p>
              <p>
                During a migration, Shopify&apos;s CSV importer uses the image URL from the old store to fetch the image. The image needs to be available through a public HTTP or HTTPS URL so Shopify can retrieve it.
              </p>
              <p>For example:</p>

              <div className="my-6 p-5 border-2 border-[var(--sf-ink)] bg-white shadow-[3px_3px_0_var(--sf-ink)] font-mono text-sm text-[var(--sf-ink)] leading-relaxed max-w-xl overflow-x-auto">
                <pre>{`WooCommerce image
/wp-content/uploads/2026/01/product-image.jpg
        ↓
Public image URL
https://oldstore.com/wp-content/uploads/2026/01/product-image.jpg
        ↓
Shopify import
        ↓
Shopify-hosted product media`}</pre>
              </div>

              <p>
                This is why the old WooCommerce store needs to remain available while the media is being imported. If Shopify cannot reach the source image, that image can fail to transfer.
              </p>
              <p>
                For larger or programmatic migrations, media can also be handled through Shopify&apos;s API. In that case, the migration process needs to account for the fact that Shopify may still be processing an uploaded file before it can be attached to a product variant.
              </p>
              <p className="font-bold text-[var(--sf-ink)]">
                The goal is to transfer the media itself as well as the connection between each image and the correct product or variant.
              </p>
            </div>
          </section>

          {/* SECTION 5: WOOCOMMERCE CUSTOMERS -> SHOPIFY CUSTOMERS */}
          <section id="customers" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              WooCommerce customers → Shopify customers
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed">
              <p>
                Customer data can be moved from WooCommerce to Shopify, but the process is more than copying names and email addresses.
              </p>
              <p>
                Shopify supports importing customer profiles through CSV. The file can include information such as names, email addresses, phone numbers, addresses, marketing preferences, tags, and other supported fields.
              </p>
              <p>For example:</p>

              <div className="my-6 p-5 border-2 border-[var(--sf-ink)] bg-white shadow-[3px_3px_0_var(--sf-ink)] font-mono text-sm text-[var(--sf-ink)] leading-relaxed max-w-md">
                <pre>{`WooCommerce customer
        ↓
First name
Last name
Email
Phone
Address
Tags
Custom data
        ↓
Shopify customer profile`}</pre>
              </div>

              <p>
                The main limitation is <strong>customer passwords</strong>. Shopify does not allow passwords from another ecommerce platform to be migrated through a customer CSV, so existing customers need to complete Shopify&apos;s supported sign-in or account setup process.
              </p>
              <p>
                With Shopify&apos;s current customer account system, customers can sign in using a one-time verification code sent to their email instead of creating a traditional password.
              </p>
              <p>
                For stores with additional customer data, we first identify which fields can be imported directly and which need to be mapped to Shopify metafields or handled through an API-based process.
              </p>
              <p className="font-bold text-[var(--sf-ink)]">
                The goal is to move the customer profiles correctly while making sure customers can still access their accounts after the migration.
              </p>
            </div>
          </section>

          {/* SECTION 6: WOOCOMMERCE ORDERS -> SHOPIFY HISTORICAL ORDERS */}
          <section id="orders" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              WooCommerce orders → Shopify historical orders
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed">
              <p>
                Past orders are one of the parts of a WooCommerce to Shopify migration that usually needs more planning.
              </p>
              <p>
                Shopify&apos;s normal product CSV can be used to import products, and customer data can also be imported separately. Historical orders are different. Shopify&apos;s migration documentation lists migration apps, the Order API, and the Transaction API as options for moving historical orders.
              </p>
              <p>
                The migration also needs to happen in the right order. Products should be available before historical orders are connected to them, and customer records should be handled before importing orders that need to reference those customers.
              </p>
              <p>A simplified flow looks like this:</p>

              <div className="my-6 p-5 border-2 border-[var(--sf-ink)] bg-white shadow-[3px_3px_0_var(--sf-ink)] font-mono text-sm text-[var(--sf-ink)] leading-relaxed max-w-md">
                <pre>{`WooCommerce
    ↓
Products + variants
    ↓
Shopify products
    ↓
Customers
    ↓
Shopify customers
    ↓
Historical orders
    ↓
Shopify order records`}</pre>
              </div>

              <p>
                The order data itself can contain much more than an order number. Depending on the store, we may need to account for line items, quantities, prices, taxes, discounts, customer information, payment information, fulfillment status, refunds, and order dates.
              </p>
              <p>
                There is also an important difference between WooCommerce stores. Modern WooCommerce stores can use High-Performance Order Storage (HPOS), which stores order data in dedicated tables instead of the older WordPress post and postmeta structure. A migration process needs to determine which storage system the source store is using before extracting the order data.
              </p>
              <p>
                For a small store, a migration app may be enough. For a store with a large order history or custom order data, an API-based migration can give more control over how the records are transformed and imported.
              </p>
              <p className="font-bold text-[var(--sf-ink)]">
                The goal is not just to make the old orders appear in Shopify. The customer, products, dates, totals, and other important order information should remain connected and usable after the migration.
              </p>
            </div>
          </section>

          {/* SECTION 7: WOOCOMMERCE URLS -> SHOPIFY URLS AND SEO REDIRECTS */}
          <section id="urls-redirects" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              WooCommerce URLs → Shopify URLs and SEO redirects
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed">
              <p>
                Your existing WooCommerce store may have years of indexed product, category, blog, and other URLs. When you move to Shopify, the URL structure can change, so those old URLs need to be mapped to the correct new URLs.
              </p>
              <p>For example:</p>

              <div className="my-6 p-5 border-2 border-[var(--sf-ink)] bg-white shadow-[3px_3px_0_var(--sf-ink)] font-mono text-sm text-[var(--sf-ink)] leading-relaxed max-w-md">
                <pre>{`WooCommerce
/shop/category/product-name
        ↓
Shopify
/products/product-name`}</pre>
              </div>

              <p>
                The old URL should not simply be deleted. Where the content has a suitable replacement, we create a <strong>301 redirect</strong> from the old URL to the new one. Shopify supports importing URL redirects through CSV, which can be useful when a store has a large number of URLs to migrate.
              </p>
              <p>Before the migration, we can build a URL mapping that looks like:</p>

              <div className="my-6 overflow-x-auto border-2 border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-ink)] bg-white">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
                      <th
                        className="p-4 sm:p-5 text-sm sm:text-base font-bold text-[var(--sf-ink)] border-r-2 border-[var(--sf-ink)] w-2/5"
                        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                      >
                        Old URL
                      </th>
                      <th
                        className="p-4 sm:p-5 text-sm sm:text-base font-bold text-[var(--sf-ink)] border-r-2 border-[var(--sf-ink)] w-2/5"
                        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                      >
                        New URL
                      </th>
                      <th
                        className="p-4 sm:p-5 text-sm sm:text-base font-bold text-[var(--sf-ink)]"
                        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-2 divide-[var(--sf-ink)]/15 text-xs sm:text-sm font-mono text-[var(--sf-ink)]">
                    <tr>
                      <td className="p-4 sm:p-5 border-r-2 border-[var(--sf-ink)]/15 align-top">
                        /shop/shoes/red-shoe
                      </td>
                      <td className="p-4 sm:p-5 border-r-2 border-[var(--sf-ink)]/15 align-top text-emerald-700 font-semibold">
                        /products/red-shoe
                      </td>
                      <td className="p-4 sm:p-5 align-top font-bold text-[var(--sf-primary)]">
                        301
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 sm:p-5 border-r-2 border-[var(--sf-ink)]/15 align-top">
                        /category/shoes
                      </td>
                      <td className="p-4 sm:p-5 border-r-2 border-[var(--sf-ink)]/15 align-top text-emerald-700 font-semibold">
                        /collections/shoes
                      </td>
                      <td className="p-4 sm:p-5 align-top font-bold text-[var(--sf-primary)]">
                        301
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 sm:p-5 border-r-2 border-[var(--sf-ink)]/15 align-top">
                        /about-us
                      </td>
                      <td className="p-4 sm:p-5 border-r-2 border-[var(--sf-ink)]/15 align-top text-emerald-700 font-semibold">
                        /pages/about-us
                      </td>
                      <td className="p-4 sm:p-5 align-top font-bold text-[var(--sf-primary)]">
                        301
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Not every old URL should point to the homepage. If a relevant replacement exists, we map the old URL to that page. If there is no suitable replacement, the URL may need a different treatment rather than creating a large number of irrelevant redirects.
              </p>
              <p>
                We also check the new URLs after launch to make sure the redirects work and important pages remain accessible to search engines.
              </p>
              <p className="font-bold text-[var(--sf-ink)]">
                The goal is to make the URL change predictable: old visitors and search engines should be sent to the right new page instead of hitting a broken link.
              </p>
            </div>
          </section>

          {/* SECTION 8: WOOCOMMERCE PLUGINS AND INTEGRATIONS -> SHOPIFY APPS AND APIS */}
          <section id="plugins-integrations" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              WooCommerce plugins and integrations → Shopify apps and APIs
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed">
              <p>
                A WooCommerce store can rely on plugins for much more than the storefront. A plugin may handle subscriptions, reviews, shipping, inventory, email marketing, accounting, or a custom business process.
              </p>
              <p>
                When moving to Shopify, those plugins cannot simply be copied to the new store. We first identify what each plugin does, what data it stores, and whether Shopify has a suitable app, native feature, or API-based alternative.
              </p>
              <p>For example:</p>

              <div className="my-6 p-5 border-2 border-[var(--sf-ink)] bg-white shadow-[3px_3px_0_var(--sf-ink)] font-mono text-sm text-[var(--sf-ink)] leading-relaxed max-w-md">
                <pre>{`WooCommerce plugin
        ↓
What does it actually do?
        ↓
Shopify native feature
        OR
Shopify app
        OR
Custom integration`}</pre>
              </div>

              <p>
                A product review plugin might be replaced with a Shopify review app. A custom inventory integration may need to connect to Shopify through the Admin API. A system that receives order updates can use Shopify webhooks so it can react when relevant events occur. For unique business workflows, explore our{" "}
                <Link
                  href="/services/custom-shopify-development"
                  className="text-[var(--sf-primary)] font-bold underline hover:text-[var(--sf-primary-deep)]"
                >
                  Custom Shopify Development
                </Link>{" "}
                services.
              </p>
              <p>
                We also check whether the old integration stores important data that needs to be migrated. Removing a plugin without understanding its data can leave products, customers, or business workflows incomplete.
              </p>
              <p>
                For each integration, we document what needs to move, what needs to be rebuilt, and what can be replaced rather than migrated.
              </p>
              <p className="font-bold text-[var(--sf-ink)]">
                The goal is to make sure the systems around your store continue working after the move, instead of treating the Shopify storefront as the only part of the migration.
              </p>
            </div>
          </section>

          {/* SECTION 9: HOW WE TEST THE MIGRATION BEFORE LAUNCH */}
          <section id="testing" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              How we test the migration before launch
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed">
              <p>
                We don&apos;t wait until launch day to find out that a product, image, customer, or integration did not migrate correctly.
              </p>
              <p>
                We first create the Shopify store and test the migration with a smaller part of the existing catalog. This lets us find mapping problems before the full migration.
              </p>
              <p>For example:</p>

              <div className="my-6 p-5 border-2 border-[var(--sf-ink)] bg-white shadow-[3px_3px_0_var(--sf-ink)] font-mono text-sm text-[var(--sf-ink)] leading-relaxed max-w-xs">
                <pre>{`Products        ✓
Variants        ✓
Images          ✓
Metafields      ✓
Customers       ✓
Orders          ✓
Redirects       ✓
Integrations    ✓
Checkout        ✓`}</pre>
              </div>

              <p>
                We compare the migrated data with the original store and investigate anything that does not match.
              </p>
              <p>
                For complex stores, this can include checking product options, custom fields, image associations, customer records, order information, and URLs before the final migration.
              </p>
              <p>
                We also test the storefront itself. Product pages, collections, search, cart, checkout, account access, and important integrations should all work on the new store before the domain is switched.
              </p>
              <p>
                After the final data sync, we run the same checks again so that changes made on the old store during development are not missed.
              </p>
              <p className="font-bold text-[var(--sf-ink)]">
                The purpose of the test migration is simple: find problems while the old store is still running, not after the new store is live.
              </p>
            </div>
          </section>

          {/* SECTION 10: OUR SHOPIFY MIGRATION PROCESS */}
          <section id="process" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Our Shopify migration process
            </h2>

            <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed mb-8">
              A migration is easier to manage when the work is done in stages. We start by understanding the existing store, test the new Shopify setup, and only switch the domain after the important data and store functions have been checked.
            </p>

            <div className="space-y-6">
              <div className="border-l-2 border-[var(--sf-primary)] pl-5">
                <h3
                  className="text-lg font-bold text-[var(--sf-ink)] mb-1"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  1. Audit the existing store
                </h3>
                <p className="text-base text-[var(--sf-ink-soft)] leading-relaxed">
                  We start by reviewing the current store and its data. This includes the product catalog, variants, customer data, order history, custom fields, plugins, integrations, and existing URLs. We also identify anything that needs special handling before the migration starts.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-5">
                <h3
                  className="text-lg font-bold text-[var(--sf-ink)] mb-1"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  2. Set up Shopify and test the migration
                </h3>
                <p className="text-base text-[var(--sf-ink-soft)] leading-relaxed">
                  We create the Shopify store and prepare the structures needed for the migration. Before moving the full catalog, we test a smaller set of products and related data. This helps us find problems with variants, metafields, images, and other mappings while the old store is still running.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-5">
                <h3
                  className="text-lg font-bold text-[var(--sf-ink)] mb-1"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  3. Rebuild the storefront and integrations
                </h3>
                <p className="text-base text-[var(--sf-ink-soft)] leading-relaxed">
                  Once the data structure is understood, we build or adapt the Shopify storefront on modern Online Store 2.0 standards (read about our{" "}
                  <Link
                    href="/services/theme-development"
                    className="text-[var(--sf-primary)] font-bold underline hover:text-[var(--sf-primary-deep)]"
                  >
                    Shopify Theme Development
                  </Link>{" "}
                  approach). We also configure the features and integrations that the old store depends on, such as payments, shipping, email marketing, reviews, inventory systems, or custom functionality.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-5">
                <h3
                  className="text-lg font-bold text-[var(--sf-ink)] mb-1"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  4. Sync changes from the old store
                </h3>
                <p className="text-base text-[var(--sf-ink-soft)] leading-relaxed">
                  Your existing store may continue receiving orders and customer activity while the Shopify store is being prepared. Before launch, we compare the new data with the latest data from the old store and transfer the changes that happened during development. This helps prevent new orders or customer records from being missed.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-5">
                <h3
                  className="text-lg font-bold text-[var(--sf-ink)] mb-1"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  5. Launch and check the new store
                </h3>
                <p className="text-base text-[var(--sf-ink-soft)] leading-relaxed">
                  Once the migration is ready, we switch the domain to Shopify. We then check the important parts of the new store, including redirects, product pages, customer accounts, checkout, integrations, and other critical workflows. The old store should remain available during the migration so we have a reliable source to compare against until the new store has been checked.
                </p>
              </div>
            </div>

            <p className="font-bold text-[var(--sf-ink)] mt-6 text-base sm:text-lg">
              The goal is simple: find and fix migration problems before they affect the live store.
            </p>
          </section>

          {/* SECTION 11: COMMON PROBLEMS DURING A WOOCOMMERCE -> SHOPIFY MIGRATION */}
          <section id="common-problems" className="mb-16 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Common problems during a WooCommerce → Shopify migration
            </h2>

            <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed mb-6">
              Not every WooCommerce store can be migrated by exporting the data and importing it into Shopify. The problems usually appear when the old store has custom data, complex products, or integrations that need to work differently on Shopify.
            </p>

            <div className="space-y-6 text-base text-[var(--sf-ink-soft)] leading-relaxed">
              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <h3 className="text-lg font-bold text-[var(--sf-ink)] mb-1">
                  1. Complex product data
                </h3>
                <p>
                  A WooCommerce product can contain variations, custom attributes, plugin data, and other fields that don&apos;t have a direct Shopify equivalent. Before importing the catalog, we need to identify which fields can be mapped directly and which ones need to be converted into Shopify variants, options, or metafields.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <h3 className="text-lg font-bold text-[var(--sf-ink)] mb-1">
                  2. Customer passwords
                </h3>
                <p>
                  Customer profiles can be imported, but passwords cannot be copied from WooCommerce into Shopify. Customers need to complete Shopify&apos;s supported account setup process after the migration. This means customer migration needs to include an account-activation plan rather than treating the customer CSV as a complete account migration.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <h3 className="text-lg font-bold text-[var(--sf-ink)] mb-1">
                  3. Historical orders
                </h3>
                <p>
                  Historical orders need separate handling from product and customer imports. Shopify&apos;s migration guidance lists migration apps and APIs as methods for moving historical orders. The migration order also matters because orders may need to connect to products and customers that have already been migrated.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <h3 className="text-lg font-bold text-[var(--sf-ink)] mb-1">
                  4. Different WooCommerce order storage
                </h3>
                <p>
                  Not every WooCommerce store stores orders in the same database structure. Modern WooCommerce stores can use High-Performance Order Storage (HPOS), which stores orders in dedicated tables instead of the older WordPress post and postmeta structure. A migration process needs to account for the source store&apos;s order storage setup.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <h3 className="text-lg font-bold text-[var(--sf-ink)] mb-1">
                  5. Old URLs don&apos;t match Shopify URLs
                </h3>
                <p>
                  WooCommerce allows different permalink structures, while Shopify uses its own URL structure. Important old URLs therefore need to be mapped to the appropriate new URLs and redirected where a suitable replacement exists.
                </p>
              </div>

              <div className="border-l-2 border-[var(--sf-ink)] pl-4">
                <h3 className="text-lg font-bold text-[var(--sf-ink)] mb-1">
                  6. Plugins and integrations
                </h3>
                <p>
                  A WooCommerce plugin can&apos;t simply be copied into Shopify. We need to identify what the plugin actually does and what data or business process depends on it. Then we decide whether Shopify&apos;s native features, an app, or custom development is the right replacement.
                </p>
              </div>
            </div>

            <p className="font-bold text-[var(--sf-ink)] mt-6 text-base sm:text-lg">
              The difficult part of migration is usually not moving the data. It&apos;s deciding how the old store&apos;s data and functionality should work in Shopify.
            </p>
          </section>

          {/* SECTION 12: FREQUENTLY ASKED QUESTIONS */}
          <section id="faq" className="mb-20 max-w-5xl">
            <h2
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--sf-ink)] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Frequently Asked Questions
            </h2>

            <div className="divide-y-2 divide-[var(--sf-ink)] border-y-2 border-[var(--sf-ink)]">
              {faqData.map((faq, index) => (
                <div key={index} className="py-6">
                  <h3
                    className="text-lg sm:text-xl font-bold text-[var(--sf-ink)] mb-3"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    {faq.question}
                  </h3>
                  <p className="text-base text-[var(--sf-ink-soft)] leading-relaxed">
                    {faq.answer}
                  </p>
                  {faq.question.includes("Shopify Plus") && (
                    <p className="text-sm text-[var(--sf-ink-mute)] mt-2">
                      Need wholesale portals or enterprise checkout scripting? See our dedicated{" "}
                      <Link
                        href="/services/shopify-plus-migration"
                        className="text-[var(--sf-primary)] underline font-semibold"
                      >
                        Shopify Plus Migration
                      </Link>{" "}
                      overview.
                    </p>
                  )}
                </div>
              ))}
            </div>

            <p className="font-bold text-[var(--sf-ink)] mt-6 text-base sm:text-lg">
              The right migration plan depends on how your current store is built, not just how many products it has.
            </p>
          </section>

          {/* FINAL CTA SECTION */}
          <section
            id="consultation"
            className="p-8 sm:p-12 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]"
            style={{ boxShadow: "var(--sf-shadow-sm)" }}
          >
            <div className="max-w-3xl">
              <h2
                className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--sf-ink)] mb-4"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Planning a Shopify migration?
              </h2>
              <p className="text-lg sm:text-xl text-[var(--sf-ink-soft)] leading-relaxed mb-4">
                Tell us about your current store, catalog size, and any custom features or integrations you rely on.
              </p>
              <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] leading-relaxed mb-8">
                We&apos;ll review what needs to be migrated, identify areas that need special handling, and outline the steps needed to move the store to Shopify.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact-us"
                  className="px-7 py-3.5 border-2 border-[var(--sf-ink)] bg-[var(--sf-primary)] hover:bg-[var(--sf-primary-deep)] text-white text-sm font-bold uppercase tracking-wider transition-all hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 inline-flex items-center gap-2.5"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    boxShadow: "var(--sf-shadow-sm)",
                  }}
                >
                  <Image
                    src="/icons/call.png"
                    alt="Call icon"
                    width={18}
                    height={18}
                    className="w-4 h-4 object-contain brightness-0 invert"
                  />
                  Plan Your Migration
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/919650296375"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] hover:bg-white text-[var(--sf-ink)] text-sm font-bold uppercase tracking-wider transition-all hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 inline-flex items-center gap-2.5"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    boxShadow: "var(--sf-shadow-sm)",
                  }}
                >
                  <Image
                    src="/icons/whatsapp.png"
                    alt="WhatsApp icon"
                    width={18}
                    height={18}
                    className="w-4.5 h-4.5 object-contain"
                  />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
