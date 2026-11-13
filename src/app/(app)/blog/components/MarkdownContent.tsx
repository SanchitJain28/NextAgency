import type { Element, RootContent } from "hast";
import type { BundledLanguage } from "shiki";
import styles from "./MarkdownContent.module.css";
import { CodeBlock, type CodeExample } from "./CodeBlock";
import { RegionalPrice } from "./RegionalPrice";
import { blogCodeTheme, getBlogHighlighter, getFence, rehypeCodeVariants } from "./codeHighlighting";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const languageLabels: Record<string, [string, string?]> = {
  js: ["JavaScript", "JS"], javascript: ["JavaScript", "JS"], jsx: ["JavaScript", "JS"],
  ts: ["TypeScript", "TS"], typescript: ["TypeScript", "TS"], tsx: ["TypeScript", "TS"],
  html: ["HTML"], xml: ["XML"], css: ["CSS", "#"], scss: ["SCSS", "#"],
  liquid: ["Liquid"], bash: ["Terminal", ">_"], sh: ["Terminal", ">_"], shell: ["Terminal", ">_"],
  json: ["JSON", "{}"], env: ["Environment variables", "$"], text: ["Plain text"],
};

function getNodeText(node: RootContent): string {
  if (node.type === "text") return node.value;
  return "children" in node ? node.children.map(getNodeText).join("") : "";
}

export async function MarkdownContent({ content }: { content: string }) {
  const highlighter = await getBlogHighlighter();
  const supportedLanguages = new Set(highlighter.getLoadedLanguages());
  const lines = content.split("\n");

  function exampleFor(node: Element): CodeExample {
    const fence = getFence(node, content);
    const language = fence?.language || "text";
    const [label, icon] = Object.hasOwn(languageLabels, language) ? languageLabels[language] : [language];
    const source = getNodeText(fence?.code ?? node).replace(/\n$/, "");
    const startLine = node.position?.start.line;
    const introduction = startLine
      ? lines.slice(Math.max(0, startLine - 5), startLine - 1).join("\n")
      : "";
    const fileReferences = [...introduction.matchAll(/`([\w./[\]-]+\.(?:liquid|html?|tsx?|jsx?|json|css|scss|ya?ml|md|local|env))`/g)];
    const filename = fence?.meta.match(/(?:^|\s)filename=(?:"([^"]+)"|'([^']+)'|(\S+))/)?.slice(1).find(Boolean)
      ?? fileReferences.at(-1)?.[1];
    const highlightLanguage = language === "shell" ? "bash" : language;
    const code = supportedLanguages.has(highlightLanguage)
      ? highlighter.codeToTokens(source, { lang: highlightLanguage as BundledLanguage, theme: blogCodeTheme }).tokens.map((tokens, row) => (
        <span key={row}>
          {row > 0 && "\n"}
          {tokens.map((token) => <span key={token.offset} style={{ color: token.color }}>{token.content}</span>)}
        </span>
      ))
      : source;
    return { language, label, icon, filename, code };
  }

  return (
    <div className={styles.content}>
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, [rehypeCodeVariants, content]]}
      components={{
        span: ({ node, children, ...props }) => {
          const region = node?.properties.dataPriceRegion;
          if (region === "in" || region === "intl") {
            return <RegionalPrice {...props} region={region}>{children}</RegionalPrice>;
          }
          return <span {...props}>{children}</span>;
        },
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
        pre: ({ node, children }) => node
          ? <CodeBlock examples={[exampleFor(node)]} />
          : <pre>{children}</pre>,
        div: ({ node, children, ...props }) => {
          const mode = node?.properties.dataCodeVariants;
          if (node && (mode === "files" || mode === "languages")) {
            const examples = node.children
              .filter((child): child is Element => child.type === "element" && child.tagName === "pre")
              .map(exampleFor);
            if (examples.length > 1) return <CodeBlock examples={examples} fileTabs={mode === "files"} />;
          }
          return <div {...props}>{children}</div>;
        },
      }}
    >
      {content}
    </ReactMarkdown>
    </div>
  );
}
