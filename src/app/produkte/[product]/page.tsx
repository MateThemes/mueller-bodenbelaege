import { Metadata } from 'next'
import { notFound } from "next/navigation"

const products = {
  'massivholzparkett': {
    id: 'massivholzparkett',
    title: 'Massivholzparkett',
    description: 'Zeitlose Eleganz und natürliche Schönheit für Ihr Zuhause',
    content: 'Massivholzparkett ist der Inbegriff von Natürlichkeit und Langlebigkeit. Jede Diele wird aus einem Stück Holz gefertigt und bringt so die einzigartige Maserung und Charakteristik des Materials voll zur Geltung.',
  },
  'fertigparkett': {
    id: 'fertigparkett',
    title: 'Fertigparkett',
    description: 'Die praktische Alternative für schnelle Installation',
    content: 'Fertigparkett verbindet die Schönheit von echtem Holz mit moderner Verarbeitungstechnik. Die mehrschichtige Konstruktion gewährleistet eine hohe Formstabilität.',
  },
  'vinyl': {
    id: 'vinyl',
    title: 'Vinyl',
    description: 'Robust und pflegeleicht für jeden Raum',
    content: 'Vinylböden überzeugen durch ihre außergewöhnliche Strapazierfähigkeit und einfache Pflege. Sie sind wasserbeständig und eignen sich daher besonders gut für Küche und Bad.',
  },
  'teppichfliesen': {
    id: 'teppichfliesen',
    title: 'Teppichfliesen',
    description: 'Flexible Gestaltungsmöglichkeiten für Büro und Wohnraum',
    content: 'Teppichfliesen bieten maximale Flexibilität bei der Gestaltung von Bodenflächen. Einzelne Fliesen können bei Bedarf einfach ausgetauscht werden.',
  },
  'linoleum': {
    id: 'linoleum',
    title: 'Linoleum',
    description: 'Nachhaltig und langlebig aus natürlichen Materialien',
    content: 'Linoleum wird aus natürlichen Rohstoffen hergestellt und ist damit besonders umweltfreundlich. Der Bodenbelag ist antistatisch, bakteriostatisch und sehr langlebig.',
  },
  'kautschuk': {
    id: 'kautschuk',
    title: 'Kautschuk',
    description: 'Extrem belastbar und ideal für stark frequentierte Bereiche',
    content: 'Kautschukböden zeichnen sich durch ihre extreme Belastbarkeit aus. Sie sind rutschfest, schalldämmend und eignen sich besonders für stark beanspruchte Bereiche.',
  },
  'kork': {
    id: 'kork',
    title: 'Kork',
    description: 'Natürlich warm und schalldämmend',
    content: 'Korkböden sind angenehm warm und weich. Sie dämpfen Trittschall und schonen die Gelenke. Ein natürlicher Bodenbelag mit hohem Wohlfühlfaktor.',
  },
  'pvc': {
    id: 'pvc',
    title: 'PVC',
    description: 'Vielseitig einsetzbar und kostengünstig',
    content: 'PVC-Böden sind äußerst robust und pflegeleicht. Sie bieten ein ausgezeichnetes Preis-Leistungs-Verhältnis und sind in vielen Designs erhältlich.',
  },
  'teppichboden': {
    id: 'teppichboden',
    title: 'Teppichboden',
    description: 'Behaglichkeit und Komfort für Ihre Räume',
    content: 'Teppichböden schaffen eine behagliche Atmosphäre und sorgen für angenehme Raumakustik. Sie sind in unzähligen Farben und Qualitäten erhältlich.',
  },
  'designvinyl': {
    id: 'designvinyl',
    title: 'Designvinyl',
    description: 'Moderne Optik mit praktischen Vorteilen',
    content: 'Designvinyl vereint die Optik hochwertiger Naturmaterialien mit den praktischen Vorteilen eines modernen Bodenbelags. Robust, pflegeleicht und in vielen Designs erhältlich.',
  },
} as const

type ProductId = keyof typeof products

export async function generateMetadata({ params }: { params: { product: string } }): Promise<Metadata> {
  const productId = params.product as ProductId
  const product = products[productId]
  
  if (!product) {
    notFound()
  }

  return {
    title: product.title,
    description: product.description,
  }
}

export default async function ProductPage({ params }: { params: { product: string } }) {
  const productId = params.product as ProductId
  const product = products[productId]

  if (!product) {
    notFound()
  }

  return (
    <div className="bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            {product.title}
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            {product.description}
          </p>
          <div className="mt-8 prose prose-lg dark:prose-invert">
            <p>{product.content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(products).map((product) => ({
    product,
  }))
}
