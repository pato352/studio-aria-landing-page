import { Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const TESTIMONIOS = [
  {
    texto:
      'Mi hija lleva tres años en Aria y el cambio ha sido increíble: más segura, más disciplinada y feliz cada vez que llega a clase. Los maestros son excelentes.',
    autor: 'Gabriela Méndez',
    rol: 'Mamá de alumna de ballet',
  },
  {
    texto:
      'Entré a las clases de adultos sin experiencia y nunca me sentí fuera de lugar. El ambiente es cálido y profesional. Hoy bailar es mi parte favorita de la semana.',
    autor: 'Andrea Villarreal',
    rol: 'Alumna de danza para adultos',
  },
  {
    texto:
      'La formación que recibí en contemporáneo me preparó para audicionar y entrar a una compañía. Aria me dio técnica, confianza y escenario.',
    autor: 'Diego Ramírez',
    rol: 'Ex alumno, hoy bailarín profesional',
  },
]

export function Testimonios() {
  return (
    <section className="bg-foreground py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Testimonios
          </span>
          <h2 className="mt-6 text-balance font-serif text-4xl font-medium leading-tight text-background sm:text-5xl">
            Lo que dicen nuestras familias
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIOS.map((t, i) => (
            <Reveal key={t.autor} as="article" delay={i * 120}>
              <figure className="flex h-full flex-col rounded-sm border border-background/10 bg-background/5 p-8">
                <div className="flex gap-1 text-gold" aria-label="5 de 5 estrellas">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={18} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-pretty leading-relaxed text-background/85">
                  {`"${t.texto}"`}
                </blockquote>
                <figcaption className="mt-6 border-t border-background/10 pt-5">
                  <p className="font-serif text-lg text-background">{t.autor}</p>
                  <p className="mt-1 text-sm text-background/55">{t.rol}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
