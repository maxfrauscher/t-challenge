/* eslint-disable no-unused-vars */
import React from 'react';

export type Sizes = 'small' | 'large';

interface TOnlineLogoProps {
  size?: Sizes;
  className?: string;
}

export default function TOnlineLogo({ size, className }: TOnlineLogoProps) {
  return (
    <div className="grid grid-cols-1">
      <div className={`${size === 'small' ? 'text-2xl' : 'text-5xl'} font-bold ${className}`}>
        t-online<span className="text-light-magenta">.</span>
      </div>
      <div className="text-sm screen:block hidden">Nachrichten für Deutschland</div>
    </div>
  );
}
