import CopyEmail from './CopyEmail'
import { ArrowUpRight, DownloadIcon, GitHubIcon, LinkedInIcon } from './Icons'

export default function Contact({ info }) {
  const outlined = 'inline-flex h-11 items-center gap-2 rounded-full border border-ink/20 px-4 text-sm font-medium text-muted transition hover:border-ink/50 hover:text-ink'

  return (
    <section id='contact' className='mx-auto w-full max-w-page px-5 pb-10 md:px-8 print:hidden'>
      <div className='relative overflow-hidden dark rounded-[2rem] border border-ink/10 bg-surface p-8 text-ink md:p-16'>
        <div
          aria-hidden
          className='pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/25 blur-3xl'
        />
        <div
          aria-hidden
          className='pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(rgb(var(--ink))_1px,transparent_1px)] [background-size:22px_22px]'
        />

        <div className='relative'>
          <p className='font-mono text-xs uppercase tracking-[0.18em] text-faint'>05 / Contact</p>
          <h2 className='mt-5 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight md:text-7xl'>
            Hiring a Rails or React engineer? <em className='text-accent'>Let&apos;s talk.</em>
          </h2>
          <p className='mt-6 max-w-xl text-lg text-muted'>
            I&apos;m open to full-time roles with product-focused teams. Email is the fastest way to reach me.
          </p>

          <a
            href={`mailto:${info.email}`}
            className='group mt-10 inline-flex items-center gap-3 break-all font-display text-3xl text-ink underline decoration-ink/25 decoration-1 underline-offset-8 transition hover:decoration-accent md:text-5xl'
          >
            {info.email}
            <ArrowUpRight className='h-7 w-7 shrink-0 text-accent transition group-hover:-translate-y-1 group-hover:translate-x-1 md:h-9 md:w-9' />
          </a>

          <div className='mt-10 flex flex-wrap gap-3'>
            <CopyEmail email={info.email} />
            <a href={info.linkedin} target='_blank' rel='noopener noreferrer' className={outlined}>
              <LinkedInIcon className='h-4 w-4' />
              LinkedIn
            </a>
            <a href={info.github} target='_blank' rel='noopener noreferrer' className={outlined}>
              <GitHubIcon className='h-4 w-4' />
              GitHub
            </a>
            <a href={info.cv} download className={outlined}>
              <DownloadIcon className='h-4 w-4' />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
