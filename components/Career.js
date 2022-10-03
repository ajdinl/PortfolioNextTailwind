import { useState } from 'react'
import user from '../data/user.json'

const Career = () => {
  const [toggle, setToggle] = useState(false)
  const { employer1, employer2, employer3 } = user.career

  return (
    <div className='flex flex-col pt-2'>
      <div className='bg-white p-6 w-64 h-auto rounded-2xl -mt-10 md:mt-24 mb-6'>
        <div className='text-mygreen font-bold bg-transparent mb-4'>
          Career Summary
        </div>
        <div className='text-mygrey text-md bg-transparent'>
          <div className='text-mygrey text-sm bg-transparent'>
            <div className='bg-transparent font-bold text-black mb-1'>
              {employer1.headline}
            </div>
            <div className='mb-2'>
              <div className='bg-white text-black'>{employer1.employer}</div>
              <div className='bg-white text-black'>{employer1.period}</div>
            </div>
            <div className='ml-4 bg-white'>
              <ul className='list-disc mb-4'>
                {employer1.obligations.map((obligation, index) => (
                  <li className='bg-white' key={index}>
                    {obligation}
                  </li>
                ))}
              </ul>
            </div>
            <div className='bg-transparent font-bold text-black mb-1'>
              {employer2.headline}
            </div>
            <div className='mb-2'>
              <div className='bg-white text-black'>{employer2.employer}</div>
              <div className='bg-white text-black'>{employer2.period}</div>
            </div>
            <div className='ml-4 bg-white'>
              <ul className='list-disc mb-4'>
                {employer2.obligations.map((obligation, index) => (
                  <li className='bg-white' key={index}>
                    {obligation}
                  </li>
                ))}
              </ul>
            </div>
            <div className='bg-transparent font-bold text-black mb-1'>
              {employer3.headline}
            </div>
            <div className='mb-2'>
              <div className='bg-white text-black'>{employer3.employer}</div>
              <div className='bg-white text-black'>{employer3.period}</div>
            </div>
            <button aria-label='toggle' onClick={() => setToggle(!toggle)}>
              {toggle ? (
                <div className='ml-4 bg-white'>
                  <ul className='list-disc mb-4'>
                    {employer3.obligations.map((obligation, index) => (
                      <li className='bg-white text-left	' key={index}>
                        {obligation}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M19 9l-7 7-7-7'
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Career
