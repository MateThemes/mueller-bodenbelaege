import { Hammer, Paintbrush, Ruler, Wrench } from 'lucide-react'
import { type Service } from '@/types/service'

export const services: Service[] = [
  {
    id: 'parkett',
    title: 'Parkett & Holzböden',
    description: 'Hochwertige Parkettböden und Holzdielen für ein natürliches Ambiente',
    imageUrl: '/images/services/parkett.jpg',
    icon: Hammer,
    features: [
      'Massivholzparkett',
      'Fertigparkett',
      'Landhausdielen',
      'Restaurierung & Reparatur',
      'Professionelle Verlegung',
    ],
    cta: {
      text: 'Mehr über Parkett',
      href: '/leistungen/parkett',
    },
  },
  {
    id: 'vinyl',
    title: 'Vinyl & Design',
    description: 'Moderne Vinylböden für höchste Ansprüche an Design und Funktionalität',
    imageUrl: '/images/services/vinyl.jpg',
    icon: Paintbrush,
    features: [
      'Designvinyl',
      'Klick-Vinyl',
      'Wasserfest',
      'Pflegeleicht',
      'Verschiedene Designs',
    ],
    cta: {
      text: 'Mehr über Vinyl',
      href: '/leistungen/vinyl',
    },
  },
  {
    id: 'laminat',
    title: 'Laminat',
    description: 'Robuste Laminatböden für jeden Wohnbereich',
    imageUrl: '/images/services/laminat.jpg',
    icon: Ruler,
    features: [
      'Verschiedene Qualitätsstufen',
      'Große Dekorauswahl',
      'Strapazierfähig',
      'Schnelle Verlegung',
      'Gutes Preis-Leistungs-Verhältnis',
    ],
    cta: {
      text: 'Mehr über Laminat',
      href: '/leistungen/laminat',
    },
  },
  {
    id: 'sanierung',
    title: 'Renovierung & Sanierung',
    description: 'Professionelle Aufarbeitung und Sanierung bestehender Böden',
    imageUrl: '/images/services/sanierung.jpg',
    icon: Wrench,
    features: [
      'Schleifen & Ölen',
      'Versiegelung',
      'Reparaturen',
      'Austausch beschädigter Bereiche',
      'Farbauffrischung',
    ],
    cta: {
      text: 'Mehr über Sanierung',
      href: '/leistungen/sanierung',
    },
  },
]
