import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "cms-users",
  labels: { singular: "CMS user", plural: "CMS users" },
  auth: true,
  admin: { useAsTitle: "email" },
  access: {
    admin: ({ req }) => Boolean(req.user),
    create: ({ req }) => Boolean(req.user),
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [{ name: "name", type: "text" }],
};
