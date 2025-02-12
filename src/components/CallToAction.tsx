import Link from 'next/link'

export function CallToAction() {
  return (
    <section className="py-20 lg:py-32 bg-brand dark:bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-8 text-4xl lg:text-5xl font-bold font-heading text-white dark:text-gray-900">
            Bereit für Ihren neuen Boden?
          </h2>
          <p className="mb-8 text-xl text-white/90 dark:text-gray-900/90">
            Vereinbaren Sie jetzt einen Beratungstermin und lassen Sie sich von unseren Experten beraten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-brand dark:text-brand-light bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white dark:focus:ring-gray-900"
            >
              Kontakt aufnehmen
            </Link>
            <a
              href="tel:+498912345678"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white dark:text-gray-900 border-2 border-white dark:border-gray-900 hover:bg-white/10 dark:hover:bg-gray-900/10 transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white dark:focus:ring-gray-900"
            >
              +49 89 123 45678
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
