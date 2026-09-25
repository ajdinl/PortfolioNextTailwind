import Section from './Section'
import { highlightText } from './highlightText'

export default function About({ about, principles, interests, languages }) {
  return (
    <Section id='about' index='04' label='About' title='About me' className='print:order-1'>
      <div className='grid gap-12 md:grid-cols-12 md:gap-10 print:block'>
        <div className='space-y-6 text-xl leading-relaxed text-muted md:col-span-7 md:text-2xl md:leading-relaxed print:space-y-1 print:text-[0.82rem] print:leading-snug'>
          {about.map((paragraph, index) => (
            <p key={index} className={index === 0 ? 'text-ink' : ''}>
              {highlightText(paragraph)}
            </p>
          ))}
        </div>

        <div className='md:col-span-5 print:hidden'>
          <p className='eyebrow'>How I work</p>
          <ol className='mt-5 divide-y divide-ink/10 border-y border-ink/10'>
            {principles.map((principle, index) => (
              <li key={principle.title} className='flex gap-5 py-5'>
                <span className='font-mono text-xs text-accent'>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className='font-medium'>{principle.title}</h3>
                  <p className='mt-1 text-sm leading-relaxed text-muted'>{principle.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <dl className='mt-6 space-y-2 text-sm text-muted'>
            <div>
              <dt className='eyebrow mr-2 inline'>Languages</dt>
              <dd className='inline'>{languages.map((language) => `${language.name} (${language.level.toLowerCase()})`).join(' · ')}</dd>
            </div>
            <div>
              <dt className='eyebrow mr-2 inline'>Off the clock</dt>
              <dd className='inline'>{interests.join(' · ')}</dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  )
}
