// Renders the /cv page of the current build into public/Ajdin-Lojic-CV.pdf.
// Usage: npm run cv (builds first)
import { spawn } from 'node:child_process'
import { createRequire } from 'node:module'
import { createServer } from 'node:net'
import { chromium } from 'playwright'

const output = 'public/Ajdin-Lojic-CV.pdf'
const nextBin = createRequire(import.meta.url).resolve('next/dist/bin/next')

const port = await new Promise((resolve, reject) => {
  const probe = createServer()
  probe.once('error', reject)
  probe.listen(0, () => {
    const { port } = probe.address()
    probe.close(() => resolve(port))
  })
})
const url = `http://localhost:${port}`

const server = spawn(process.execPath, [nextBin, 'start', '-p', String(port)], { stdio: ['ignore', 'ignore', 'pipe'] })
let serverErrors = ''
server.stderr.on('data', (chunk) => (serverErrors += chunk))
const serverExited = new Promise((_, reject) =>
  server.once('exit', (code) => reject(new Error(`next start exited with code ${code}\n${serverErrors}`)))
)
serverExited.catch(() => {})

async function waitForServer() {
  for (let attempt = 0; attempt < 60; attempt++) {
    try {
      if ((await fetch(url)).ok) return
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 500))
  }
  throw new Error(`Server did not start on ${url}`)
}

try {
  await Promise.race([waitForServer(), serverExited])
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto(`${url}/cv`, { waitUntil: 'networkidle' })
  await page.emulateMedia({ media: 'print', colorScheme: 'light' })
  const overflow = await page.$eval('.cv-sheet', (sheet) => {
    const limit = sheet.querySelector('footer').getBoundingClientRect().top
    const columns = [...sheet.querySelectorAll('[data-cv-column]')].map((column) => {
      const padding = parseFloat(getComputedStyle(column).paddingBottom)
      const bottom = Math.max(...[...column.children].map((child) => child.getBoundingClientRect().bottom))
      return bottom + padding - limit
    })
    return Math.ceil(Math.max(sheet.scrollHeight - sheet.clientHeight, ...columns))
  })
  if (overflow > 0) console.warn(`Warning: CV content overflows the A4 page by ${overflow}px`)
  await page.pdf({ path: output, printBackground: true, preferCSSPageSize: true })
  await browser.close()
  console.log(`CV saved to ${output}`)
} finally {
  server.kill()
}
