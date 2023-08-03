import Link from 'next/link';

async function getUsers() {
  'use server';
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

export default async function Home() {
  const users = await getUsers();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {users.map((user) => (
        <>
          <Link href={`user/${user.id}`}>{user.name}</Link>
        </>
      ))}
    </main>
  );
}
