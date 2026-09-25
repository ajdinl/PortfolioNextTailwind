'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from './Icons'

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <button
      type='button'
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      disabled={!mounted}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className='grid h-9 w-9 place-items-center rounded-full border border-ink/10 text-muted transition hover:border-ink/25 hover:text-ink'
    >
      {isDark ? <SunIcon className='h-4 w-4' /> : <MoonIcon className='h-4 w-4' />}
    </button>
  )
}
