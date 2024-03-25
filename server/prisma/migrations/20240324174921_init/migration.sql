/*
  Warnings:

  - You are about to drop the `Activities` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Activities" DROP CONSTRAINT "Activities_list_activities_id_fkey";

-- DropForeignKey
ALTER TABLE "Activities" DROP CONSTRAINT "Activities_task_id_fkey";

-- DropForeignKey
ALTER TABLE "Tasks" DROP CONSTRAINT "Tasks_list_id_fkey";

-- DropTable
DROP TABLE "Activities";

-- CreateTable
CREATE TABLE "ListActivities" (
    "id" SERIAL NOT NULL,
    "activity_type" TEXT NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "list_id" INTEGER NOT NULL,

    CONSTRAINT "ListActivities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TasksActivities" (
    "id" SERIAL NOT NULL,
    "activity_type" TEXT NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "task_id" INTEGER NOT NULL,

    CONSTRAINT "TasksActivities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ListActivities_id_key" ON "ListActivities"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TasksActivities_id_key" ON "TasksActivities"("id");

-- AddForeignKey
ALTER TABLE "ListActivities" ADD CONSTRAINT "ListActivities_list_id_fkey" FOREIGN KEY ("list_id") REFERENCES "Lists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TasksActivities" ADD CONSTRAINT "TasksActivities_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "Tasks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
