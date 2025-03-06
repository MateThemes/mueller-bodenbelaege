import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Leistungen | Müller Bodenbeläge',
  description: 'Entdecken Sie unsere professionellen Dienstleistungen - von der Beratung über die Verlegung bis hin zur Pflege Ihrer Bodenbeläge.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
