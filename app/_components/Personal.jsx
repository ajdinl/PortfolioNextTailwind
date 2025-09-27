export default function Personal({ personalData }) {
  const { profile } = personalData

  return (
    <div className='flex-col flex-start hidden md:flex'>
      <div className='bg-white p-6 w-full rounded-2xl drop-shadow-md'>
        <div className='text-mygreen font-bold mb-2'>About me</div>
        <div className='text-mygray text-base lg:text-sm'>{profile}</div>
      </div>
    </div>
  )
}
