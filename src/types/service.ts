import { LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  imageUrl: string
  icon: LucideIcon
  features: string[]
  cta: {
    text: string
    href: string
  }
}
