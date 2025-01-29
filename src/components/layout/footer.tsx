'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

const footerNavigation = {
  main: [
    { name: 'Startseite', href: '/' },
    { name: 'Leistungen', href: '/leistungen' },
    { name: 'Projekte', href: '/projekte' },
    { name: 'Über uns', href: '/ueber-uns' },
    { name: 'Kontakt', href: '/kontakt' },
  ],
  legal: [
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutz', href: '/datenschutz' },
  ],
}

export function Footer({ className = '' }: { className?: string }) {
  return (
    <footer className={`bg-gray-50 dark:bg-gray-900 py-12 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-wood-dark dark:text-wood-light">
              Müller Bodenbeläge
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Ihr Experte für hochwertige Bodenbeläge in München und Umgebung.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+498912345678"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-wood-dark dark:hover:text-wood-light flex items-center"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  +49 (89) 123 45678
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@mueller-bodenbelaege.de"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-wood-dark dark:hover:text-wood-light flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  info@mueller-bodenbelaege.de
                </a>
              </li>
              <li>
                <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>Musterstraße 123<br />80123 München</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerNavigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-wood-dark dark:hover:text-wood-light"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Öffnungszeiten
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>Mo - Fr: 08:00 - 17:00</li>
              <li>Sa: Nach Vereinbarung</li>
              <li>So: Geschlossen</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {new Date().getFullYear()} Müller Bodenbeläge. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6">
              {footerNavigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs text-gray-600 dark:text-gray-400 hover:text-wood-dark dark:hover:text-wood-light"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
