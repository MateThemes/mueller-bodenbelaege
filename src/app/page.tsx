import { ThemeToggle } from '@/components/theme-toggle'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Hero
        titleStart="Der perfekte Boden für "
        titleHighlight="Ihr Zuhause!"
        description="Professioneller Parkett- und Bodenleger aus München – maßgeschneiderte Lösungen für höchste Qualität, langlebige Böden und perfektes Handwerk."
        primaryButton={{ to: '/#about', text: 'Mehr erfahren', ariaLabel: 'Mehr über unsere Dienstleistungen erfahren' }}
        image={{ src: '/img/hero/hero-parkettboden-dunkel.jpg', alt: 'Hochwertiger Bodenbelag von Mueller Bodenbelaege' }}
      />
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-wood-dark dark:text-wood-light">
            Müller Bodenbeläge
          </h1>
          <ThemeToggle />
        </div>
      </div>
    </>
  )
}
