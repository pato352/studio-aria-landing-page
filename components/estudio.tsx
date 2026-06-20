import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const STATS = [
  { value: '+10 años', label: 'formando bailarines' },
  { value: '6', label: 'disciplinas' },
  { value: '+300', label: 'alumnos' },
]

export function Estudio() {
  return (
    <section id="estudio" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <span className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
              <span className="h-px w-10 bg-primary" />
              El estudio
            </span>
            <h2 className="mt-6 text-balance font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
              Un espacio donde la técnica se convierte en arte
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              En Studio Aria creemos que la danza es disciplina, expresión y
              comunidad. Acompañamos a cada alumno desde sus primeros pasos hasta
              el escenario, con una formación rigurosa y un ambiente cálido y
              humano. Nuestros maestros combinan trayectoria profesional con una
              vocación genuina por enseñar.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Aquí el movimiento se cultiva con paciencia, respeto al cuerpo y
              pasión por el detalle.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-10">
              {STATS.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 120}>
                  <p className="font-serif text-3xl font-semibold text-primary sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-muted-foreground">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2" delay={120}>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              <Image
                src="/images/estudio.png"
                alt="Interior del estudio de danza Studio Aria"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-3 border border-gold/40" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
