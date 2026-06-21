import { TopicStatus } from "../../../generated/prisma/client";
import { prisma } from "./prisma";

export interface CreateTopicInput {
  keyword: string;
  cluster?: string;
  searchConsoleImpressions?: number;
  estDifficulty?: number;
  priorityScore?: number;
}

export interface UpdateTopicScoresInput {
  searchConsoleImpressions?: number;
  estDifficulty?: number;
  priorityScore?: number;
}

export async function getAllTopics() {
  return prisma.topic.findMany({ orderBy: { createdAt: "desc" } });
}

export async function getTopicsByStatus(status: TopicStatus) {
  return prisma.topic.findMany({
    where: { status },
    orderBy: { priorityScore: "desc" },
  });
}

export async function getTopicById(id: number) {
  return prisma.topic.findUnique({
    where: { id },
    include: { gapReport: true },
  });
}

export async function getPendingTopicsRanked(limit = 10) {
  return prisma.topic.findMany({
    where: { status: TopicStatus.pending },
    orderBy: { priorityScore: "desc" },
    take: limit,
  });
}

export async function upsertTopic(input: CreateTopicInput) {
  return prisma.topic.upsert({
    where: { keyword: input.keyword },
    update: {
      searchConsoleImpressions: input.searchConsoleImpressions,
      estDifficulty: input.estDifficulty,
      priorityScore: input.priorityScore,
      cluster: input.cluster,
    },
    create: {
      keyword: input.keyword,
      cluster: input.cluster,
      searchConsoleImpressions: input.searchConsoleImpressions,
      estDifficulty: input.estDifficulty,
      priorityScore: input.priorityScore,
      status: TopicStatus.pending,
    },
  });
}

export async function updateTopicScores(
  id: number,
  scores: UpdateTopicScoresInput,
) {
  return prisma.topic.update({
    where: { id },
    data: scores,
  });
}

export async function selectTopic(id: number) {
  return prisma.topic.update({
    where: { id },
    data: { status: TopicStatus.selected },
  });
}

export async function markTopicDone(id: number) {
  return prisma.topic.update({
    where: { id },
    data: { status: TopicStatus.done },
  });
}
