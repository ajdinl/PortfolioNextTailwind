'use client'

import { useEffect, useState } from 'react'
import { CheckIcon, CopyIcon } from './Icons'

export default function CopyEmail({ email }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <button
      type='button'
      onClick={copy}
      className='inline-flex h-11 items-center gap-2 rounded-full border border-ink/20 px-4 text-sm font-medium text-muted transition hover:border-ink/50 hover:text-ink'
    >
      {copied ? <CheckIcon className='h-4 w-4' /> : <CopyIcon className='h-4 w-4' />}
      <span aria-live='polite'>{copied ? 'Copied!' : 'Copy email'}</span>
    </button>
  )
}
