'use client';

import Link from 'next/link';
import { User } from '../_types/UserTypes';

type UserTileProps = {
  user: User;
};

export default function UserTile({ user }: UserTileProps) {
  return (
    <>
      <div className="flex flex-col p-4 border">
        <div className="col pb-2">{user.name}</div>
        <Link
          href={`users/${user.id}`}
          className="cursor-pointer border p-2 w-fit hover:bg-white hover:text-black">
          Zum Profil
        </Link>
      </div>
    </>
  );
}
