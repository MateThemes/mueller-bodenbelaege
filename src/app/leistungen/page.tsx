import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: 'Leistungen | Müller Bodenbeläge München - Parkett, Laminat & mehr',
  description: 'Professionelle Bodenbelagsarbeiten in München: Parkett schleifen, Bodenverlegung, Grundreinigung, Treppenrenovierung und Reparaturen. ✓ 30 Jahre Erfahrung ✓ Faire Preise',
}

export default function ServicesPage() {
  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Unsere Leistungen
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Professionelle Bodenleger-Dienstleistungen in München und Umgebung. Mit über 30 Jahren Erfahrung bieten wir Ihnen erstklassige Qualität zu fairen Preisen.
            </p>
          </div>

          {/* Introduction text for SEO */}
          <div className="mx-auto mt-12 max-w-2xl text-center">
            <p className="text-base text-gray-600 dark:text-gray-300">
              Als Ihr erfahrener Partner für Bodenbeläge in München bieten wir ein umfassendes Leistungsspektrum rund um Ihre Böden. Von der fachmännischen Verlegung über das Schleifen von Parkettböden bis hin zu Reinigung und Reparatur - bei uns erhalten Sie alle Dienstleistungen aus einer Hand.
            </p>
          </div>

          {/* Service Cards */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <Link 
                key={service.id} 
                href={service.cta.href}
                className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 transition-transform duration-300 hover:-translate-y-2"
              >
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  width={400}
                  height={500}
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                
                {/* Icon */}
                <div className="mb-4">
                  {React.createElement(service.icon, { className: "h-8 w-8 text-white" })}
                </div>
                
                <h2 className="mt-3 text-2xl font-semibold leading-6 text-white">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-gray-300">
                  {service.description}
                </p>
                
                {/* Features list */}
                <ul className="mt-4 space-y-1">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-300">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>

          {/* Additional content for SEO */}
          <div className="mx-auto mt-24 max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              Warum Müller Bodenbeläge?
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Qualität & Erfahrung</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Mit über 30 Jahren Erfahrung und kontinuierlicher Weiterbildung garantieren wir höchste Qualität bei allen Bodenarbeiten.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Faire Preise</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Wir bieten transparente und faire Preise für alle unsere Leistungen. Vereinbaren Sie einen kostenlosen Beratungstermin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
