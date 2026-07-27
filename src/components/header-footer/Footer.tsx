import Link from "next/link";
import { TwitterIcon, LinkedInIcon, GitHubIcon } from "@/icons";
import {
  FOOTER_SERVICES,
  FOOTER_COMPANY,
  FOOTER_PRODUCTS,
  FOOTER_RESOURCES,
} from "@/data/data";

const SOCIAL_LINKS = [
  {
    href: "https://twitter.com/scalefront",
    label: "Twitter / X",
    icon: <TwitterIcon className="w-[18px] h-[18px]" />,
  },
  {
    href: "https://linkedin.com/company/scalefront",
    label: "LinkedIn",
    icon: <LinkedInIcon className="w-[18px] h-[18px]" />,
  },
  {
    href: "https://github.com/scalefront",
    label: "GitHub",
    icon: <GitHubIcon className="w-[18px] h-[18px]" />,
  },
];
export default function Footer() {
  return (
    <footer className="border-t border-[#d9dee7] bg-white font-sans text-[#111111]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10 py-12 sm:py-[72px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">
        <div className="sm:col-span-2 lg:col-span-1 lg:col-start-1 lg:col-end-2">
          <Link
            href="/"
            aria-label="ScaleFront — Shopify Development Agency"
            className="inline-flex items-center gap-2.5 no-underline mb-5"
          >
            <span
              className="w-8 h-8 bg-[#1677ff] rounded-lg flex items-center justify-center text-white font-semibold text-base shrink-0"
              aria-hidden="true"
            >
              S
            </span>
            <span className="text-[20px] font-semibold tracking-[-0.02em] text-[#111111]">
              ScaleFront
            </span>
          </Link>

          <p className="text-sm text-[#6b7280] leading-[1.6] max-w-[280px] mb-6">
            Expert Shopify development agency based in India. We build custom
            apps, headless storefronts, and high-converting themes for DTC
            brands doing $1M+.
          </p>

          <div className="flex flex-col gap-2 mb-6">
            <a
              href="mailto:hello@scalefront.io"
              className="text-sm text-[#6b7280] no-underline transition-colors hover:text-[#111111]"
            >
              hello@scalefront.io
            </a>
            <a
              href="tel:+919650296375"
              className="text-sm text-[#6b7280] no-underline transition-colors hover:text-[#111111]"
            >
              +91 96502 96375
            </a>
          </div>

          <div className="flex gap-2.5">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.href}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 border border-[#d9dee7] rounded-lg text-[#6b7280] no-underline transition-colors hover:text-[#111111] hover:border-[#111111]"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Services" links={FOOTER_SERVICES} />
        <FooterColumn title="Products" links={FOOTER_PRODUCTS} />
        <FooterColumn title="Resources" links={FOOTER_RESOURCES} />
        <FooterColumn title="Company" links={FOOTER_COMPANY} />
      </div>

      <div className="border-t border-[#d9dee7]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-10 py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-[13px] text-[#6b7280] tracking-[0.01em] m-0">
            © {new Date().getFullYear()} ScaleFront. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { href: "/privacy", label: "Privacy Policy" },
              { href: "/terms", label: "Terms of Service" },
              { href: "/sitemap.xml", label: "Sitemap" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[13px] text-[#6b7280] tracking-[0.01em] no-underline transition-colors hover:text-[#111111]"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#111111] mb-4">
        {title}
      </h3>
      <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm text-[#6b7280] no-underline transition-colors hover:text-[#111111]"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
