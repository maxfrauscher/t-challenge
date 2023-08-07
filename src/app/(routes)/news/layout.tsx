import Header from '@/app/_components/Header';
import TelekomNavigation from '@/app/_components/TelekomNavigation';

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="dark:text-white dark:bg-dark-snow bg-light-snow text-black h-screen">
      <TelekomNavigation />
      <Header />
      <div className="flex justify-center">
        <div className="screen:w-4/6 w-full">{children}</div>
      </div>
    </section>
  );
}
