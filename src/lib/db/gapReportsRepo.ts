import { prisma } from "./prisma";

export interface CreateGapReportInput {
  topicId: number;
  competitorUrls: string[];
  commonSubtopics: string[];
  missingSubtopics: string[];
  avgWordCount?: number;
  differentiationAngle?: string;
}

export async function getGapReportByTopicId(topicId: number) {
  return prisma.gapReport.findUnique({
    where: { topicId },
  });
}

export async function getGapReportWithTopic(topicId: number) {
  return prisma.gapReport.findUnique({
    where: { topicId },
    include: { topic: true },
  });
}

export async function upsertGapReport(input: CreateGapReportInput) {
  return prisma.gapReport.upsert({
    where: { topicId: input.topicId },
    update: {
      competitorUrls: input.competitorUrls,
      commonSubtopics: input.commonSubtopics,
      missingSubtopics: input.missingSubtopics,
      avgWordCount: input.avgWordCount,
      differentiationAngle: input.differentiationAngle,
    },
    create: {
      topicId: input.topicId,
      competitorUrls: input.competitorUrls,
      commonSubtopics: input.commonSubtopics,
      missingSubtopics: input.missingSubtopics,
      avgWordCount: input.avgWordCount,
      differentiationAngle: input.differentiationAngle,
    },
  });
}

export async function updateDifferentiationAngle(id: number, angle: string) {
  return prisma.gapReport.update({
    where: { id },
    data: { differentiationAngle: angle },
  });
}
