import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Massivholzparkett | Müller Bodenbeläge",
  description: "Zeitlose Eleganz und natürliche Schönheit für Ihr Zuhause",
};

export default function MassivholzparkettPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <article>
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Massivholzparkett</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Zeitlose Eleganz und natürliche Schönheit für Ihr Zuhause
          </p>
        </header>

        <section aria-label="Produktbeschreibung" className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-gray-600 dark:text-gray-300">
            Massivholzparkett ist der Inbegriff von Natürlichkeit und Langlebigkeit. 
            Jede Diele wird aus einem Stück Holz gefertigt und bringt so die einzigartige 
            Maserung und Charakteristik des Materials voll zur Geltung.
          </p>
        </section>

        <section aria-label="Produktvorteile" className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Vorteile von Massivholzparkett</h2>
          <ul role="list" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Natürlich', description: '100% reines Holz ohne künstliche Zusatzstoffe' },
              { title: 'Langlebig', description: 'Mehrfach abschleifbar und renovierbar' },
              { title: 'Zeitlos', description: 'Klassische Optik, die nie aus der Mode kommt' },
              { title: 'Wertsteigernd', description: 'Erhöht den Wert Ihrer Immobilie' },
              { title: 'Gesund', description: 'Schafft ein natürliches, gesundes Raumklima' },
              { title: 'Vielseitig', description: 'Verschiedene Holzarten und Verlegemuster' },
            ].map((benefit) => (
              <li key={benefit.title} role="listitem" className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white">{benefit.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-label="Technische Details" className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Technische Details</h2>
          <dl role="list" className="grid gap-4">
            {[
              { term: 'Stärke', description: '14-22 mm' },
              { term: 'Holzarten', description: 'Eiche, Buche, Ahorn, Nussbaum und weitere' },
              { term: 'Verlegearten', description: 'Schiffsboden, Fischgrät, Würfelmuster' },
              { term: 'Oberflächenbehandlung', description: 'Geölt, lackiert oder unbehandelt' },
            ].map((detail) => (
              <div key={detail.term} role="listitem" className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                <dt className="font-semibold text-gray-900 dark:text-white">{detail.term}</dt>
                <dd className="mt-1 text-gray-600 dark:text-gray-400">{detail.description}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-label="Kontakt" className="bg-gray-900 dark:bg-white/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-white">Interessiert an Massivholzparkett?</h2>
          <p className="text-gray-300 mb-6">
            Kontaktieren Sie uns für eine persönliche Beratung und ein individuelles Angebot.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/kontakt"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
              aria-label="Jetzt unverbindlich anfragen"
            >
              Jetzt anfragen
            </a>
            <a
              href="tel:+41712223344"
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
              aria-label="Rufen Sie uns jetzt an"
            >
              Anrufen
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
