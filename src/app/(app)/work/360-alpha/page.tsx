import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Plus,
} from "lucide-react";
import project from "../../../../../content/portfolio/360-alpha/page.json";
import coverImage from "../../../../../public/portfolio/360-alpha/covers/cover.png";
import collectionImage from "../../../../../public/portfolio/360-alpha/collection/collection-1.png";
import productImage from "../../../../../public/portfolio/360-alpha/product/product-1.png";
import galleryImage from "../../../../../public/portfolio/360-alpha/product/product-2.png";
import cartImage from "../../../../../public/portfolio/360-alpha/cart/cart-1.png";

const pagePath = "/work/360-alpha";
const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.scalefront.io";
const cover = "/portfolio/360-alpha/covers/cover.png";

export const metadata: Metadata = {
  title: { absolute: project.seoTitle },
  description: project.description,
  alternates: { canonical: pagePath },
  openGraph: {
    title: project.seoTitle,
    description: project.description,
    url: pagePath,
    siteName: "ScaleFront",
    type: "article",
    images: [
      {
        url: cover,
        width: 1920,
        height: 1440,
        alt: "360 Alpha premium clothing brand Shopify storefront",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: project.seoTitle,
    description: project.description,
    images: [cover],
  },
};

type ProjectImage = { src: string; image: StaticImageData; alt: string };

const sectionImages: Record<string, ProjectImage[]> = {
  "collection-browsing-without-a-crowded-product-grid": [
    {
      src: "/portfolio/360-alpha/collection/collection-1.png",
      image: collectionImage,
      alt: "360 Alpha collection page with a product grid and filter drawer for garment, pillar, colour, and size",
    },
  ],
  "product-pages-connect-the-images-to-the-buying-decision": [
    {
      src: "/portfolio/360-alpha/product/product-1.png",
      image: productImage,
      alt: "360 Alpha product page with large clothing photography, colour thumbnails, size options, and Add to Cart",
    },
    {
      src: "/portfolio/360-alpha/product/product-2.png",
      image: galleryImage,
      alt: "Expanded 360 Alpha product media gallery showing a full outfit, image thumbnails, and fabric detail",
    },
  ],
  "cart-presentation-and-subtle-animation": [
    {
      src: "/portfolio/360-alpha/cart/cart-1.png",
      image: cartImage,
      alt: "360 Alpha cart drawer showing a selected garment, colour, size, quantity, subtotal, and checkout button",
    },
  ],
};

function ProjectFigure({
  src,
  image,
  alt,
  priority = false,
}: ProjectImage & { priority?: boolean }) {
  return (
    <figure className="overflow-hidden border border-[var(--sf-ink)]/20 bg-white">
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--sf-primary)]"
        aria-label={`Open full-size image: ${alt} (opens in a new tab)`}
      >
        <Image
          src={image}
          alt={alt}
          priority={priority}
          placeholder="blur"
          sizes="(max-width: 767px) 100vw, (max-width: 1400px) 50vw, 768px"
          className="h-auto w-full"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center text-[var(--sf-ink)]"
        >
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </a>
    </figure>
  );
}

function Copy({ children }: { children: string }) {
  return (
    <div className="space-y-4 text-[15px] leading-[1.65] tracking-[-0.012em] [word-spacing:normal] [overflow-wrap:break-word] text-[var(--sf-ink-soft)] sm:text-base lg:text-lg [&_strong]:font-semibold [&_strong]:text-[var(--sf-ink)]">
      <ReactMarkdown
        components={{
          p: ({ children }) => <p>{children}</p>,
          ul: ({ children }) => (
            <ul className="list-disc space-y-1.5 pl-[1.375rem] marker:text-[var(--sf-primary)]">
              {children}
            </ul>
          ),
          a: ({ href, children }) =>
            href?.startsWith("/") ? (
              <Link
                href={href}
                className="font-medium text-[var(--sf-ink)] underline decoration-[var(--sf-primary)] underline-offset-4 hover:text-[var(--sf-primary)]"
              >
                {children}
              </Link>
            ) : (
              <a
                href={href}
                className="font-medium text-[var(--sf-ink)] underline decoration-[var(--sf-primary)] underline-offset-4 hover:text-[var(--sf-primary)]"
              >
                {children}
              </a>
            ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}

export default function Alpha360Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${siteUrl}${pagePath}#article`,
        headline: project.title,
        description: project.description,
        image: [
          cover,
          ...Object.values(sectionImages)
            .flat()
            .map(({ src }) => src),
        ].map((src) => `${siteUrl}${src}`),
        author: { "@type": "Organization", name: "ScaleFront", url: siteUrl },
        mainEntityOfPage: `${siteUrl}${pagePath}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Work",
            item: `${siteUrl}/work`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "360 Alpha",
            item: `${siteUrl}${pagePath}`,
          },
        ],
      },
    ],
  };

  return (
    <main className="bg-[var(--sf-paper)] text-[var(--sf-ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <article>
        <header className="border-b border-[var(--sf-ink)]/20 bg-[#f3eee6]">
          <div className="mx-auto w-full max-w-[1400px] px-5 pb-10 pt-7 sm:px-8 md:pb-14 md:pt-10">
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-2 font-mono text-xs text-[var(--sf-ink-soft)] md:mb-10"
            >
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <Link href="/work" className="hover:underline">
                Work
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">360 Alpha</span>
            </nav>
            <div className="grid items-center gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
              <div className="min-w-0">
                <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--sf-ink-soft)]">
                  Fashion ecommerce / Figma to Shopify
                </p>
                <h1 className="tracking-tight">
                  <span className="block font-serif text-6xl leading-none lg:text-7xl xl:text-8xl">
                    360 Alpha<span className="sr-only">:</span>
                  </span>
                  <span className="mt-5 block text-xl font-medium leading-snug lg:text-2xl">
                    Shopify Development for a Premium Clothing Brand
                  </span>
                </h1>
                <dl className="mt-7 divide-y divide-[var(--sf-ink)]/10 border-y border-[var(--sf-ink)]/20">
                  {[
                    ["Client", "360 Alpha"],
                    ["Industry", "Premium clothing"],
                    ["Platform", "Shopify / Liquid"],
                    ["My role", "Frontend & integrations"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="grid grid-cols-[80px_minmax(0,1fr)] items-baseline gap-4 py-3 sm:grid-cols-[100px_minmax(0,1fr)]"
                    >
                      <dt className="font-mono text-[10px] uppercase tracking-widest text-[var(--sf-ink-soft)]">
                        {label}
                      </dt>
                      <dd className="text-sm font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>
                <a
                  href="#project-overview"
                  className="mt-6 inline-flex w-fit items-center gap-3 border-b border-[var(--sf-ink)] pb-2 text-sm font-medium hover:text-[var(--sf-primary)]"
                >
                  Explore the project <ArrowDown className="h-4 w-4" />
                </a>
              </div>
              <div className="min-w-0">
                <ProjectFigure
                  src={cover}
                  image={coverImage}
                  alt="360 Alpha homepage with campaign photography, centred wordmark, and Discover the Collection link"
                  priority
                />
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto w-full max-w-[1400px] px-5 pb-16 sm:px-8 lg:pb-24">
          <nav
            aria-label="On this page"
            className="border-b border-[var(--sf-ink)]/20 py-5"
          >
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] [&::-webkit-details-marker]:hidden">
                Inside the project{" "}
                <Plus
                  aria-hidden="true"
                  className="h-4 w-4 group-open:rotate-45"
                />
              </summary>
              <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {project.sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="flex gap-3 text-xs leading-relaxed text-[var(--sf-ink-soft)] hover:text-[var(--sf-primary)]"
                    >
                      <span className="shrink-0 font-mono text-[10px] opacity-70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {section.title.split(":")[0]}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#frequently-asked-questions"
                    className="flex gap-3 text-xs leading-relaxed text-[var(--sf-ink-soft)] hover:text-[var(--sf-primary)]"
                  >
                    <span className="font-mono text-[10px] opacity-70">12</span>
                    Frequently asked questions
                  </a>
                </li>
              </ol>
            </details>
          </nav>

          <div className="min-w-0">
            <div id="project-overview" className="scroll-mt-28 py-10 md:py-14">
              <Copy>{project.intro}</Copy>
            </div>
            {project.sections.map((section, index) => {
              const figures = sectionImages[section.id];
              const precedingImages = project.sections
                .slice(0, index)
                .reduce(
                  (count, item) =>
                    count + (sectionImages[item.id]?.length ?? 0),
                  0,
                );
              const paragraphs = section.content.split("\n\n");
              const paragraphsPerImage = figures
                ? Math.ceil(paragraphs.length / figures.length)
                : 0;
              const heading = (
                <div className="mb-5 flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="pt-1.5 font-mono text-xs text-[var(--sf-primary)]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                    {section.title}
                  </h2>
                </div>
              );

              return (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 border-t border-[var(--sf-ink)]/20 py-10 md:py-14"
                >
                  {figures ? (
                    <div className="space-y-12 md:space-y-16">
                      {figures.map((figure, figureIndex) => {
                        const imageOnLeft =
                          (precedingImages + figureIndex) % 2 === 0;
                        const content = paragraphs
                          .slice(
                            figureIndex * paragraphsPerImage,
                            (figureIndex + 1) * paragraphsPerImage,
                          )
                          .join("\n\n");
                        return (
                          <div
                            key={figure.src}
                            className="grid items-center gap-7 md:grid-cols-2 md:gap-10 lg:gap-16"
                          >
                            <div
                              className={`min-w-0 ${imageOnLeft ? "md:order-1" : "md:order-2"}`}
                            >
                              <ProjectFigure {...figure} />
                            </div>
                            <div
                              className={`min-w-0 ${imageOnLeft ? "md:order-2" : "md:order-1"}`}
                            >
                              {figureIndex === 0 ? (
                                heading
                              ) : (
                                <h3 className="mb-5 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                                  Product media gallery
                                </h3>
                              )}
                              <Copy>{content}</Copy>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="w-full">
                      {heading}
                      <Copy>{section.content}</Copy>
                    </div>
                  )}
                </section>
              );
            })}

            <section
              id="frequently-asked-questions"
              className="scroll-mt-28 border-t border-[var(--sf-ink)]/20 pt-10 md:pt-12"
            >
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-[var(--sf-ink-soft)]">
                Clothing brands & Shopify
              </p>
              <h2 className="mb-8 text-3xl font-semibold tracking-tight sm:text-4xl">
                Frequently asked questions
              </h2>
              <div className="border-t border-[var(--sf-ink)]/20">
                {project.faqs.map((faq, index) => (
                  <details
                    key={faq.question}
                    className="group border-b border-[var(--sf-ink)]/20"
                  >
                    <summary className="flex cursor-pointer list-none items-start gap-4 py-5 text-base font-medium focus-visible:outline-2 focus-visible:outline-[var(--sf-primary)] [&::-webkit-details-marker]:hidden">
                      <span
                        aria-hidden="true"
                        className="pt-0.5 font-mono text-xs text-[var(--sf-ink-soft)]"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">{faq.question}</span>
                      <Plus
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 group-open:rotate-45"
                      />
                    </summary>
                    <div className="pb-6 pl-8 pr-4">
                      <Copy>{faq.answer}</Copy>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </div>

        <footer
          id="contact"
          className="border-t-2 border-[var(--sf-ink)] bg-[var(--sf-ink)] px-5 py-12 text-white sm:px-8 md:py-16"
        >
          <div className="mx-auto flex w-full max-w-[1536px] flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="w-full">
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-white/60">
                Have a clothing brand project?
              </p>
              <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
                Turn your Figma design into a working Shopify store.
              </h2>
            </div>
            <div className="flex flex-col items-start gap-5">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-5 border border-white bg-white px-6 py-4 text-sm font-semibold text-[var(--sf-ink)] hover:bg-[#f3eee6]"
              >
                Discuss your project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" /> Back to all projects
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </main>
  );
}
