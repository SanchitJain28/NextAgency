import type { Field, GlobalConfig } from "payload";
import { homepageDefaults } from "@/content/homepage";
import { presentationKeys, toCMSValue } from "@/lib/cms/homepage-data";

const labels: Record<string, string> = {
  hero: "Hero",
  logos: "Trusted brands",
  intro: "Introduction",
  projects: "Featured projects",
  services: "Services",
  caseStudies: "Case studies",
  results: "Results",
  testimonials: "Testimonials",
  secondary: "Why ScaleFront",
  pricing: "Pricing",
  faq: "FAQ",
  contact: "Contact",
  seo: "SEO",
  items: "Entries",
  q: "Question",
  a: "Answer",
  hrefContactUs: "Primary button URL",
  hireShopify: "Headline",
  developer: "Highlighted headline",
  basedInGurgaonWorkingWith: "Description",
  shopifyPartnerBasedInGurgaon: "Badge",
  priceINR: "Price (INR)",
  priceUSD: "Price (USD)",
  imagePlaceholder: "Image URL",
  image: "Image URL",
  link: "Link URL",
  cta: "Button label",
};
const labelFor = (key: string) =>
  labels[key] ??
  key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());
const isURL = (key: string) =>
  /^(href|src)/.test(key) ||
  ["link", "image", "imagePlaceholder"].includes(key);

function fieldsFor(record: Record<string, unknown>): Field[] {
  return Object.entries(record)
    .filter(([key]) => !presentationKeys.has(key))
    .map(([name, value]): Field => {
      const base = { name, label: labelFor(name) };
      if (Array.isArray(value)) {
        const first = value[0];
        return {
          ...base,
          type: "array",
          maxRows: 100,
          defaultValue: toCMSValue(value),
          fields:
            typeof first === "object"
              ? fieldsFor(first)
              : [
                  {
                    name: "value",
                    label: "Text",
                    type: "text",
                    required: true,
                  },
                ],
        };
      }
      if (typeof value === "object" && value)
        return {
          ...base,
          type: "group",
          fields: fieldsFor(value as Record<string, unknown>),
        };
      if (typeof value === "boolean")
        return { ...base, type: "checkbox", defaultValue: value };
      if (typeof value === "number")
        return {
          ...base,
          type: "number",
          defaultValue: value,
          required: true,
          ...(name === "rating" ? { min: 0, max: 5 } : {}),
        };
      return {
        ...base,
        type:
          typeof value === "string" && value.length > 100 ? "textarea" : "text",
        defaultValue: value,
        required: true,
        ...(isURL(name)
          ? {
              admin: {
                description:
                  "Use a site path (/contact-us), #anchor, or a full https:// URL.",
              },
              validate: (url: unknown) =>
                typeof url === "string" &&
                /^(\/(?!\/)|#|https?:\/\/|mailto:|tel:)/i.test(url)
                  ? true
                  : "Enter a site path, anchor, or an http(s), mailto, or tel URL.",
            }
          : {}),
      } as Field;
    });
}

export const Homepage: GlobalConfig = {
  slug: "homepage",
  label: "Homepage",
  admin: {
    group: "Website",
    livePreview: {
      url: ({ req }) =>
        req.user && req.url
          ? new URL("/preview/homepage", req.url).href
          : undefined,
      breakpoints: [
        { label: "Mobile", name: "mobile", width: 390, height: 844 },
        { label: "Tablet", name: "tablet", width: 768, height: 1024 },
        { label: "Desktop", name: "desktop", width: 1440, height: 900 },
      ],
    },
    description:
      "Edit CMS preview content. The public homepage currently uses local content; saving here does not change the public site.",
  },
  access: { read: () => true, update: ({ req }) => Boolean(req.user) },
  fields: [
    {
      type: "tabs",
      tabs: Object.entries(homepageDefaults).map(([name, value]) => ({
        name,
        label: labels[name],
        fields: fieldsFor(value),
      })),
    },
  ],
};
