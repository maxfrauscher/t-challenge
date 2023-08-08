import Title from '@/app/_components/forms/Title';
import UserPost from '@/app/_components/UserPost';
import { Post, User } from '@/app/_types/UserTypes';

async function getUserById(id: number) {
  'use server';
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return res.json();
}

async function getPostsByUserId(id: number) {
  'use server';
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  return res.json();
}

export default async function UserPage({ params }: any) {
  const user: User = await getUserById(params.id);
  const posts: Post[] = await getPostsByUserId(params.id);
  return (
    <>
      <Title>Benutzer/ Posts</Title>
      <div className="p-4">
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Tel: {user.phone}</p>
        <p>Stadt: {user.address.city}</p>
        <p>Straße: {user.address.street}</p>
        <p>PLZ: {user.address.zipcode}</p>
        <p>Firma: {user.company.name}</p>
        <p>
          Website:
          <a
            href={`http://${user.website}`}
            target="_blank"
            className="underline cursor-pointer"
            rel="noreferrer">
            {user.website}
          </a>
        </p>
      </div>
      <Title>Posts</Title>
      <div className="p-4">
        <div className="grid grid-cols-2 gap-2">
          {posts.map((post) => (
            <>
              <UserPost post={post} />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
