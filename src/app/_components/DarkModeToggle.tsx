import React, { useEffect, useState } from 'react';
import ToggleButton from './ToggleButton';

export default function DarkModeToggle() {
  const rootElement = document.getElementById('root');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const hasClassOfDark = rootElement?.className.includes('dark')!;
    setDarkMode(hasClassOfDark);
  }, [rootElement?.className]);

  function toggleDarkMode() {
    if (rootElement?.className.includes('dark')) {
      rootElement.className = '';
      setDarkMode(false);
    } else if (rootElement) {
      rootElement.className = 'dark';
      setDarkMode(true);
    }
  }

  return (
    <>
      <ToggleButton className="text-4xl" isToggled={darkMode} onClick={() => toggleDarkMode()} />
    </>
  );
}
