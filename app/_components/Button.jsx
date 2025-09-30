'use client';

import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

export default function Button() {
    const { theme, setTheme } = useTheme();

    return (
        <div className='flex flex-row items-center space-x-2 text-base lg:text-sm mb-6 justify-end dark:bg-[#252525] bg-mybackground'>
            <div className='dark:text-[#9c9ea3] font-bold drop-shadow-md hidden lg:block'>Change theme to:</div>
            <div className='w-10 h-4 flex items-center bg-gray-300 rounded-full drop-shadow-md cursor-pointer' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full bg-myblue shadow-md transform transition ${theme === 'dark' ? 'translate-x-5' : ''}`}>
                    {theme === 'dark' ? <SunIcon className='h-4 md:h-5 w-5 mt-0 sm:mt-0.5 ml-0 sm:ml-0.5 text-yellow-500' /> : <MoonIcon className='h-4 md:h-5 w-5 mt-0 sm:mt-0.5 ml-0 sm:ml-0.5 text-black' />}
                </div>
            </div>
        </div>
    );
}
