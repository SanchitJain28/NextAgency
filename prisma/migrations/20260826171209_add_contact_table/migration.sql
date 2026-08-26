/*
  Warnings:

  - You are about to drop the `drafts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `gap_reports` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `published_posts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `topics` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "drafts" DROP CONSTRAINT "drafts_gap_report_id_fkey";

-- DropForeignKey
ALTER TABLE "drafts" DROP CONSTRAINT "drafts_topic_id_fkey";

-- DropForeignKey
ALTER TABLE "gap_reports" DROP CONSTRAINT "gap_reports_topic_id_fkey";

-- DropForeignKey
ALTER TABLE "published_posts" DROP CONSTRAINT "published_posts_draft_id_fkey";

-- DropTable
DROP TABLE "drafts";

-- DropTable
DROP TABLE "gap_reports";

-- DropTable
DROP TABLE "published_posts";

-- DropTable
DROP TABLE "topics";

-- DropEnum
DROP TYPE "DraftStatus";

-- DropEnum
DROP TYPE "TopicStatus";

-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "company" TEXT,
    "projectType" TEXT,
    "budget" TEXT,
    "message" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'new',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);
