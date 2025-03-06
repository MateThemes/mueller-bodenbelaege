import React from 'react'
import Link from 'next/link'

export const About = () => {
  return (
    <section id="about" className="py-10 pt-20 lg:pt-32 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="py-16 px-8 md:px-16 bg-gray-50 dark:bg-gray-800 rounded-3xl">
          <div className="flex flex-wrap -m-8">
            <div className="w-full md:w-1/2 p-8">
              <div className="md:max-w-sm">
                <span className="inline-block mb-5 text-sm text-brand dark:text-brand-light font-medium uppercase tracking-widest">
                  Über uns
                </span>
                <h2 className="mb-8 text-4xl lg:text-5xl font-bold font-heading text-gray-900 dark:text-white">
                  Ihr Spezialist für hochwertige Bodenbeläge in München
                </h2>
                <div className="flex flex-wrap -m-2">
                  <div className="w-full md:w-auto p-2">
                    <Link
                      href="/ueber-uns"
                      className="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white dark:text-gray-900 bg-brand hover:bg-brand-dark disabled:bg-brand aria-disabled:bg-brand dark:bg-brand-light dark:hover:bg-brand dark:disabled:bg-brand-light dark:aria-disabled:bg-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand dark:focus-visible:outline-brand-light items-center w-full flex justify-center"
                    >
                      Mehr über uns
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-8">
              <div className="flex flex-wrap -m-4">
                <div className="w-full lg:w-1/2 p-4">
                  <div className="flex flex-col justify-between p-8 h-full bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-3xl">
                    <svg className="mb-28 w-8 h-8 text-brand dark:text-brand-light" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                      <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clipRule="evenodd" />
                    </svg>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Qualität seit Generationen</h3>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 p-4">
                  <div className="flex flex-col justify-between p-8 h-full bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-3xl">
                    <svg className="mb-28 w-8 h-8 text-brand dark:text-brand-light" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                    </svg>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Professionelle Beratung</h3>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 p-4">
                  <div className="flex flex-col justify-between p-8 h-full bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-3xl">
                    <svg className="mb-28 w-8 h-8 text-brand dark:text-brand-light" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
                      <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
                      <path d="M3.265 15.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
                    </svg>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Maßgeschneiderte Lösungen</h3>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 p-4">
                  <div className="flex flex-col justify-between p-8 h-full bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-3xl">
                    <svg className="mb-28 w-8 h-8 text-brand dark:text-brand-light" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                    </svg>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Termingerechte Ausführung</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
