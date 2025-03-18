import '@/styles/globals.css'

export const metadata = {
  title: "Ajdin Lojic's Portfolio",
  description:
    "Explore Ajdin Lojic's Web Developer Portfolio showcasing expertise in React, Node.js, Next.js, Express, and Ember.js.",
  keywords: 'Ajdin Lojic, Web Developer, Portfolio, React, Node.js, Next.js, Express, Ember.js, JavaScript, HTML, CSS',
  author: 'Ajdin Lojic',
  googleSiteVerification: 'I0bxza9FsmM34Q21YfY31hluNzPw6hJdo7t7rN1-um4',
  icon: '/favicon.ico',
}

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <title>{metadata.title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content={metadata.description} />
        <meta name='keywords' content={metadata.keywords} />
        <meta name='author' content={metadata.author} />
        <meta name='google-site-verification' content={metadata.googleSiteVerification} />
        <link rel='icon' href={metadata.icon} />
      </head>
      <body>{children}</body>
    </html>
  )
}
