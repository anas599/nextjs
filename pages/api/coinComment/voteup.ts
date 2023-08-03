import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { coincommentId } = req.body;
      const voteup = await prisma.coinComment.update({
        where: {
          id: coincommentId,
        },
        data: {
          upvote: {
            increment: 1,
          },
        },
      });
      res.status(200).json(voteup);
    } catch (error) {
      console.error('Failed to vote up:', error);
      // if (error.response) {
      //   console.error('Response status:', error.response.status);
      //   console.error('Response body:', error.response.data);
      // }
      res.status(500).json({ error: 'Unable to vote up coin comment.' });
    }
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
};
