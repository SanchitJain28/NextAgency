"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MenuIcon, CloseIcon } from "@/icons";

const ANNOUNCEMENT = "Get your free Shopify store CRO Audit";
const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#system", label: "System" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="bg-[var(--sf-ink)] text-white overflow-hidden border-b-2 border-[var(--sf-ink)]">
        <div
          className="flex w-max py-[9px]"
          style={{ animation: "sf-marquee 20s linear infinite" }}
        >
          {Array(14)
            .fill(ANNOUNCEMENT)
            .map((text, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-[22px] px-[22px] text-[12.5px] font-bold tracking-[0.16em] uppercase whitespace-nowrap"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                {text}
                <span className="text-[var(--sf-gold)] text-[11px]">✦</span>
              </span>
            ))}
        </div>
      </div>

      <header
        className="sticky top-0 z-[100] border-b-2 border-[var(--sf-ink)] transition-colors duration-200"
        style={{
          backdropFilter: "blur(14px) saturate(1.3)",
          WebkitBackdropFilter: "blur(14px) saturate(1.3)",
          background: "color-mix(in srgb, var(--sf-paper) 78%, transparent)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-7 py-[13px] flex items-center justify-between gap-6">
          <Link
            href="/"
            className="flex items-center gap-[11px] text-[23px] tracking-[-0.02em] text-[var(--sf-ink)]"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
            }}
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src="/logo/updated_logo.png"
              alt="Scalefront Logo"
              width={34}
              height={34}
              className="w-[34px] h-[34px] rounded border border-[var(--sf-ink)] shadow-[2px_2px_0_var(--sf-ink)] object-contain bg-[#181310]"
              priority
            />
            Scale<span style={{ color: "var(--sf-primary)" }}>front</span>
          </Link>

          <nav className="hidden md:flex items-center gap-[30px]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--sf-ink-soft)] font-medium text-[15px] hover:text-[var(--sf-ink)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-[var(--sf-ink)] text-[var(--sf-paper-raised)] font-semibold text-[15px] leading-none px-5 py-[11px] transition-all duration-100"
              style={{ boxShadow: "3px 3px 0 var(--sf-primary)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translate(2px, 2px)";
                e.currentTarget.style.boxShadow = "1px 1px 0 var(--sf-primary)";
                e.currentTarget.style.background = "var(--sf-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "3px 3px 0 var(--sf-primary)";
                e.currentTarget.style.background = "var(--sf-ink)";
              }}
            >
              Start a project
              <span className="w-1.5 h-1.5 bg-current" />
            </Link>
          </nav>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden flex items-center justify-center w-10 h-10 bg-transparent border-none cursor-pointer text-[var(--sf-ink)]"
          >
            {mobileOpen ? (
              <CloseIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileOpen && (
          <nav className="md:hidden border-t-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] px-7 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[var(--sf-ink)] font-semibold text-[18px]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 bg-[var(--sf-ink)] text-[var(--sf-paper-raised)] font-semibold text-[16px] leading-none px-5 py-3.5 transition-all duration-100"
              style={{ boxShadow: "3px 3px 0 var(--sf-primary)" }}
            >
              Start a project
              <span className="w-1.5 h-1.5 bg-current" />
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}

export default Header;
