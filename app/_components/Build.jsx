'use client'

import { useEffect, useRef } from 'react'
import styles from './Build.module.css'

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value))
const APPLY_AT = 0.68 // share of a step spent typing before the rule is applied
const DONE_AT = 0.92 // share of the scroll after which the page is finished

function getSteps(info, dark) {
  return [
    {
      file: 'index.html',
      code: [
        `<h1>${info.fullName}</h1>`,
        `<p>${info.title}. ${info.headline.split(' ').slice(0, 4).join(' ')}…</p>`,
        `<a href="mailto:${info.email}">Email me</a>`,
        `<aside>Currently at ${info.current.employer}</aside>`,
      ].join('\n'),
    },
    { file: 'styles.css', code: 'body {\n  font-family: "Schibsted Grotesk";\n}' },
    {
      file: 'styles.css',
      code: 'h1 {\n  font: 8.75rem/0.88 "Instrument Serif";\n  letter-spacing: -0.02em;\n}',
      target: '[data-build-target="name"]',
      label: 'h1',
    },
    {
      file: 'styles.css',
      code: `:root {\n  --paper: ${dark ? '#0d0f0e' : '#f5f2eb'};\n  --ink: ${dark ? '#eceae2' : '#151816'};\n  --accent: ${dark ? '#6ee2a0' : '#005c28'};\n}`,
    },
    {
      file: 'styles.css',
      code: '.hero {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n}',
      target: 'aside',
      label: 'aside.card',
    },
    {
      file: 'styles.css',
      code: '.lede {\n  margin-top: 1.75rem;\n  font-size: 1.5rem;\n}',
      target: '[data-build-target="lede"]',
      label: 'p.lede',
    },
    {
      file: 'styles.css',
      code: '.button {\n  height: 2.75rem;\n  padding: 0 1.25rem;\n  border-radius: 999px;\n}',
      target: '[data-build-target="buttons"] a',
      label: 'a.button',
    },
    {
      file: 'styles.css',
      code: '.card {\n  border: 1px solid var(--line);\n  border-radius: 1rem;\n  background: var(--surface);\n}',
      target: 'aside > div',
      label: 'div.card-header',
    },
    {
      file: 'styles.css',
      code: '.status::before {\n  animation: pulse 2s infinite;\n}',
      target: '[data-build-target="status"] > p',
      label: 'p.status',
    },
  ]
}

const escape = (text) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Splits a snippet into coloured tokens so a prefix of it can be rendered while "typing".
function tokenize(code) {
  const tokens = []
  const push = (text, cls) => text && tokens.push({ text, cls })
  code.split('\n').forEach((line, index) => {
    if (index) push('\n')
    let match
    if ((match = line.match(/^(\s*)([\w-]+)(:\s*)(.*?)(;)$/))) {
      push(match[1])
      push(match[2], 't-prop')
      push(match[3], 't-dim')
      push(match[4], 't-val')
      push(match[5], 't-dim')
    } else if (line.endsWith('{')) {
      push(line.slice(0, -1), 't-sel')
      push('{', 't-dim')
    } else if (line.startsWith('<')) {
      line.split(/(<\/?\w+|>)/).forEach((part) => push(part, /^<|^>$/.test(part) ? 't-tag' : undefined))
    } else {
      push(line, 't-dim')
    }
  })
  return tokens
}

function renderTyped(tokens, count) {
  let html = ''
  let left = count
  for (const { text, cls } of tokens) {
    if (left <= 0) break
    const part = escape(text.slice(0, left))
    left -= text.length
    html += cls ? `<span class="${cls}">${part}</span>` : part
  }
  return html
}

export default function Build({ info, children }) {
  const wrapRef = useRef(null)
  const stageRef = useRef(null)
  const spacerRef = useRef(null)
  const panelRef = useRef(null)
  const tabsRef = useRef(null)
  const codeRef = useRef(null)
  const footerRef = useRef(null)
  const hintRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    if (!document.documentElement.hasAttribute('data-build')) return

    const wrap = wrapRef.current
    const stage = stageRef.current
    const panel = panelRef.current
    const code = codeRef.current
    const footer = footerRef.current
    const overlay = overlayRef.current
    const [marginBox, paddingBox, contentBox, label] = overlay.children
    const status = footer.querySelector('b')
    let frame = 0
    let settleUntil = 0
    let last = { key: '', html: '' }
    let target = null

    const placeOverlay = () => {
      if (!target) return
      const rect = target.getBoundingClientRect()
      const cs = getComputedStyle(target)
      const px = (name) => Math.max(0, parseFloat(cs[name]) || 0)
      const m = [px('marginTop'), px('marginRight'), px('marginBottom'), px('marginLeft')]
      const b = [px('borderTopWidth'), px('borderRightWidth'), px('borderBottomWidth'), px('borderLeftWidth')]
      const p = [px('paddingTop'), px('paddingRight'), px('paddingBottom'), px('paddingLeft')]
      const box = (node, left, top, width, height, borders) => {
        Object.assign(node.style, {
          left: `${left}px`,
          top: `${top}px`,
          width: `${Math.max(0, width)}px`,
          height: `${Math.max(0, height)}px`,
          borderStyle: 'solid',
          borderWidth: borders ? borders.map((value) => `${value}px`).join(' ') : '0',
        })
      }
      box(marginBox, rect.left - m[3], rect.top - m[0], rect.width + m[1] + m[3], rect.height + m[0] + m[2], m)
      box(paddingBox, rect.left + b[3], rect.top + b[0], rect.width - b[1] - b[3], rect.height - b[0] - b[2], p)
      box(
        contentBox,
        rect.left + b[3] + p[3],
        rect.top + b[0] + p[0],
        rect.width - b[1] - b[3] - p[1] - p[3],
        rect.height - b[0] - b[2] - p[0] - p[2]
      )
      const labelTop = rect.top - m[0] - 30
      label.style.left = `${Math.max(8, rect.left - m[3])}px`
      label.style.top = `${labelTop < 72 ? rect.bottom + m[2] + 6 : labelTop}px`
      label.querySelector('span').textContent = ` ${Math.round(rect.width)} × ${Math.round(rect.height)}`
    }

    const settle = () => {
      placeOverlay()
      if (performance.now() < settleUntil) requestAnimationFrame(settle)
    }

    const update = () => {
      frame = 0
      const steps = getSteps(info, document.documentElement.classList.contains('dark'))
      const n = steps.length
      const rect = wrap.getBoundingClientRect()
      const top = parseFloat(getComputedStyle(stage).top) || 0
      const p = clamp((top - rect.top) / spacerRef.current.offsetHeight)
      const x = clamp(p / DONE_AT) * n
      const done = x >= n
      const step = Math.min(n - 1, Math.floor(x))
      const t = done ? 1 : x - step
      const current = steps[step]

      // Step 0 types the HTML (the name is already there), later steps type then apply a CSS rule.
      let typed
      if (step === 0) {
        const lines = current.code.split('\n')
        const firstLine = lines[0].length
        typed = Math.round(firstLine + clamp(t / 0.85) * (current.code.length - firstLine))
        let end = 0
        lines.forEach((line, index) => {
          end += line.length + (index ? 1 : 0)
          if (index) stage.classList.toggle(styles[`l${index}`], typed >= end)
        })
      } else {
        typed = Math.round(clamp(t / (APPLY_AT - 0.08)) * current.code.length)
        for (let index = 1; index <= 3; index++) stage.classList.add(styles[`l${index}`])
      }

      let changed = false
      for (let k = 1; k < n; k++) {
        const applied = k < step || (k === step && t >= APPLY_AT)
        if (stage.classList.contains(styles[`b${k}`]) !== applied) {
          stage.classList.toggle(styles[`b${k}`], applied)
          changed = true
        }
      }
      wrap.classList.toggle(styles.done, done)

      const key = `${step}:${typed}:${current.code.length}`
      if (key !== last.key) {
        const html = renderTyped(tokenize(current.code), typed)
        if (html !== last.html) {
          code.innerHTML = html
          code.scrollTop = code.scrollHeight
        }
        last = { key, html }
      }
      ;[...tabsRef.current.children].forEach((tab) => (tab.dataset.active = String(tab.textContent === current.file)))

      const applied = step > 0 && t >= APPLY_AT
      status.textContent = done
        ? 'Compiled successfully'
        : p < 0.01
          ? 'Loading'
          : applied
            ? 'Applied'
            : `Writing ${current.file}`
      footer.dataset.done = String(done)
      const waiting = p < 0.015
      footer.dataset.waiting = String(p < 0.01)
      hintRef.current.dataset.visible = String(waiting && rect.bottom > top)
      footer.style.setProperty('--progress', clamp(p / DONE_AT).toFixed(3))
      panel.dataset.visible = String(p < 0.985 && rect.bottom > top)

      const nextTarget = !done && step > 0 && current.target && t > 0.12 ? stage.querySelector(current.target) : null
      if (nextTarget !== target) {
        target = nextTarget
        if (target) label.querySelector('em').textContent = current.label
      }
      overlay.dataset.visible = String(Boolean(target))
      if (target) {
        placeOverlay()
        if (changed) {
          settleUntil = performance.now() + 700
          requestAnimationFrame(settle)
        }
      }
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [info])

  return (
    <div id='top' ref={wrapRef} className={styles.build}>
      <div ref={stageRef} className={styles.stage}>
        {children}
      </div>
      <div ref={spacerRef} className={styles.spacer} />

      <div ref={panelRef} className={`${styles.panel} print:hidden`} aria-hidden>
        <div ref={tabsRef} className={styles.tabs}>
          <span>index.html</span>
          <span>styles.css</span>
        </div>
        <pre ref={codeRef} className={styles.code} />
        <div ref={footerRef} className={styles.footer}>
          <b>Loading</b>
          <span className={styles.meter}>
            <i />
          </span>
        </div>
      </div>

      <div ref={hintRef} className={`${styles.hint} print:hidden`} aria-hidden>
        <span className={styles.mouse}>
          <i />
        </span>
        Scroll to build this page
      </div>

      <div ref={overlayRef} className={`${styles.overlay} print:hidden`} aria-hidden>
        <div className={styles.margin} />
        <div className={styles.padding} />
        <div className={styles.content} />
        <div className={styles.label}>
          <em />
          <span />
        </div>
      </div>
    </div>
  )
}
