import '../styles/globals.css'
import Theme from './Theme'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Ajdin Lojic&apos;s Portfolio</title>
        <meta
          name='description'
          content='Ajdin Lojic Frontend Developer Portfolio React Next Ember'
        />
        <meta
          name='google-site-verification'
          content='I0bxza9FsmM34Q21YfY31hluNzPw6hJdo7t7rN1-um4'
        />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>
        <Theme>{children}</Theme>
      </body>
    </html>
  )
}
