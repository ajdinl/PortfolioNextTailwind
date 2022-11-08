import '../styles/globals.css'
import Theme from './Theme'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Theme>{children}</Theme>
      </body>
    </html>
  )
}
