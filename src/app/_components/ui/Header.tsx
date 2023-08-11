import { MdMenu } from 'react-icons/md';
import DarkModeToggle from '@/app/_components/ui/DarkModeToggle';
import TOnlineLogo from './TOnlineLogo';

export default function Header({ showMobileNavigation }: { showMobileNavigation: () => void }) {
  return (
    <div className="flex justify-center dark:bg-dark-snow bg-white border-b dark:border-b-dark-alpine z-10">
      <div className="screen:w-content w-full grid grid-flow-col justify-between items-center overflow-hidden h-20">
        <TOnlineLogo />
        <div className="text-2xl p-2">
          <div className="screen:hidden flex items-center gap-4 cursor-pointer">
            <span className="text-xs">Dark/ Light Mode</span>
            <DarkModeToggle />
            {/* TODO: Open Menu */}
            <div className="hover:text-light-magenta" onClick={showMobileNavigation}>
              <MdMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
