import { homepageDefaults, type HomepageContent } from "@/content/homepage";

// These are presentation details, not editor-controlled content.
export const presentationKeys = new Set([
  "id",
  "delay",
  "tint",
  "ink",
  "bg",
  "mute",
  "feat",
  "border",
  "shadow",
  "check",
  "checkink",
  "cta_bg",
  "cta_ink",
]);

type Value = string | number | boolean | Value[] | { [key: string]: Value };

/** Payload arrays use rows; wrap primitive arrays (tags, logos, features). */
export function toCMSValue(value: Value): Value {
  if (Array.isArray(value)) {
    return value.map((item) =>
      typeof item === "object" ? toCMSValue(item) : { value: item },
    );
  }
  if (value !== null && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value)
        .filter(([key]) => !presentationKeys.has(key))
        .map(([key, item]) => [key, toCMSValue(item)]),
    );
  }
  return value;
}

/** Restore presentation defaults and keep the frontend's existing content shape. */
function mergeValue(template: Value, value: unknown): Value {
  if (value === undefined || value === null) return template;
  if (Array.isArray(template)) {
    if (!Array.isArray(value)) return template;
    return value.map((row, index) => {
      const itemTemplate = template[index] ?? template[index % template.length];
      if (typeof itemTemplate !== "object") {
        const primitive = row && typeof row === "object" ? row.value : row;
        return mergeValue(itemTemplate, primitive);
      }
      const item = mergeValue(itemTemplate, row);
      if (
        item &&
        !Array.isArray(item) &&
        typeof item === "object" &&
        "id" in item
      ) {
        item.id =
          (row && typeof row === "object" ? row.id : undefined) ??
          item.id ??
          `${index}`;
      }
      return item;
    });
  }
  if (typeof template === "object") {
    if (typeof value !== "object" || Array.isArray(value)) return template;
    const record = value as Record<string, unknown>;
    return Object.fromEntries(
      Object.entries(template).map(([key, item]) => [
        key,
        presentationKeys.has(key) ? item : mergeValue(item, record[key]),
      ]),
    );
  }
  return typeof template === typeof value ? (value as Value) : template;
}

export function resolveHomepage(value: unknown): HomepageContent {
  return mergeValue(homepageDefaults, value) as HomepageContent;
}
