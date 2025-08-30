"use client";
import { useEffect, useRef, useState } from "react";

export const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState<number>(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const endValue = end;
          if (start === endValue) return;

          const totalFrames = Math.round(duration / (1000 / 60)); // ~60fps
          const increment = endValue / totalFrames;

          const counter = () => {
            start += increment;
            if (start < endValue) {
              setCount(Math.ceil(start));
              requestAnimationFrame(counter);
            } else {
              setCount(endValue);
            }
          };

          requestAnimationFrame(counter);
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [end, duration]);

  return { count, ref };
};
