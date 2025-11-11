import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Catchy Deals - Die besten Amazon-Schnäppchen',
  description: 'Finden Sie täglich die besten Schnäppchen auf Amazon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}

