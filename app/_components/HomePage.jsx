'use client'

import Button from '@components/Button'
import Info from '@components/Info'
import Personal from '@components/Personal'
import Career from '@components/Career'
import { ThemeProvider } from 'next-themes'

export default function HomePage({ data }) {
  const { info, personal, career } = data

  return (
    <ThemeProvider attribute='class'>
      <div className='mt-10'></div>
      <div className='grid lg:grid-cols-3 w-full justify-center text-2xl min-h-screen lg:text-base dark:bg-[#252525] bg-mybackground'>
        <Info infoData={info} />
        <Personal personalData={personal} />
        <Career careerData={career} />
      </div>
      <div className='grid lg:grid-cols-3 w-full justify-center text-2xl min-h-screen lg:text-base dark:bg-[#252525] bg-mybackground'>
        <Info infoData={info} />
        <Personal personalData={personal} />
        <Career careerData={career} />
      </div>
    </ThemeProvider>
  )
}
