import Title from '@/app/_components/forms/Title';
import UserTile from '@/app/_components/UserTile';
import { User } from '@/app/_types/UserTypes';

async function getUsers() {
  'use server';
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

export default async function UsersPage() {
  const users: User[] = await getUsers();
  return (
    <div className="flex flex-col items-center p-4">
      <Title>Benutzerliste</Title>
      <div className="grid grid-cols-2 gap-2 pt-2">
        {users.map((user) => (
          <>
            <UserTile user={user} />
          </>
        ))}
      </div>
    </div>
  );
}
