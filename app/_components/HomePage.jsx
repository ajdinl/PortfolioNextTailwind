'use client'

import Button from '@components/Button'
import Info from '@components/Info'
import Personal from '@components/Personal'
import Career from '@components/Career'
import { ThemeProvider } from 'next-themes'
import MobileBottom from './MobileBottom'

export default function HomePage({ data }) {
  const { info, personal, career } = data

  return (
    <ThemeProvider attribute='class'>
      <div className='p-6 lg:px-0'>
        <Button />
        <div className='grid grid-cols-1 md:grid-cols-[0fr_2fr] gap-0 md:gap-4 w-full justify-center text-base sm:text-lg lg:text-base dark:bg-[#252525] bg-mybackground'>
          <Info infoData={info} personalData={personal} />
          <div className='space-y-4'>
            <Personal personalData={personal} />
            <Career careerData={career} />
            <MobileBottom personalData={personal} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}
