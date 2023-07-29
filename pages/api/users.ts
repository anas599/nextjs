import { prisma } from '@/lib/prisma';

export default async function handle(req:any, res:any) {
  if(req.method === 'GET'){

  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,

    },
  });
  res.json(users);
  }



}
