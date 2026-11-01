"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { MenuIcon, CloseIcon } from "@/icons";
import styles from "./Header.module.css";

const ANNOUNCEMENT = "Get your free Shopify store CRO Audit";
const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about-us", label: "About us" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact" },
];
const SERVICE_LINKS = [
  { href: "/services/theme-development", label: "Theme development" },
  { href: "/services/custom-shopify-development", label: "Custom Shopify development" },
  { href: "/services/headless-commerce", label: "Headless commerce" },
  { href: "/services/custom-shopify-apps", label: "Custom Shopify apps" },
  { href: "/services/cro-optimization", label: "Conversion optimization" },
  { href: "/services/performance-optimization", label: "Performance optimization" },
  { href: "/services/shopify-migration-services", label: "Shopify migration" },
  { href: "/services/shopify-plus-migration", label: "Shopify Plus migration" },
  { href: "/services/backend-api", label: "Backend & API development" },
  { href: "/services/integrations", label: "Third-party integrations" },
  { href: "/services/custom-features", label: "Custom features" },
  { href: "/services/mobile-apps", label: "Mobile apps" },
  { href: "/services/audit-consulting", label: "Audits & consulting" },
];
const RESOURCE_LINKS = [
  { href: "/earn", label: "Free store audit" },
  { href: "/ecommerce", label: "Ecommerce solutions" },
  { href: "/upsell-cross-sell-app-shopify", label: "Upsell & cross-sell app" },
];

function Brand() {
  return (
    <>
      <Image
        src="/logo/updated_logo.png"
        alt=""
        width={34}
        height={34}
        className="w-[34px] h-[34px] rounded border border-[var(--sf-ink)] shadow-[2px_2px_0_var(--sf-ink)] object-contain bg-[#181310]"
        priority
      />
      <span>Scale<span className="text-[var(--sf-primary)]">front</span></span>
    </>
  );
}

export function Header() {
  const pathname = usePathname();
  const navigationId = useId();
  const navigationTitleId = `${navigationId}-title`;
  const [mobileOpen, setMobileOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const servicesRef = useRef<HTMLDetailsElement>(null);
  const resourcesRef = useRef<HTMLDetailsElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !mobileOpen) return;

    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 1280px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMobileOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [mobileOpen]);

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      for (const ref of [servicesRef, resourcesRef]) {
        if (event.target instanceof Node && !ref.current?.contains(event.target)) {
          ref.current?.removeAttribute("open");
        }
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      for (const ref of [servicesRef, resourcesRef]) {
        if (ref.current?.open) {
          ref.current.removeAttribute("open");
          ref.current.querySelector("summary")?.focus();
        }
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const closeNavigation = () => {
    setMobileOpen(false);
    servicesRef.current?.removeAttribute("open");
    resourcesRef.current?.removeAttribute("open");
  };

  const navLinkClass = "rounded-sm text-[var(--sf-ink-soft)] font-medium text-[14px] hover:text-[var(--sf-primary)] aria-[current=page]:text-[var(--sf-primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--sf-primary)] transition-colors";
  const mobileLinkClass = "block px-3 py-3 text-[17px] font-semibold text-[var(--sf-ink)] hover:bg-[var(--sf-primary-soft)] aria-[current=page]:bg-[var(--sf-primary-soft)] aria-[current=page]:text-[var(--sf-primary-deep)] focus-visible:outline-2 focus-visible:outline-[var(--sf-primary)]";

  return (
    <>
      <div className="bg-[var(--sf-ink)] text-white overflow-hidden border-b-2 border-[var(--sf-ink)]">
        <div className="flex w-max py-[9px]" style={{ animation: "sf-marquee 20s linear infinite" }}>
          {Array(14).fill(ANNOUNCEMENT).map((text, i) => (
            <span key={i} aria-hidden={i > 0 ? true : undefined} className="inline-flex items-center gap-[22px] px-[22px] text-[12.5px] font-bold tracking-[0.16em] uppercase whitespace-nowrap">
              {text}<span className="text-[var(--sf-gold)] text-[11px]">✦</span>
            </span>
          ))}
        </div>
      </div>

      <header
        className="sticky top-0 z-[100] border-b-2 border-[var(--sf-ink)]"
        style={{ backdropFilter: "blur(14px) saturate(1.3)", WebkitBackdropFilter: "blur(14px) saturate(1.3)", background: "color-mix(in srgb, var(--sf-paper) 78%, transparent)" }}
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-7 py-[13px] flex items-center justify-between gap-5">
          <button
            ref={triggerRef}
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            aria-controls={navigationId}
            aria-haspopup="dialog"
            onClick={() => setMobileOpen(true)}
            className="xl:hidden flex shrink-0 items-center justify-center w-10 h-10 text-[var(--sf-ink)] border-2 border-[var(--sf-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--sf-primary)]"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
          <Link href="/" aria-label="Scalefront home" className="flex items-center gap-[11px] text-[23px] tracking-[-0.02em] text-[var(--sf-ink)] font-extrabold shrink-0 max-xl:ml-auto" onClick={closeNavigation}>
            <Brand />
          </Link>

          <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-5">
            <details ref={servicesRef} className="relative group" onToggle={(event) => { if (event.currentTarget.open) resourcesRef.current?.removeAttribute("open"); }}>
              <summary className={`${navLinkClass} flex cursor-pointer list-none items-center gap-1 [&::-webkit-details-marker]:hidden ${pathname.startsWith("/services/") ? "text-[var(--sf-primary)]" : ""}`}>
                Services <ChevronDown aria-hidden="true" className="size-3.5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="absolute left-0 top-full mt-5 w-[580px] border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] p-4 shadow-[var(--sf-shadow-md)]">
                <Link href="/#services" onClick={closeNavigation} className="mb-3 block border-b border-[var(--sf-line)] px-3 pb-3 text-sm font-bold text-[var(--sf-primary)]">Explore all services →</Link>
                <div className="grid grid-cols-2 gap-1">
                  {SERVICE_LINKS.map((link) => (
                    <Link key={link.href} href={link.href} aria-current={isActive(link.href) ? "page" : undefined} onClick={closeNavigation} className={`${navLinkClass} px-3 py-2.5 hover:bg-[var(--sf-primary-soft)]`}>{link.label}</Link>
                  ))}
                </div>
              </div>
            </details>
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} aria-current={isActive(link.href) ? "page" : undefined} onClick={closeNavigation} className={navLinkClass}>{link.label}</Link>
            ))}
            <details ref={resourcesRef} className="relative group" onToggle={(event) => { if (event.currentTarget.open) servicesRef.current?.removeAttribute("open"); }}>
              <summary className={`${navLinkClass} flex cursor-pointer list-none items-center gap-1 [&::-webkit-details-marker]:hidden`}>More <ChevronDown aria-hidden="true" className="size-3.5 transition-transform group-open:rotate-180" /></summary>
              <div className="absolute right-0 top-full mt-5 w-64 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] p-2 shadow-[var(--sf-shadow-md)]">
                {RESOURCE_LINKS.map((link) => (
                  <Link key={link.href} href={link.href} aria-current={isActive(link.href) ? "page" : undefined} onClick={closeNavigation} className={`${navLinkClass} block px-3 py-3 hover:bg-[var(--sf-primary-soft)]`}>{link.label}</Link>
                ))}
              </div>
            </details>
            <Link href="/contact-us" onClick={closeNavigation} className="inline-flex items-center gap-2 bg-[var(--sf-ink)] text-white font-semibold text-[14px] whitespace-nowrap px-4 py-3 shadow-[3px_3px_0_var(--sf-primary)] hover:bg-[var(--sf-primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--sf-primary)]">Start a project <span className="size-1.5 bg-current" /></Link>
          </nav>
        </div>
      </header>

      <dialog
        ref={dialogRef}
        id={navigationId}
        aria-labelledby={navigationTitleId}
        className={styles.drawer}
        onCancel={() => setMobileOpen(false)}
        onClose={() => { setMobileOpen(false); triggerRef.current?.focus(); }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            const bounds = event.currentTarget.getBoundingClientRect();
            if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) setMobileOpen(false);
          }
        }}
      >
        <div className="flex items-center justify-between gap-3 border-b-2 border-[var(--sf-ink)] px-5 py-4">
          <h2 id={navigationTitleId} className="text-xl font-extrabold tracking-tight">Scale<span className="text-[var(--sf-primary)]">front</span></h2>
          <button type="button" aria-label="Close navigation menu" onClick={closeNavigation} className="flex size-11 shrink-0 items-center justify-center border-2 border-[var(--sf-ink)] hover:bg-[var(--sf-primary-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sf-primary)]"><CloseIcon className="size-5" /></button>
        </div>
        <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto overscroll-contain px-3 py-3">
          <Link href="/" onClick={closeNavigation} aria-current={isActive("/") ? "page" : undefined} className={mobileLinkClass}>Home</Link>
          <details className="group border-y border-[var(--sf-ink)]/15 my-1" open={pathname.startsWith("/services/") || undefined}>
            <summary className={`${mobileLinkClass} flex cursor-pointer list-none items-center justify-between [&::-webkit-details-marker]:hidden`}>Services <ChevronDown aria-hidden="true" className="size-4 transition-transform group-open:rotate-180" /></summary>
            <div className="ml-3 mb-3 border-l-2 border-[var(--sf-primary-soft)] pl-2">
              {[{ href: "/#services", label: "All services" }, ...SERVICE_LINKS].map((link) => (
                <Link key={link.href} href={link.href} onClick={closeNavigation} aria-current={isActive(link.href) ? "page" : undefined} className={`${mobileLinkClass} text-[14px] font-medium`}>{link.label}</Link>
              ))}
            </div>
          </details>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeNavigation} aria-current={isActive(link.href) ? "page" : undefined} className={mobileLinkClass}>{link.label}</Link>
          ))}
          <p className="mt-5 mb-2 px-3 text-xs font-bold uppercase tracking-widest text-[var(--sf-ink-mute)]">Tools & resources</p>
          {RESOURCE_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeNavigation} aria-current={isActive(link.href) ? "page" : undefined} className={`${mobileLinkClass} text-[15px]`}>{link.label}</Link>
          ))}
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-[var(--sf-ink)]/15 px-3 pt-4 pb-2 text-xs text-[var(--sf-ink-soft)]">
            <Link href="/privacy-policy" onClick={closeNavigation} className="underline underline-offset-4">Privacy policy</Link>
            <Link href="/terms-of-service" onClick={closeNavigation} className="underline underline-offset-4">Terms of service</Link>
          </div>
        </nav>
        <div className="border-t-2 border-[var(--sf-ink)] p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          <Link href="/contact-us" onClick={closeNavigation} className="flex items-center justify-center gap-3 border-2 border-[var(--sf-ink)] bg-[var(--sf-primary)] px-5 py-3.5 text-base font-semibold text-white shadow-[var(--sf-shadow-sm)] hover:bg-[var(--sf-primary-deep)]">Start a project <span aria-hidden="true">→</span></Link>
        </div>
      </dialog>
    </>
  );
}

export default Header;
