import '@/styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
