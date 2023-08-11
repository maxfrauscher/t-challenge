'use client';

import { useEffect, useState } from 'react';

export const MOBILE_BREAKPOINT = 1280;
const checkMobile = () => window.innerWidth < MOBILE_BREAKPOINT;

export const useDeviceChecker = () => {
  const [isMobile, setIsMobile] = useState(checkMobile);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(checkMobile);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setIsMobile(checkMobile);
      });
    };
  }, []);

  return { isMobile, isDesktop: !isMobile };
};
