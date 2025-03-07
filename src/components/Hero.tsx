import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section
      className="py-12   md:py-14 bg-white dark:bg-gray-900 overflow-hidden"
      role="banner"
      aria-label="Hauptbanner"
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap xl:items-center -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
            <span className="inline-block py-1 px-3 mb-4 text-sm font-medium text-white dark:text-gray-900 bg-brand dark:bg-brand-light uppercase rounded-full">
              Bodenleger München
            </span>
            <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
              Der perfekte Boden für{' '}
              <span className="text-brand dark:text-brand-light">Ihr Zuhause!</span>
            </h1>
            <p className="mb-8 text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium">
              Professioneller Parkett- und Bodenleger aus München – maßgeschneiderte Lösungen für höchste Qualität, langlebige Böden und perfektes Handwerk.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#about"
                className="inline-flex items-center justify-center px-6 py-3 w-full md:w-auto text-sm font-medium text-white dark:text-gray-900 text-center bg-brand hover:bg-brand-dark dark:bg-brand-light dark:hover:bg-brand transition-colors duration-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand dark:focus:ring-brand-light"
                aria-label="Mehr über unsere Dienstleistungen erfahren"
              >
                Mehr erfahren
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-6 py-3 w-full md:w-auto text-sm font-medium text-gray-900 dark:text-white text-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 dark:focus:ring-gray-700 border border-gray-200 dark:border-gray-700"
                aria-label="Kontaktieren Sie uns"
              >
                Kontakt
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="relative mx-auto md:mr-0 max-w-max">
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="/img/hero/hero-main-parkett.jpg"
                  alt="Hochwertiger Bodenbelag von Mueller Bodenbelaege"
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
