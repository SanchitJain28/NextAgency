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
        className="absolute right-3 top-3 px-2.5 py-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-mono text-[11px] uppercase tracking-wider border border-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity z-10"
        aria-label="Copy code"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre className="!bg-[#181310] !text-neutral-100 !p-6 !border !border-neutral-800 !overflow-x-auto !text-sm !my-0 !rounded-none">
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
