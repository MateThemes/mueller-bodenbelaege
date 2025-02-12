import Image from 'next/image'
import Link from 'next/link'

export function Products() {
  const products = [
    {
      title: 'Parkett & Holzböden',
      description: 'Zeitlose Eleganz und natürliche Wärme für Ihr Zuhause',
      image: '/img/products/parkett.jpg',
      link: '/produkte/parkett'
    },
    {
      title: 'Designvinyl',
      description: 'Moderne Optik mit höchster Strapazierfähigkeit',
      image: '/img/products/vinyl.jpg',
      link: '/produkte/designvinyl'
    },
    {
      title: 'Teppichboden',
      description: 'Behaglichkeit und Komfort in vielen Designs',
      image: '/img/products/teppich.jpg',
      link: '/produkte/teppichboden'
    },
    {
      title: 'PVC-Beläge',
      description: 'Robust und pflegeleicht für jeden Einsatzbereich',
      image: '/img/products/pvc.jpg',
      link: '/produkte/pvc'
    },
    {
      title: 'Korkböden',
      description: 'Nachhaltig und fußwarm mit natürlicher Dämpfung',
      image: '/img/products/kork.jpg',
      link: '/produkte/kork'
    },
    {
      title: 'Kautschuk',
      description: 'Extrem belastbar für gewerbliche Nutzung',
      image: '/img/products/kautschuk.jpg',
      link: '/produkte/kautschuk'
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block mb-4 text-sm text-brand dark:text-brand-light font-medium uppercase tracking-widest">
            Unsere Produkte
          </span>
          <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading text-gray-900 dark:text-white">
            Hochwertige Bodenbeläge
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Entdecken Sie unsere große Auswahl an Bodenbelägen für jeden Geschmack und Einsatzbereich.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link
              key={index}
              href={product.link}
              className="group block overflow-hidden rounded-3xl bg-white dark:bg-gray-700"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white group-hover:text-brand dark:group-hover:text-brand-light transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/produkte"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white dark:text-gray-900 bg-brand hover:bg-brand-dark dark:bg-brand-light dark:hover:bg-brand transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
          >
            Alle Produkte ansehen
          </Link>
        </div>
      </div>
    </section>
  )
}
