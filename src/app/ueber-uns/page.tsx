import Image from 'next/image'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Über uns | Müller Bodenbeläge',
  description: 'Lernen Sie uns kennen - Ihr erfahrener Partner für hochwertige Bodenbeläge und professionelle Verlegung seit über 30 Jahren.',
}

const values = [
  {
    name: 'Expertise',
    description: 'Über 30 Jahre Erfahrung in der Bodenbelagsbranche',
  },
  {
    name: 'Qualität',
    description: 'Nur hochwertige Materialien und präzise Verarbeitung',
  },
  {
    name: 'Innovation',
    description: 'Moderne Techniken und nachhaltige Lösungen',
  },
  {
    name: 'Kundenservice',
    description: 'Persönliche Beratung und Betreuung von A bis Z',
  },
]

const team = [
  {
    name: 'Max Müller',
    role: 'Geschäftsführer',
    imageUrl: '/img/team/max-mueller.jpg',
  },
  {
    name: 'Anna Müller',
    role: 'Kundenberatung',
    imageUrl: '/img/team/anna-mueller.jpg',
  },
  {
    name: 'Thomas Weber',
    role: 'Projektleiter',
    imageUrl: '/img/team/thomas-weber.jpg',
  },
]

const certifications = [
  {
    name: 'Meisterbetrieb',
    description: 'Zertifizierter Handwerksbetrieb mit Meisterqualifikation',
    imageUrl: '/img/certifications/meisterbetrieb.png',
  },
  {
    name: 'DGNB',
    description: 'Mitglied der Deutschen Gesellschaft für Nachhaltiges Bauen',
    imageUrl: '/img/certifications/dgnb.png',
  },
  {
    name: 'ISO 9001',
    description: 'Zertifiziertes Qualitätsmanagement',
    imageUrl: '/img/certifications/iso9001.png',
  },
]

export default function AboutUs() {
  return (
    <main className="flex-auto">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-brand-light/20">
        <Container className="pt-24 pb-16 sm:pt-32 lg:pt-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:col-span-2 xl:col-auto">
              Tradition trifft Innovation
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-600 dark:text-gray-400">
                Seit über drei Jahrzehnten sind wir Ihr verlässlicher Partner für hochwertige Bodenbeläge und professionelle Verlegung. Als Familienunternehmen verbinden wir traditionelles Handwerk mit modernster Technik und nachhaltigem Denken.
              </p>
            </div>
            <Image
              src="/img/about/workshop.jpg"
              alt="Unser Werkstatt"
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              width={2400}
              height={1600}
            />
          </div>
        </Container>
      </div>

      {/* Values section */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Unsere Werte</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Was uns auszeichnet und was Sie von uns erwarten können
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-600 dark:text-gray-400 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
          {values.map((value) => (
            <div key={value.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900 dark:text-white">
                <div className="absolute left-1 top-1 h-5 w-5 text-brand dark:text-brand-light" />
                {value.name}
              </dt>
              <dd className="inline">{' ' + value.description}</dd>
            </div>
          ))}
        </dl>
      </Container>

      {/* Team section */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Unser Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Die Menschen hinter Müller Bodenbeläge
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-3"
        >
          {team.map((person) => (
            <li key={person.name}>
              <Image
                className="aspect-[14/13] w-full rounded-2xl object-cover"
                src={person.imageUrl}
                alt={person.name}
                width={800}
                height={800}
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">{person.name}</h3>
              <p className="text-base leading-7 text-gray-600 dark:text-gray-400">{person.role}</p>
            </li>
          ))}
        </ul>
      </Container>

      {/* Certifications section */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Zertifizierungen & Qualität
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Unsere Expertise wird durch zahlreiche Zertifizierungen bestätigt
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {certifications.map((certification) => (
              <div key={certification.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center">
                    <Image
                      className="max-h-full w-auto"
                      src={certification.imageUrl}
                      alt={certification.name}
                      width={200}
                      height={200}
                    />
                  </div>
                  {certification.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">{certification.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      {/* CTA section */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="relative isolate overflow-hidden bg-gray-900 dark:bg-white/10 px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white dark:text-gray-100 sm:text-4xl">
            Lassen Sie uns gemeinsam Ihr Projekt verwirklichen
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300 dark:text-gray-300">
            Vereinbaren Sie einen Beratungstermin oder besuchen Sie unseren Showroom
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button href="/kontakt" variant="solid" color="white">
              Kontakt aufnehmen
            </Button>
            <Button href="/showroom" variant="solid" color="white" className="gap-x-2">
              Showroom
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </main>
  )
}
