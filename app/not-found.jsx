import Link from 'next/link'

export const metadata = {
  title: 'Page not found | Ajdin Lojić',
}

export default function NotFound() {
  return (
    <main className='mx-auto flex min-h-screen w-full max-w-page flex-col justify-center px-5 py-24 md:px-8'>
      <p className='eyebrow'>404 / Not found</p>
      <h1 className='mt-4 font-display text-6xl leading-none tracking-tight md:text-8xl'>
        This page <em className='text-accent'>doesn&apos;t exist.</em>
      </h1>
      <p className='mt-6 max-w-xl text-lg text-muted'>The link may be outdated or mistyped. Here is where you probably wanted to go:</p>
      <div className='mt-10 flex flex-wrap gap-3'>
        <Link href='/' className='btn-primary'>
          Back to portfolio
        </Link>
        <Link href='/cv' className='btn-ghost'>
          View CV
        </Link>
      </div>
    </main>
  )
}
