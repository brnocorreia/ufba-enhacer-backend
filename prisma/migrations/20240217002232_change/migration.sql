/*
  Warnings:

  - You are about to alter the column `min_duration` on the `Course` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Integer`.
  - You are about to alter the column `max_duration` on the `Course` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Course" ALTER COLUMN "min_duration" SET DATA TYPE INTEGER,
ALTER COLUMN "max_duration" SET DATA TYPE INTEGER;
