import Header from '@/app/_components/ui/Header';
import TelekomNavigation from '@/app/_components/ui/TelekomNavigation';
import TopicNavigation from '@/app/_components/ui/TopicNavigation';

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="dark:text-white dark:bg-dark-snow bg-light-snow text-black h-screen">
      <TelekomNavigation />
      <Header />
      <TopicNavigation />
      <div className="flex justify-center">
        <div className="screen:w-content w-full p-2">{children}</div>
      </div>
    </section>
  );
}
