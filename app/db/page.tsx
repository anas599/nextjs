import { prisma } from '@/lib/prisma';

async function db() {
  const users = await prisma.user.findMany();
  return (
    <div>
      {users.map((user) => (
        <div key={user.id} className="z-50 absolute m-52">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default db;
