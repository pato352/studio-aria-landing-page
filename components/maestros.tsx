import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const MAESTROS = [
  {
    name: 'Renata Salas',
    especialidad: 'Ballet clásico',
    img: '/images/maestra-1.png',
  },
  {
    name: 'Mauricio Bernal',
    especialidad: 'Danza contemporánea',
    img: '/images/maestro-2.png',
  },
  {
    name: 'Daniela Ortega',
    especialidad: 'Hip hop / urbano',
    img: '/images/maestra-3.png',
  },
]

export function Maestros() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
            <span className="h-px w-10 bg-primary" />
            Maestros
          </span>
          <h2 className="mt-6 text-balance font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            Quienes guían cada paso
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {MAESTROS.map((m, i) => (
            <Reveal key={m.name} as="article" delay={i * 120}>
              <div className="group">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
                  <Image
                    src={m.img || '/placeholder.svg'}
                    alt={`${m.name}, maestra de ${m.especialidad}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="pointer-events-none absolute inset-3 border border-gold/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <h3 className="mt-5 font-serif text-2xl font-medium text-foreground">
                  {m.name}
                </h3>
                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-primary">
                  {m.especialidad}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
