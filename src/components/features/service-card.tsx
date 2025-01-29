'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { type Service } from '@/types/service'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/utils/cn'

interface ServiceCardProps {
  service: Service
  className?: string
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <Card className={cn('group overflow-hidden', className)}>
        <div className="relative h-48 overflow-hidden">
          <Image
            src={service.imageUrl}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {service.icon && (
            <div className="absolute left-4 top-4 rounded-full bg-white/90 p-2 shadow-lg backdrop-blur-sm dark:bg-gray-900/90">
              <service.icon className="h-6 w-6 text-wood dark:text-wood-light" />
            </div>
          )}
        </div>

        <CardHeader>
          <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
          <CardDescription>{service.description}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {service.features && service.features.length > 0 && (
            <ul className="space-y-2">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm">
                  <Check className="mr-2 h-4 w-4 text-wood dark:text-wood-light" />
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {service.cta && (
            <Link href={service.cta.href} className="block">
              <Button className="group w-full">
                {service.cta.text}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
