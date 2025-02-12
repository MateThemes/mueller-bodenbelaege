import Image from 'next/image'

export function Suppliers() {
  const suppliers = [
    {
      name: 'Supplier 1',
      logo: '/img/suppliers/logo1.svg',
    },
    {
      name: 'Supplier 2',
      logo: '/img/suppliers/logo2.svg',
    },
    {
      name: 'Supplier 3',
      logo: '/img/suppliers/logo3.svg',
    },
    {
      name: 'Supplier 4',
      logo: '/img/suppliers/logo4.svg',
    },
    {
      name: 'Supplier 5',
      logo: '/img/suppliers/logo5.svg',
    },
    {
      name: 'Supplier 6',
      logo: '/img/suppliers/logo6.svg',
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block mb-4 text-sm text-brand dark:text-brand-light font-medium uppercase tracking-widest">
            Unsere Partner
          </span>
          <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading text-gray-900 dark:text-white">
            Starke Marken
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Wir arbeiten ausschließlich mit renommierten Herstellern zusammen, um Ihnen beste Qualität zu garantieren.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {suppliers.map((supplier, index) => (
            <div
              key={index}
              className="p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={supplier.logo}
                alt={supplier.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
