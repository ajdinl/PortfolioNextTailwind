import ThemeToggle from './ThemeToggle'
import { DownloadIcon } from './Icons'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
]

export default function Nav({ info }) {
  const initials = info.fullName
    .split(' ')
    .map((part) => part[0])
    .join('')

  return (
    <header className='sticky top-0 z-40 border-b border-ink/10 bg-paper/80 backdrop-blur-md print:hidden'>
      <nav aria-label='Main' className='mx-auto flex h-16 max-w-page items-center justify-between gap-4 px-5 md:px-8'>
        <a href='#top' aria-label={`${info.fullName}, back to top`} className='flex items-center gap-3'>
          <span className='grid h-9 w-9 place-items-center rounded-full bg-ink font-display text-lg text-paper'>
            {initials}
          </span>
          <span className='hidden text-sm font-medium sm:block'>{info.fullName}</span>
        </a>
        <div className='flex items-center gap-2'>
          <ul className='mr-2 hidden items-center gap-1 text-sm text-muted md:flex'>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className='rounded-full px-3 py-2 transition hover:text-ink'>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={info.cv} download className='btn-ghost hidden h-9 px-4 sm:inline-flex'>
            <DownloadIcon className='h-4 w-4' />
            CV
          </a>
          <ThemeToggle />
          <a href='#contact' className='btn-primary h-9 px-4'>
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}
