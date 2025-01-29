'use client'

import { type Service } from '@/types/service'
import { ServiceCard } from './service-card'
import { cn } from '@/utils/cn'

interface ServicesGridProps {
  services: Service[]
  className?: string
}

export function ServicesGrid({ services, className }: ServicesGridProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", className)}>
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  )
}
