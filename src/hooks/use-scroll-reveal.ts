"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (typeof IntersectionObserver === "undefined") {
      root.querySelectorAll("[data-reveal]").forEach((el) =>
        el.setAttribute("data-shown", "")
      );
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const d =
              (e.target as HTMLElement).getAttribute("data-delay") || "0ms";
            (e.target as HTMLElement).style.transitionDelay = d;
            e.target.setAttribute("data-shown", "");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    root.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return rootRef;
}
