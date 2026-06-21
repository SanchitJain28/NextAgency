import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../../generated/prisma/client";

const connectionString = process.env.DATABASE_URL;

const prismaClientSingleton = () => {
  const pool = new Pool({
    connectionString,
    max: 3, // Limit connections per worker so Neon doesn't timeout during builds
    ssl:
      process.env.NODE_ENV === "production"
        ? true
        : { rejectUnauthorized: false },
  });

  const adapter = new PrismaPg(pool);
  return new PrismaClient({ adapter });
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = prisma;
}

export { prisma };
