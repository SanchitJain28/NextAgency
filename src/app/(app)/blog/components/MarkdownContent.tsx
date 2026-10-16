"use client";

import { useState, type ReactNode, isValidElement } from "react";
import { Check, Copy } from "lucide-react";
import type { Element, RootContent } from "hast";
import styles from "./MarkdownContent.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";

function getNodeText(node: RootContent | undefined): string {
  if (!node) return "";
  if (node.type === "text") return node.value;
  if ("children" in node) return node.children.map(getNodeText).join("");
  return "";
}

function CodeBlock({
  node,
  className,
  filename,
  children,
}: {
  node: RootContent | undefined;
  className?: string;
  filename?: string;
  children: ReactNode;
}) {
  const [copied, setCopied] = useState(false);
  const language = className?.match(/language-([\w-]+)/)?.[1] ?? "code";
  const languageLabels: Record<string, [string, string]> = {
    js: ["JS", "JavaScript"], javascript: ["JS", "JavaScript"],
    ts: ["TS", "TypeScript"], typescript: ["TS", "TypeScript"],
    tsx: ["TS", "TypeScript"], jsx: ["JS", "JavaScript"],
    bash: [">_", "Terminal"], shell: [">_", "Terminal"],
    json: ["{}", "JSON"], css: ["#", "CSS"],
    env: ["$", "Environment variables"], text: ["≡", "Plain text"],
  };
  const [languageIcon, languageLabel] = languageLabels[language] ?? ["</>", language];
  const [copyFailed, setCopyFailed] = useState(false);
  const codeString = getNodeText(node).replace(/\n$/, "");

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopyFailed(false);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setCopyFailed(true);
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className={styles.codeBlock}>
      <div className={styles.codeHeader}>
        <span className={styles.codeTitle}>
          <span className={styles.languageIcon} aria-hidden="true">{languageIcon}</span>
          <span>{filename || languageLabel}</span>
        </span>
        <button
          type="button"
          onClick={copyCode}
          className={styles.copyButton}
          aria-label={copyFailed ? "Copy failed. Try again" : copied ? "Code copied" : "Copy code"}
          title={copyFailed ? "Copy failed. Try again" : copied ? "Copied!" : "Copy code"}
        >
          {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
          <span className="sr-only" aria-live="polite">{copyFailed ? "Copy failed. Try again" : copied ? "Code copied" : "Copy code"}</span>
        </button>
      </div>
      <pre tabIndex={0} aria-label={`${language} code example`}>
        <code className={className}>{children}</code>
      </pre>
    </div>
  );
}

export function MarkdownContent({ content }: { content: string }) {
  return (
    <div className={styles.content}>
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
          const startLine = node?.position?.start.line;
          const introduction = startLine
            ? content.split("\n").slice(Math.max(0, startLine - 5), startLine - 1).join("\n")
            : "";
          const fileReferences = [...introduction.matchAll(/`([\w./[\]-]+\.(?:tsx?|jsx?|json|css|ya?ml|md|local|env))`/g)];
          const filename = fileReferences.at(-1)?.[1];
          const codeEl = isValidElement<{ className?: string; children?: ReactNode }>(children)
            ? children
            : undefined;
          return (
            <CodeBlock
              node={(node as Element | undefined)?.children?.[0]}
              className={codeEl?.props?.className}
              filename={filename}
            >
              {codeEl?.props?.children}
            </CodeBlock>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
    </div>
  );
}
