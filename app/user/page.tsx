import { Prisma } from '@prisma/client';
import { PrismaClient } from '@prisma/client';

export default async function user() {
  const prisma = new PrismaClient();

  // ... you will write your Prisma Client queries here
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
  const userData = JSON.stringify(allUsers);
  return (
    <div>
      <h1>hello</h1>
      <h1>{userData}</h1>
    </div>
  );
}
