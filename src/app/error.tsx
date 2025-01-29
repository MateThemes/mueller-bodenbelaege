'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex items-center justify-center py-24">
      <div className="text-center px-4">
        <h1 className="text-6xl font-display font-medium text-gray-900 dark:text-white mb-4">Oops!</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">Ein Fehler ist aufgetreten</p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-wood hover:bg-wood-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wood transition-colors"
          >
            Erneut versuchen
          </button>
          <Link 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wood transition-colors"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  )
}
