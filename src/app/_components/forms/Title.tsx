import { ReactNode } from 'react';

type TitleProps = {
  children: ReactNode;
  type?: 'topic' | 'default';
};

export default function Title({ children, type }: TitleProps) {
  return (
    <>
      {type === 'topic' && (
        <h1 className="text-4xl">
          {children}
          <span className="text-4xl text-light-magenta font-bold">.</span>
        </h1>
      )}
      {(!type || type === 'default') && <h1 className="text-2xl">{children}</h1>}
    </>
  );
}
