import Image from 'next/image'
import avatar from '@/public/images/selfie.jpg'

export default function Info({ infoData }) {
  const {
    fullName,
    description,
    cell,
    git,
    website,
    email,
    linkedin,
    linkedinLink,
    address,
  } = infoData

  return (
    <div className='flex flex-col lg:items-center mt-0.5'>
      <div className='z-50 mx-auto'>
        <Image
          className='rounded-full drop-shadow-md'
          src={avatar}
          width={160}
          height={160}
          alt='myImage'
        />
      </div>
      <div className='-mt-0.5'>
        <div className='flex flex-col flex-wrap justify-center text-center -mt-8 w-[510px] lg:w-64 h-40 bg-myblue rounded-2xl mb-10 bg-gradient-to-tr from-myblue to-green-100 drop-shadow-md'>
          <h1 className='  text-mygraytwo lg:text-xl font-heboo font-extrabold bg-transparent drop-shadow mb-2'>
            {fullName}
          </h1>
          <p className='text-mygray bg-transparent text-lg lg:text-sm drop-shadow'>
            {description}
          </p>
        </div>
      </div>
      <div className='flex flex-col p-6 space-y-2'>
        <div
          className='text-mygreen font-bold mb-6 drop-shadow-md
        dark:text-white'
        >
          How to reach me:
        </div>
        <div className='font-bold dark:text-white drop-shadow-md'>Cell:</div>
        <div className='dark:text-blue-100 text-mygray text-xl lg:text-sm'>
          {cell}
        </div>
        <div className='font-bold dark:text-white drop-shadow-md'>Git:</div>
        <a
          href={git}
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-green-100 text-mygray underline text-xl lg:text-sm hover:text-mygreen'
        >
          {git}
        </a>
        <div className='font-bold dark:text-white drop-shadow-md'>Web:</div>
        <a
          href={website}
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-red-100 text-mygray underline text-xl lg:text-sm hover:text-orange-400'
        >
          {website}
        </a>
        <div className='font-bold dark:text-white drop-shadow-md'>Email:</div>
        <div className='dark:text-purple-100 text-mygray text-xl lg:text-sm underline hover:text-purple-400'>
          <a href={'mailto:' + email}>{email}</a>
        </div>
        <div className='font-bold dark:text-white drop-shadow-md'>
          Linkedin:
        </div>
        <a
          href={linkedinLink}
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-blue-100 text-mygray underline text-xl lg:text-sm hover:text-myblue'
        >
          {linkedin}
        </a>
        <div className='font-bold dark:text-white drop-shadow-md'>
          Country - City:
        </div>
        <div className='dark:text-blue-100 text-mygray text-xl lg:text-sm'>
          {address}
        </div>
      </div>
    </div>
  )
}
