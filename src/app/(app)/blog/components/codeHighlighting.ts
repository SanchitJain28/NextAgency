import type { Element, Root } from "hast";
import { getSingletonHighlighter, type ThemeRegistration } from "shiki";

const docsTheme = {
  name: "blog-docs-dark",
  type: "dark",
  colors: {
    "editor.background": "#0a0a0a",
    "editor.foreground": "#ededed",
  },
  settings: [
    { scope: ["comment", "punctuation.definition.comment"], settings: { foreground: "#a1a1a1" } },
    { scope: ["keyword", "storage", "punctuation.definition.tag.liquid"], settings: { foreground: "#ff4c8d" } },
    { scope: ["string", "constant.other.character-class.regexp"], settings: { foreground: "#00ca51" } },
    { scope: ["entity.name.function", "support.function", "entity.other.attribute-name", "support.type", "entity.name.type"], settings: { foreground: "#c372fc" } },
    { scope: ["entity.name.tag", "support.class.component", "variable.other.property", "variable.other.member", "variable.language.liquid", "support.type.property-name.css", "support.type.property-name.json"], settings: { foreground: "#47a8ff" } },
    { scope: ["constant.numeric", "constant.language", "constant.other.color"], settings: { foreground: "#f2a20d" } },
  ],
} satisfies ThemeRegistration;

export function getBlogHighlighter() {
  return getSingletonHighlighter({
    themes: [docsTheme],
    langs: ["liquid", "html", "css", "tsx", "jsx", "typescript", "javascript", "bash", "json", "yaml", "markdown", "diff", "sql", "python", "dockerfile", "xml", "scss"],
  });
}

export const blogCodeTheme = docsTheme.name;

export function getFence(node: Element | undefined, source: string) {
  const code = node?.children[0];
  if (node?.tagName !== "pre" || code?.type !== "element" || code.tagName !== "code") return;
  const classNames = code.properties.className;
  const language = (Array.isArray(classNames) ? classNames : [classNames])
    .map(String)
    .find((name) => name.startsWith("language-"))?.slice(9).toLowerCase();
  // rehype-raw drops fence metadata but retains the original source position.
  const offset = node.position?.start.offset;
  const opening = offset === undefined ? "" : source.slice(offset).split("\n", 1)[0];
  const meta = opening.match(/^(?:`{3,}|~{3,})[ \t]*[^ \t]+[ \t]+(.+)$/)?.[1] ?? "";
  return { code, language, meta };
}

function isSwitcher(meta: string) {
  return /(?:^|\s)switcher(?:\s|$)/.test(meta);
}

// Adjacent fences marked "switcher" form one snippet with language variants.
export function rehypeCodeVariants(source: string) {
  return (tree: Root) => {
    function group(parent: Root | Element) {
      for (let index = 0; index < parent.children.length; index++) {
        const first = parent.children[index];
        if (first.type !== "element") continue;
        const fence = getFence(first, source);
        if (!fence?.language || !isSwitcher(fence.meta)) {
          group(first);
          continue;
        }
        const examples = [first];
        const languages = new Set([fence.language]);
        let end = index + 1;
        for (let next = end; next < parent.children.length; next++) {
          const sibling = parent.children[next];
          if (sibling.type === "text" && !sibling.value.trim()) continue;
          if (sibling.type !== "element") break;
          const variant = getFence(sibling, source);
          if (!variant?.language || !isSwitcher(variant.meta) || languages.has(variant.language)) break;
          languages.add(variant.language);
          examples.push(sibling);
          end = next + 1;
        }
        if (examples.length > 1) {
          parent.children.splice(index, end - index, {
            type: "element",
            tagName: "div",
            properties: { dataCodeVariants: true },
            children: examples,
          });
        }
      }
    }
    group(tree);
  };
}
