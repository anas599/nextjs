/*
  Warnings:

  - You are about to drop the column `coinId` on the `Comment` table. All the data in the column will be lost.
  - Added the required column `coincommentId` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "coinId",
ADD COLUMN     "coincommentId" TEXT NOT NULL;
