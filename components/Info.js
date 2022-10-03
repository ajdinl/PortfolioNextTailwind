import Image from 'next/image'
import user from '../data/user.json'

const Info = () => {
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
  } = user.info

  return (
    <div className='flex flex-col mt-0.5'>
      <div className='ml-10'>
        <Image
          className='rounded-full'
          src='/images/selfie.jpg'
          width={160}
          height={160}
          alt='myImage'
        />
      </div>
      <div className='-mt-2'>
        <div className='flex flex-row flex-wrap -mt-8 w-60 h-40 bg-myblue rounded-2xl mb-10 justift-center bg-gradient-to-tr from-myblue to-green-100'>
          <h1 className='text-2xl text-mygreytwo font-heboo font-extrabold ml-14 pt-12 bg-transparent drop-shadow'>
            {fullName}
          </h1>
          <p className='text-mygrey bg-transparent text-sm ml-16 -mt-7 drop-shadow'>
            {description}
          </p>
        </div>
      </div>
      <div className='flex flex-col space-y-2 ml-6'>
        <div
          className='text-mygreen font-bold mb-6 drop-shadow-xl
        dark:text-white'
        >
          How to reach me:
        </div>
        <div className='font-bold dark:text-white'>Cell:</div>
        <div className='dark:text-blue-100 text-mygrey text-sm'>{cell}</div>
        <div className='font-bold dark:text-white'>Git:</div>
        <a
          href={git}
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-green-100 text-mygrey underline text-sm hover:text-mygreen'
        >
          {git}
        </a>
        <div className='font-bold dark:text-white'>Web:</div>
        <a
          href={website}
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-red-100 text-mygrey underline text-sm hover:text-orange-400'
        >
          {website}
        </a>
        <div className='font-bold dark:text-white'>Email:</div>
        <div className='dark:text-purple-100 text-mygrey text-sm underline hover:text-purple-400'>
          <a href={'mailto:' + email}>{email}</a>
        </div>
        <div className='font-bold dark:text-white'>Linkedin:</div>
        <a
          href={linkedinLink}
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-blue-100 text-mygrey underline text-sm hover:text-myblue'
        >
          {linkedin}
        </a>
        <div className='font-bold dark:text-white'>Country - City:</div>
        <div className='dark:text-blue-100 text-mygrey text-sm'>{address}</div>
      </div>
    </div>
  )
}

export default Info
