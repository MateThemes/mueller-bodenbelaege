'use client'

import { useState, useEffect, Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, Transition } from '@headlessui/react'

const services = [
  {
    name: 'Parkett schleifen',
    description: 'Professionelle Aufarbeitung Ihrer Parkettböden',
    href: '/leistungen/parkett-schleifen',
  },
  {
    name: 'Verlegen',
    description: 'Fachgerechte Verlegung aller Bodenbeläge',
    href: '/leistungen/verlegen',
  },
  {
    name: 'Grundreinigung',
    description: 'Gründliche Reinigung Ihrer Bodenbeläge',
    href: '/leistungen/grundreinigung',
  },
  {
    name: 'Treppen renovieren',
    description: 'Professionelle Treppenrenovierung',
    href: '/leistungen/treppen-renovieren',
  },
  {
    name: 'Reparaturen',
    description: 'Schnelle & fachmännische Reparaturen',
    href: '/leistungen/reparaturen',
  },
]

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 0)
      }
      window.addEventListener('scroll', handleScroll)
      handleScroll()
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsMobileServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 h-20">
        <nav className="container mx-auto xl:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex-shrink-0">
              <div className="w-[220px] h-12" />
            </div>
          </div>
        </nav>
      </header>
    )
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto xl:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/img/logo/mueller-bodenbelaege.svg"
              alt="Müller Bodenbeläge Logo"
              width={220}
              height={61}
              className="w-[220px] h-[61px] dark:invert"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex xl:items-center xl:justify-center flex-1 xl:px-4">
            <div className="flex items-center space-x-8">
              <Link
                href="/"
                className={`text-base font-medium transition-colors ${
                  pathname === '/'
                    ? 'text-brand'
                    : 'text-gray-700 hover:text-brand dark:text-gray-200 dark:hover:text-brand-light'
                }`}
              >
                Home
              </Link>
              <div className="relative group">
                <button
                  className="flex items-center gap-1 px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  onMouseEnter={() => setIsServicesOpen(true)}
                >
                  <span className={`text-base font-medium transition-colors ${
                    pathname === '/leistungen'
                      ? 'text-brand'
                      : 'text-gray-700 hover:text-brand dark:text-gray-200 dark:hover:text-brand-light'
                  }`}>
                    Leistungen
                  </span>
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
                <div className="absolute -bottom-2 left-0 right-0 h-2 bg-transparent" />
                <div
                  className={`absolute left-0 w-96 p-2 mt-2 origin-top-left bg-white dark:bg-gray-900 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition transform
                    ${isServicesOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                  `}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="relative grid gap-6 bg-white dark:bg-gray-900 px-6 py-8">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        onClick={() => setIsServicesOpen(false)}
                        className="flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <div>
                          <p className="text-base font-medium text-gray-900 dark:text-white">
                            {service.name}
                          </p>
                          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link
                href="/uber-uns"
                className={`text-base font-medium transition-colors ${
                  pathname === '/uber-uns'
                    ? 'text-brand'
                    : 'text-gray-700 hover:text-brand dark:text-gray-200 dark:hover:text-brand-light'
                }`}
              >
                Über uns
              </Link>
              <Link
                href="/kontakt"
                className={`text-base font-medium transition-colors ${
                  pathname === '/kontakt'
                    ? 'text-brand'
                    : 'text-gray-700 hover:text-brand dark:text-gray-200 dark:hover:text-brand-light'
                }`}
              >
                Kontakt
              </Link>
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden xl:flex xl:items-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full border-2 border-brand bg-transparent px-6 py-3 text-base font-medium text-brand transition-colors hover:bg-brand hover:text-white focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:border-brand-light dark:text-brand-light dark:hover:bg-brand-light dark:hover:text-gray-900"
            >
              Kostenlos beraten lassen
            </Link>
          </div>

          {/* Mobile menu */}
          <div className="xl:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <Transition.Root show={isMobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 xl:hidden" onClose={setIsMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300"
              enterFrom="-translate-y-full"
              enterTo="translate-y-0"
              leave="transform transition ease-in-out duration-300"
              leaveFrom="translate-y-0"
              leaveTo="-translate-y-full"
            >
              <Dialog.Panel className="fixed inset-0 w-full bg-white dark:bg-gray-950">
                {/* Header with close button */}
                <div className="absolute top-0 right-0 p-4">
                  <button
                    type="button"
                    className="relative z-10 rounded-md p-2.5 text-gray-900 dark:text-white bg-white dark:bg-gray-900 shadow-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Scrollable navigation area */}
                <div className="h-full flex flex-col">
                  <div className="flex-1 overflow-y-auto px-6 py-20">
                    <nav className="flex flex-col space-y-6">
                      <Link
                        href="/"
                        className="text-2xl font-medium text-gray-900 hover:text-brand dark:text-white dark:hover:text-brand-light"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Home
                      </Link>
                      <div className="relative">
                        <button
                          className="flex w-full items-center justify-between text-2xl font-medium text-gray-900 dark:text-white"
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        >
                          <span>Leistungen</span>
                          <ChevronDownIcon
                            className={`ml-2 h-6 w-6 transition-transform duration-200 ${
                              isMobileServicesOpen ? 'rotate-180' : ''
                            }`}
                            aria-hidden="true"
                          />
                        </button>

                        <div
                          className={`mt-4 transition-all duration-300 ease-in-out ${
                            isMobileServicesOpen
                              ? 'block opacity-100'
                              : 'hidden opacity-0'
                          }`}
                        >
                          <div className="space-y-4 pl-4">
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="block text-xl text-gray-700 hover:text-brand dark:text-gray-200 dark:hover:text-brand-light"
                                onClick={() => {
                                  setIsMobileServicesOpen(false)
                                  setIsMobileMenuOpen(false)
                                }}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>

                      <Link
                        href="/uber-uns"
                        className="text-2xl font-medium text-gray-900 hover:text-brand dark:text-white dark:hover:text-brand-light"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Über uns
                      </Link>
                      <Link
                        href="/kontakt"
                        className="text-2xl font-medium text-gray-900 hover:text-brand dark:text-white dark:hover:text-brand-light"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Kontakt
                      </Link>
                    </nav>
                  </div>

                  {/* Fixed bottom section */}
                  <div className="flex-shrink-0 border-t border-gray-200 dark:border-gray-800">
                    <div className="px-6 py-8">
                      <Link
                        href="/kontakt"
                        className="block w-full rounded-full border-2 border-brand bg-transparent px-8 py-4 text-center text-xl font-medium text-brand transition-colors hover:bg-brand hover:text-white dark:border-brand-light dark:text-brand-light dark:hover:bg-brand-light dark:hover:text-gray-900"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Kostenlos beraten lassen
                      </Link>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </header>
  )
}
