import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'

const Button = () => {
	const { theme, setTheme } = useTheme()

	return (
		<div className='-ml-14'>
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
	)
}

export default Button
