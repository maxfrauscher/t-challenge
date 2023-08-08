import React from 'react';
import { MdToggleOff, MdToggleOn } from 'react-icons/md';

type ToggleButtonProps = {
  isToggled: boolean;
  className: string;
  onClick: () => void;
};

export default function ToggleButton({ isToggled, className, onClick }: ToggleButtonProps) {
  return (
    <>
      <div className={`${className} cursor-pointer`}>
        {isToggled ? (
          <div className="text-light-magenta" onClick={onClick}>
            <MdToggleOn />
          </div>
        ) : (
          <div className="text-black" onClick={onClick}>
            <MdToggleOff />
          </div>
        )}
      </div>
    </>
  );
}
