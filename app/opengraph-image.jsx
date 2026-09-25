import { ImageResponse } from 'next/og'
import db from '@/db.json'

export const alt = `${db.info.fullName}, ${db.info.title}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

async function loadGoogleFont(family, text, italic = false) {
  const query = `family=${family.replace(/ /g, '+')}${italic ? ':ital@1' : ''}&text=${encodeURIComponent(text)}`
  const css = await (await fetch(`https://fonts.googleapis.com/css2?${query}`)).text()
  const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1]
  if (!url) throw new Error(`Font ${family} not found`)
  return (await fetch(url)).arrayBuffer()
}

export default async function OpenGraphImage() {
  const { fullName, title, yearsOfExperience, location } = db.info
  const [firstName, ...rest] = fullName.split(' ')
  const lastName = rest.join(' ')
  const tagline = 'Ruby on Rails · React · TypeScript'
  const meta = `${yearsOfExperience} years experience · ${location} · Open to opportunities`

  const [serif, serifItalic, sans] = await Promise.all([
    loadGoogleFont('Instrument Serif', firstName),
    loadGoogleFont('Instrument Serif', lastName, true),
    loadGoogleFont('Schibsted Grotesk', `${title}${tagline}${meta}`),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#f5f2eb',
          backgroundImage: 'radial-gradient(rgba(21,24,22,0.08) 1.5px, transparent 1.5px)',
          backgroundSize: '26px 26px',
          color: '#151816',
          fontFamily: 'Sans',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 26, color: '#005c28' }}>
          <div style={{ width: 16, height: 16, borderRadius: 999, background: '#005c28' }} />
          {meta}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', gap: 28, fontSize: 176, lineHeight: 0.9, letterSpacing: '-0.02em' }}>
            <span style={{ fontFamily: 'Serif' }}>{firstName}</span>
            <span style={{ fontFamily: 'SerifItalic', color: '#005c28' }}>{lastName}</span>
          </div>
          <div style={{ display: 'flex', marginTop: 28, fontSize: 38, color: '#3a3f3a' }}>{`${title} · ${tagline}`}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Serif', data: serif, style: 'normal' },
        { name: 'SerifItalic', data: serifItalic, style: 'normal' },
        { name: 'Sans', data: sans, style: 'normal' },
      ],
    }
  )
}
