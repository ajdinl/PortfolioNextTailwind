'use client'

import Button from 'app/_components/Button'
import Info from 'app/_components/Info'
import Personal from 'app/_components/Personal'
import Career from 'app/_components/Career'
import { ThemeProvider } from 'next-themes'

export default function HomePage({ data }) {
  const { info, personal, career } = data

  return (
    <ThemeProvider attribute='class'>
      <Button />
      <div className='flex flex-row flex-wrap dark:bg-[#252525] pt-36 space-y-6 space-x-0 sm:space-x-6 justify-center min-h-screen bg-mybackground '>
        <Info infoData={info} />
        <Personal personalData={personal} />
        <Career careerData={career} />
      </div>
    </ThemeProvider>
  )
}
