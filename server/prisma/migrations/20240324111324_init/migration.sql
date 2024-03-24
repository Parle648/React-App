/*
  Warnings:

  - You are about to drop the column `activity_id` on the `Tasks` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Tasks_activity_id_key";

-- AlterTable
ALTER TABLE "Tasks" DROP COLUMN "activity_id";
