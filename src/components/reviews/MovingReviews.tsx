"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function MovingReviews() {
  return (
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
  );
}

const testimonials = [
  {
    quote:
      "We moved from a slow WordPress store to their Core plan with Next.js frontend. The speed difference is night and day — our bounce rate dropped by 35% within the first month.",
    name: "Samantha Lee",
    title: "Founder, Green Earth Skincare",
  },
  {
    quote:
      "The Pro plan paid for itself in the first two weeks. Our site loads instantly, and checkout is seamless. Sales are up 42% compared to our old WooCommerce setup.",
    name: "David Kim",
    title: "Owner, TechEdge Gadgets",
  },
  {
    quote:
      "We were worried about migrating our large catalog, but their team made it stress-free. The Elite plan gave us custom features we couldn’t get anywhere else, and our enterprise clients love the speed.",
    name: "Monica Alvarez",
    title: "Head of E-Commerce, FitWear Global",
  },
  {
    quote:
      "Our old WordPress site was costing us conversions. After switching to Next.js on the Core plan, our pages load almost instantly and customers actually stick around to buy.",
    name: "James O’Connor",
    title: "CEO, CraftBrew Supplies",
  },
  {
    quote:
      "The Pro plan was the sweet spot for us. We needed faster performance, better SEO, and a mobile-friendly experience. All three improved right away — organic traffic is up 60%.",
    name: "Rachel Morgan",
    title: "Marketing Director, Luxe Interiors",
  },
  {
    quote:
      "Enterprise-level support and blazing fast site speed — that’s what we got with their Elite plan. Our store handles huge traffic spikes with zero downtime now.",
    name: "Arjun Patel",
    title: "CTO, MegaMart Online",
  },
  {
    quote:
      "We’ve tried other dev agencies before, but none matched this level of execution. From migration to launch, everything was smooth, and our site is now a sales machine.",
    name: "Elena Rossi",
    title: "Co-Founder, Bloom & Co.",
  },
];

