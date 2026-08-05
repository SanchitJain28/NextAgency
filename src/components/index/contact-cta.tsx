"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function ContactCTA() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="contact" className="max-w-[1200px] mx-auto px-7 pt-[60px] pb-[52px]">
      <div
        data-reveal=""
        className="relative overflow-hidden p-[clamp(40px,6vw,80px)] text-white"
        style={{ background: "linear-gradient(135deg, var(--sf-primary), var(--sf-berry))" }}
      >
        <div
          className="absolute top-[-80px] right-[-60px] w-[340px] h-[340px]"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,.22), transparent 65%)" }}
        />
        <div
          className="absolute bottom-[-120px] left-[-40px] w-[280px] h-[280px] opacity-[0.35]"
          style={{ background: "var(--sf-gold)" }}
        />
        
        <div className="relative z-[1] grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div>
            <h2
              className="m-0 mb-[18px] leading-none tracking-[-0.035em] text-white"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(34px, 5vw, 60px)",
                textWrap: "balance",
              }}
            >
              Let&apos;s build the store your brand deserves.
            </h2>
            <p className="m-0 mb-[30px] text-[18px] leading-[1.6] max-w-[480px] text-white/90">
              Tell us where you are today. We&apos;ll send back a free audit with the three highest-impact wins — no pitch deck, no fluff.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link
                href="mailto:hello@scalefront.studio"
                className="inline-flex items-center gap-2.5 bg-white text-[var(--sf-primary-deep)] font-bold text-[16px] leading-none px-7 py-[15px] border-2 border-[var(--sf-ink)] transition-all duration-100"
                style={{ boxShadow: "5px 5px 0 var(--sf-ink)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translate(2px, 2px)";
                  e.currentTarget.style.boxShadow = "3px 3px 0 var(--sf-ink)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "5px 5px 0 var(--sf-ink)";
                }}
              >
                Get your free audit →
              </Link>
              <Link
                href="#top"
                className="inline-flex items-center gap-2.5 bg-white/10 text-white font-semibold text-[16px] leading-none px-[26px] py-[14px] border-2 border-white transition-all duration-100"
                style={{ boxShadow: "4px 4px 0 rgba(0,0,0,.35)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translate(2px, 2px)";
                  e.currentTarget.style.boxShadow = "2px 2px 0 rgba(0,0,0,.35)";
                  e.currentTarget.style.background = "rgba(255,255,255,.26)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "4px 4px 0 rgba(0,0,0,.35)";
                  e.currentTarget.style.background = "rgba(255,255,255,.16)";
                }}
              >
                Book a call
              </Link>
            </div>
          </div>
          
          <div
            className="p-[22px] bg-white/10 border border-white/30 backdrop-blur-sm"
          >
            <div
              className="text-[12px] tracking-[0.05em] text-white/85 mb-4"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              RESPONSE TIME
            </div>
            <div
              className="leading-none tracking-[-0.03em] text-[52px]"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
              }}
            >
              &lt; 24h
            </div>
            <div className="text-[14.5px] text-white/85 mt-2 leading-[1.5]">
              Every inquiry gets a human reply from a strategist — never a bot.
            </div>
            <div className="h-px bg-white/25 my-[22px]" />
            <div className="flex justify-between text-[14px]">
              <span className="text-white/80">Based in</span>
              <span className="font-semibold">Austin · Remote</span>
            </div>
            <div className="flex justify-between text-[14px] mt-2.5">
              <span className="text-white/80">Availability</span>
              <span className="font-semibold">Q3 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
