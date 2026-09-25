// Renders the /cv page into public/Ajdin-Lojic-CV.pdf.
// Usage: npm run build && npm run cv
import { spawn } from 'node:child_process'
import { chromium } from 'playwright'

const port = 3456
const url = `http://localhost:${port}`
const output = 'public/Ajdin-Lojic-CV.pdf'

const server = spawn('npx', ['next', 'start', '-p', String(port)], { stdio: 'ignore' })

async function waitForServer() {
  for (let attempt = 0; attempt < 60; attempt++) {
    try {
      if ((await fetch(url)).ok) return
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 500))
  }
  throw new Error(`Server did not start on ${url}. Did you run "npm run build"?`)
}

try {
  await waitForServer()
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto(`${url}/cv`, { waitUntil: 'networkidle' })
  await page.emulateMedia({ media: 'print', colorScheme: 'light' })
  const overflow = await page.$eval('.cv-sheet', (sheet) => {
    const limit = sheet.querySelector('footer').getBoundingClientRect().top
    const columns = [...sheet.querySelectorAll('main, aside')].map((column) => {
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
