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
      <div className='grid lg:grid-cols-3 w-full justify-center text-2xl min-h-screen lg:text-base dark:bg-[#252525] bg-mybackground'>
        <Info infoData={info} />
        <Personal personalData={personal} />
        <Career careerData={career} />
      </div>
    </ThemeProvider>
  )
}
