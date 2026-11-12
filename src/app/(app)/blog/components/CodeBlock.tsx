"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Check, ChevronDown, CodeXml, Copy } from "lucide-react";
import styles from "./MarkdownContent.module.css";

export interface CodeExample {
  language: string;
  label: string;
  icon?: string;
  filename?: string;
  code: ReactNode;
}

export function CodeBlock({ examples }: { examples: CodeExample[] }) {
  const [selected, setSelected] = useState(0);
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const codeRef = useRef<HTMLElement>(null);
  const timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const example = examples[selected] ?? examples[0];
  const canSwitch = examples.length > 1;
  const copyLabel = status === "copied" ? "Code copied" : status === "error" ? "Copy failed. Try again" : "Copy code";

  useEffect(() => () => clearTimeout(timeout.current), []);

  async function copyCode() {
    if (!codeRef.current) return;
    clearTimeout(timeout.current);
    try {
      await navigator.clipboard.writeText(codeRef.current.textContent ?? "");
      setStatus("copied");
      timeout.current = setTimeout(() => setStatus("idle"), 2000);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={styles.codeBlock}>
      <div className={styles.codeHeader}>
        <span className={styles.codeTitle}>
          <span className={styles.languageIcon} aria-hidden="true">
            {example.icon ?? <CodeXml size={11} strokeWidth={2.5} />}
          </span>
          <span>{example.filename || example.label}</span>
        </span>
        <div className={styles.codeActions}>
          {canSwitch && (
            <label className={styles.languageSwitcher}>
              <span className="sr-only">Code language</span>
              <select
                value={selected}
                onChange={(event) => {
                  clearTimeout(timeout.current);
                  setStatus("idle");
                  setSelected(Number(event.target.value));
                }}
              >
                {examples.map(({ language, label }, index) => (
                  <option key={language} value={index}>{label}</option>
                ))}
              </select>
              <ChevronDown size={14} aria-hidden="true" />
            </label>
          )}
          <button
            type="button"
            onClick={copyCode}
            className={styles.copyButton}
            aria-label={copyLabel}
            title={copyLabel}
          >
            {status === "copied" ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
          </button>
          <span className="sr-only" role="status">{status === "idle" ? "" : copyLabel}</span>
        </div>
      </div>
      <pre tabIndex={0} aria-label={`${example.label} code example`}>
        <code ref={codeRef} className={`language-${example.language}`}>{example.code}</code>
      </pre>
    </div>
  );
}
