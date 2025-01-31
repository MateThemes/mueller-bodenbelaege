import Image from 'next/image'
import Link from 'next/link'

interface Button {
  to: string
  text: string
  ariaLabel?: string
}

interface ImageProps {
  src: string
  alt: string
}

interface HeroProps {
  titleStart: string
  titleHighlight: string
  description: string
  primaryButton: Button
  secondaryButton?: Button
  showSecondaryButton?: boolean
  image: ImageProps
}

export function Hero({
  titleStart = 'Der perfekte Boden für ',
  titleHighlight = 'Ihr Zuhause!',
  description = 'Professioneller Parkett- und Bodenleger aus München – maßgeschneiderte Lösungen für höchste Qualität, langlebige Böden und perfektes Handwerk.',
  primaryButton = { to: '/#about', text: 'Mehr erfahren', ariaLabel: 'Mehr über unsere Dienstleistungen erfahren' },
  secondaryButton,
  showSecondaryButton = false,
  image = { src: '/img/hero/hero-parkettboden-dunkel.jpg', alt: 'Hochwertiger Bodenbelag von Mueller Bodenbelaege' },
}: HeroProps) {
  return (
    <section
      className="relative bg-gray-50 dark:bg-gray-900 pt-20 pb-24 lg:py-40 overflow-hidden"
      role="banner"
      aria-label="Hauptbanner"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 flex items-center">
            <div className="w-full text-center lg:text-left">
              <div className="relative max-w-md mx-auto lg:mx-0">
                <h1 className="mb-3 text-4xl lg:text-5xl font-bold font-heading text-gray-900 dark:text-white">
                  <span>{titleStart}</span>
                  <span className="text-brand dark:text-brand-light">{titleHighlight}</span>
                </h1>
              </div>
              <div className="relative max-w-sm mx-auto lg:mx-0">
                <p className="mb-6 text-gray-600 dark:text-gray-300 leading-loose" aria-label="Beschreibung">
                  {description}
                </p>
                <div className="flex flex-col lg:flex-row" role="group" aria-label="Aktionsbuttons">
                  <Link
                    href={primaryButton.to}
                    className="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white dark:text-gray-900 bg-brand hover:bg-brand-dark disabled:bg-brand aria-disabled:bg-brand dark:bg-brand-light dark:hover:bg-brand dark:disabled:bg-brand-light dark:aria-disabled:bg-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand dark:focus-visible:outline-brand-light items-center mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto flex justify-center lg:justify-start"
                    aria-label={primaryButton.ariaLabel}
                  >
                    {primaryButton.text}
                  </Link>
                  {showSecondaryButton && secondaryButton && (
                    <Link
                      href={secondaryButton.to}
                      className="w-full lg:w-auto flex justify-center lg:justify-start px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
                      aria-label={secondaryButton.ariaLabel}
                    >
                      {secondaryButton.text}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative lg:absolute lg:right-0 lg:top-0 h-[400px] lg:h-full w-full lg:w-1/2">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="my-12 lg:my-0 rounded-3xl lg:rounded-none object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
