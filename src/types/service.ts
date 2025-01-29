export interface Service {
  id: string
  title: string
  description: string
  imageUrl: string
  features: string[]
  icon?: React.ComponentType<{ className?: string }>
  cta?: {
    text: string
    href: string
  }
}
