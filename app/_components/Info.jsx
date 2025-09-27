export default function Info({ infoData, personalData }) {
  const { fullName, description, git, website, email, linkedin, linkedinLink } = infoData
  const { profile, languages, more, other, personalities, hobbies } = personalData

  return (
    <div className='flex flex-col flex-start w-full max-w-[480px] lg:w-60'>
      <div className='flex flex-col flex-wrap justify-center text-center h-auto min-h-[10rem] bg-myblue rounded-2xl bg-gradient-to-tr from-myblue to-green-100 drop-shadow-md py-4 px-2'>
        <h1 className='text-mygraytwo lg:text-xl font-heboo font-extrabold bg-transparent drop-shadow mb-2'>
          {fullName}
        </h1>
        <p className='text-mygray bg-transparent text-base lg:text-sm drop-shadow'>{description}</p>
      </div>
      <div className='flex flex-col space-y-4'>
        <div className='flex flex-col p-6 pb-2 space-y-2'>
          <div
            className='text-mygreen font-bold drop-shadow-md
        dark:text-white mb-1'
          >
            How to reach me:
          </div>
          <div className='font-bold dark:text-white drop-shadow-md'>Linkedin:</div>
          <a
            href={linkedinLink}
            target='_blank'
            rel='noopener noreferrer'
            className='dark:text-blue-100 text-mygray underline text-base lg:text-sm hover:text-myblue overflow-hidden text-ellipsis'
          >
            {linkedin}
          </a>
          <div className='font-bold dark:text-white drop-shadow-md'>Git:</div>
          <a
            href={git}
            target='_blank'
            rel='noopener noreferrer'
            className='dark:text-green-100 text-mygray underline text-base lg:text-sm hover:text-mygreen overflow-hidden text-ellipsis'
          >
            {git}
          </a>
          <div className='font-bold dark:text-white drop-shadow-md'>Web:</div>
          <a
            href={website}
            target='_blank'
            rel='noopener noreferrer'
            className='dark:text-red-100 text-mygray underline text-base lg:text-sm hover:text-orange-400 overflow-hidden text-ellipsis'
          >
            {website}
          </a>
          <div className='font-bold dark:text-white drop-shadow-md'>Email:</div>
          <div className='dark:text-purple-100 text-mygray text-base lg:text-sm underline hover:text-purple-400 overflow-hidden text-ellipsis'>
            <a href={'mailto:' + email}>{email}</a>
          </div>
        </div>
        <div className='flex-col flex-start flex md:hidden'>
          <div className='bg-white p-6 w-full rounded-2xl drop-shadow-md'>
            <div className='text-mygreen font-bold mb-2'>About me</div>
            <div className='text-mygray text-base lg:text-sm'>{profile}</div>
          </div>
        </div>
        <div className='bg-white p-6 w-full rounded-2xl drop-shadow-md hidden md:block'>
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
        <div className='bg-white p-6 rounded-2xl drop-shadow-md hidden md:block'>
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
    </div>
  )
}
