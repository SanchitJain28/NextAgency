-- CreateEnum
CREATE TYPE "TopicStatus" AS ENUM ('pending', 'selected', 'done');

-- CreateEnum
CREATE TYPE "DraftStatus" AS ENUM ('pending', 'pending_review', 'approved', 'rejected', 'published');

-- CreateTable
CREATE TABLE "topics" (
    "id" SERIAL NOT NULL,
    "keyword" TEXT NOT NULL,
    "cluster" TEXT,
    "search_console_impressions" INTEGER,
    "est_difficulty" DOUBLE PRECISION,
    "priority_score" DOUBLE PRECISION,
    "status" "TopicStatus" NOT NULL DEFAULT 'pending',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "topics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gap_reports" (
    "id" SERIAL NOT NULL,
    "topic_id" INTEGER NOT NULL,
    "competitor_urls" JSONB NOT NULL,
    "common_subtopics" JSONB NOT NULL,
    "missing_subtopics" JSONB NOT NULL,
    "avg_word_count" INTEGER,
    "differentiation_angle" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "gap_reports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "drafts" (
    "id" SERIAL NOT NULL,
    "topic_id" INTEGER NOT NULL,
    "gap_report_id" INTEGER,
    "outline" JSONB,
    "body_markdown" TEXT,
    "word_count" INTEGER,
    "meta_title" TEXT,
    "meta_description" TEXT,
    "slug" TEXT,
    "internal_links" JSONB,
    "schema_markup" JSONB,
    "status" "DraftStatus" NOT NULL DEFAULT 'pending',
    "review_notes" TEXT,
    "exported_file_path" TEXT,
    "model_used" TEXT,
    "generation_tokens" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "drafts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "published_posts" (
    "id" SERIAL NOT NULL,
    "draft_id" INTEGER NOT NULL,
    "cms_post_id" TEXT,
    "published_url" TEXT NOT NULL,
    "published_at" TIMESTAMP(3) NOT NULL,
    "impressions" INTEGER NOT NULL DEFAULT 0,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "avg_position" DOUBLE PRECISION,
    "ctr" DOUBLE PRECISION,
    "last_tracked_at" TIMESTAMP(3),
    "needs_refresh" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "published_posts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "topics_keyword_key" ON "topics"("keyword");

-- CreateIndex
CREATE UNIQUE INDEX "gap_reports_topic_id_key" ON "gap_reports"("topic_id");

-- CreateIndex
CREATE UNIQUE INDEX "drafts_slug_key" ON "drafts"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "published_posts_draft_id_key" ON "published_posts"("draft_id");

-- AddForeignKey
ALTER TABLE "gap_reports" ADD CONSTRAINT "gap_reports_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "topics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "drafts" ADD CONSTRAINT "drafts_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "topics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "drafts" ADD CONSTRAINT "drafts_gap_report_id_fkey" FOREIGN KEY ("gap_report_id") REFERENCES "gap_reports"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "published_posts" ADD CONSTRAINT "published_posts_draft_id_fkey" FOREIGN KEY ("draft_id") REFERENCES "drafts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
