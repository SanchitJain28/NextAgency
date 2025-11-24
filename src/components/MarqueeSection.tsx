"use client";
import { motion } from "framer-motion";

export const MarqueeSection = () => {
  return (
    <section className="py-6 lg:py-8 bg-primary/5 border-y border-primary/20 overflow-hidden">
      <div className="relative flex">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="flex whitespace-nowrap"
        >
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="text-3xl lg:text-4xl font-bold mx-8 text-primary/80"
            >
              SCALEFRONT • SHOPIFY EXPERTS
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
