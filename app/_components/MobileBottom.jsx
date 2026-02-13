export default function MobileBottom({ personalData }) {
  const { languages, more, other, personalities, hobbies } = personalData

  return (
    <div className='flex flex-col flex-start w-full md:max-w-[480px] lg:w-60 space-y-4'>
      <div className='bg-white dark:bg-neutral-800 p-6 w-full rounded-2xl drop-shadow-md block md:hidden'>
        <h2 className='text-mygreen dark:text-green-400 font-bold mb-2'>Skills</h2>
        <div className='text-mygray dark:text-gray-300 text-base lg:text-sm'>
          <div className='font-bold text-black dark:text-white'>Coding Languages:</div>
          <div className='mb-1 mt-1'>{languages}</div>
          <div className='font-bold text-black dark:text-white'>Frameworks:</div>
          <div className='mb-1 mt-1'>{more}</div>
          <div className='font-bold text-black dark:text-white'>Other:</div>
          <div className='mt-1'>{other}</div>
        </div>
      </div>
      <div className='bg-white dark:bg-neutral-800 p-6 rounded-2xl drop-shadow-md block md:hidden'>
        <h2 className='text-mygreen dark:text-green-400 font-bold mb-2'>Qualities & Hobbies</h2>
        <div className='text-mygray dark:text-gray-300 text-base lg:text-sm space-y-1'>
          <div className='font-bold text-black dark:text-white'>Personalities:</div>
          <div className='ml-4'>
            <ul className='list-disc'>
              {personalities.map((personality, index) => (
                <li key={index}>{personality}</li>
              ))}
            </ul>
          </div>
          <div className='font-bold text-black dark:text-white'>Hobby:</div>
          <div className='ml-4'>
            <ul className='list-disc'>
              {hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
