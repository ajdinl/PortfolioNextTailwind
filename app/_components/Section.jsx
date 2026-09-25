export default function Section({ id, index, label, title, aside, className = '', children }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-page px-5 md:px-8 print:px-0 ${className}`}>
      <div className='border-t border-ink/10 py-16 md:py-24 print:border-ink/20 print:py-3'>
        <header className='keep-with-next mb-10 flex flex-wrap items-end justify-between gap-4 md:mb-14 print:mb-2'>
          <div>
            <p className='eyebrow print:hidden'>
              {index} / {label}
            </p>
            <h2 className='mt-3 font-display text-4xl leading-none tracking-tight md:text-6xl print:mt-0 print:text-2xl print:tracking-normal'>
              {title}
            </h2>
          </div>
          {aside}
        </header>
        {children}
      </div>
    </section>
  )
}
