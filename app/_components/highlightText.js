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
]

const highlightRegex = new RegExp(`(${keywords.join('|').replace(/\./g, '\\.')})`, 'g')

export function highlightText(text) {
  return text.split(highlightRegex).map((part, i) =>
    keywords.includes(part) ? (
      <strong key={i} className='font-bold'>
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  )
}
