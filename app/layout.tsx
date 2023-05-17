import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IoT Project',
  description: 'IoT Group Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uft-8">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
