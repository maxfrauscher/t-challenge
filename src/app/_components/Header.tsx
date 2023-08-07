'use client';
import DarkModeToggle from './DarkModeToggle';
import { MdMenu } from 'react-icons/md';

export default function Header() {
  return (
    <div className="flex justify-center dark:bg-dark-snow bg-white border-b-4 border-b-light-magenta">
      <div className="screen:w-4/6 w-full grid grid-flow-col justify-between  items-center overflow-hidden h-20">
        <div className="text-2xl p-2">T-Challenge</div>
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
