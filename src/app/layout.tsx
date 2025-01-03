import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HealthyLife - Boost Your Health Naturally',
  description: 'Discover our revolutionary health supplement that helps you feel energized, focused, and at your best every day.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex flex-col min-h-screen'>

          <main className='flex-1'>
            {children}
          </main>

        </div>
      </body>
    </html>
  )
}