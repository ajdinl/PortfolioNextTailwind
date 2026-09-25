import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from './Icons'

export default function Hero({ info, highlights }) {
  const [firstName, ...rest] = info.fullName.split(' ')
  const { current } = info

  return (
    <section id='top' className='mx-auto w-full max-w-page px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-24 print:p-0'>
      <div className='grid gap-12 lg:grid-cols-12 lg:items-end'>
        <div className='lg:col-span-8'>
          <p
            className='rise inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent-soft/70 px-3.5 py-1.5 text-sm font-medium text-accent print:hidden'
            style={{ '--i': 0 }}
          >
            <span className='pulse-dot h-2 w-2 rounded-full bg-accent' />
            {info.availability}
          </p>

          <h1
            className='rise mt-7 font-display text-[clamp(3.75rem,12vw,8.75rem)] leading-[0.88] tracking-[-0.02em] print:mt-0 print:text-5xl'
            style={{ '--i': 1 }}
          >
            {firstName} <em className='text-accent'>{rest.join(' ')}</em>
          </h1>

          <p className='rise mt-7 max-w-2xl text-xl leading-snug text-muted md:text-2xl print:mt-2 print:text-base' style={{ '--i': 2 }}>
            <span className='font-medium text-ink'>{info.title}.</span> {info.headline}
          </p>

          <p className='rise mt-6 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-wider text-faint print:hidden' style={{ '--i': 3 }}>
            <span>{info.yearsOfExperience} years experience</span>
            <span aria-hidden>·</span>
            <span>{info.location}</span>
            <span aria-hidden>·</span>
            <span>{info.timezone}</span>
          </p>

          <p className='hidden text-sm text-muted print:mt-2 print:block'>
            {info.email} · {info.linkedin.replace('https://www.', '')} · {info.github.replace('https://', '')} ·{' '}
            {info.website.replace('https://', '')} · {info.location} ({info.timezone})
          </p>

          <div className='rise mt-9 flex flex-wrap items-center gap-3 print:hidden' style={{ '--i': 4 }}>
            <div className='flex w-full gap-3 sm:w-auto'>
              <a href={`mailto:${info.email}`} className='btn-primary flex-1 sm:flex-none'>
                <MailIcon className='h-4 w-4' />
                Email me
              </a>
              <a href={info.cv} download className='btn-ghost flex-1 sm:flex-none'>
                <DownloadIcon className='h-4 w-4' />
                Download CV
              </a>
            </div>
            <div className='flex gap-3'>
              <a href={info.linkedin} target='_blank' rel='noopener noreferrer' aria-label='LinkedIn profile' className='btn-icon'>
                <LinkedInIcon className='h-4 w-4' />
              </a>
              <a href={info.github} target='_blank' rel='noopener noreferrer' aria-label='GitHub profile' className='btn-icon'>
                <GitHubIcon className='h-4 w-4' />
              </a>
            </div>
          </div>
        </div>

        <aside className='rise card overflow-hidden lg:col-span-4 print:hidden' style={{ '--i': 5 }}>
          <div className='border-b border-ink/10 bg-accent-soft/50 p-5'>
            <p className='eyebrow'>Currently</p>
            <p className='mt-2 leading-snug'>
              {current.role} at <span className='font-medium'>{current.employer}</span>, building{' '}
              <a href={current.clientUrl} target='_blank' rel='noopener noreferrer' className='font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent'>
                {current.client}
              </a>
            </p>
          </div>
          <dl className='divide-y divide-ink/10'>
            {highlights.map((item) => (
              <div key={item.label} className='flex items-center gap-5 p-5'>
                <dt className='w-[5.5rem] shrink-0 font-display text-5xl leading-none text-accent'>{item.value}</dt>
                <dd className='text-sm leading-snug text-muted'>{item.label}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  )
}
