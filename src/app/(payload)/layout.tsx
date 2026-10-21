import config from "@payload-config";
import "@payloadcms/next/css";
import {
  RootLayout,
  handleServerFunctions,
} from "@payloadcms/next/layouts";
import type { ServerFunctionClient } from "payload";
import { importMap } from "./admin/importMap";

export const viewport = { width: "device-width", initialScale: 1 };

const serverFunction: ServerFunctionClient = async (args) => {
  "use server";
  return handleServerFunctions({ ...args, config, importMap });
};

export default function CMSLayout({ children }: { children: React.ReactNode }) {
  if (!process.env.PAYLOAD_DATABASE_URL || !process.env.PAYLOAD_SECRET) {
    return (
      <html lang="en">
        <body>
          <main style={{ padding: 40, fontFamily: "sans-serif" }}>
            <h1>CMS setup required</h1>
            <p>
              Set PAYLOAD_DATABASE_URL and PAYLOAD_SECRET, then run the CMS
              migrations. See docs/PAYLOAD.md.
            </p>
          </main>
        </body>
      </html>
    );
  }
  return (
    <RootLayout
      config={config}
      importMap={importMap}
      serverFunction={serverFunction}
    >
      {children}
    </RootLayout>
  );
}
