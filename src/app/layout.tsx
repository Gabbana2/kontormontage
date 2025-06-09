import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sven Lauridsen Kontormontage',
  description: 'Professionel kontormontage, møbelreparation og ompolstring. Kvalitet, erfaring og god service siden 2000.',
  keywords: 'kontormontage, møbelsnedker, kontormøbler, møbelreparation, ompolstring, Greve',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}