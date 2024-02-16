/*
  Warnings:

  - You are about to drop the column `id` on the `Discipline` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Discipline" DROP COLUMN "id",
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP;
