import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Müller Bodenbeläge - Ihr Experte für Parkett und Bodenbeläge in München',
  description: 'Professionelle Verlegung von Parkett und Bodenbelägen in München. Qualität und Handwerkskunst seit Jahren.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Check if the current page is an error page
  const isErrorPage = children?.toString().includes('Error') || children?.toString().includes('NotFound')

  return (
    <html lang="de" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-white dark:bg-gray-950 font-sans">
        <ThemeProvider>
          {!isErrorPage && <Header />}
          <main className={`${!isErrorPage ? 'pt-6 mb-16' : ''}`}>
            {children}
          </main>
          {!isErrorPage && <Footer />}
        </ThemeProvider>
      </body>
    </html>
  )
}
