import { CreateContactInput } from "@/types/contact";
import { prisma } from "./prisma";

export async function createContact(input: CreateContactInput) {
  return prisma.contact.create({
    data: {
      name: input.name,
      email: input.email,
      phone: input.phone || null,
      company: input.company || null,
      projectType: input.projectType || null,
      budget: input.budget || null,
      message: input.message,
    },
  });
}

export async function getAllContacts() {
  return prisma.contact.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function getContactById(id: string) {
  return prisma.contact.findUnique({
    where: { id },
  });
}

export async function updateContactStatus(id: string, status: string) {
  return prisma.contact.update({
    where: { id },
    data: { status },
  });
}
