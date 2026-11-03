'use client';

import { useEffect, useRef, useState } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

function parseHeadings(content: string): Heading[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const extractedHeadings: Heading[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    extractedHeadings.push({ id, text, level });
  }
  return extractedHeadings;
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>(() => parseHeadings(content));
  const [activeId, setActiveId] = useState<string>('');
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setHeadings(parseHeadings(content));
  }, [content]);

  useEffect(() => {
    const targets = headings
      .map(({ id }) => document.getElementById(id))
      .filter((element) => element !== null);
    let frame = 0;

    const updateActiveHeading = () => {
      frame = 0;
      let current = '';
      for (const target of targets) {
        if (target.getBoundingClientRect().top > 100) break;
        current = target.id;
      }
      setActiveId(current);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(updateActiveHeading);
    };

    updateActiveHeading();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      cancelAnimationFrame(frame);
    };
  }, [headings]);

  useEffect(() => {
    const nav = navRef.current;
    const activeLink = nav?.querySelector('[aria-current="location"]');
    if (!nav || !activeLink || !nav.clientHeight) return;

    const viewport = nav.getBoundingClientRect();
    const link = activeLink.getBoundingClientRect();
    const inset = 8;
    const top = link.top - viewport.top - inset;
    const availableHeight = nav.clientHeight - 2 * inset;
    let previewBottom = link.bottom;
    let nextItem = activeLink.parentElement?.nextElementSibling;
    for (let i = 0; i < 2 && nextItem; i++) {
      const nextBottom = nextItem.getBoundingClientRect().bottom;
      if (nextBottom - link.top > availableHeight) break;
      previewBottom = nextBottom;
      nextItem = nextItem.nextElementSibling;
    }
    const bottom = previewBottom - (viewport.top + nav.clientHeight) + inset;
    const offset = top < 0 ? Math.max(top, bottom) : Math.max(0, bottom);
    if (offset) {
      nav.scrollBy({
        top: offset,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'auto'
          : 'smooth',
      });
    }
  }, [activeId, headings]);

  if (headings.length === 0) return null;

  return (
    <div className="mb-6">
      <nav
        ref={navRef}
        aria-label="Table of contents"
        tabIndex={0}
        className="h-80 max-h-[50vh] overflow-y-auto overscroll-contain pr-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-black"
      >
        <ul className="space-y-1">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={heading.level === 3 ? 'ml-2.5' : ''}
            >
              <a
                href={`#${heading.id}`}
                aria-current={activeId === heading.id ? 'location' : undefined}
                className={`block border-l-2 py-0.5 pl-2 text-[11px] lg:text-[16px] leading-[1.4] tracking-[-0.01em] transition-colors hover:text-neutral-900 ${
                  activeId === heading.id
                    ? 'text-black font-semibold border-black'
                    : 'border-transparent text-neutral-500 hover:text-neutral-900'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(heading.id)?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
