"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import "highlight.js/styles/github-dark.css";

function getNodeText(node: any): string {
  if (!node) return "";
  if (node.type === "text") return node.value;
  if (node.children) return node.children.map(getNodeText).join("");
  return "";
}

function CodeBlock({
  node,
  className,
  children,
}: {
  node: any;
  className?: string;
  children: React.ReactNode;
}) {
  const [copied, setCopied] = useState(false);
  const codeString = getNodeText(node).replace(/\n$/, "");

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
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
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Copied!
          </span>
        ) : (
          "Copy"
        )}
      </button>
      <pre className="!bg-[#1e1e1e] dark:!bg-gray-950 !text-gray-100 !p-6 !rounded !overflow-x-auto !text-[16px] !my-0">
        <code className={className}>{children}</code>
      </pre>
    </div>
  );
}

export function MarkdownContent({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight, rehypeRaw]}
      components={{
        h1: ({ children, ...props }) => {
          const id = String(children)
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
          return (
            <h2 id={id} {...props}>
              {children}
            </h2>
          );
        },
        h2: ({ children, ...props }) => {
          const id = String(children)
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
          return (
            <h2 id={id} {...props}>
              {children}
            </h2>
          );
        },
        h3: ({ children, ...props }) => {
          const id = String(children)
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
          return (
            <h3 id={id} {...props}>
              {children}
            </h3>
          );
        },
        pre: ({ node, children }) => {
          const codeEl = children as any;
          return (
            <CodeBlock
              node={node?.children?.[0]}
              className={codeEl?.props?.className}
            >
              {codeEl?.props?.children}
            </CodeBlock>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
