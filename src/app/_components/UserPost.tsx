'use client';

import { Post } from '../_types/UserTypes';
type UserPostProps = {
  post: Post;
};

export default function UserPost({ post }: UserPostProps) {
  return (
    <>
      <div className="flex flex-col p-4 border">
        <div className="col pb-2 underline">Titel:</div>
        <div className="col pb-2">{post.title}</div>
        <div className="col pb-2 underline">Description:</div>
        <div className="col pb-2">{post.body}</div>
      </div>
    </>
  );
}
