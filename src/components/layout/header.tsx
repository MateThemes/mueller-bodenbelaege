'use client'

import { useState, useEffect, useRef, Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, Transition } from '@headlessui/react'
import { ThemeToggle } from '../theme-toggle'

const services = [
  {
    name: 'Beratung & Planung',
    description: 'Professionelle Beratung für Ihr Bodenprojekt',
    href: '/leistungen/beratung',
  },
  {
    name: 'Bodenverlegung',
    description: 'Fachgerechte Installation aller Bodenbeläge',
    href: '/leistungen/verlegen',
  },
  {
    name: 'Renovierung & Sanierung',
    description: 'Professionelle Aufarbeitung bestehender Böden',
    href: '/leistungen/parkett-schleifen',
  },
  {
    name: 'Grundreinigung & Pflege',
    description: 'Professionelle Reinigung und Pflege',
    href: '/leistungen/grundreinigung',
  },
  {
    name: 'Treppenrenovierung',
    description: 'Renovierung und Aufarbeitung von Treppen',
    href: '/leistungen/treppenrenovierung',
  },
  {
    name: 'Aufmaß & Inspektion',
    description: 'Präzise Vermessung und Begutachtung',
    href: '/leistungen/aufmass-inspektion',
  },
  {
    name: 'Altboden-Entsorgung',
    description: 'Fachgerechte Entfernung alter Bodenbeläge',
    href: '/leistungen/altboden-entsorgung',
  },
  {
    name: 'Reparaturen',
    description: 'Professionelle Reparatur aller Bodenbeläge',
    href: '/leistungen/reparaturen',
  },
  {
    name: 'Raumgestaltung',
    description: 'Ganzheitliche Gestaltungsberatung',
    href: '/leistungen/raumgestaltung',
  },
]

const products = {
  holz: {
    name: 'Holzböden',
    items: [
      {
        name: 'Massivholzparkett',
        description: 'Zeitlose Eleganz und natürliche Schönheit',
        href: '/produkte/massivholzparkett',
      },
      {
        name: 'Fertigparkett',
        description: 'Die praktische Alternative für schnelle Installation',
        href: '/produkte/fertigparkett',
      },
    ],
  },
  textil: {
    name: 'Textilböden',
    items: [
      {
        name: 'Teppichboden',
        description: 'Behaglichkeit und Komfort',
        href: '/produkte/teppichboden',
      },
      {
        name: 'Teppichfliesen',
        description: 'Flexible Gestaltungsmöglichkeiten',
        href: '/produkte/teppichfliesen',
      },
    ],
  },
  elastisch: {
    name: 'Elastische Böden',
    items: [
      {
        name: 'Vinyl',
        description: 'Robust und pflegeleicht für jeden Raum',
        href: '/produkte/vinyl',
      },
      {
        name: 'Designvinyl',
        description: 'Moderne Optik mit praktischen Vorteilen',
        href: '/produkte/designvinyl',
      },
      {
        name: 'PVC',
        description: 'Vielseitig einsetzbar und kostengünstig',
        href: '/produkte/pvc',
      },
      {
        name: 'Linoleum',
        description: 'Nachhaltig und langlebig',
        href: '/produkte/linoleum',
      },
      {
        name: 'Kautschuk',
        description: 'Extrem belastbar für stark frequentierte Bereiche',
        href: '/produkte/kautschuk',
      },
    ],
  },
  natur: {
    name: 'Naturböden',
    items: [
      {
        name: 'Kork',
        description: 'Natürlich warm und schalldämmend',
        href: '/produkte/kork',
      },
    ],
  },
}

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false)
  const pathname = usePathname()
  const productsRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const servicesButtonRef = useRef<HTMLButtonElement>(null)
  const productsButtonRef = useRef<HTMLButtonElement>(null)
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null)

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
    setIsMobileProductsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false)
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 h-20">
        <nav className="container mx-auto">
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
      role="banner"
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="-ml-4">
              <Image
                src="/img/logo/mueller-bodenbelaege.svg"
                alt="Müller Bodenbeläge Logo"
                width={220}
                height={61}
                className="w-[220px] h-[61px] dark:brightness-0 dark:invert"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <div className="flex items-center justify-center w-full space-x-6">
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

              <div className="relative" ref={servicesRef}>
                <button
                  className="flex items-center gap-1 text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  onClick={() => {
                    setIsServicesOpen(!isServicesOpen)
                    setIsProductsOpen(false)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                      setIsServicesOpen(false)
                    }
                  }}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                  aria-controls="services-menu"
                  aria-label="Leistungen Menü"
                >
                  <span>Leistungen</span>
                  <ChevronDownIcon
                    className={`h-5 w-5 transform transition-transform duration-200 ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Mega menu overlay */}
                {isServicesOpen && (
                  <div 
                    id="services-menu"
                    className="absolute left-1/2 z-50 mt-2 w-screen max-w-2xl -translate-x-1/2 transform px-2"
                    role="menu"
                  >
                    <div className="mx-auto overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-xl ring-1 ring-black/5 dark:ring-white/5">
                      <div className="relative">
                        {/* Header */}
                        <div className="bg-gray-50 dark:bg-gray-800/50 px-5 py-3 sm:px-6">
                          <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                            Unsere Leistungen
                          </h3>
                        </div>
                        {/* Grid */}
                        <div className="relative grid grid-cols-2 gap-x-6 gap-y-4 p-6">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="group/item block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-800"
                              onClick={() => setIsServicesOpen(false)}
                              role="menuitem"
                              aria-label={`${service.name} - ${service.description}`}
                            >
                              <p className="text-base font-medium text-gray-900 dark:text-white group-hover/item:text-brand dark:group-hover/item:text-brand-light">
                                {service.name}
                              </p>
                              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                {service.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                        {/* Footer */}
                        <div className="bg-gray-50 dark:bg-gray-800/50 px-5 py-3 flex items-center justify-between">
                          <Link
                            href="/leistungen"
                            className="text-sm font-medium text-brand dark:text-brand-light hover:text-brand/80 dark:hover:text-brand-light/80"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            Alle Leistungen ansehen →
                          </Link>
                          <Link
                            href="/kontakt"
                            className="inline-flex items-center rounded-full border-2 border-brand bg-transparent px-4 py-1 text-sm font-medium text-brand transition-colors hover:bg-brand hover:text-white dark:border-brand-light dark:text-brand-light dark:hover:bg-brand-light dark:hover:text-gray-900"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            Kontakt
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative" ref={productsRef}>
                <button
                  className="flex items-center gap-1 text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  onClick={() => {
                    setIsProductsOpen(!isProductsOpen)
                    setIsServicesOpen(false)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                      setIsProductsOpen(false)
                    }
                  }}
                  aria-expanded={isProductsOpen}
                  aria-haspopup="true"
                  aria-controls="products-menu"
                  aria-label="Produkte Menü"
                >
                  <span>Produkte</span>
                  <ChevronDownIcon
                    className={`h-5 w-5 transform transition-transform duration-200 ${
                      isProductsOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Mega menu overlay */}
                {isProductsOpen && (
                  <div 
                    id="products-menu"
                    className="absolute left-1/2 z-50 mt-2 w-screen max-w-4xl -translate-x-1/2 transform px-2"
                    role="menu"
                  >
                    <div className="mx-auto overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-xl ring-1 ring-black/5 dark:ring-white/5">
                      <div className="relative">
                        {/* Header */}
                        <div className="bg-gray-50 dark:bg-gray-800/50 px-5 py-3 sm:px-6">
                          <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                            Unsere Bodenbeläge
                          </h3>
                        </div>
                        {/* Grid */}
                        <div className="relative grid grid-cols-4 gap-x-6 gap-y-4 p-6">
                          {Object.entries(products).map(([key, category]) => (
                            <div key={key}>
                              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                                {category.name}
                              </h3>
                              <ul className="space-y-2">
                                {category.items.map((item) => (
                                  <li key={item.name}>
                                    <Link
                                      href={item.href}
                                      className="group/item block rounded-lg py-1 px-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                                      onClick={() => setIsProductsOpen(false)}
                                      role="menuitem"
                                      aria-label={`${item.name} - ${item.description}`}
                                    >
                                      <p className="text-sm font-medium text-gray-900 dark:text-white group-hover/item:text-brand dark:group-hover/item:text-brand-light">
                                        {item.name}
                                      </p>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        {/* Footer */}
                        <div className="bg-gray-50 dark:bg-gray-800/50 px-5 py-3 flex items-center justify-between">
                          <Link
                            href="/produkte"
                            className="text-sm font-medium text-brand dark:text-brand-light hover:text-brand/80 dark:hover:text-brand-light/80"
                            onClick={() => setIsProductsOpen(false)}
                          >
                            Alle Produkte ansehen →
                          </Link>
                          <Link
                            href="/kontakt"
                            className="inline-flex items-center rounded-full border-2 border-brand bg-transparent px-4 py-1 text-sm font-medium text-brand transition-colors hover:bg-brand hover:text-white dark:border-brand-light dark:text-brand-light dark:hover:bg-brand-light dark:hover:text-gray-900"
                            onClick={() => setIsProductsOpen(false)}
                          >
                            Kontakt
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/projekte"
                className={`text-base font-medium transition-colors ${
                  pathname === '/projekte'
                    ? 'text-brand'
                    : 'text-gray-700 hover:text-brand dark:text-gray-200 dark:hover:text-brand-light'
                }`}
              >
                Projekte
              </Link>

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
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <ThemeToggle />
            <Link
              href="/kontakt"
              className="rounded-full border-2 border-brand bg-transparent px-8 py-4 text-base font-medium text-brand transition-colors hover:bg-brand hover:text-white dark:border-brand-light dark:text-brand-light dark:hover:bg-brand-light dark:hover:text-gray-900"
            >
              Kostenlos beraten lassen
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-4">
            <ThemeToggle />
            <button
              type="button"
              ref={mobileMenuButtonRef}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
              onClick={() => setIsMobileMenuOpen(true)}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  setIsMobileMenuOpen(false)
                }
              }}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Hauptmenü öffnen"
            >
              <span className="sr-only">Hauptmenü öffnen</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <Transition.Root show={isMobileMenuOpen} as={Fragment}>
        <Dialog 
          as="div" 
          className="relative z-50 lg:hidden" 
          onClose={setIsMobileMenuOpen}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobiles Hauptmenü"
        >
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
                    aria-label="Hauptmenü schließen"
                  >
                    <span className="sr-only">Hauptmenü schließen</span>
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
                          <div id="mobile-services-menu" className="space-y-4 pl-4" role="menu" aria-label="Mobile Leistungen Navigation">
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

                      <div className="relative">
                        <button
                          className="flex w-full items-center justify-between text-2xl font-medium text-gray-900 dark:text-white"
                          onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                        >
                          <span>Produkte</span>
                          <ChevronDownIcon
                            className={`ml-2 h-6 w-6 transition-transform duration-200 ${
                              isMobileProductsOpen ? 'rotate-180' : ''
                            }`}
                            aria-hidden="true"
                          />
                        </button>

                        <div
                          className={`mt-4 transition-all duration-300 ease-in-out ${
                            isMobileProductsOpen
                              ? 'block opacity-100'
                              : 'hidden opacity-0'
                          }`}
                        >
                          <div id="mobile-products-menu" className="pl-4" role="menu" aria-label="Mobile Produkte Navigation">
                            {Object.entries(products).map(([key, category]) => (
                              <div key={key} className="mb-4">
                                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                  {category.name}
                                </h3>
                                <ul className="space-y-2">
                                  {category.items.map((item) => (
                                    <li key={item.name}>
                                      <Link
                                        href={item.href}
                                        className="block text-lg text-gray-700 hover:text-brand dark:text-gray-200 dark:hover:text-brand-light"
                                        onClick={() => {
                                          setIsMobileProductsOpen(false)
                                          setIsMobileMenuOpen(false)
                                        }}
                                      >
                                        {item.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <Link
                        href="/projekte"
                        className="text-2xl font-medium text-gray-900 hover:text-brand dark:text-white dark:hover:text-brand-light"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Projekte
                      </Link>

                      <Link
                        href="/uber-uns"
                        className="text-2xl font-medium text-gray-900 hover:text-brand dark:text-white dark:hover:text-brand-light"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Über uns
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
