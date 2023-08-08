'use client';
import { MdMenu } from 'react-icons/md';
import DarkModeToggle from '@/app/_components/ui/DarkModeToggle';

export default function Header() {
  return (
    <div className="flex justify-center dark:bg-dark-snow bg-white border-b dark:border-b-dark-alpine">
      <div className="screen:w-content w-full grid grid-flow-col justify-between  items-center overflow-hidden h-20">
        <div className="text-2xl p-2">t-challenge</div>
        <div className="text-2xl p-2">
          <div className="screen:hidden flex items-center gap-4 cursor-pointer">
            <span className="text-xs">Dark/ Light Mode</span>
            <DarkModeToggle />
            {/* TODO: Open Menu */}
            <div className="hover:text-light-magenta">
              <MdMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
