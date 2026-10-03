'use client'

import { useEffect, useRef } from 'react'

export default function FitToWidth({ children }) {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    const sheet = container.firstElementChild

    const fit = () => {
      sheet.style.transform = ''
      container.style.height = ''
      container.style.overflow = ''
      const scale = container.clientWidth / sheet.offsetWidth
      if (scale >= 1) return
      sheet.style.transformOrigin = 'top left'
      sheet.style.transform = `scale(${scale})`
      container.style.height = `${sheet.offsetHeight * scale}px`
      container.style.overflow = 'hidden'
    }

    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [])

  return (
    <div ref={ref} className='cv-fit overflow-x-auto'>
      {children}
    </div>
  )
}
