"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useCallback, useEffect } from "react";
import {
  HEADER_SERVICES as SERVICES,
  HEADER_SHOPIFY_APPS as SHOPIFY_APPS,
  HEADER_TOOLS as TOOLS,
  HEADER_NAV_LINKS as NAV_LINKS,
} from "@/data/data";
import { MenuIcon, CloseIcon, ChevronDownIcon as ChevronDown } from "@/icons";

type DropdownKey = "services" | "apps" | "tools" | null;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<DropdownKey>(null);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);

  const isActive = useCallback(
    (href: string) =>
      href === "/" ? pathname === "/" : pathname?.startsWith(href),
    [pathname],
  );

  // Glassmorphism scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  const toggleMobile = (key: DropdownKey) =>
    setMobileExpanded((prev) => (prev === key ? null : key));

  return (
    <header
      className={`sticky top-0 z-[100] border-b border-[#d9dee7] transition-colors duration-200 font-sans backdrop-blur-[20px] flex flex-col ${
        scrolled ? "bg-white/95" : "bg-white/90"
      }`}
    >
      <div className="bg-[#1677ff] text-white text-[14px] font-bold tracking-[0.15em] py-2.5 overflow-hidden whitespace-nowrap flex w-full">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-infinite {
            animation: marquee 20s linear infinite;
          }
        `}</style>
        <div className="animate-marquee-infinite flex w-fit">
          {[...Array(15)].map((_, i) => (
            <span key={i} className="mx-6">
              GET YOUR FREE SHOPIFY STORE AUDIT
            </span>
          ))}
        </div>
      </div>
      <div className="max-w-[1280px] w-full mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          aria-label="ScaleFront — Shopify Development Agency"
          className="flex items-center no-underline"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src="/logos/scalefrontlonglogo.png"
            alt="ScaleFront"
            width={200}
            height={48}
            className="w-auto h-12 md:h-12"
            priority
          />
        </Link>

        {/* ── Desktop nav ──────────────────────────────────────────────── */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-1"
        >
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              aria-haspopup="true"
              aria-expanded={activeDropdown === "services"}
              className={`flex items-center gap-1 py-2 px-3.5 text-[15px] font-medium tracking-[0.01em] bg-transparent border-none cursor-pointer rounded-lg transition-colors duration-200 ${
                isActive("/services") ? "text-[#1677ff]" : "text-[#111111]"
              }`}
            >
              Services
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === "services" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {activeDropdown === "services" && (
              <div
                role="menu"
                className="absolute top-[calc(100%+4px)] left-0 w-[560px] bg-white border border-[#d9dee7] rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-3 grid grid-cols-2 gap-0.5 z-[200]"
              >
                {SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    role="menuitem"
                    className={`block p-2.5 px-3 rounded-md no-underline transition-colors duration-150 ${
                      isActive(s.href)
                        ? "bg-[#f7f8fa]"
                        : "bg-transparent hover:bg-[#f7f8fa]"
                    }`}
                  >
                    <div className="text-sm font-semibold text-[#111111] mb-0.5">
                      {s.label}
                    </div>
                    <div className="text-xs text-[#6b7280]">{s.desc}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Shopify Apps dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("apps")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              aria-haspopup="true"
              aria-expanded={activeDropdown === "apps"}
              className={`flex items-center gap-1 py-2 px-3.5 text-[15px] font-medium tracking-[0.01em] bg-transparent border-none cursor-pointer rounded-lg transition-colors duration-200 ${
                isActive("/upsell-cross-sell-app-shopify")
                  ? "text-[#1677ff]"
                  : "text-[#111111]"
              }`}
            >
              Apps
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === "apps" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {activeDropdown === "apps" && (
              <div
                role="menu"
                className="absolute top-[calc(100%+4px)] left-0 w-[280px] bg-white border border-[#d9dee7] rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-2 z-[200]"
              >
                {SHOPIFY_APPS.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    role="menuitem"
                    className="block p-2.5 px-3 rounded-md no-underline bg-transparent hover:bg-[#f7f8fa] transition-colors duration-150"
                  >
                    <div className="text-sm font-semibold text-[#111111] mb-0.5">
                      {a.label}
                    </div>
                    <div className="text-xs text-[#6b7280]">{a.desc}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Tools dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("tools")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              aria-haspopup="true"
              aria-expanded={activeDropdown === "tools"}
              className={`flex items-center gap-1 py-2 px-3.5 text-[15px] font-medium tracking-[0.01em] bg-transparent border-none cursor-pointer rounded-lg transition-colors duration-200 ${
                isActive("/earn") ? "text-[#1677ff]" : "text-[#111111]"
              }`}
            >
              Tools
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === "tools" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {activeDropdown === "tools" && (
              <div
                role="menu"
                className="absolute top-[calc(100%+4px)] left-0 w-[260px] bg-white border border-[#d9dee7] rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-2 z-[200]"
              >
                {TOOLS.map((t) => (
                  <Link
                    key={t.href}
                    href={t.href}
                    role="menuitem"
                    className="block p-2.5 px-3 rounded-md no-underline bg-transparent hover:bg-[#f7f8fa] transition-colors duration-150"
                  >
                    <div className="text-sm font-semibold text-[#111111] mb-0.5">
                      {t.label}
                    </div>
                    <div className="text-xs text-[#6b7280]">{t.desc}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Flat nav links */}
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`py-2 px-3.5 text-[15px] font-medium tracking-[0.01em] no-underline rounded-lg transition-colors duration-200 ${
                isActive(item.href) ? "text-[#1677ff]" : "text-[#111111]"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/contact-us"
            className="ml-3 inline-flex items-center h-10 px-5 text-sm font-semibold tracking-[0.02em] text-white bg-[#111111] rounded-lg no-underline whitespace-nowrap transition-all duration-200 hover:bg-[#111111]/90 active:scale-95"
          >
            Start a project
          </Link>
        </nav>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden flex items-center justify-center w-10 h-10 bg-transparent border-none cursor-pointer text-[#111111] rounded-lg"
        >
          {mobileOpen ? (
            <CloseIcon className="w-5 h-5" />
          ) : (
            <MenuIcon className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* ── Mobile nav panel ─────────────────────────────────────────────── */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden border-t border-[#d9dee7] bg-white px-5 pt-4 pb-6 max-h-[80vh] overflow-y-auto"
        >
          {/* Services accordion */}
          <div className="mb-1">
            <button
              onClick={() => toggleMobile("services")}
              className="w-full flex items-center justify-between py-2.5 px-3 text-[15px] font-semibold text-[#111111] bg-transparent border-none cursor-pointer rounded-lg text-left"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileExpanded === "services" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {mobileExpanded === "services" && (
              <div className="pl-3 pb-2">
                {SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className={`block py-2 px-3 text-sm no-underline rounded-md ${
                      isActive(s.href) ? "text-[#1677ff]" : "text-[#111111]"
                    }`}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Apps accordion */}
          <div className="mb-1">
            <button
              onClick={() => toggleMobile("apps")}
              className="w-full flex items-center justify-between py-2.5 px-3 text-[15px] font-semibold text-[#111111] bg-transparent border-none cursor-pointer rounded-lg text-left"
            >
              Apps
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileExpanded === "apps" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {mobileExpanded === "apps" && (
              <div className="pl-3 pb-2">
                {SHOPIFY_APPS.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    className="block py-2 px-3 text-sm text-[#111111] no-underline rounded-md"
                  >
                    {a.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Tools accordion */}
          <div className="mb-1">
            <button
              onClick={() => toggleMobile("tools")}
              className="w-full flex items-center justify-between py-2.5 px-3 text-[15px] font-semibold text-[#111111] bg-transparent border-none cursor-pointer rounded-lg text-left"
            >
              Tools
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileExpanded === "tools" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {mobileExpanded === "tools" && (
              <div className="pl-3 pb-2">
                {TOOLS.map((t) => (
                  <Link
                    key={t.href}
                    href={t.href}
                    className="block py-2 px-3 text-sm text-[#111111] no-underline rounded-md"
                  >
                    {t.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Flat links */}
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block py-2.5 px-3 text-[15px] font-semibold no-underline rounded-lg ${
                isActive(item.href) ? "text-[#1677ff]" : "text-[#111111]"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile CTA */}
          <div className="mt-4 pt-4 border-t border-[#d9dee7]">
            <Link
              href="/contact-us"
              className="flex items-center justify-center h-12 rounded-lg bg-[#1677ff] text-white text-[15px] font-semibold tracking-[0.02em] no-underline"
            >
              Start a project
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
