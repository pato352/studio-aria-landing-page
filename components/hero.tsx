import Image from 'next/image'

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="Bailarina contemporánea en movimiento en el estudio"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-foreground/30" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-20 pt-32 sm:px-8 sm:pb-28">
        <span className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold">
          <span className="h-px w-10 bg-gold" />
          Studio Aria — Academia de Danza
        </span>
        <h1 className="max-w-4xl text-balance font-serif text-5xl font-medium leading-[1.05] text-background sm:text-7xl lg:text-8xl">
          El movimiento es nuestro lenguaje
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-background/80">
          Academia de danza para todas las edades — formación, técnica y
          escenario.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contacto"
            className="rounded-full bg-primary px-8 py-4 text-center text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:bg-gold hover:text-foreground"
          >
            Reservar clase de prueba
          </a>
          <a
            href="#estudio"
            className="rounded-full border border-background/40 px-8 py-4 text-center text-sm font-medium tracking-wide text-background backdrop-blur-sm transition-all duration-300 hover:border-background hover:bg-background/10"
          >
            Conoce el estudio
          </a>
        </div>
      </div>
    </section>
  )
}
