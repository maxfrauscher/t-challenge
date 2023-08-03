async function getUserById(id) {
  'use server';
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return res.json();
}

async function getPostsByUserId(id) {
  'use server';
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  return res.json();
}

export default async function User({ params }: any) {
  const user = await getUserById(params.id);
  const posts = await getPostsByUserId(params.id);
  return (
    <>
      <h1>User: {params.id}</h1>
      <p>Name: {user.name}</p>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}
