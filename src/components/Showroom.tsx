import Image from 'next/image'

export function Showroom() {
  const images = [
    {
      src: '/img/showroom/showroom-1.jpg',
      alt: 'Ausstellung von hochwertigen Bodenbelägen',
      title: 'Moderne Ausstellung',
      description: 'Entdecken Sie unsere vielfältige Auswahl an Bodenbelägen'
    },
    {
      src: '/img/showroom/showroom-2.jpg',
      alt: 'Musterpräsentation verschiedener Bodenbeläge',
      title: 'Musterbereich',
      description: 'Vergleichen Sie verschiedene Materialien und Designs'
    },
    {
      src: '/img/showroom/showroom-3.jpg',
      alt: 'Beratungsbereich in unserem Showroom',
      title: 'Beratungszone',
      description: 'Professionelle Beratung in angenehmer Atmosphäre'
    },
    {
      src: '/img/showroom/showroom-4.jpg',
      alt: 'Detailansicht der Bodenmuster',
      title: 'Materialvielfalt',
      description: 'Große Auswahl an Farben und Texturen'
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block mb-4 text-sm text-brand dark:text-brand-light font-medium uppercase tracking-widest">
            Unser Showroom
          </span>
          <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading text-gray-900 dark:text-white">
            Besuchen Sie unsere Ausstellung
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            In unserem modernen Showroom präsentieren wir Ihnen die neuesten Trends und eine große Auswahl an hochwertigen Bodenbelägen. Lassen Sie sich inspirieren und finden Sie den perfekten Boden für Ihr Zuhause.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-3xl bg-gray-50 dark:bg-gray-800"
            >
              <div className="relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={450}
                  quality={80}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Vereinbaren Sie einen persönlichen Beratungstermin und erleben Sie unsere Ausstellung.
          </p>
          <a
            href="tel:+498912345678"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white dark:text-gray-900 bg-brand hover:bg-brand-dark dark:bg-brand-light dark:hover:bg-brand transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
          >
            Jetzt Termin vereinbaren
          </a>
        </div>
      </div>
    </section>
  )
}
