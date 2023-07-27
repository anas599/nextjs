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
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
export default handler;
