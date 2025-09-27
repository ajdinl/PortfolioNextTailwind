export default function MobileBottom({ personalData }) {
  const { languages, more, other, personalities, hobbies } = personalData

  return (
    <div className='flex flex-col flex-start w-full max-w-[480px] lg:w-60 space-y-4'>
      <div className='bg-white p-6 w-full rounded-2xl drop-shadow-md block md:hidden'>
        <div className='text-mygreen font-bold mb-2'>Skills</div>
        <div className='text-mygray text-base lg:text-sm'>
          <div className='font-bold text-black'>Coding Languages:</div>
          <div className='mb-1 mt-1'>{languages}</div>
          <div className='font-bold text-black'>Frameworks:</div>
          <div className='mb-1 mt-1'>{more}</div>
          <div className='font-bold text-black'>Other:</div>
          <div className='mt-1'>{other}</div>
        </div>
      </div>
      <div className='bg-white p-6 rounded-2xl drop-shadow-md block md:hidden'>
        <div className='text-mygreen font-bold mb-2'>Qualities & Hobbies</div>
        <div className='text-mygray text-base lg:text-sm space-y-1'>
          <div className='font-bold text-black'>Personalities:</div>
          <div className='ml-4'>
            <ul className='list-disc'>
              {personalities.map((personality, index) => (
                <li key={index}>{personality}</li>
              ))}
            </ul>
          </div>
          <div className='font-bold text-black'>Hobby:</div>
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
