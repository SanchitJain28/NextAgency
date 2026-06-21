import "dotenv/config";
import { defineConfig } from "prisma/config";

const poolerUrl = process.env.DATABASE_URL!;

const directUrl = poolerUrl.replace("-pooler.", ".");

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: directUrl,
  },
});
