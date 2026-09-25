import Nav from '@components/Nav'
import Hero from '@components/Hero'
import Work from '@components/Work'
import Experience from '@components/Experience'
import Skills from '@components/Skills'
import About from '@components/About'
import Contact from '@components/Contact'
import Footer from '@components/Footer'
import db from '@/db.json'

export default function Page() {
  const { info, about, principles, interests, languages, highlights, skills, projects, career } = db

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: info.fullName,
    jobTitle: info.title,
    url: info.website,
    email: `mailto:${info.email}`,
    address: { '@type': 'PostalAddress', addressCountry: 'BA' },
    worksFor: { '@type': 'Organization', name: info.current.employer },
    sameAs: [info.linkedin, info.github],
    knowsAbout: skills.flatMap((group) => group.items),
    knowsLanguage: languages.map((language) => language.name),
  }

  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href='#main' className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper'>
        Skip to content
      </a>
      <Nav info={info} />
      <main id='main' className='flex flex-col'>
        <Hero info={info} highlights={highlights} />
        <Work projects={projects} />
        <Experience career={career} />
        <Skills skills={skills} />
        <About about={about} principles={principles} interests={interests} languages={languages} />
        <Contact info={info} />
      </main>
      <Footer info={info} />
    </>
  )
}
