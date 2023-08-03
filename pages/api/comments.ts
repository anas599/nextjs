import { prisma } from '@/lib/prisma';

export default async function handle(req: any, res: any) {
  if (req.method === 'GET') {
    const users = await prisma.coinComment.findMany();
    res.json(users);
  }
}
