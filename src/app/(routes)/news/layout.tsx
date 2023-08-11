'use client';

import Header from '@/app/_components/ui/Header';
import MobileNavigation from '@/app/_components/ui/MobileNavigation';
import TelekomNavigation from '@/app/_components/ui/TelekomNavigation';
import TopicNavigation from '@/app/_components/ui/TopicNavigation';
import { useState } from 'react';

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  const [showMobileNavigation, setShowMobileNavigation] = useState(false);

  return (
    <section className="dark:text-white dark:bg-dark-snow bg-light-snow text-black h-screen">
      <TelekomNavigation />
      <Header showMobileNavigation={() => setShowMobileNavigation(true)} />
      <TopicNavigation />
      {showMobileNavigation && (
        <MobileNavigation closeMobileNavigation={() => setShowMobileNavigation(false)} />
      )}
      <div className="flex justify-center">
        <div className="screen:w-content w-full p-2">{children}</div>
      </div>
    </section>
  );
}
