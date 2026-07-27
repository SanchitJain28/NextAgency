"use client";
import Link from "next/link";
import WorldMap from "@/components/ui/world-map";

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative pt-[60px] md:pt-[100px] px-6 md:px-10 pb-[60px] md:pb-[120px] md:min-h-[800px] flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-70 pointer-events-none flex items-center justify-center">
        <div className="w-full max-w-[1400px] mt-20">
          <WorldMap
            dots={[
              {
                start: { lat: 64.2008, lng: -149.4937 }, // Alaska
                end: { lat: 34.0522, lng: -118.2437 }, // LA
              },
              {
                start: { lat: 64.2008, lng: -149.4937 },
                end: { lat: -15.7975, lng: -47.8919 },
              },
              {
                start: { lat: -15.7975, lng: -47.8919 },
                end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
              },
              {
                start: { lat: 51.5074, lng: -0.1278 }, // London
                end: { lat: 28.6139, lng: 77.209 }, // New Delhi
              },
              {
                start: { lat: 28.6139, lng: 77.209 },
                end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
              },
              {
                start: { lat: 28.6139, lng: 77.209 },
                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
              },
            ]}
          />
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto w-full relative z-10 flex flex-col items-start text-left md:items-center md:text-center">
        <div className="max-w-[700px]">
          <h1 className="text-[42px] md:text-[72px] font-semibold tracking-[-0.03em] leading-[1.05] text-[#111111] mb-5 md:mb-6">
            Shopify development{" "}
            <span className="text-[#1677ff]">that scales</span> your revenue
          </h1>
          <p className="text-[16px] md:text-[20px] text-[#6b7280] leading-[1.55] max-w-[600px] md:mx-auto mb-8 md:mb-9">
            We are a Shopify development agency based in India, building
            high-performance custom apps, headless storefronts, and
            conversion-optimized themes for DTC brands doing{" "}
            <strong className="text-[#111111] font-medium">$1M+</strong> in
            annual revenue.
          </p>
          <div className="flex flex-wrap justify-start md:justify-center gap-3 md:gap-4 mb-8 md:mb-9">
            <Link
              href="/contact-us"
              className="inline-flex items-center h-12 px-7 text-[15px] font-semibold tracking-[0.02em] no-underline bg-[#1677ff] text-white hover:bg-blue-600 transition-colors"
            >
              Start a project
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center h-12 px-7 text-[15px] font-semibold tracking-[0.02em] no-underline bg-white/80 backdrop-blur-md text-[#111111] border border-[#d9dee7] hover:bg-[#f7f8fa] transition-colors"
            >
              Explore services
            </Link>
          </div>
          <div className="flex flex-wrap justify-start md:justify-center gap-2 md:gap-3">
            {["60+ stores launched", "Shopify Plus partners"].map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-[#111111] bg-white/60 backdrop-blur-md border border-[#d9dee7] shadow-sm"
              >
                <span className="w-2 h-2 bg-[#1677ff] shrink-0" />
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
