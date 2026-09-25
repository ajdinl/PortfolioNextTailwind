export default function Footer({ info }) {
  return (
    <footer className='mx-auto flex w-full max-w-page flex-wrap items-center justify-between gap-3 px-5 py-8 font-mono text-xs text-faint md:px-8 print:hidden'>
      <p>
        © {new Date().getFullYear()} {info.fullName}
      </p>
      <p>
        Built with Next.js &amp; Tailwind CSS ·{' '}
        <a href='https://github.com/ajdinl/PortfolioNextTailwind' target='_blank' rel='noopener noreferrer' className='underline underline-offset-4 hover:text-ink'>
          Source
        </a>
      </p>
    </footer>
  )
}
