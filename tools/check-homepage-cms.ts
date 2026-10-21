import assert from "node:assert/strict";
import nextEnv from "@next/env";
import { getPayload } from "payload";
import { resolveHomepage } from "../src/lib/cms/homepage-data";

nextEnv.loadEnvConfig(process.cwd());

async function check() {
  const { default: config } = await import("../payload.config");
  const payload = await getPayload({ config });
  const stored = await payload.findGlobal({
    slug: "homepage",
    overrideAccess: false,
    depth: 0,
  });
  const content = resolveHomepage(stored);
  assert.ok(content.hero.hireShopify.length > 0);
  assert.ok(Array.isArray(content.services.items));
  assert.ok(Array.isArray(content.pricing.items));
  assert.ok(Array.isArray(content.faq.items));
  await assert.rejects(
    payload.updateGlobal({
      slug: "homepage",
      overrideAccess: false,
      data: { hero: { hireShopify: "Unauthorized edit must fail" } },
    }),
    (error: unknown) =>
      error instanceof Error && "status" in error && error.status === 403,
  );
  console.log(
    "Verified stored homepage sections and denied unauthenticated CMS updates.",
  );
}
check()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error instanceof Error ? error.message : "CMS check failed");
    process.exit(1);
  });
