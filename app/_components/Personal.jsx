import { highlightText } from './highlightText'

export default function Personal({ personalData }) {
  const { profile } = personalData

  return (
    <div className='flex-col flex-start hidden md:flex'>
      <div className='bg-white dark:bg-neutral-800 p-6 w-full rounded-2xl drop-shadow-md'>
        <h2 className='text-mygreen dark:text-green-400 font-bold mb-2'>About me</h2>
        <div className='text-mygray dark:text-gray-300 text-base lg:text-sm'>{highlightText(profile)}</div>
      </div>
    </div>
  )
}
