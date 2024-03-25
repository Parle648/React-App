/*
  Warnings:

  - Added the required column `task_name` to the `ListActivities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ListActivities" ADD COLUMN     "task_name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tasks" ADD COLUMN     "name" TEXT NOT NULL;
