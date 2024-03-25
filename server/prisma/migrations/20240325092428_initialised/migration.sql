/*
  Warnings:

  - You are about to drop the column `task_name` on the `ListActivities` table. All the data in the column will be lost.
  - Added the required column `task_name` to the `TasksActivities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ListActivities" DROP COLUMN "task_name";

-- AlterTable
ALTER TABLE "TasksActivities" ADD COLUMN     "task_name" TEXT NOT NULL;
