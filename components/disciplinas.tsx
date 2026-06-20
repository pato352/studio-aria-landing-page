import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const DISCIPLINAS = [
  {
    name: 'Ballet clásico',
    desc: 'Técnica, postura y elegancia desde la base académica.',
    img: '/images/ballet.png',
  },
  {
    name: 'Danza contemporánea',
    desc: 'Expresión, suelo y movimiento libre del cuerpo.',
    img: '/images/contemporaneo.png',
  },
  {
    name: 'Jazz',
    desc: 'Energía, ritmo y musicalidad en cada coreografía.',
    img: '/images/jazz.png',
  },
  {
    name: 'Hip hop / urbano',
    desc: 'Estilo, actitud y los grooves de la cultura urbana.',
    img: '/images/hiphop.png',
  },
  {
    name: 'Danza para adultos',
    desc: 'Clases para reconectar con tu cuerpo a cualquier edad.',
    img: '/images/adultos.png',
  },
  {
    name: 'Baby class (3-6 años)',
    desc: 'Primer acercamiento lúdico al ritmo y la coordinación.',
    img: '/images/baby.png',
  },
]

export function Disciplinas() {
  return (
    <section id="disciplinas" className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
            <span className="h-px w-10 bg-primary" />
            Disciplinas
          </span>
          <h2 className="mt-6 text-balance font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            Encuentra tu manera de moverte
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DISCIPLINAS.map((d, i) => (
            <Reveal key={d.name} as="article" delay={(i % 3) * 100}>
              <div className="group relative h-full overflow-hidden rounded-sm bg-background shadow-sm transition-shadow duration-500 hover:shadow-xl hover:shadow-foreground/10">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={d.img || '/placeholder.svg'}
                    alt={`Clase de ${d.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-medium text-foreground">
                    {d.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {d.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
