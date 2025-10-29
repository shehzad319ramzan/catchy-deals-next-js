import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Catchy Deals - Smart Amazon Deals',
  description: 'Find the best bargains on Amazon every day',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

