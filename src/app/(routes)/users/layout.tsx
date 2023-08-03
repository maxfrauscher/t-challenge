import Header from '@/app/_components/Header';

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Header />
      <div className="p-4">{children}</div>
    </section>
  );
}
