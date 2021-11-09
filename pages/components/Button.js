import { useState } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'

const Button = () => {
	const { theme, setTheme } = useTheme()
	const [toggle, setToggle] = useState(true)
	const toggleClass = ' transform translate-x-5'

	return (
		<div className='flex flex-row items-center space-x-2 text-sm absolute top-20 left-1/3 sm:left-2/3'>
			<div>Change theme to:</div>

			<div
				className='w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer'
				onClick={() => {
					setToggle(!toggle)
				}}
			>
				<div
					className={
						'md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform' +
						(toggle ? null : toggleClass)
					}
				>
					{theme === 'dark' ? (
						<button onClick={() => setTheme('light')}>
							<SunIcon className='h-5 w-5 text-yellow-500' />
						</button>
					) : (
						<button onClick={() => setTheme('dark')}>
							<MoonIcon className='h-5 w-5 text-black-500' />
						</button>
					)}
				</div>
			</div>
		</div>
	)
}

export default Button
