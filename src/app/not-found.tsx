import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="text-center px-4">
        <h1 className="text-6xl font-display font-medium text-gray-900 dark:text-white mb-4">404</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">Seite nicht gefunden</p>
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-wood hover:bg-wood-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wood transition-colors"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  )
}
