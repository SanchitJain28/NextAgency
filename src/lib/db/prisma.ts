import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../../generated/prisma/client";

const connectionString = process.env.DATABASE_URL;

console.log("PRISMA INIT - EXACT URL is:", connectionString);

const pool = new Pool({
  connectionString,
  ssl:
    process.env.NODE_ENV === "production"
      ? true
      : { rejectUnauthorized: false },
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

export { prisma };
