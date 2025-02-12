import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { Products } from '@/components/Products'
import { Showroom } from '@/components/Showroom'
import { Suppliers } from '@/components/Suppliers'
import { CallToAction } from '@/components/CallToAction'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Products />
      <Showroom />
      <Suppliers />
      <CallToAction />
    </>
  )
}
