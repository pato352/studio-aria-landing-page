import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Estudio } from '@/components/estudio'
import { Disciplinas } from '@/components/disciplinas'
import { Horarios } from '@/components/horarios'
import { Galeria } from '@/components/galeria'
import { Maestros } from '@/components/maestros'
import { Testimonios } from '@/components/testimonios'
import { Contacto } from '@/components/contacto'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Estudio />
        <Disciplinas />
        <Horarios />
        <Galeria />
        <Maestros />
        <Testimonios />
        <Contacto />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
