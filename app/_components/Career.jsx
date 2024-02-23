'use client'

import { useState } from 'react'

export default function Career({ careerData }) {
  const [toggle, setToggle] = useState(false)

  return (
    <div
      className='flex flex-col lg:items-center lg:pt-4 hover:scale-105'
      onMouseEnter={() => setToggle(true)}
      onMouseLeave={() => setToggle(false)}
    >
      <div className='bg-white p-6 w-[510px] lg:w-64 h-auto lg:mt-28 rounded-2xl mb-6 drop-shadow-md'>
        <div className='text-mygreen font-bold mb-4'>Career Summary</div>

        <div className='text-mygray  '>
          {careerData.map((item, index) => (
            <div className='text-xl lg:text-sm mb-2' key={index}>
              <div className='font-bold text-black mb-1'>{item.headline}</div>
              <div className='mb-2 text-black'>
                <div>{item.employer}</div>
                <div>{item.period}</div>
              </div>

              {toggle || item.employer === 'Experfy' ? (
                <div className='ml-4 bg-white'>
                  <ul className='list-disc'>
                    {item.obligations.map((obligation, index) => (
                      <li className='text-left' key={index}>
                        {obligation}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
