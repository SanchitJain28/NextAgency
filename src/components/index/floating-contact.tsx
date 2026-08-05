"use client";

import { useState } from "react";
import Link from "next/link";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-[22px] bottom-[22px] z-[200] flex flex-col items-end">
      <div
        className="flex flex-col gap-2.5 items-end mb-3 transition-all duration-200"
        style={{
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateY(0)" : "translateY(14px)",
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        <Link
          href="https://instagram.com/scalefront"
          target="_blank"
          rel="noopener"
          className="group flex items-center gap-2.5 no-underline"
        >
          <span
            className="bg-white border-2 border-[var(--sf-ink)] px-[11px] py-1.5 text-[11px] font-bold tracking-[0.08em] uppercase text-[var(--sf-ink)] whitespace-nowrap"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              boxShadow: "3px 3px 0 var(--sf-ink)",
            }}
          >
            Instagram
          </span>
          <span
            className="w-[50px] h-[50px] flex-none bg-[#D6296B] border-2 border-[var(--sf-ink)] flex items-center justify-center text-white transition-all duration-100"
            style={{ boxShadow: "3px 3px 0 var(--sf-ink)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translate(2px, 2px)";
              e.currentTarget.style.boxShadow = "1px 1px 0 var(--sf-ink)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "3px 3px 0 var(--sf-ink)";
            }}
          >
            <svg
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </span>
        </Link>
        <Link
          href="https://wa.me/10000000000"
          target="_blank"
          rel="noopener"
          className="group flex items-center gap-2.5 no-underline"
        >
          <span
            className="bg-white border-2 border-[var(--sf-ink)] px-[11px] py-1.5 text-[11px] font-bold tracking-[0.08em] uppercase text-[var(--sf-ink)] whitespace-nowrap"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              boxShadow: "3px 3px 0 var(--sf-ink)",
            }}
          >
            WhatsApp
          </span>
          <span
            className="w-[50px] h-[50px] flex-none bg-[#1FA855] border-2 border-[var(--sf-ink)] flex items-center justify-center text-white transition-all duration-100"
            style={{ boxShadow: "3px 3px 0 var(--sf-ink)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translate(2px, 2px)";
              e.currentTarget.style.boxShadow = "1px 1px 0 var(--sf-ink)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "3px 3px 0 var(--sf-ink)";
            }}
          >
            <svg
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </span>
        </Link>
        <Link
          href="tel:+10000000000"
          className="group flex items-center gap-2.5 no-underline"
        >
          <span
            className="bg-white border-2 border-[var(--sf-ink)] px-[11px] py-1.5 text-[11px] font-bold tracking-[0.08em] uppercase text-[var(--sf-ink)] whitespace-nowrap"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              boxShadow: "3px 3px 0 var(--sf-ink)",
            }}
          >
            Call
          </span>
          <span
            className="w-[50px] h-[50px] flex-none bg-[var(--sf-ink)] border-2 border-[var(--sf-ink)] flex items-center justify-center text-white transition-all duration-100"
            style={{ boxShadow: "3px 3px 0 var(--sf-ink)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translate(2px, 2px)";
              e.currentTarget.style.boxShadow = "1px 1px 0 var(--sf-ink)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "3px 3px 0 var(--sf-ink)";
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </span>
        </Link>
        <Link
          href="mailto:hello@scalefront.studio"
          className="group flex items-center gap-2.5 no-underline"
        >
          <span
            className="bg-white border-2 border-[var(--sf-ink)] px-[11px] py-1.5 text-[11px] font-bold tracking-[0.08em] uppercase text-[var(--sf-ink)] whitespace-nowrap"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              boxShadow: "3px 3px 0 var(--sf-ink)",
            }}
          >
            Email
          </span>
          <span
            className="w-[50px] h-[50px] flex-none bg-[var(--sf-primary)] border-2 border-[var(--sf-ink)] flex items-center justify-center text-white transition-all duration-100"
            style={{ boxShadow: "3px 3px 0 var(--sf-ink)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translate(2px, 2px)";
              e.currentTarget.style.boxShadow = "1px 1px 0 var(--sf-ink)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "3px 3px 0 var(--sf-ink)";
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
              <path d="m22 6-10 7L2 6"></path>
            </svg>
          </span>
        </Link>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact Scalefront"
        className="w-[58px] h-[58px] bg-[#1FA855] border-2 border-[var(--sf-ink)] text-white flex items-center justify-center cursor-pointer p-0 transition-all duration-100"
        style={{ boxShadow: "4px 4px 0 var(--sf-ink)" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translate(2px, 2px)";
          e.currentTarget.style.boxShadow = "2px 2px 0 var(--sf-ink)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "none";
          e.currentTarget.style.boxShadow = "4px 4px 0 var(--sf-ink)";
        }}
      >
        {isOpen ? (
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6L6 18"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        ) : (
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        )}
      </button>
    </div>
  );
}
