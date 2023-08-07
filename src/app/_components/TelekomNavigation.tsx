'use client';

import DarkModeToggle from './DarkModeToggle';
import { BsGithub, BsMap, BsMailbox } from 'react-icons/bs';

export default function TelekomNavigation() {
  return (
    <div>
      <div className="hidden screen:flex flex-row items-center p-2 border-b-2 border-light-whitelilac dark:border-dark-snow overflow-hidden bg-light-alpine dark:bg-dark-alpine h-10">
        <div className="basis-1/2 grid grid-flow-col text-xs">
          <span className="hover:text-light-magenta cursor-pointer">Wetter</span>
          <span className="hover:text-light-magenta cursor-pointer">Dax</span>
          <span className="hover:text-light-magenta cursor-pointer">Telefonverzeichnisse</span>
          <span className="hover:text-light-magenta cursor-pointer">Lotto</span>
          <span className="hover:text-light-magenta cursor-pointer">Telekom Service</span>
          <span className="hover:text-light-magenta cursor-pointer">PUR-Abo Login</span>
        </div>
        <p className="basis-1/4 border-x grid grid-flow-col px-4 justify-between">
          <BsGithub />
          <BsMap />
          <BsMailbox />
        </p>
        <div className="flex text-xs items-center basis-1/4 justify-end">
          <span className="pr-2">Dark/ Light Mode</span>
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
}
