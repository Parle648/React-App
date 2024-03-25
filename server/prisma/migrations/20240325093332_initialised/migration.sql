-- DropForeignKey
ALTER TABLE "ListActivities" DROP CONSTRAINT "ListActivities_list_id_fkey";

-- AlterTable
ALTER TABLE "ListActivities" ALTER COLUMN "list_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ListActivities" ADD CONSTRAINT "ListActivities_list_id_fkey" FOREIGN KEY ("list_id") REFERENCES "Lists"("id") ON DELETE SET NULL ON UPDATE CASCADE;
