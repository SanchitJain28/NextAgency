"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

const CONSENT_STORAGE_KEY = "scalefront_cookie_consent";

interface CookieConsentData {
  consent: "all" | "essential";
  analytics: boolean;
  timestamp: number;
  version: string;
}

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [animatingOut, setAnimatingOut] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
      if (!stored) {
        const timer = setTimeout(() => {
          setVisible(true);
        }, 700);
        return () => clearTimeout(timer);
      }
    } catch {}
  }, []);

  const saveConsent = (
    consentType: "all" | "essential",
    analytics: boolean,
  ) => {
    const data: CookieConsentData = {
      consent: consentType,
      analytics,
      timestamp: Date.now(),
      version: "1.0",
    };

    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(data));
    } catch {}

    if (typeof window !== "undefined") {
      const win = window as unknown as {
        gtag?: (
          command: string,
          action: string,
          params: Record<string, string>,
        ) => void;
      };
      if (typeof win.gtag === "function") {
        win.gtag("consent", "update", {
          analytics_storage: analytics ? "granted" : "denied",
        });
      }

      window.dispatchEvent(
        new CustomEvent("scalefront-cookie-consent", { detail: data }),
      );
    }

    setAnimatingOut(true);
    setTimeout(() => {
      setVisible(false);
    }, 200);
  };

  const handleAcceptAll = () => saveConsent("all", true);
  const handleEssentialOnly = () => saveConsent("essential", false);

  if (!mounted || !visible) return null;

  return (
    <aside
      role="region"
      aria-label="Cookie consent"
      className={`fixed bottom-4 left-4 right-4 sm:right-auto sm:left-5 sm:bottom-5 sm:max-w-[310px] z-[190] transition-all duration-200 ease-out ${
        animatingOut
          ? "opacity-0 translate-y-3 scale-95 pointer-events-none"
          : "opacity-100 translate-y-0 scale-100"
      }`}
    >
      <div
        className="bg-white border-2 border-[var(--sf-ink,#181310)] p-3 text-[var(--sf-ink,#181310)]"
        style={{
          boxShadow: "3px 3px 0 var(--sf-ink, #181310)",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* Header row: Cookie icon + Title + Dismiss */}
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <div className="flex items-center gap-1.5">
            <Cookie
              className="w-3.5 h-3.5 text-[var(--sf-primary,#D9481F)] shrink-0"
              aria-hidden="true"
            />
            <span className="text-[12px] font-bold tracking-tight">
              Cookie settings
            </span>
          </div>

          <button
            type="button"
            onClick={handleEssentialOnly}
            aria-label="Dismiss cookie notice with essential cookies only"
            className="w-5 h-5 flex items-center justify-center text-[#8A7E72] hover:text-[var(--sf-ink,#181310)] transition-colors cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Compact body text */}
        <p className="text-[11.5px] leading-[1.4] text-[#4A413A] mb-2.5">
          We use essential cookies and anonymous analytics to improve our site.{" "}
          <Link
            href="/privacy-policy"
            className="underline font-medium text-[var(--sf-ink,#181310)] hover:text-[var(--sf-primary,#D9481F)]"
          >
            Privacy Policy
          </Link>
          .
        </p>

        {/* Compact action buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleAcceptAll}
            className="flex-1 py-1 px-2.5 bg-[var(--sf-primary,#D9481F)] hover:bg-[var(--sf-primary-deep,#B4370F)] text-white text-[11px] font-bold border border-[var(--sf-ink,#181310)] shadow-[2px_2px_0_var(--sf-ink,#181310)] hover:translate-x-[1px] hover:translate-y-[1px] active:shadow-none transition-all cursor-pointer text-center"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={handleEssentialOnly}
            className="flex-1 py-1 px-2.5 bg-white hover:bg-[#F4F0E8] text-[var(--sf-ink,#181310)] text-[11px] font-semibold border border-[var(--sf-ink,#181310)] shadow-[2px_2px_0_var(--sf-ink,#181310)] hover:translate-x-[1px] hover:translate-y-[1px] active:shadow-none transition-all cursor-pointer text-center"
          >
            Decline
          </button>
        </div>
      </div>
    </aside>
  );
}
