import { type Product } from '@/types/product'
import { Columns, Footprints, Puzzle } from 'lucide-react'

export const products: Product[] = [
  {
    id: 'parkett',
    title: 'Parkett & Holzböden',
    description: 'Hochwertige Parkettböden und Holzdielen für ein natürliches Ambiente',
    imageUrl: '/img/products/parkett.jpg',
    icon: Columns,
    features: [
      'Massivholzparkett',
      'Fertigparkett',
      'Landhausdielen',
      'Verschiedene Holzarten',
      'Natürliche Optik',
    ],
    cta: {
      text: 'Mehr über Parkett',
      href: '/produkte/parkett',
    },
  },
  {
    id: 'vinyl',
    title: 'Vinyl & Design',
    description: 'Moderne Vinylböden für höchste Ansprüche an Design und Funktionalität',
    imageUrl: '/img/products/vinyl.jpg',
    icon: Footprints,
    features: [
      'Designvinyl',
      'Klick-Vinyl',
      'Wasserfest',
      'Pflegeleicht',
      'Verschiedene Designs',
    ],
    cta: {
      text: 'Mehr über Vinyl',
      href: '/produkte/vinyl',
    },
  },
  {
    id: 'laminat',
    title: 'Laminat',
    description: 'Robuste Laminatböden für jeden Wohnbereich',
    imageUrl: '/img/products/laminat.jpg',
    icon: Puzzle,
    features: [
      'Verschiedene Qualitätsstufen',
      'Große Dekorauswahl',
      'Strapazierfähig',
      'Schnelle Verlegung',
      'Gutes Preis-Leistungs-Verhältnis',
    ],
    cta: {
      text: 'Mehr über Laminat',
      href: '/produkte/laminat',
    },
  },
]
