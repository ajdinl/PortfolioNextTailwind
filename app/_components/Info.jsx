import Image from 'next/image'
import avatar from '../../public/images/selfie.jpg'

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
    <div className='flex flex-col mt-0.5'>
      <div className='ml-10 z-50'>
        <Image
          className='rounded-full drop-shadow-md'
          src={avatar}
          width={160}
          height={160}
          alt='myImage'
        />
      </div>
      <div className='-mt-0.5'>
        <div className='flex flex-row flex-wrap -mt-8 w-60 h-40 bg-myblue rounded-2xl mb-10 justift-center bg-gradient-to-tr from-myblue to-green-100 drop-shadow-md'>
          <h1 className='text-2xl text-mygraytwo font-heboo font-extrabold ml-14 pt-12 bg-transparent drop-shadow'>
            {fullName}
          </h1>
          <p className='text-mygray bg-transparent text-sm ml-16 -mt-7 drop-shadow'>
            {description}
          </p>
        </div>
      </div>
      <div className='flex flex-col space-y-2 ml-6'>
        <div
          className='text-mygreen font-bold mb-6 drop-shadow-md
        dark:text-white'
        >
          How to reach me:
        </div>
        <div className='font-bold dark:text-white drop-shadow-md'>Cell:</div>
        <div className='dark:text-blue-100 text-mygray text-sm'>{cell}</div>
        <div className='font-bold dark:text-white drop-shadow-md'>Git:</div>
        <a
          href={git}
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-green-100 text-mygray underline text-sm hover:text-mygreen'
        >
          {git}
        </a>
        <div className='font-bold dark:text-white drop-shadow-md'>Web:</div>
        <a
          href={website}
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-red-100 text-mygray underline text-sm hover:text-orange-400'
        >
          {website}
        </a>
        <div className='font-bold dark:text-white drop-shadow-md'>Email:</div>
        <div className='dark:text-purple-100 text-mygray text-sm underline hover:text-purple-400'>
          <a href={'mailto:' + email}>{email}</a>
        </div>
        <div className='font-bold dark:text-white drop-shadow-md'>
          Linkedin:
        </div>
        <a
          href={linkedinLink}
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-blue-100 text-mygray underline text-sm hover:text-myblue'
        >
          {linkedin}
        </a>
        <div className='font-bold dark:text-white drop-shadow-md'>
          Country - City:
        </div>
        <div className='dark:text-blue-100 text-mygray text-sm'>{address}</div>
      </div>
      <div className='flex flex-col justify-center items-center ml-6 mt-8'>
        <span className='text-gray text-sm mb-2 font-bold drop-shadow-md'>
          You can download my resume
        </span>
        <a
          href='/Ajdin_Lojic_CV.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='flex justify-center items-center h-12 w-48 rounded-lg bg-myblue drop-shadow-md hover:brightness-105'
        >
          <span className='text-md text-white'>here!</span>
        </a>
      </div>
    </div>
  )
}
