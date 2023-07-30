-- AlterTable
ALTER TABLE "CoinComment" ADD COLUMN     "username" TEXT NOT NULL DEFAULT 'anonymous';
ALTER TABLE "CoinComment" ADD COLUMN     "userpic" TEXT NOT NULL DEFAULT '/userIcon.svg';
