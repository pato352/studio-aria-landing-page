'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const FOTOS = [
  { src: '/images/galeria-1.png', alt: 'Ensayo en la barra', span: 'sm:row-span-2' },
  { src: '/images/galeria-2.png', alt: 'Presentación en escenario', span: '' },
  { src: '/images/galeria-3.png', alt: 'Detalle de zapatillas de punta', span: '' },
  { src: '/images/galeria-4.png', alt: 'Coreografía contemporánea', span: 'sm:col-span-2' },
  { src: '/images/galeria-5.png', alt: 'Calentamiento en clase', span: '' },
  { src: '/images/galeria-6.png', alt: 'Dueto contemporáneo', span: 'sm:row-span-2' },
  { src: '/images/galeria-7.png', alt: 'Crew de hip hop', span: '' },
  { src: '/images/galeria-8.png', alt: 'Reverencia al final del recital', span: '' },
]

export function Galeria() {
  const [active, setActive] = useState<number | null>(null)

  const close = useCallback(() => setActive(null), [])
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % FOTOS.length)),
    [],
  )
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + FOTOS.length) % FOTOS.length)),
    [],
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active, close, next, prev])

  return (
    <section id="galeria" className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
            <span className="h-px w-10 bg-primary" />
            Galería
          </span>
          <h2 className="mt-6 text-balance font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            Momentos de clase, ensayo y escenario
          </h2>
        </Reveal>

        <Reveal
          className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-4"
          delay={100}
        >
          {FOTOS.map((foto, i) => (
            <button
              key={foto.src}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                'group relative overflow-hidden rounded-sm',
                foto.span,
              )}
              aria-label={`Ver foto: ${foto.alt}`}
            >
              <Image
                src={foto.src || '/placeholder.svg'}
                alt={foto.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/20" />
            </button>
          ))}
        </Reveal>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Galería de imágenes"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-5 top-5 text-background/80 transition-colors hover:text-background"
            aria-label="Cerrar"
          >
            <X size={32} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="absolute left-4 text-background/70 transition-colors hover:text-gold sm:left-8"
            aria-label="Anterior"
          >
            <ChevronLeft size={40} />
          </button>
          <div
            className="relative h-[75vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={FOTOS[active].src || '/placeholder.svg'}
              alt={FOTOS[active].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
            <p className="absolute -bottom-9 left-0 right-0 text-center text-sm tracking-wide text-background/70">
              {FOTOS[active].alt}
            </p>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-4 text-background/70 transition-colors hover:text-gold sm:right-8"
            aria-label="Siguiente"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  )
}
