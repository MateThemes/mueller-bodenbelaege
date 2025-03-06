import { LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  imageUrl: string
  icon: LucideIcon
  features: string[]
  benefits?: {
    title: string
    description: string
  }[]
  processSteps?: {
    title: string
    description: string
  }[]
  gallery?: {
    title: string
    image: string
    description: string
  }[]
  faq?: {
    question: string
    answer: string
  }[]
  cta: {
    text: string
    href: string
  }
}
