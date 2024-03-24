/*
  Warnings:

  - You are about to drop the column `list_id` on the `Activities` table. All the data in the column will be lost.
  - Added the required column `list_activities_id` to the `Activities` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Activities" DROP CONSTRAINT "Activities_list_id_fkey";

-- AlterTable
ALTER TABLE "Activities" DROP COLUMN "list_id",
ADD COLUMN     "list_activities_id" INTEGER NOT NULL;
