import Link from 'next/link'

const products = [
  {
    name: 'Massivholzparkett',
    description: 'Zeitlose Eleganz und natürliche Schönheit für Ihr Zuhause',
    href: '/produkte/massivholzparkett',
  },
  {
    name: 'Fertigparkett',
    description: 'Die praktische Alternative für schnelle Installation',
    href: '/produkte/fertigparkett',
  },
  {
    name: 'Vinyl',
    description: 'Robust und pflegeleicht für jeden Raum',
    href: '/produkte/vinyl',
  },
  {
    name: 'Teppichfliesen',
    description: 'Flexible Gestaltungsmöglichkeiten für Büro und Wohnraum',
    href: '/produkte/teppichfliesen',
  },
  {
    name: 'Linoleum',
    description: 'Nachhaltig und langlebig aus natürlichen Materialien',
    href: '/produkte/linoleum',
  },
  {
    name: 'Kautschuk',
    description: 'Extrem belastbar und ideal für stark frequentierte Bereiche',
    href: '/produkte/kautschuk',
  },
  {
    name: 'Kork',
    description: 'Natürlich warm und schalldämmend',
    href: '/produkte/kork',
  },
  {
    name: 'PVC',
    description: 'Vielseitig einsetzbar und kostengünstig',
    href: '/produkte/pvc',
  },
  {
    name: 'Teppichboden',
    description: 'Behaglichkeit und Komfort für Ihre Räume',
    href: '/produkte/teppichboden',
  },
  {
    name: 'Designvinyl',
    description: 'Moderne Optik mit praktischen Vorteilen',
    href: '/produkte/designvinyl',
  },
]

export default function ProductsPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Unsere Produkte
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
            Entdecken Sie unsere vielfältige Auswahl an hochwertigen Bodenbelägen
          </p>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group relative block overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 transition-all hover:border-brand dark:hover:border-brand-light"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-brand dark:group-hover:text-brand-light">
                  {product.name}
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  {product.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
