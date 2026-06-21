import { prisma } from "./prisma";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface CreatePublishedPostInput {
  draftId: number;
  cmsPostId?: string;
  publishedUrl: string;
  publishedAt: Date;
}

export interface UpdatePerformanceMetricsInput {
  impressions: number;
  clicks: number;
  avgPosition?: number;
  ctr?: number;
}

// ─── Read ─────────────────────────────────────────────────────────────────────

/** All published posts with their draft + topic for Stage 8 GSC syncing */
export async function getAllPublishedPosts() {
  return prisma.publishedPost.findMany({
    include: { draft: { include: { topic: true } } },
    orderBy: { publishedAt: "desc" },
  });
}

/** Posts flagged for refresh — fed back into Stage 1 topic prioritisation */
export async function getPostsNeedingRefresh() {
  return prisma.publishedPost.findMany({
    where: { needsRefresh: true },
    include: { draft: { include: { topic: true } } },
  });
}

/** Single published post by its draft id */
export async function getPublishedPostByDraftId(draftId: number) {
  return prisma.publishedPost.findUnique({
    where: { draftId },
    include: { draft: true },
  });
}

// ─── Write ────────────────────────────────────────────────────────────────────

/** Stage 7: record a newly published post after CMS push succeeds */
export async function createPublishedPost(input: CreatePublishedPostInput) {
  return prisma.publishedPost.create({
    data: {
      draftId: input.draftId,
      cmsPostId: input.cmsPostId,
      publishedUrl: input.publishedUrl,
      publishedAt: input.publishedAt,
    },
  });
}

/**
 * Stage 8: update GSC performance metrics for a post.
 * Called weekly by performanceSync.ts.
 */
export async function updatePerformanceMetrics(
  id: number,
  metrics: UpdatePerformanceMetricsInput
) {
  return prisma.publishedPost.update({
    where: { id },
    data: {
      impressions: metrics.impressions,
      clicks: metrics.clicks,
      avgPosition: metrics.avgPosition,
      ctr: metrics.ctr,
      lastTrackedAt: new Date(),
    },
  });
}

/**
 * Flag a post for content refresh.
 * Called by performanceSync.ts when impressions are rising but position is poor.
 */
export async function flagForRefresh(id: number, flag = true) {
  return prisma.publishedPost.update({
    where: { id },
    data: { needsRefresh: flag },
  });
}

/** Record the CMS post ID after it's returned by the Shopify API */
export async function setCmsPostId(id: number, cmsPostId: string) {
  return prisma.publishedPost.update({
    where: { id },
    data: { cmsPostId },
  });
}
