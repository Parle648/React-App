/*
  Warnings:

  - Added the required column `task_id` to the `Tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tasks" ADD COLUMN     "task_id" INTEGER NOT NULL;
