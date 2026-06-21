import { DraftStatus, Prisma } from "../../../generated/prisma/client";
import { prisma } from "./prisma";

export interface OutlineJSON {
  title: string;
  metaDescription: string;
  sections: Array<{ h2: string; h3s: string[] }>;
  targetWordCount: number;
  internalLinkSuggestions: string[];
}

export interface InternalLink {
  anchor: string;
  url: string;
}

export interface CreateDraftInput {
  topicId: number;
  gapReportId?: number;
  outline?: OutlineJSON;
  modelUsed?: string;
}

export interface SaveDraftBodyInput {
  bodyMarkdown: string;
  wordCount?: number;
  generationTokens?: number;
}

export interface SaveSeoFieldsInput {
  metaTitle: string;
  metaDescription: string;
  slug: string;
  internalLinks: InternalLink[];
  schemaMarkup: Record<string, unknown>;
}

export async function getDraftsPendingReview() {
  return prisma.draft.findMany({
    where: { status: DraftStatus.pending_review },
    include: { topic: true },
    orderBy: { updatedAt: "desc" },
  });
}

export async function getApprovedDrafts() {
  return prisma.draft.findMany({
    where: { status: DraftStatus.approved },
    include: { topic: true, gapReport: true },
    orderBy: { updatedAt: "asc" },
  });
}

export async function getDraftById(id: number) {
  return prisma.draft.findUnique({
    where: { id },
    include: { topic: true, gapReport: true, publishedPost: true },
  });
}

export async function getLatestDraftForTopic(topicId: number) {
  return prisma.draft.findFirst({
    where: { topicId },
    orderBy: { createdAt: "desc" },
  });
}

export async function createDraftWithOutline(input: CreateDraftInput) {
  return prisma.draft.create({
    data: {
      topicId: input.topicId,
      gapReportId: input.gapReportId,
      outline: (input.outline as unknown as Prisma.InputJsonValue) ?? undefined,
      modelUsed: input.modelUsed,
      status: DraftStatus.pending,
    },
  });
}

export async function saveDraftBody(id: number, body: SaveDraftBodyInput) {
  return prisma.draft.update({
    where: { id },
    data: {
      bodyMarkdown: body.bodyMarkdown,
      wordCount: body.wordCount,
      generationTokens: body.generationTokens,
      status: DraftStatus.pending_review,
    },
  });
}

export async function setExportedFilePath(id: number, filePath: string) {
  return prisma.draft.update({
    where: { id },
    data: { exportedFilePath: filePath },
  });
}

export async function approveDraft(id: number) {
  return prisma.draft.update({
    where: { id },
    data: { status: DraftStatus.approved },
  });
}

export async function rejectDraft(id: number, reviewNotes: string) {
  return prisma.draft.update({
    where: { id },
    data: {
      status: DraftStatus.rejected,
      reviewNotes,
    },
  });
}

export async function saveSeoFields(id: number, seo: SaveSeoFieldsInput) {
  return prisma.draft.update({
    where: { id },
    data: {
      metaTitle: seo.metaTitle,
      metaDescription: seo.metaDescription,
      slug: seo.slug,
      internalLinks: seo.internalLinks as unknown as Prisma.InputJsonValue,
      schemaMarkup: seo.schemaMarkup as unknown as Prisma.InputJsonValue,
    },
  });
}

export async function markDraftPublished(id: number) {
  return prisma.draft.update({
    where: { id },
    data: { status: DraftStatus.published },
  });
}
