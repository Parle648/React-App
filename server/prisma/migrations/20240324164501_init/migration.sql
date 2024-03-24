/*
  Warnings:

  - Added the required column `list_id` to the `Activities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Activities" ADD COLUMN     "list_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Activities" ADD CONSTRAINT "Activities_list_id_fkey" FOREIGN KEY ("list_id") REFERENCES "Lists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
