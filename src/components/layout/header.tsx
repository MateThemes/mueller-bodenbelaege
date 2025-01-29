'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import { ThemeToggle } from '../theme-toggle'

const navigation = [
  { name: 'Startseite', href: '/' },
  { name: 'Leistungen', href: '/leistungen' },
  { name: 'Projekte', href: '/projekte' },
  { name: 'Über uns', href: '/ueber-uns' },
  { name: 'Kontakt', href: '/kontakt' },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-white dark:bg-gray-950">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="flex h-24 items-center justify-between py-4">
            <div className="flex-shrink-0 w-[180px]">
              <Link href="/" className="block">
                <Image
                  src="/img/logo/logo.svg"
                  alt="Müller Bodenbeläge Logo"
                  width={180}
                  height={50}
                  className="w-[180px] h-auto block dark:hidden"
                  priority
                />
                <Image
                  src="/img/logo/logo-white.svg"
                  alt="Müller Bodenbeläge Logo"
                  width={180}
                  height={50}
                  className="w-[180px] h-auto hidden dark:block"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex xl:flex-1 xl:justify-center">
              <nav className="flex items-center space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium tracking-wide text-gray-700 hover:text-wood-dark dark:text-gray-200 dark:hover:text-wood-light transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Theme toggle and mobile menu button */}
            <div className="flex items-center w-[180px] justify-end space-x-4">
              <a 
                href="tel:+41715112233" 
                className="hidden xl:flex items-center space-x-2 text-sm font-medium tracking-wide text-gray-700 hover:text-wood-dark dark:text-gray-200 dark:hover:text-wood-light transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>071 511 22 33</span>
              </a>
              <ThemeToggle />
              {/* Mobile menu button */}
              <div className="flex xl:hidden">
                <button
                  type="button"
                  className="ml-4 inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-wood-dark dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-wood-light focus:outline-none"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <span className="sr-only">Open main menu</span>
                  {isMobileMenuOpen ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div 
            className={`fixed inset-0 z-50 transform transition-all duration-300 ease-in-out xl:hidden ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Backdrop */}
            <div 
              className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
                isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu content */}
            <div className={`absolute right-0 h-full w-[300px] bg-white dark:bg-gray-900 shadow-xl`}>
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b dark:border-gray-800">
                  <span className="text-lg font-medium text-gray-900 dark:text-white">Menu</span>
                  <button
                    type="button"
                    className="rounded-lg p-2.5 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Navigation links */}
                <nav className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block w-full rounded-lg px-4 py-3 text-base font-medium tracking-wide text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </nav>

                {/* Footer with contact info */}
                <div className="border-t dark:border-gray-800 p-4">
                  <a 
                    href="tel:+41715112233"
                    className="flex items-center space-x-2 text-sm font-medium tracking-wide text-gray-700 hover:text-wood-dark dark:text-gray-200 dark:hover:text-wood-light transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>071 511 22 33</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
