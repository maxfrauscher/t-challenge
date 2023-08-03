import Link from 'next/link';
import Title from './_components/Title';

export default async function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 items-center min-h-screen justify-center">
        <Title>T-Challenge</Title>
        <p>Von Maximilian Frauscher</p>
        <Link href={'/users'} className="cursor-pointer border p-2 hover:bg-white hover:text-black">
          Zur Aufgabe
        </Link>
      </div>
    </>
  );
}
