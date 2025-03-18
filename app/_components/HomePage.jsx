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
      <div className='px-5 sm:px-6 md:px-8 lg:px-0'>
        <Button />
        <div className='grid grid-cols-1 lg:grid-cols-3 w-full justify-center gap-2 text-base sm:text-lg lg:text-base dark:bg-[#252525] bg-mybackground'>
          <Info infoData={info} />
          <Personal personalData={personal} />
          <Career careerData={career} />
        </div>
      </div>
    </ThemeProvider>
  )
}
