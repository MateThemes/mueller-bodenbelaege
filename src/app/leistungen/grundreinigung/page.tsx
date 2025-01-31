import Image from 'next/image'
import Link from 'next/link'

export default function GrundreinigungPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:col-span-2 xl:col-auto">
              Grundreinigung
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0">
              <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
                Eine professionelle Grundreinigung verlängert die Lebensdauer Ihres Bodens und sorgt für ein strahlendes Erscheinungsbild. Wir reinigen alle Arten von Bodenbelägen gründlich und materialschonend.
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
              src="/img/services/grundreinigung-detail.jpg"
              alt="Bodenreinigung"
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
                Unsere Reinigungsleistungen
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Wir bieten professionelle Reinigung für alle Bodenbeläge:
              </p>
              <ul className="mt-8 space-y-4 text-gray-600 dark:text-gray-300">
                <li className="flex gap-x-3">
                  <span className="text-brand">•</span>
                  <span>Grundreinigung von Parkett und Holzböden</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-brand">•</span>
                  <span>Teppich- und Textilbodenreinigung</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-brand">•</span>
                  <span>Steinboden- und Fliesenreinigung</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-brand">•</span>
                  <span>Spezialreinigung für empfindliche Böden</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                Unsere Methoden
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Wir setzen auf moderne Reinigungstechniken:
              </p>
              <ul className="mt-8 space-y-4 text-gray-600 dark:text-gray-300">
                <li className="flex gap-x-3">
                  <span className="text-brand">•</span>
                  <span>Schonende Reinigungsmittel</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-brand">•</span>
                  <span>Professionelle Reinigungsmaschinen</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-brand">•</span>
                  <span>Spezielle Pflegeprodukte</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-brand">•</span>
                  <span>Nachhaltige Versiegelung</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
