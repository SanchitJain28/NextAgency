'use client';

import { useEffect, useState } from 'react';

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

  useEffect(() => {
    setHeadings(parseHeadings(content));
  }, [content]);

  useEffect(() => {
    // Track scroll position for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <div className="mb-6">
      <nav
        aria-label="Table of contents"
        tabIndex={0}
        className="h-80 max-h-[50vh] overflow-y-auto overscroll-contain pr-2 [scrollbar-width:thin] [scrollbar-color:#d4d4d4_transparent] focus-visible:outline-2 focus-visible:outline-black"
      >
        <ul className="space-y-1">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={heading.level === 3 ? 'ml-2.5' : ''}
            >
              <a
                href={`#${heading.id}`}
                className={`block border-l-2 py-0.5 pl-2 text-[11px] leading-[1.4] tracking-[-0.01em] transition-colors hover:text-neutral-900 ${
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
