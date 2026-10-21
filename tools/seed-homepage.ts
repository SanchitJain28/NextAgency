import "dotenv/config";
import nextEnv from "@next/env";
import { getPayload } from "payload";
import { homepageDefaults } from "../src/content/homepage";
import { toCMSValue } from "../src/lib/cms/homepage-data";

nextEnv.loadEnvConfig(process.cwd());

async function seed() {
  const { default: config } = await import("../payload.config");
  const payload = await getPayload({ config });
  try {
    const current = await payload.findGlobal({ slug: "homepage", depth: 0 });
    if (current.createdAt || current.updatedAt) {
      console.log("Homepage already exists; leaving editor changes intact.");
      return;
    }
    await payload.updateGlobal({
      slug: "homepage",
      data: toCMSValue(homepageDefaults) as Record<string, unknown>,
      context: { skipRevalidation: true },
    });
    console.log("Homepage initialized with the existing website content.");
  } finally {
    await payload.destroy();
  }
}
seed()
  .then(() => process.exit(0))
  .catch(() => {
    console.error(
      "Homepage seed failed. Check the CMS environment and migrations.",
    );
    process.exitCode = 1;
  });
