-- DropForeignKey
ALTER TABLE "TasksActivities" DROP CONSTRAINT "TasksActivities_task_id_fkey";

-- AlterTable
ALTER TABLE "TasksActivities" ALTER COLUMN "task_id" DROP NOT NULL,
ALTER COLUMN "task_id" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "TasksActivities" ADD CONSTRAINT "TasksActivities_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "Tasks"("id") ON DELETE SET NULL ON UPDATE CASCADE;
