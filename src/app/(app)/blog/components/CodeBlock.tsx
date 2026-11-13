"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { Check, ChevronDown, CodeXml, Copy } from "lucide-react";
import styles from "./MarkdownContent.module.css";

export interface CodeExample {
  language: string;
  label: string;
  icon?: string;
  filename?: string;
  code: ReactNode;
}

export function CodeBlock({ examples, fileTabs = false }: { examples: CodeExample[]; fileTabs?: boolean }) {
  const [selected, setSelected] = useState(0);
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const codeRef = useRef<HTMLElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabId = useId();
  const timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const example = examples[selected] ?? examples[0];
  const canSwitch = examples.length > 1;
  const copyLabel = status === "copied" ? "Code copied" : status === "error" ? "Copy failed. Try again" : "Copy code";

  useEffect(() => () => clearTimeout(timeout.current), []);

  function selectExample(index: number) {
    clearTimeout(timeout.current);
    setStatus("idle");
    setSelected(index);
  }

  function handleTabKeys(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    switch (event.key) {
      case "ArrowRight": next = (index + 1) % examples.length; break;
      case "ArrowLeft": next = (index + examples.length - 1) % examples.length; break;
      case "Home": next = 0; break;
      case "End": next = examples.length - 1; break;
      default: return;
    }
    event.preventDefault();
    selectExample(next);
    tabsRef.current?.querySelectorAll("button")[next]?.focus();
  }

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
          {canSwitch && !fileTabs && (
            <label className={styles.languageSwitcher}>
              <span className="sr-only">Code language</span>
              <select
                value={selected}
                onChange={(event) => selectExample(Number(event.target.value))}
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
      {fileTabs ? (
        <>
          <div ref={tabsRef} className={styles.fileTabs} role="tablist" aria-label="Example files">
            {examples.map(({ filename, label }, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                id={`${tabId}-file-${index}`}
                aria-controls={`${tabId}-panel-${index}`}
                aria-selected={index === selected}
                tabIndex={index === selected ? 0 : -1}
                onClick={() => selectExample(index)}
                onKeyDown={(event) => handleTabKeys(event, index)}
              >
                {filename?.split("/").at(-1) || label}
              </button>
            ))}
          </div>
          {examples.map((file, index) => (
            <div
              key={index}
              role="tabpanel"
              id={`${tabId}-panel-${index}`}
              aria-labelledby={`${tabId}-file-${index}`}
              hidden={index !== selected}
            >
              {index === selected && (
                <pre tabIndex={0} aria-label={`${file.label} code example`}>
                  <code ref={codeRef} className={`language-${file.language}`}>{file.code}</code>
                </pre>
              )}
            </div>
          ))}
        </>
      ) : (
        <pre tabIndex={0} aria-label={`${example.label} code example`}>
          <code ref={codeRef} className={`language-${example.language}`}>{example.code}</code>
        </pre>
      )}
    </div>
  );
}
