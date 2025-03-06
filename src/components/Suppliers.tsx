'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export function Suppliers() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    } else if (e.key === 'ArrowRight') {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }
  }
  
  const suppliers = [
    { name: 'Amtico', logo: '/img/partner/partner-amtico.svg' },
    { name: 'Boen', logo: '/img/partner/partner-boen.svg' },
    { name: 'Deisl Parkettmanufaktur', logo: '/img/partner/partner-deislparkettmanufaktur.svg' },
    { name: 'Dr. Schutz', logo: '/img/partner/partner-drschutz.svg' },
    { name: 'Erfal', logo: '/img/partner/erfal_logo.svg' },
    { name: 'Forbo', logo: '/img/partner/partner-forbo.svg' },
    { name: 'Hometrend', logo: '/img/partner/partner-hometrend.svg' },
    { name: 'Nora', logo: '/img/partner/partner-nora.svg' },
    { name: 'Tretford', logo: '/img/partner/partner-tretford.svg' },
    { name: 'Uzin', logo: '/img/partner/partner-uzin.svg' },
    { name: 'Vorwerk', logo: '/img/partner/partner-vorwerk.svg' },
    { name: 'Weitzer', logo: '/img/partner/partner-weitzer.svg' },
    { name: 'Witex', logo: '/img/partner/partner-witex.svg' }
  ]

  const slidesPerView = 6
  const totalSlides = Math.ceil(suppliers.length / slidesPerView)

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides)
      }, 5000) // Change slide every 5 seconds

      return () => clearInterval(timer)
    }
  }, [totalSlides, isPaused])

  return (
    <section 
      className="py-20 pb-24 bg-white dark:bg-gray-900" 
      aria-label="Unsere Partner und Marken"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block mb-4 text-sm text-brand dark:text-brand-light font-medium uppercase tracking-widest">
            Unsere Partner
          </span>
          <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading text-gray-900 dark:text-white">
            Starke Marken
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Wir arbeiten ausschließlich mit renommierten Herstellern zusammen, um Ihnen beste Qualität zu garantieren.
          </p>
        </div>

        <div 
          className="relative overflow-visible focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-4 dark:focus:ring-offset-gray-900 rounded-lg mb-12" 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          role="region"
          aria-label="Partner Logo Slider"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div 
            id="partner-logos"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-10 items-center"
            role="list"
            aria-label="Partner Logos"
          >
            {suppliers.map((supplier, index) => (
              <div
                key={index}
                className={`p-6 md:p-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-1000 ease-out transform ${Math.floor(index / slidesPerView) === currentSlide ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-full scale-95'}`}
                role="listitem"
                aria-hidden={Math.floor(index / slidesPerView) !== currentSlide}
                aria-label={`${supplier.name} Logo`}
                style={{
                  position: Math.floor(index / slidesPerView) === currentSlide ? 'relative' : 'absolute',
                  transitionDelay: `${(index % slidesPerView) * 150}ms`
                }}
              >
                <Image
                  src={supplier.logo}
                  alt={supplier.name}
                  width={300}
                  height={150}
                  className="h-16 md:h-20 lg:h-24 w-auto object-contain max-w-[200px]"
                  priority={index < slidesPerView * 2}
                />
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div 
            className="flex justify-center mt-10 md:mt-12 gap-3 md:gap-4"
            role="tablist"
            aria-label="Slider Navigation"
          >
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${index === currentSlide ? 'bg-brand w-8' : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'}`}
                role="tab"
                aria-selected={index === currentSlide}
                aria-controls="partner-logos"
                tabIndex={index === currentSlide ? 0 : -1}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
