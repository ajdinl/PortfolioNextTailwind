import Section from './Section'
import { highlightText } from './highlightText'

function Role({ role }) {
  return (
    <div className='avoid-break relative pl-6 md:pl-8 print:pl-0'>
      <span className='absolute left-0 top-2 h-2.5 w-2.5 -translate-x-[5px] rounded-full border-2 border-accent bg-paper print:hidden' />
      <div className='flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1'>
        <h4 className='text-lg font-medium print:text-sm print:font-semibold'>{role.title}</h4>
        <p className='font-mono text-xs uppercase tracking-wider text-faint'>{role.period}</p>
      </div>
      {role.client && (
        <p className='mt-1 text-sm text-muted'>
          Client:{' '}
          <a href={role.clientUrl} target='_blank' rel='noopener noreferrer' className='font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent'>
            {role.client}
          </a>
        </p>
      )}
      <ul className='mt-4 space-y-2.5 text-[0.95rem] leading-relaxed text-muted print:mt-1 print:space-y-0 print:text-[0.8rem] print:leading-snug'>
        {role.details.map((detail) => (
          <li key={detail} className='relative pl-5 before:absolute before:left-0 before:top-[0.75em] before:h-px before:w-2.5 before:bg-accent'>
            {highlightText(detail)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Experience({ career }) {
  return (
    <Section id='experience' index='02' label='Experience' title='Experience' className='print:order-3'>
      <ol className='space-y-14 print:space-y-2.5'>
        {career.map((job) => (
          <li key={job.employer} className='reveal grid gap-6 md:grid-cols-12 md:gap-10 print:block'>
            <div className='md:col-span-3'>
              <h3 className='keep-with-next font-display text-3xl leading-none md:sticky md:top-24 print:mb-1 print:text-xl'>
                {job.employerUrl ? (
                  <a href={job.employerUrl} target='_blank' rel='noopener noreferrer' className='transition hover:text-accent'>
                    {job.employer}
                  </a>
                ) : (
                  job.employer
                )}
              </h3>
            </div>
            <div className='space-y-10 border-l border-ink/10 md:col-span-9 print:space-y-2 print:border-0'>
              {job.roles.map((role) => (
                <Role key={role.title + role.period} role={role} />
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
