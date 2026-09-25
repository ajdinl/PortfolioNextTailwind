import QRCode from 'qrcode'
import db from '@/db.json'
import { highlightText } from '@components/highlightText'
import { ArrowUpRight, CheckIcon, DownloadIcon, GitHubIcon, GlobeIcon, LinkedInIcon, MailIcon, PinIcon } from '@components/Icons'

const { info } = db

export const metadata = {
  title: `CV | ${info.fullName}, ${info.title}`,
  description: `${info.fullName}, ${info.title}. ${info.cvTagline}. ${info.yearsOfExperience} years of experience.`,
  alternates: { canonical: '/cv' },
}

const stripProtocol = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

function Heading({ children }) {
  return (
    <h2 className='mb-2.5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-accent'>
      {children}
      <span className='h-px flex-1 bg-ink/10' />
    </h2>
  )
}

function Contact({ href, icon: Icon, children }) {
  return (
    <li>
      <a href={href} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-1.5 hover:text-accent'>
        <Icon className='h-3 w-3 text-accent' />
        {children}
      </a>
    </li>
  )
}

function Role({ employer, employerUrl, role }) {
  const details = role.details.slice(0, role.cvBullets ?? role.details.length)

  return (
    <article className='relative border-l border-ink/15 pb-3 pl-4 last:pb-0'>
      <span className='absolute -left-[4.5px] top-[5px] h-2 w-2 rounded-full border-[1.5px] border-accent bg-paper' />
      <div className='flex items-baseline justify-between gap-4'>
        <h3 className='text-[12.5px] font-semibold leading-tight'>{role.title}</h3>
        <p className='shrink-0 font-mono text-[9px] uppercase text-faint'>{role.period}</p>
      </div>
      <p className='mt-0.5 text-[10.5px] text-muted'>
        {employerUrl ? (
          <a href={employerUrl} target='_blank' rel='noopener noreferrer' className='font-medium text-ink underline decoration-ink/20 underline-offset-2'>
            {employer}
          </a>
        ) : (
          <span className='font-medium text-ink'>{employer}</span>
        )}
        {role.client && (
          <>
            {' · Client: '}
            <a href={role.clientUrl} target='_blank' rel='noopener noreferrer' className='font-medium text-accent underline decoration-accent/30 underline-offset-2'>
              {role.client}
            </a>
          </>
        )}
      </p>
      <ul className='mt-1 space-y-[2px] text-[10px] leading-[1.42] text-muted'>
        {details.map((detail) => (
          <li key={detail} className='relative pl-3 before:absolute before:left-0 before:top-[0.68em] before:h-px before:w-1.5 before:bg-accent'>
            {highlightText(detail)}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default async function CVPage() {
  const { about, cvProfile, highlights, skills, career, languages, interests, principles } = db
  const [firstName, ...rest] = info.fullName.split(' ')
  const qr = await QRCode.toString(info.website, {
    type: 'svg',
    margin: 0,
    errorCorrectionLevel: 'M',
    color: { dark: '#151816ff', light: '#00000000' },
  })
  const updated = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

  return (
    <div className='min-h-screen bg-[#e7e3da] px-4 py-8 print:bg-transparent print:p-0'>
      <nav className='mx-auto mb-5 flex w-full max-w-[210mm] items-center justify-between text-sm text-[#4c514c] print:hidden'>
        <a href='/' className='hover:text-[#151816]'>
          ← Back to portfolio
        </a>
        <a href={info.cv} download className='inline-flex h-10 items-center gap-2 rounded-full bg-[#151816] px-5 font-medium text-[#f5f2eb] transition hover:bg-[#005c28]'>
          <DownloadIcon className='h-4 w-4' />
          Download PDF
        </a>
      </nav>

      <div className='overflow-x-auto print:overflow-visible'>
        <article className='cv-sheet mx-auto flex h-[297mm] w-[210mm] flex-col overflow-hidden bg-paper font-sans text-ink shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)] print:shadow-none'>
          <header className='dark relative overflow-hidden bg-paper px-11 pb-5 pt-7 text-ink'>
            <div aria-hidden className='absolute -right-20 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl' />
            <div
              aria-hidden
              className='absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgb(var(--ink))_1px,transparent_1px)] [background-size:16px_16px]'
            />
            <div className='relative flex items-start justify-between gap-8'>
              <div>
                <p className='inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] font-medium text-accent'>
                  <span className='h-1.5 w-1.5 rounded-full bg-accent' />
                  {info.availability}
                </p>
                <h1 className='mt-3 font-display text-[62px] leading-[0.92] tracking-[-0.01em]'>
                  {firstName} <em className='text-accent'>{rest.join(' ')}</em>
                </h1>
                <p className='mt-2.5 text-[13px]'>
                  <span className='font-semibold'>{info.title}</span>
                  <span className='text-muted'> · {info.cvTagline}</span>
                </p>
              </div>
              <a
                href={info.website}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-1 flex shrink-0 flex-col items-center gap-1.5 rounded-xl bg-[#f5f2eb] p-2.5 text-[#151816]'
              >
                <span className='block h-[74px] w-[74px]' dangerouslySetInnerHTML={{ __html: qr }} />
                <span className='inline-flex items-center gap-0.5 font-mono text-[8px] uppercase'>
                  Portfolio <ArrowUpRight className='h-2.5 w-2.5' />
                </span>
              </a>
            </div>
            <ul className='relative mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-[10px] text-muted'>
              <Contact href={`mailto:${info.email}`} icon={MailIcon}>
                {info.email}
              </Contact>
              <Contact href={info.linkedin} icon={LinkedInIcon}>
                {stripProtocol(info.linkedin)}
              </Contact>
              <Contact href={info.github} icon={GitHubIcon}>
                {stripProtocol(info.github)}
              </Contact>
              <Contact href={info.website} icon={GlobeIcon}>
                {stripProtocol(info.website)}
              </Contact>
              <li className='inline-flex items-center gap-1.5'>
                <PinIcon className='h-3 w-3 text-accent' />
                {info.location} · {info.timezone}
              </li>
            </ul>
          </header>

          <section className='relative grid grid-cols-3 divide-x divide-ink/10 border-b border-ink/10 bg-accent-soft/60'>
            {highlights.map((item) => (
              <div key={item.label} className='flex items-center gap-3 px-6 py-3 first:pl-11'>
                <span className='font-display text-[32px] leading-none text-accent'>{item.value}</span>
                <span className='text-[9.5px] leading-snug text-muted'>{item.label}</span>
              </div>
            ))}
          </section>

          <div className='grid min-h-0 flex-1 grid-cols-[1fr_222px]'>
            <main className='relative pb-3 pl-11 pr-7 pt-4'>
              <Heading>Profile</Heading>
              <p className='text-[10.75px] leading-[1.55] text-muted'>{highlightText(cvProfile ?? about.join(' '))}</p>

              <div className='mt-3.5'>
                <Heading>Experience</Heading>
                <div className='pl-1'>
                  {career.flatMap((job) =>
                    job.roles.map((role) => (
                      <Role key={job.employer + role.period} employer={job.employer} employerUrl={job.employerUrl} role={role} />
                    ))
                  )}
                </div>
              </div>
            </main>

            <aside className='relative border-l border-ink/10 bg-surface pb-3 pl-6 pr-8 pt-4'>
              <Heading>Skills</Heading>
              <div className='space-y-2.5'>
                {skills.map((group) => (
                  <div key={group.group}>
                    <h3 className='text-[10px] font-semibold'>{group.group}</h3>
                    <ul className='mt-1 flex flex-wrap gap-[3px]'>
                      {group.items.map((item) => (
                        <li key={item} className='rounded border border-ink/10 bg-paper px-1.5 text-[9px] leading-[1.6] text-muted'>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className='mt-4'>
                <Heading>Languages</Heading>
                <ul className='space-y-1 text-[10px] leading-snug'>
                  {languages.map((language) => (
                    <li key={language.name}>
                      <span className='font-semibold'>{language.name}</span>
                      <span className='block text-[9.25px] text-muted'>{language.level}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='mt-3.5 rounded-lg border border-accent/20 bg-accent-soft/70 p-2.5'>
                <h2 className='text-[10px] font-semibold uppercase tracking-[0.1em] text-accent'>How I work</h2>
                <ul className='mt-1.5 space-y-1 text-[10px] leading-snug'>
                  {principles.map((principle) => (
                    <li key={principle.title} className='flex gap-1.5'>
                      <CheckIcon className='mt-[1px] h-3 w-3 shrink-0 text-accent' />
                      {principle.title}
                    </li>
                  ))}
                </ul>
              </div>

              <div className='mt-4'>
                <Heading>Off the clock</Heading>
                <p className='text-[10px] text-muted'>{interests.join(' · ')}</p>
              </div>
            </aside>
          </div>

          <footer className='relative flex items-center justify-between border-t border-ink/10 px-11 py-2.5 font-mono text-[8.5px] text-faint'>
            <a href={`${info.website}/cv`} target='_blank' rel='noopener noreferrer' className='hover:text-accent'>
              Live version · {stripProtocol(info.website)}/cv
            </a>
            <span>Updated {updated}</span>
          </footer>
        </article>
      </div>
    </div>
  )
}
