'use client';

import React, { useEffect } from 'react';
import { useTheme } from 'next-themes';

import { CiDark } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';

export default function DarkModeButton() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const handleToggleMode = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  const iconStyles = `text-3xl hover:scale-110`;
  return (
    <button onClick={handleToggleMode} className='dark:text-primary-700'>
      {currentTheme === 'dark' && <MdDarkMode className={iconStyles} />}
      {currentTheme === 'light' && <CiDark className={iconStyles} />}
    </button>
  );
}
