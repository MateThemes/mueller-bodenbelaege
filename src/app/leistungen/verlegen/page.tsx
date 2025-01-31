import Image from 'next/image'
import Link from 'next/link'

export default function VerlegenPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:col-span-2 xl:col-auto">
              Professionelle Bodenverlegung
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0">
              <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
                Von Parkett über Laminat bis hin zu Vinyl - wir verlegen Ihren neuen Boden fachgerecht und präzise. Mit unserer Erfahrung garantieren wir eine perfekte Verarbeitung und lange Haltbarkeit.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/kontakt"
                  className="rounded-md bg-brand px-3.5 py-2.5 text-sm font-semibold text-white dark:text-gray-900 shadow-sm hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  Kostenlos beraten lassen
                </Link>
              </div>
            </div>

            <Image
              src="/img/services/verlegen-detail.jpg"
              alt="Bodenverlegung"
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              width={800}
              height={667}
            />
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                Unsere Verlegeleistungen
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Wir verlegen verschiedene Arten von Bodenbelägen:
              </p>
              <ul className="mt-8 space-y-4 text-gray-600 dark:text-gray-300">
                <li className="flex gap-x-3">
                  <span className="text-brand">•</span>
                  <span>Parkett (Massiv- und Mehrschichtparkett)</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-brand">•</span>
                  <span>Laminat und Vinyl</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-brand">•</span>
                  <span>Kork und Linoleum</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-brand">•</span>
                  <span>Teppichböden</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                Unser Service
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Von der Beratung bis zur Verlegung - alles aus einer Hand:
              </p>
              <ul className="mt-8 space-y-4 text-gray-600 dark:text-gray-300">
                <li className="flex gap-x-3">
                  <span className="text-brand">•</span>
                  <span>Fachkundige Beratung zur Materialauswahl</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-brand">•</span>
                  <span>Untergrundvorbereitung und -sanierung</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-brand">•</span>
                  <span>Professionelle Verlegung</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-brand">•</span>
                  <span>Nachbehandlung und Pflege</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
