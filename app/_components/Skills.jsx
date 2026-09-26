import Section from './Section'

export default function Skills({ skills }) {
  return (
    <Section id='skills' index='03' label='Skills' title='Toolbox' className='print:order-2'>
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3 print:grid-cols-2 print:gap-x-6 print:gap-y-1.5'>
        {skills.map((group, index) => (
          <div key={group.group} className={`${index === skills.length - 1 && skills.length % 2 ? 'sm:col-span-2' : ''} reveal card spotlight avoid-break p-6 print:border-0 print:p-0`}>
            <h3 className='eyebrow text-accent print:font-sans print:font-semibold print:tracking-wide'>{group.group}</h3>
            <ul className='mt-4 flex flex-wrap gap-1.5 print:mt-0.5 print:block print:leading-snug'>
              {group.items.map((item) => (
                <li key={item} className='chip print:mr-1 print:inline print:border-0 print:p-0 print:font-sans print:text-[0.8rem] print:after:content-[","] last:print:after:content-none'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
