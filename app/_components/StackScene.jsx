import styles from './Journey.module.css'

// Decorative 3D model of a web app. Journey drives it through CSS variables:
// --tilt, --s (how many layers have separated), --on per layer and --in per satellite group.

const routes = [
  ['GET', '/campaigns'],
  ['POST', '/campaigns/:id/publish'],
  ['GET', '/customers'],
  ['PATCH', '/orders/:id'],
  ['POST', '/webhooks/:provider'],
]

const jobs = [
  ['SyncOrdersJob', 0.82],
  ['SyncCustomersJob', 0.56],
  ['PublishCampaignJob', 1],
  ['ImportProductsJob', 0.34],
]

const rows = [
  ['48210', 'P21', 'synced'],
  ['48211', 'NetSuite', 'synced'],
  ['48212', 'Shopify', 'synced'],
  ['48213', 'SQL', 'queued'],
]

function Interface() {
  return (
    <div className={styles.ui}>
      <div className={styles.uiBar}>
        <i />
        <i />
        <i />
        <span>app.example.com</span>
      </div>
      <div className={styles.uiBody}>
        <div className={styles.uiSide}>
          <b />
          <b />
          <b />
          <b />
        </div>
        <div className={styles.uiMain}>
          <b className={styles.uiTitle} />
          <div className={styles.uiCards}>
            <span>24</span>
            <span>7</span>
            <span>200+</span>
          </div>
          <b className={styles.uiLine} />
          <b className={styles.uiLineShort} />
          <div className={styles.uiChart}>
            {[38, 52, 45, 70, 62, 84, 76, 95].map((height, index) => (
              <i key={index} style={{ height: `${height}%` }} />
            ))}
          </div>
          <span className={styles.uiButton}>Save</span>
        </div>
      </div>
      <span className={styles.cursor} />
    </div>
  )
}

function Components() {
  return (
    <div className={styles.components}>
      {['<Header />', '<Inbox />', '<Thread />', '<Composer />', '<Table />', '<Modal />'].map((name) => (
        <span key={name}>{name}</span>
      ))}
    </div>
  )
}

function Api() {
  return (
    <ul className={styles.api}>
      {routes.map(([method, route]) => (
        <li key={method + route}>
          <span data-method={method}>{method}</span>
          {route}
        </li>
      ))}
    </ul>
  )
}

function Jobs() {
  return (
    <ul className={styles.jobs}>
      {jobs.map(([name, done], index) => (
        <li key={name}>
          <span>{name}</span>
          <span className={styles.bar} style={{ '--done': done, '--d': `${index * -0.7}s` }} />
        </li>
      ))}
    </ul>
  )
}

function Data() {
  return (
    <table className={styles.data}>
      <thead>
        <tr>
          <th>id</th>
          <th>source</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([id, source, status]) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{source}</td>
            <td data-status={status}>{status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function Satellites({ names, side }) {
  return (
    <div className={styles.satellites} data-side={side}>
      {names.map((name) => (
        <span key={name} className={styles.satellite}>
          {name}
        </span>
      ))}
    </div>
  )
}

// Listed bottom to top so the Interface plane paints last while the stack is collapsed.
export const layers = [
  { key: 'data', label: 'PostgreSQL', Face: Data, satellites: { side: 'bottom', names: ['Epicor P21', 'NetSuite', 'Shopify', 'SQL DB'] } },
  { key: 'jobs', label: 'Sidekiq', Face: Jobs },
  { key: 'api', label: 'Rails API', Face: Api, satellites: { side: 'left', names: ['Meta', 'Google Ads', 'Snapchat'] } },
  { key: 'components', label: 'Next.js', Face: Components },
  { key: 'interface', label: 'Interface', Face: Interface },
]

export default function StackScene({ rigRef, layerRefs }) {
  return (
    <div className={styles.scene} aria-hidden>
      <div ref={rigRef} className={styles.rig}>
        <div className={styles.floor} />
        {layers.map(({ key, label, Face, satellites }, order) => {
          const depth = layers.length - 1 - order
          return (
            <div
              key={key}
              ref={(node) => (layerRefs.current[depth] = node)}
              className={styles.layer}
              style={{ '--i': depth }}
              data-layer={key}
            >
              {depth > 0 && (
                <>
                  <span className={styles.wallSide}>
                    <i />
                  </span>
                  <span className={styles.wallFront}>
                    <i />
                  </span>
                </>
              )}
              <div className={styles.face}>
                <span className={styles.tag}>{label}</span>
                <Face />
              </div>
              {satellites && <Satellites {...satellites} />}
            </div>
          )
        })}
      </div>
    </div>
  )
}
