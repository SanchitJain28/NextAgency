import assert from "node:assert/strict";
import test from "node:test";
import { homepageDefaults } from "../src/content/homepage";
import { resolveHomepage, toCMSValue } from "../src/lib/cms/homepage-data";

test("CMS round trip preserves all original homepage copy and presentation", () => {
  assert.deepEqual(
    resolveHomepage(toCMSValue(homepageDefaults)),
    homepageDefaults,
  );
});

test("editor changes update text, nested features and empty lists", () => {
  const content = resolveHomepage({
    hero: { hireShopify: "A new headline" },
    pricing: {
      items: [{ name: "Custom", features: [{ value: "A custom feature" }] }],
    },
    faq: { items: [] },
  });
  assert.equal(content.hero.hireShopify, "A new headline");
  assert.equal(content.hero.developer, homepageDefaults.hero.developer);
  assert.deepEqual(content.pricing.items[0].features, ["A custom feature"]);
  assert.deepEqual(content.faq.items, []);
});

test("CMS data cannot override code-owned colors and style tokens", () => {
  const content = resolveHomepage({
    services: { items: [{ title: "Updated", tint: "red", ink: "blue" }] },
  });
  assert.equal(content.services.items[0].title, "Updated");
  assert.equal(
    content.services.items[0].tint,
    homepageDefaults.services.items[0].tint,
  );
  assert.equal(
    content.services.items[0].ink,
    homepageDefaults.services.items[0].ink,
  );
});

test("incomplete preview rows do not break the page", () => {
  const content = resolveHomepage({ projects: { items: [null, {}] } });
  assert.equal(content.projects.items.length, 2);
  assert.equal(
    content.projects.items[0].title,
    homepageDefaults.projects.items[0].title,
  );
});

test("unsaved preview changes render locally without database population", async () => {
  const { handleMessage } = await import("@payloadcms/live-preview");
  const { homepagePreviewRequest } =
    await import("../src/lib/cms/preview-data");
  const initialData = toCMSValue(homepageDefaults) as Record<string, unknown>;
  const incoming = {
    ...initialData,
    hero: { hireShopify: "An unsaved headline" },
  };
  const data = await handleMessage({
    initialData,
    serverURL: "http://localhost:3000",
    apiRoute: "/api/cms",
    depth: 0,
    event: new MessageEvent("message", {
      origin: "http://localhost:3000",
      data: {
        type: "payload-live-preview",
        globalSlug: "homepage",
        data: incoming,
      },
    }),
    requestHandler: homepagePreviewRequest,
  });
  assert.equal(resolveHomepage(data).hero.hireShopify, "An unsaved headline");
  assert.equal(homepageDefaults.hero.hireShopify, "Hire Shopify");
});

test("preview messages from a different origin are ignored", async () => {
  const { handleMessage } = await import("@payloadcms/live-preview");
  let resolved = false;
  await handleMessage({
    initialData: { hero: { hireShopify: "Original" } },
    serverURL: "http://localhost:3000",
    event: new MessageEvent("message", {
      origin: "https://untrusted.example",
      data: {
        type: "payload-live-preview",
        globalSlug: "homepage",
        data: { hero: { hireShopify: "Untrusted" } },
      },
    }),
    requestHandler: async () => {
      resolved = true;
      return Response.json({});
    },
  });
  assert.equal(resolved, false);
});
