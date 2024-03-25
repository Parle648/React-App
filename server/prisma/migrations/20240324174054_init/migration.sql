-- DropForeignKey
ALTER TABLE "Activities" DROP CONSTRAINT "Activities_task_id_fkey";

-- AlterTable
ALTER TABLE "Activities" ALTER COLUMN "task_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_list_id_fkey" FOREIGN KEY ("list_id") REFERENCES "Lists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activities" ADD CONSTRAINT "Activities_list_activities_id_fkey" FOREIGN KEY ("list_activities_id") REFERENCES "Lists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activities" ADD CONSTRAINT "Activities_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "Tasks"("id") ON DELETE SET NULL ON UPDATE CASCADE;
