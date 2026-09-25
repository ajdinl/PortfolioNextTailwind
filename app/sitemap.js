import db from '@/db.json'

export default function sitemap() {
  return [
    {
      url: db.info.website,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${db.info.website}/cv`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
