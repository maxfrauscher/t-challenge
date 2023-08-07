'use client';

import DarkModeToggle from './DarkModeToggle';

export default function TelekomNavigation() {
  return (
    <div className="flex flex-col justify-center items-center border-b-2 border-dark-alpine dark:border-dark-snow overflow-hidden bg-light-alpine dark:bg-dark-alpine h-10">
      <DarkModeToggle />
    </div>
  );
}
