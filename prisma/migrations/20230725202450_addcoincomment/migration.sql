-- CreateTable
CREATE TABLE "CoinComment" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "coincommentId" TEXT NOT NULL,
    "upvote" INTEGER NOT NULL DEFAULT 0,
    "downvote" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "CoinComment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CoinComment" ADD CONSTRAINT "CoinComment_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
