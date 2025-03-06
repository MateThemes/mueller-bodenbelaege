import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { services } from '@/data/services'
import { type Service } from '@/types/service'

export const dynamic = 'force-static'

type Props = {
  params: { serviceId: string }
}

export function generateMetadata(
  { params }: Props
): Metadata {
  const { serviceId } = params
  const service: Service | undefined = services.find(s => s.id === serviceId)
  
  if (!service) return {}

  const title = `${service.title} | Müller Bodenbeläge`
  const description = service.description

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      images: [{
        url: service.imageUrl,
        width: 2400,
        height: 1600,
        alt: `${service.title} - Detailansicht der Leistung`
      }],
      locale: 'de_DE',
      siteName: 'Müller Bodenbeläge'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [service.imageUrl]
    }
  }
}

export function generateStaticParams() {
  return services.map((service) => ({
    serviceId: service.id,
  }))
}

export default function Page(
  { params }: Props
) {
  const { serviceId } = params
  const service: Service | undefined = services.find(s => s.id === serviceId)
  
  if (!service) {
    notFound()
  }

  return (
    <main className="flex-auto" aria-labelledby="service-title" itemScope itemType="https://schema.org/Service">
      {/* Hero section */}
      <section aria-label="Einführung" className="relative isolate overflow-hidden bg-gradient-to-b from-brand-light/20">
        <Container className="pt-24 pb-16 sm:pt-32 lg:pt-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 id="service-title" className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:col-span-2 xl:col-auto" tabIndex={0} itemProp="name">
              {service.title}
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-600 dark:text-gray-400" tabIndex={0} itemProp="description">
                {service.description}
              </p>
              <meta itemProp="provider" content="Müller Bodenbeläge" />
              <meta itemProp="areaServed" content="Schweiz" />
            </div>
            <Image
              src={service.imageUrl}
              alt={`${service.title} - Detailansicht der Leistung`}
              width={2400}
              height={1600}
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              priority={true}
            />
          </div>
        </Container>
      </section>

      {/* Features section */}
      <section aria-label="Leistungen im Detail" className="mt-24 sm:mt-32 lg:mt-40">
        <Container>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Unsere Leistungen im Detail
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Profitieren Sie von unserer langjährigen Erfahrung und unserem Fachwissen
            </p>
          </div>
          <dl 
            role="list" 
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-600 dark:text-gray-400 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16"
            itemProp="hasOfferCatalog"
            itemScope 
            itemType="https://schema.org/OfferCatalog"
          >
            {service.features.map((feature: string) => (
              <div 
                key={feature} 
                className="relative pl-9" 
                role="listitem"
                itemProp="itemListElement" 
                itemScope 
                itemType="https://schema.org/Offer"
              >
                <dt className="inline font-semibold text-gray-900 dark:text-white">
                  <span className="sr-only">Leistungsmerkmal: </span>
                  <service.icon className="absolute left-1 top-1 h-5 w-5 text-brand dark:text-brand-light" aria-hidden="true" />
                  <span itemProp="name" tabIndex={0}>{feature}</span>
                </dt>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Benefits section */}
      {service.benefits && (
        <section aria-label="Ihre Vorteile" className="mt-24 sm:mt-32 lg:mt-40">
          <Container>
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Ihre Vorteile
              </h2>
              <dl role="list" className="mt-10 space-y-8">
                {service.benefits.map((benefit) => (
                  <div key={benefit.title} role="listitem">
                    <dt className="text-lg font-semibold text-gray-900 dark:text-white">
                      {benefit.title}
                    </dt>
                    <dd className="mt-2 text-gray-600 dark:text-gray-400">
                      {benefit.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Container>
        </section>
      )}

      {/* Process section */}
      {service.processSteps && (
        <section aria-label="Unser Prozess" className="mt-24 sm:mt-32 lg:mt-40">
          <Container>
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Unser Prozess
              </h2>
              <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
                <div role="list" className="grid gap-8 lg:grid-cols-2">
                  {service.processSteps.map((step, index: number) => (
                    <div key={step.title} className="relative pl-16" role="listitem">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-brand/20 bg-brand/10 dark:border-brand-light/20 dark:bg-brand-light/10" aria-hidden="true">
                        <span className="text-brand dark:text-brand-light font-semibold">{index + 1}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Gallery section */}
      {service.gallery && (
        <section aria-label="Galerie" className="mt-24 sm:mt-32 lg:mt-40">
          <Container>
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Galerie
              </h2>
            </div>
            <div role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {service.gallery.map((item) => (
                <article key={item.title} role="listitem" className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80" itemScope itemType="https://schema.org/ImageObject">
                  <Image
                    src={item.image}
                    alt={`${item.title} - ${item.description}`}
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                    width={1200}
                    height={800}
                    priority={false}
                    loading="lazy"
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" aria-hidden="true" />
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white" tabIndex={0} itemProp="name">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-300" tabIndex={0} itemProp="description">
                    {item.description}
                  </p>
                  <meta itemProp="contentUrl" content={item.image} />
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* FAQ section */}
      {service.faq && (
        <section aria-label="Häufig gestellte Fragen" className="mt-24 sm:mt-32 lg:mt-40">
          <Container>
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Häufig gestellte Fragen
              </h2>
              <dl role="list" className="mt-10 space-y-8">
                {service.faq.map((item) => (
                  <div key={item.question} role="listitem">
                    <dt className="text-lg font-semibold text-gray-900 dark:text-white" tabIndex={0}>
                      {item.question}
                    </dt>
                    <dd className="mt-2 text-gray-600 dark:text-gray-400" tabIndex={0}>
                      {item.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Container>
        </section>
      )}

      {/* CTA section */}
      <section aria-label="Kontakt" className="mt-24 sm:mt-32 lg:mt-40">
        <Container>
          <div className="relative isolate overflow-hidden bg-gray-900 dark:bg-white/10 px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white dark:text-gray-100 sm:text-4xl">
              Interessiert an {service.title.toLowerCase()}?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300 dark:text-gray-400">
              Kontaktieren Sie uns für eine unverbindliche Beratung. Wir erstellen Ihnen gerne ein individuelles Angebot.
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
              <Button 
                href="/kontakt" 
                variant="solid" 
                aria-label={`Jetzt unverbindlich ${service.title.toLowerCase()} anfragen`}
              >
                Jetzt anfragen
              </Button>
              <Button 
                href="tel:+41712223344" 
                variant="outline" 
                aria-label={`Rufen Sie uns jetzt an für eine Beratung zu ${service.title.toLowerCase()}`}
              >
                <span aria-hidden="true">☎</span> Anrufen
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}


