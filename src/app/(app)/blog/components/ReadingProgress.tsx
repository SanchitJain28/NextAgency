'use client';

import { useEffect, useRef } from 'react';

export function ReadingProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const article = document.querySelector('article');
    if (!article) return;
    let frame = 0;

    const updateProgress = () => {
      frame = 0;
      const bounds = article.getBoundingClientRect();
      const distance = bounds.height - window.innerHeight;
      const progress = distance > 0
        ? Math.min(1, Math.max(0, -bounds.top / distance))
        : bounds.top <= 0 ? 1 : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;
    };
    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(updateProgress);
    };

    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(article);
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    updateProgress();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden="true" data-reading-progress className="pointer-events-none fixed inset-x-0 top-0 z-[200] h-1 bg-neutral-200/30">
      <div ref={barRef} className="h-full origin-left bg-[var(--sf-primary)] opacity-80" style={{ transform: 'scaleX(0)' }} />
    </div>
  );
}
