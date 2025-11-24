"use client";

import type React from "react";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";

import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation?: string;
  src?: string;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [isHover, setIsHover] = useState(false);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay && !isHover) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, isHover]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "ArrowLeft") handlePrev();
  };

  return (
    <div
      className="mx-auto mt-6 max-w-sm md:max-w-4xl px-6 md:px-8 lg:px-12 py-8 font-sans antialiased bg-card text-card-foreground border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow"
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonials"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="relative grid grid-cols-1 gap-10 md:gap-16">
        {/* <div className="relative h-80 w-full">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: randomRotateY(),
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                  zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
                  y: isActive(index) ? [0, -80, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: randomRotateY(),
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom"
              >
                <img
                  src={testimonial.src || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div> */}
        <div className="flex flex-col justify-between py-2">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            aria-live="polite"
          >
            <h3 className="text-2xl font-semibold text-foreground">
              {testimonials[active].name}
            </h3>
            {testimonials[active].designation ? (
              <p className="text-sm text-muted-foreground">
                {testimonials[active].designation}
              </p>
            ) : null}
            <motion.p className="mt-6 text-base leading-relaxed text-foreground/90">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex flex-col gap-6 pt-10 md:pt-6">
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground outline-none ring-offset-2 ring-offset-background focus:ring-2 focus:ring-ring hover:bg-primary/90 transition-colors"
              >
                <IconArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover/button:rotate-12" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground outline-none ring-offset-2 ring-offset-background focus:ring-2 focus:ring-ring hover:bg-primary/90 transition-colors"
              >
                <IconArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/button:-rotate-12" />
              </button>
            </div>
            <div
              className="flex flex-wrap items-center gap-2"
              role="tablist"
              aria-label="Testimonial indicators"
            >
              {testimonials.map((t, i) => {
                const activeDot = isActive(i);
                return (
                  <button
                    key={`${t.name}-${i}`}
                    role="tab"
                    aria-label={`Go to testimonial ${i + 1} ${t.name ? "by " + t.name : ""}`}
                    onClick={() => setActive(i)}
                    className={[
                      "h-2.5 w-2.5 rounded-full transition-all",
                      activeDot
                        ? "bg-primary w-8"
                        : "bg-muted hover:bg-muted-foreground/30",
                    ].join(" ")}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
