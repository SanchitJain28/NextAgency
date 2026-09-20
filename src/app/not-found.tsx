import Link from "next/link";
import {
  ArrowRight,
  Home,
  Briefcase,
  Compass,
  FileQuestion,
  Search,
  Zap,
  Terminal,
  RotateCcw,
} from "lucide-react";

export const metadata = {
  title: "404 — Page Not Found | ScaleFront",
  description:
    "The requested page could not be found on ScaleFront. Explore our featured Shopify portfolio, theme development services, and case studies.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--sf-paper)] text-[var(--sf-ink)] flex flex-col justify-between selection:bg-[var(--sf-primary-soft)] selection:text-[var(--sf-ink)]">
      {/* TOP STATUS STRIP */}
      <div className="border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--sf-primary)] animate-pulse" />
            <span className="font-bold text-[var(--sf-ink)] uppercase">
              ERROR 404 // ROUTE NOT FOUND
            </span>
          </div>
          <div className="text-[var(--sf-ink-mute)] hidden sm:inline">
            STATUS: 404_PAGE_NOT_FOUND • SCALEFRONT STUDIO
          </div>
        </div>
      </div>

      {/* MAIN 404 HERO CONTENT */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center my-auto">
        {/* 404 STICKER BADGE */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-[var(--sf-ink)] bg-[var(--sf-primary-soft)] text-[var(--sf-primary-deep)] text-xs font-mono font-bold shadow-[3px_3px_0_var(--sf-ink)] mb-8 uppercase">
          <FileQuestion className="w-4 h-4 text-[var(--sf-primary)]" />
          <span>HTTP 404 // MISSING ENDPOINT</span>
        </div>

        {/* GIANT 404 GRAPHIC */}
        <div className="relative mb-6">
          <h1
            className="text-8xl sm:text-9xl md:text-[11rem] font-serif font-extrabold tracking-tight text-[var(--sf-ink)] leading-none select-none"
            style={{
              textShadow: "6px 6px 0 var(--sf-primary-soft)",
            }}
          >
            404
          </h1>
        </div>

        {/* HEADLINE & DESCRIPTION */}
        <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-[var(--sf-ink)] tracking-tight mb-4">
          This page wandered off the storefront.
        </h2>

        <p className="text-base sm:text-lg text-[var(--sf-ink-soft)] font-sans leading-relaxed max-w-xl mx-auto mb-10">
          The URL you requested doesn&apos;t exist, was moved, or was refactored
          during our last deployment. Don&apos;t worry — we can get you back on
          track.
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <Link
            href="/"
            className="px-7 py-3.5 border-2 border-[var(--sf-ink)] bg-[var(--sf-primary)] hover:bg-[var(--sf-primary-deep)] text-white font-mono text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0_var(--sf-ink)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Take Me Home
          </Link>

          <Link
            href="/work"
            className="px-7 py-3.5 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] hover:bg-white text-[var(--sf-ink)] font-mono text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0_var(--sf-ink)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center gap-2"
          >
            <Briefcase className="w-4 h-4 text-[var(--sf-primary)]" />
            Explore Our Work
          </Link>
        </div>

        {/* DIRECTORY SHORTCUTS CARD */}
        <div className="border-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] p-6 sm:p-8 shadow-[6px_6px_0_var(--sf-ink)] text-left">
          <div className="flex items-center justify-between gap-2 border-b-2 border-[var(--sf-ink)] pb-4 mb-6">
            <div className="font-mono text-xs font-bold uppercase text-[var(--sf-ink)] flex items-center gap-2">
              <Compass className="w-4 h-4 text-[var(--sf-primary)]" />
              <span>Recommended Destinations</span>
            </div>
            <span className="font-mono text-[11px] text-[var(--sf-ink-mute)]">
              ACTIVE_ROUTES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/work"
              className="group p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] hover:bg-white shadow-[3px_3px_0_var(--sf-ink)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_var(--sf-ink)] transition-all flex items-start justify-between gap-3"
            >
              <div>
                <div className="font-serif font-bold text-base text-[var(--sf-ink)] group-hover:text-[var(--sf-primary)] transition-colors mb-1">
                  Portfolio &amp; Case Studies
                </div>
                <p className="text-xs text-[var(--sf-ink-soft)] font-sans leading-relaxed">
                  RecovrX, Iron Crate, Industrial Supply, and FlexForm
                  Athletics.
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-[var(--sf-primary)] shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/services/theme-development"
              className="group p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] hover:bg-white shadow-[3px_3px_0_var(--sf-ink)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_var(--sf-ink)] transition-all flex items-start justify-between gap-3"
            >
              <div>
                <div className="font-serif font-bold text-base text-[var(--sf-ink)] group-hover:text-[var(--sf-primary)] transition-colors mb-1">
                  Theme Development
                </div>
                <p className="text-xs text-[var(--sf-ink-soft)] font-sans leading-relaxed">
                  Custom Liquid 2.0 architectures with zero third-party app
                  bloat.
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-[var(--sf-primary)] shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/services/cro-optimization"
              className="group p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] hover:bg-white shadow-[3px_3px_0_var(--sf-ink)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_var(--sf-ink)] transition-all flex items-start justify-between gap-3"
            >
              <div>
                <div className="font-serif font-bold text-base text-[var(--sf-ink)] group-hover:text-[var(--sf-primary)] transition-colors mb-1">
                  Conversion Rate Optimization
                </div>
                <p className="text-xs text-[var(--sf-ink-soft)] font-sans leading-relaxed">
                  Multi-SKU bundling, milestone drawer carts, and PDP
                  ergonomics.
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-[var(--sf-primary)] shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact-us"
              className="group p-4 border-2 border-[var(--sf-ink)] bg-[var(--sf-paper)] hover:bg-white shadow-[3px_3px_0_var(--sf-ink)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_var(--sf-ink)] transition-all flex items-start justify-between gap-3"
            >
              <div>
                <div className="font-serif font-bold text-base text-[var(--sf-ink)] group-hover:text-[var(--sf-primary)] transition-colors mb-1">
                  Contact Studio
                </div>
                <p className="text-xs text-[var(--sf-ink-soft)] font-sans leading-relaxed">
                  Discuss a project, request a store audit, or ask a question.
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-[var(--sf-primary)] shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </main>

      {/* FOOTER STRIP */}
      <div className="border-t-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[var(--sf-ink-mute)]">
          <span>
            &copy; {new Date().getFullYear()} ScaleFront Studio. All rights
            reserved.
          </span>
          <Link
            href="/"
            className="text-[var(--sf-ink)] hover:text-[var(--sf-primary)] font-bold transition-colors"
          >
            scalefront.io &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
