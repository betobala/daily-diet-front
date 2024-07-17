import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'

const nunito = Nunito_Sans({ subsets: ['latin'], variable: '--font-nunito' })

export const metadata: Metadata = {
  title: {
    template: '%s | daily diet',
    default: 'daily diet',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={nunito.variable} lang="pt">
      <body className="bg-gray-7 text-gray-2 leading-[130%]">{children}</body>
    </html>
  )
}
