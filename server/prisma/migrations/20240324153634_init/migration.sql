/*
  Warnings:

  - You are about to drop the column `list_id` on the `Activities` table. All the data in the column will be lost.
  - You are about to drop the column `task_list_id` on the `Tasks` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Activities" DROP CONSTRAINT "Activities_list_id_fkey";

-- DropForeignKey
ALTER TABLE "Tasks" DROP CONSTRAINT "Tasks_list_id_fkey";

-- AlterTable
ALTER TABLE "Activities" DROP COLUMN "list_id";

-- AlterTable
ALTER TABLE "Tasks" DROP COLUMN "task_list_id";
