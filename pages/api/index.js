import { prisma } from '@/lib/prisma';

async function handler(req, res) {
  if (req.method === 'GET') {
    const oneComment = await prisma.coinComment.findMany({
      where: {
        coincommentId: crypto.id,
      },
    });
    res.status(200).json(oneComment);
  } else if (req.method === 'POST') {
    const newComment = await prisma.coinComment.create({ data: req.body });
    res.status(201).json(newComment);
  } else if (req.method === 'PUT') {
    const voteup = await prisma.coinComment.update({
      where: {
        coincommentId: crypto.id,
      },
      data: {
        voteup: {
          increment: 1,
        },
      },
    });
  } else {
    res.status(405).end();
  }
}
export default handler;
