const keywords = [
  'Ruby on Rails',
  'React/Next.js',
  'React/TypeScript',
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express',
  'Nest.js',
  'HTML/CSS',
  'Ruby',
  'SQL',
  'Redis',
  'Sidekiq',
  'ChakraUI',
  'Jest/React Testing Library',
  'Bootstrap',
  'Material UI',
  'Figma',
  'API',
  'Git',
  'Adobe XD',
  'HTML',
  'CSS',
  'Ember',
  'RESTful APIs',
  'RSpec',
  'jQuery',
  'AJAX',
  'Action Cable',
  'ActiveRecord',
  'PostgreSQL',
  'Elasticsearch',
  'sidekiq-cron',
  'AWS',
  'Sentry',
  'Devise',
  'Doorkeeper',
  'Pundit',
  'Minitest',
  'RuboCop',
  'Heroku',
]

const highlightRegex = new RegExp(`(${keywords.join('|').replace(/\./g, '\\.')})`, 'g')

export function highlightText(text) {
  return text.split(highlightRegex).map((part, i) =>
    keywords.includes(part) ? (
      <strong key={i} className='font-bold text-black dark:text-white'>
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  )
}
