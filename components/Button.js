import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'

const Button = () => {
  const { theme, setTheme } = useTheme()
  const [toggle, setToggle] = useState(true)
  const toggleClass = 'transform translate-x-5'

  useEffect(() => setTheme('light'), [setTheme])

  return (
    <div className='flex flex-row items-center space-x-2 text-sm absolute top-20 left-1/3 sm:left-2/3'>
      <div className='dark:text-[#9c9ea3]'>Change theme to:</div>

      <div
        className='w-10 h-4 flex items-center bg-gray-300 rounded-full'
        onClick={() => {
          setToggle(!toggle)
        }}
      >
        <div
          className={
            'md:w-6 md:h-6 h-5 w-5 rounded-full bg-myblue shadow-md transform' +
            (toggle ? null : toggleClass)
          }
        >
          {theme === 'dark' ? (
            <button id='toggle theme' onClick={() => setTheme('light')}>
              <SunIcon className='h-5 w-5 mt-0 sm:mt-0.5 ml-0 sm:ml-0.5 text-yellow-500' />
            </button>
          ) : (
            <button onClick={() => setTheme('dark')}>
              <MoonIcon className='h-5 w-5 mt-0 sm:mt-0.5 ml-0 sm:ml-0.5 text-black' />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Button
