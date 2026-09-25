const keywords = [
  'Ruby on Rails',
  'React/Next.js',
  'React/TypeScript',
  'React Testing Library',
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'NestJS',
  'Express',
  'PostgreSQL',
  'Elasticsearch',
  'Redis',
  'Sidekiq',
  'sidekiq-cron',
  'Action Cable',
  'ActiveRecord',
  'RESTful APIs',
  'Chakra UI',
  'Material UI',
  'Bootstrap',
  'Ember',
  'Figma',
  'AWS',
  'Heroku',
  'Epicor P21',
  'NetSuite',
  'Shopify',
  'Twilio',
  'Sentry',
  'Devise',
  'Doorkeeper',
  'OAuth 2',
  'Pundit',
  'RSpec',
  'Minitest',
  'Jest',
  'RuboCop',
  'CI/CD',
  'SSR',
  'SSG',
]

const escape = (word) => word.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&')

const highlightRegex = new RegExp(
  `(${[...keywords].sort((a, b) => b.length - a.length).map(escape).join('|')})`,
  'g'
)

export function highlightText(text) {
  return text.split(highlightRegex).map((part, i) =>
    keywords.includes(part) ? (
      <strong key={i} className='font-medium text-ink'>
        {part}
      </strong>
    ) : (
      part
    )
  )
}
