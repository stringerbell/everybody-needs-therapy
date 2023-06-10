import './globals.css'
import { Baskervville } from 'next/font/google'

const baskervville = Baskervville({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-baskervville',
  weight: "400",
})

export const metadata = {
  title: 'Everybody Needs Therapy',
  description: 'Everybody Needs Therapy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={baskervville.className}>{children}</body>
    </html>
  )
}
