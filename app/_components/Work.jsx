import Section from './Section'
import { ArrowUpRight } from './Icons'

function ProjectCard({ project, index, featured }) {
  const { name, url, domain, role, via, period, summary, stack } = project

  return (
    <article
      className={`card group relative flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-[0_18px_40px_-24px_rgb(var(--ink)/0.35)] md:p-8 ${
        featured ? 'md:grid md:grid-cols-12 md:gap-10' : ''
      }`}
    >
      <div className={featured ? 'md:col-span-7' : ''}>
        <div className='flex items-center justify-between gap-4'>
          <span className='font-mono text-xs text-faint'>{String(index + 1).padStart(2, '0')}</span>
          {featured && <span className='chip border-accent/30 bg-accent-soft/70 text-accent'>Current</span>}
        </div>
        <h3 className={`mt-6 font-display leading-none tracking-tight ${featured ? 'text-5xl md:text-7xl' : 'text-4xl md:text-5xl'}`}>
          {url ? (
            <a href={url} target='_blank' rel='noopener noreferrer' className='after:absolute after:inset-0 after:rounded-2xl'>
              {name}
              <ArrowUpRight className='ml-2 inline h-5 w-5 -translate-y-1 text-faint transition group-hover:-translate-y-2 group-hover:translate-x-1 group-hover:text-accent md:h-6 md:w-6' />
            </a>
          ) : (
            name
          )}
        </h3>
        <p className='mt-3 text-sm font-medium text-accent'>{domain}</p>
      </div>

      <div className={`flex flex-1 flex-col ${featured ? 'md:col-span-5 md:justify-end' : ''}`}>
        <p className={`leading-relaxed text-muted ${featured ? 'mt-4 md:mt-0 md:text-lg' : 'mt-4'}`}>{summary}</p>
        <div className='mt-auto pt-6'>
          <p className='font-mono text-xs text-faint'>
            {role}
            {via && ` · via ${via}`} · {period}
          </p>
          <ul className='mt-3 flex flex-wrap gap-1.5' aria-label={`${name} tech stack`}>
            {stack.map((tech) => (
              <li key={tech} className='chip'>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default function Work({ projects }) {
  return (
    <Section
      id='work'
      index='01'
      label='Work'
      title={
        <>
          Products I&apos;ve <em>shipped</em>
        </>
      }
      aside={<p className='max-w-xs text-sm text-muted'>Real products used by manufacturers, marketers, car dealerships and hiring teams.</p>}
      className='print:hidden'
    >
      <div className='grid gap-4 md:grid-cols-2 md:gap-5'>
        {projects.map((project, index) => (
          <div key={project.name} className={`reveal ${index === 0 ? 'md:col-span-2' : ''}`}>
            <ProjectCard project={project} index={index} featured={index === 0} />
          </div>
        ))}
      </div>
    </Section>
  )
}
