'use client'

import { useEffect, useRef, useState } from 'react'
import StackScene from './StackScene'
import styles from './Journey.module.css'

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value))
const smoothstep = (edge0, edge1, x) => {
  const t = clamp((x - edge0) / (edge1 - edge0))
  return t * t * (3 - 2 * t)
}

// Which chapter lights up each layer (index 0 is the Interface on top).
const layerChapter = [0, 1, 2, 3, 3]
// Chapter where the satellites of a layer slide in (API: ad platforms, Data: ERPs).
const satelliteChapter = { 2: 2, 4: 3 }
const GAP = 118

// Maps the story position v (0 = first chapter, n - 1 = last) onto the 3D scene.
// box is the size of the scene area, used to zoom out as the stack grows taller.
function paint(v, rig, layers, box) {
  const tilt = clamp(v)
  // Chapters 0 to 2 open one layer each, chapter 3 opens jobs and data together.
  const s = v <= 2 ? v : Math.min(4, 2 + (v - 2) * 2)
  const finale = clamp(v - 3)
  const rx = tilt * 60 + finale * 6
  const spread = s * GAP * Math.sin((rx * Math.PI) / 180)
  const fit = Math.min(1, box.width / 600, box.height / (300 + spread))
  const lift = (-spread / 2 + tilt * 12) * fit

  rig.style.setProperty('--tilt', tilt.toFixed(3))
  rig.style.setProperty('--s', s.toFixed(3))
  rig.style.setProperty('--rx', `${rx.toFixed(2)}deg`)
  rig.style.setProperty('--rz', `${(tilt * -42 + finale * 10).toFixed(2)}deg`)
  rig.style.setProperty('--zoom', ((1.3 - tilt * 0.3 - finale * 0.02) * fit).toFixed(3))
  rig.style.setProperty('--lift', `${lift.toFixed(1)}px`)

  layers.forEach((layer, index) => {
    if (!layer) return
    const on = Math.max(clamp(1 - Math.abs(v - layerChapter[index])), finale)
    layer.style.setProperty('--on', on.toFixed(3))
    layer.style.setProperty('--flow', clamp(v - 2.5).toFixed(3))
    if (index in satelliteChapter) {
      layer.style.setProperty('--in', clamp((v - satelliteChapter[index] + 0.5) * 2).toFixed(3))
    }
  })
}

export default function Journey({ path }) {
  const sectionRef = useRef(null)
  const stageRef = useRef(null)
  const rigRef = useRef(null)
  const layerRefs = useRef([])
  const [active, setActive] = useState(0)
  const last = path.length - 1

  useEffect(() => {
    const section = sectionRef.current
    const stage = stageRef.current
    const still = window.matchMedia('(prefers-reduced-motion: reduce), (max-height: 539px)')
    let frame = 0

    const update = () => {
      frame = 0
      const rig = rigRef.current
      const box = { width: rig.parentElement.clientWidth, height: rig.parentElement.clientHeight }
      if (still.matches) {
        stage.style.setProperty('--p', 1)
        paint(last, rig, layerRefs.current, box)
        setActive(last)
        return
      }
      const rect = section.getBoundingClientRect()
      const top = parseFloat(getComputedStyle(stage).top) || 0
      const p = clamp((top - rect.top) / (rect.height - stage.offsetHeight))
      const u = p * path.length - 0.5
      const step = Math.floor(u)
      const v = clamp(step + smoothstep(0.25, 0.75, u - step), 0, last)

      stage.style.setProperty('--p', p.toFixed(4))
      paint(v, rig, layerRefs.current, box)
      setActive(clamp(Math.round(u), 0, last))
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    still.addEventListener('change', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      still.removeEventListener('change', schedule)
    }
  }, [path.length, last])

  const goTo = (index) => {
    const section = sectionRef.current
    const stage = stageRef.current
    const top = parseFloat(getComputedStyle(stage).top) || 0
    const total = section.offsetHeight - stage.offsetHeight
    const start = section.getBoundingClientRect().top + window.scrollY - top
    window.scrollTo({ top: start + ((index + 0.5) / path.length) * total })
  }

  return (
    <section id='path' ref={sectionRef} className={`${styles.journey} print:hidden`} style={{ '--chapters': path.length }}>
      <div className='mx-auto w-full max-w-page px-5 md:px-8'>
        <div className='border-t border-ink/10' />
      </div>
      <div ref={stageRef} className={styles.stage}>
        <div className='mx-auto grid h-full w-full max-w-page grid-rows-[auto_minmax(0,1fr)_auto] px-5 pb-5 pt-6 md:px-8 md:pb-8 md:pt-10 lg:grid-cols-12 lg:grid-rows-[auto_minmax(0,1fr)] lg:gap-x-10 lg:py-12'>
          <div className='lg:col-span-5'>
            <p className='eyebrow'>01 / Path</p>
            <h2 className='mt-3 font-display text-3xl leading-none tracking-tight sm:text-4xl md:text-6xl'>From pixel to database</h2>
            <p className='mt-4 hidden max-w-sm text-muted lg:block'>
              I started on the frontend and kept going down the stack, one layer at a time.
            </p>

            <ol className={`${styles.rail} mt-8 hidden lg:block`} aria-label='Career path'>
              {path.map((chapter, index) => (
                <li key={chapter.layer}>
                  <button
                    type='button'
                    onClick={() => goTo(index)}
                    aria-current={active === index ? 'step' : undefined}
                    data-state={index < active ? 'done' : undefined}
                    className={styles.railItem}
                  >
                    <span>{chapter.layer}</span>
                    <span className={styles.railYear}>{chapter.year}</span>
                  </button>
                </li>
              ))}
            </ol>
          </div>

          <div className='relative row-start-2 min-h-0 lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1'>
            <StackScene rigRef={rigRef} layerRefs={layerRefs} />
          </div>

          <div className='row-start-3 lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:mt-10'>
            <div className='mb-4 flex gap-1.5 lg:hidden' aria-hidden>
              {path.map((chapter, index) => (
                <span key={chapter.layer} className={`h-1 flex-1 rounded-full transition-colors duration-300 ${index <= active ? 'bg-accent' : 'bg-ink/15'}`} />
              ))}
            </div>
            <div className={styles.chapters}>
              {path.map((chapter, index) => (
                <article key={chapter.layer} className={styles.chapter} data-active={active === index}>
                  <p className='flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm'>
                    {chapter.employer ? (
                      <>
                        <span className='font-medium text-ink'>{chapter.employer}</span>
                        {chapter.via && <span className='text-faint'>via {chapter.via}</span>}
                        <span className='font-mono text-xs text-faint'>{chapter.period}</span>
                      </>
                    ) : (
                      <span className='font-medium text-accent'>{chapter.year}</span>
                    )}
                  </p>
                  <h3 className='mt-2 font-display text-3xl leading-none tracking-tight md:text-5xl'>{chapter.title}</h3>
                  <p className='mt-3 max-w-md leading-relaxed text-muted md:mt-4 md:text-lg'>{chapter.text}</p>
                  {chapter.stack && (
                    <ul className='mt-4 flex flex-wrap gap-1.5' aria-label={`${chapter.employer} tech stack`}>
                      {chapter.stack.map((tech) => (
                        <li key={tech} className='chip'>
                          {tech}
                        </li>
                      ))}
                    </ul>
                  )}
                  {index === last && (
                    <a href='#work' tabIndex={active === index ? undefined : -1} className='btn-primary mt-6'>
                      See projects
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
