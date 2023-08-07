import Header from '@/app/_components/Header';
import TelekomNavigation from '@/app/_components/TelekomNavigation';

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="dark:text-white text-black">
      <TelekomNavigation />
      <Header />
      <div className="p-4">{children}</div>
    </section>
  );
}
