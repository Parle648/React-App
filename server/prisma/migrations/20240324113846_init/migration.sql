/*
  Warnings:

  - You are about to drop the column `list_id` on the `Activities` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Activities" DROP CONSTRAINT "Activities_list_id_fkey";

-- AlterTable
ALTER TABLE "Activities" DROP COLUMN "list_id";
