import type { Metadata } from 'next'
import { Nunito_Sans as Nunito } from 'next/font/google'
import './globals.css'
import { cookies } from 'next/headers'

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })

export const metadata: Metadata = {
  title: {
    template: '%s | daily diet',
    default: 'daily diet',
  },
}

export default function RootLayout({
  children,
  signin,
  home,
}: {
  children: React.ReactNode
  signin: React.ReactNode
  home: React.ReactNode
}) {
  const cookieStore = cookies()
  const sessionId = cookieStore.get('sessionId')

  return (
    <html className={nunito.variable} lang="pt">
      <body className="bg-gray-7 text-gray-2 leading-[130%]">
        <>{sessionId ? home : signin}</>
        {children}
      </body>
    </html>
  )
}
