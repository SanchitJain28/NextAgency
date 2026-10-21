import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { Users } from "./src/payload/collections/Users";
import { Homepage } from "./src/payload/globals/Homepage";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || "",
  admin: {
    user: Users.slug,
    importMap: { baseDir: dirname },
    meta: { titleSuffix: " | ScaleFront CMS" },
  },
  routes: { api: "/api/cms", admin: "/admin" },
  collections: [Users],
  globals: [Homepage],
  graphQL: { disable: true },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.PAYLOAD_DATABASE_URL || "",
      max: 3,
      connectionTimeoutMillis: 5000,
    },
    schemaName: "payload",
    push: false,
    migrationDir: path.resolve(dirname, "src/payload/migrations"),
    disableCreateDatabase: true,
  }),
  typescript: { outputFile: path.resolve(dirname, "src/payload-types.ts") },
});
