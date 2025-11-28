'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import 'highlight.js/styles/github-dark.css';

interface MarkdownContentProps {
  content: string;
}

function CodeBlock({ children, className }: { children: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative group my-8">
      <button
        onClick={copyCode}
        className="absolute right-3 top-3 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white text-[12px] rounded opacity-0 group-hover:opacity-100 transition-opacity z-10"
        aria-label="Copy code"
      >
        {copied ? (
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Copied!
          </span>
        ) : (
          'Copy'
        )}
      </button>
      <pre className="!bg-[#1e1e1e] dark:!bg-gray-950 !text-gray-100 !p-6 !rounded !overflow-x-auto !text-[16px] !my-0">
        <code className={className}>{children}</code>
      </pre>
    </div>
  );
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight, rehypeRaw]}
      components={{
        // Auto-generate IDs for headings
        h1: ({ children, ...props }) => {
          const text = String(children);
          const id = text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
          return <h1 id={id} {...props}>{children}</h1>;
        },
        h2: ({ children, ...props }) => {
          const text = String(children);
          const id = text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
          return <h2 id={id} {...props}>{children}</h2>;
        },
        h3: ({ children, ...props }) => {
          const text = String(children);
          const id = text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
          return <h3 id={id} {...props}>{children}</h3>;
        },
        // Add copy button to code blocks
        pre: ({ children, ...props }) => {
          const codeString = String((children as any)?.props?.children || '');
          const className = (children as any)?.props?.className || '';

          return (
            <CodeBlock className={className}>
              {codeString}
            </CodeBlock>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
