import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t-2 border-[var(--sf-ink)] bg-[var(--sf-paper)]">
      <div className="max-w-[1200px] mx-auto px-7 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-[11px] text-[20px] tracking-[-0.02em] text-[var(--sf-ink)]"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 800,
              }}
            >
              <Image
                src="/logo/updated_logo.png"
                alt="Scalefront Logo"
                width={30}
                height={30}
                className="w-[30px] h-[30px] rounded border border-[var(--sf-ink)] shadow-[2px_2px_0_var(--sf-ink)] object-contain bg-[#181310]"
              />
              Scale<span style={{ color: "var(--sf-primary)" }}>front</span>
            </Link>
            <p className="text-[14px] text-[var(--sf-ink-mute)] leading-relaxed">
              Crafted for merchants who mean it. Enterprise-grade Shopify engineering, headless stores, and CRO.
            </p>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-[14px] font-semibold uppercase tracking-wider text-[var(--sf-ink)] mb-4">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <Link href="/services/theme-development" className="text-[var(--sf-ink-soft)] hover:text-[var(--sf-primary)]">
                  Theme Development
                </Link>
              </li>
              <li>
                <Link href="/services/cro-optimization" className="text-[var(--sf-ink-soft)] hover:text-[var(--sf-primary)]">
                  CRO Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/audit-consulting" className="text-[var(--sf-ink-soft)] hover:text-[var(--sf-primary)]">
                  Audit &amp; Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/headless-commerce" className="text-[var(--sf-ink-soft)] hover:text-[var(--sf-primary)]">
                  Headless Commerce
                </Link>
              </li>
              <li>
                <Link href="/services/shopify-plus-migration" className="text-[var(--sf-ink-soft)] hover:text-[var(--sf-primary)]">
                  Shopify Plus Migration
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions & Engineering */}
          <div>
            <h4 className="text-[14px] font-semibold uppercase tracking-wider text-[var(--sf-ink)] mb-4">
              Engineering
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <Link href="/services/custom-shopify-development" className="text-[var(--sf-ink-soft)] hover:text-[var(--sf-primary)]">
                  Custom Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-apps" className="text-[var(--sf-ink-soft)] hover:text-[var(--sf-primary)]">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services/backend-api" className="text-[var(--sf-ink-soft)] hover:text-[var(--sf-primary)]">
                  Backend &amp; APIs
                </Link>
              </li>
              <li>
                <Link href="/services/custom-features" className="text-[var(--sf-ink-soft)] hover:text-[var(--sf-primary)]">
                  Custom Features
                </Link>
              </li>
              <li>
                <Link href="/services/integrations" className="text-[var(--sf-ink-soft)] hover:text-[var(--sf-primary)]">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h4 className="text-[14px] font-semibold uppercase tracking-wider text-[var(--sf-ink)] mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <Link href="/about-us" className="text-[var(--sf-ink-soft)] hover:text-[var(--sf-primary)]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-[var(--sf-ink-soft)] hover:text-[var(--sf-primary)]">
                  Case Studies &amp; Work
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[var(--sf-ink-soft)] hover:text-[var(--sf-primary)]">
                  Blog &amp; Insights
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-[var(--sf-ink-soft)] hover:text-[var(--sf-primary)]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 border-t border-[var(--sf-ink)]/15 flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] text-[var(--sf-ink-mute)]">
          <div>
            © {new Date().getFullYear()} Scalefront Studio. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy-policy" className="hover:text-[var(--sf-primary)] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-[var(--sf-primary)] transition-colors">
              Terms of Service
            </Link>
            <Link href="/upsell-cross-sell-app/privacy-policy" className="hover:text-[var(--sf-primary)] transition-colors">
              App Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
