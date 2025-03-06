import React from 'react'
import Link from 'next/link'
import { services } from '@/data/services'

export function Services() {
  // Take the first 4 services for the main page
  const mainServices = services.slice(0, 4)

  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block mb-4 text-sm text-brand dark:text-brand-light font-medium uppercase tracking-widest">
            Unsere Leistungen
          </span>
          <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading text-gray-900 dark:text-white">
            Professionelle Bodenverlegung
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Von der Beratung bis zur Fertigstellung – wir begleiten Sie durch den gesamten Prozess und garantieren höchste Qualität bei der Umsetzung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mainServices.map((service) => (
            <Link
              key={service.id}
              href={service.cta.href}
              className="group relative overflow-hidden rounded-3xl h-[400px]"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.imageUrl})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              
              {/* Content */}
              <div className="relative h-full p-8 flex flex-col">
                <div className="mb-auto">
                  <div className="mb-6 inline-block p-4 rounded-2xl bg-white/10 text-white backdrop-blur-sm">
                    {React.createElement(service.icon, { className: "h-8 w-8" })}
                  </div>
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-200">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/leistungen"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white dark:text-gray-900 bg-brand hover:bg-brand-dark dark:bg-brand-light dark:hover:bg-brand transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
          >
            Alle Leistungen entdecken
          </Link>
        </div>
      </div>
    </section>
  )
}
