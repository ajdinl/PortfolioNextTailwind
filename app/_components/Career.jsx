export default function Career({ careerData }) {
  return (
    <div className='flex flex-col items-center lg:pt-4'>
      <div className='bg-white p-6 w-full max-w-[480px] lg:w-64 h-auto lg:mt-28 rounded-2xl mb-6 drop-shadow-md'>
        <div className='text-mygreen font-bold mb-4 flex items-center justify-between'>
          Career Summary
          {careerData.length > 1 && (
            <div className='text-xs text-gray-500 flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4 mr-1'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
              </svg>
              Scroll for more
            </div>
          )}
        </div>
        <div className='text-mygray max-h-[460px] sm:max-h-[600px] lg:max-h-[840px] overflow-y-auto pr-2 custom-scrollbar'>
          {careerData.map((item, index) => (
            <div className='text-base lg:text-sm space-y-2' key={index}>
              <div className='font-bold text-black mt-4'>{item.title}</div>
              <div>
                <div className='font-bold text-gray-800'>{item.employer}</div>
                <div className='text-gray-700'>{item.period}</div>
              </div>
              <div className='ml-4 bg-white'>
                <ul className='list-disc'>
                  {item.details.map((obligation, index) => (
                    <li className='text-left' key={index}>
                      {obligation}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
