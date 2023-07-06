import { Prisma } from '@prisma/client';
import { PrismaClient } from '@prisma/client';

export default async function user() {
  const prisma = new PrismaClient();

  // ... you will write your Prisma Client queries here
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
  //   const userData = JSON.stringify(allUsers);
  return (
    <div>
      <h1>This info is fetched from database</h1>
      {allUsers.map((user) => (
        <div key={user.id}>
          <h2>Name : {user.name}</h2>
          <h3> Email : {user.email}</h3>
        </div>
      ))}
    </div>
  );
}
