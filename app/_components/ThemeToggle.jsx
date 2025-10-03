'use client';

import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleThemeToggle = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const isDarkMode = mounted && theme === 'dark';
    const isReady = mounted;

    return (
        <div className='flex items-center justify-end gap-2 mb-6 text-base lg:text-sm dark:bg-[#252525] bg-mybackground'>
            <button
                type='button'
                onClick={isReady ? handleThemeToggle : undefined}
                disabled={!isReady}
                className={`
                    relative flex items-center w-10 h-4 bg-gray-300 rounded-full drop-shadow-md
                    ${isReady ? 'cursor-pointer hover:bg-gray-400 transition-colors' : 'cursor-default'}
                `}
                aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
                <div
                    className={`
                        flex items-center justify-center w-5 h-5 md:w-6 md:h-6 
                        bg-myblue rounded-full shadow-md transform transition-transform duration-200
                        ${isDarkMode ? 'translate-x-5' : 'translate-x-0'}
                    `}
                >
                    {isDarkMode ? <MoonIcon className='w-4 h-4 md:w-5 md:h-5 text-black' /> : <SunIcon className='w-4 h-4 md:w-5 md:h-5 text-yellow-500' />}
                </div>
            </button>
        </div>
    );
}
