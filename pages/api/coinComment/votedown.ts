import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { coincommentId } = req.body;
      const votedown = await prisma.coinComment.update({
        where: {
          id: coincommentId,
        },
        data: {
          downvote: {
            increment: 1,
          },
        },
      });
      res.status(200).json(votedown);
    } catch (error) {
      console.error('Failed to vote down:', error);
      res.status(500).json({ error: 'Unable to vote down coin comment.' });
    }
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
};
