import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      {/* Spacer to prevent content overlap */}
      <div className="h-24" />

      <section className="fixed bottom-0 left-0 w-full border-t border-[#16A34A]/20 bg-[#F1F5F9] z-50">
        <div className="mx-auto max-w-6xl px-4 py-4 md:py-6">
          <div className="flex flex-col items-center gap-3 text-center md:flex-row md:justify-between md:text-left">
            {/* Text */}
            <div className="max-w-xs md:max-w-none">
              <h4 className="text-base md:text-lg font-semibold">
                Ready to migrate or build?
              </h4>
              <p className="text-xs md:text-sm text-[#333333]/80">
                Get a quick audit and a roadmap to launch on a modern Next.js stack.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col w-full max-w-xs gap-2 md:flex-row md:max-w-none md:gap-3">
              <Button
                asChild
                className="bg-[#F97316] hover:bg-[#F97316]/90 text-white w-full md:w-auto"
              >
                <Link href="/contact?intent=start-project">
                  Start a project
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#16A34A] text-[#16A34A] hover:bg-[#16A34A]/10 bg-transparent w-full md:w-auto"
              >
                <Link href="/contact?intent=quote">
                  Get a quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
