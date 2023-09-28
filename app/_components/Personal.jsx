export default function Personal({ personalData }) {
  const { profile, languages, more, other, personalities, hobbies } =
    personalData

  return (
    <div className='flex flex-col pt-2'>
      <div className='bg-white p-6 w-64 h-60 sm:mt-24 mt-0 rounded-2xl drop-shadow-md'>
        <div className='text-mygreen font-bold mb-4'>Personal Profile</div>
        <div className='text-mygray text-md'>{profile}</div>
      </div>
      <div className='bg-white p-6 w-64 h-auto mt-8 rounded-2xl drop-shadow-md'>
        <div className='text-mygreen font-bold mb-4'>Skills</div>
        <div className='text-mygray text-sm'>
          <div className='font-bold text-black'>Coding Languages:</div>
          <div className='mb-3 mt-1'>{languages}</div>
          <div className='font-bold text-black'>More JS:</div>
          <div className='mb-3 mt-1'>{more}</div>
          <div className='font-bold text-black'>Other:</div>
          <div className='mb-3 mt-1'>{other}</div>
        </div>
      </div>
      <div className='bg-white p-6 w-64 h-70 mt-8 rounded-2xl mb-10 drop-shadow-md'>
        <div className='text-mygreen font-bold mb-4'>About me</div>
        <div className='text-mygray text-md'>
          <div className='text-sm'>
            <div className='font-bold text-black mb-1'>Personalities:</div>
            <div className='ml-4'>
              <ul className='list-disc mb-4'>
                {personalities.map((personality, index) => (
                  <li key={index}>{personality}</li>
                ))}
              </ul>
            </div>
            <div className='font-bold text-black mb-1'>Hobby:</div>
            <div className='ml-4'>
              <ul className='list-disc mb-4'>
                {hobbies.map((hobby, index) => (
                  <li key={index}>{hobby}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
