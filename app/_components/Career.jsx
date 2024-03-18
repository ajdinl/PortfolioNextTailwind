export default function Career({ careerData }) {
  return (
    <div className='flex flex-col lg:items-center lg:pt-4 hover:scale-105'>
      <div className='bg-white p-6 w-[510px] lg:w-64 h-auto lg:mt-28 rounded-2xl mb-6 drop-shadow-md'>
        <div className='text-mygreen font-bold mb-4'>Career Summary</div>

        <div className='text-mygray'>
          {careerData.map((item, index) => (
            <div className='text-xl lg:text-sm space-y-2' key={index}>
              <div className='font-bold text-black'>{item.headline}</div>
              <div>
                <div className='font-bold text-gray-800'>{item.employer}</div>
                <div className='text-gray-700'>{item.period}</div>
              </div>
              <div className='ml-4 bg-white'>
                <ul className='list-disc'>
                  {item.obligations.map((obligation, index) => (
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
