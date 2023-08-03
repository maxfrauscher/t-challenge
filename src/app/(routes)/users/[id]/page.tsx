import Title from '@/app/_components/Title';
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
      <p>User: {params.id}</p>
      <p>Name: {user.name}</p>
      <div className="grid grid-cols-2 gap-2">
        {posts.map((post) => (
          <>
            <UserPost post={post} />
          </>
        ))}
      </div>
    </>
  );
}
