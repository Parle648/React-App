/*
  Warnings:

  - A unique constraint covering the columns `[activity_id]` on the table `Tasks` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `list_id` to the `Activities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Activities" ADD COLUMN     "list_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Tasks_activity_id_key" ON "Tasks"("activity_id");

-- AddForeignKey
ALTER TABLE "Activities" ADD CONSTRAINT "Activities_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "Tasks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activities" ADD CONSTRAINT "Activities_list_id_fkey" FOREIGN KEY ("list_id") REFERENCES "Lists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
