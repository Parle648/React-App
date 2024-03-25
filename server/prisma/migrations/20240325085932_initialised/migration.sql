-- DropForeignKey
ALTER TABLE "TasksActivities" DROP CONSTRAINT "TasksActivities_task_id_fkey";

-- AlterTable
ALTER TABLE "TasksActivities" ALTER COLUMN "task_id" SET DEFAULT 0;

-- AddForeignKey
ALTER TABLE "TasksActivities" ADD CONSTRAINT "TasksActivities_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "Tasks"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;
