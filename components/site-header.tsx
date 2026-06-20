'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV = [
  { label: 'Estudio', href: '#estudio' },
  { label: 'Disciplinas', href: '#disciplinas' },
  { label: 'Horarios', href: '#horarios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-foreground/80 backdrop-blur-md py-3 shadow-lg shadow-foreground/5'
          : 'bg-transparent py-5',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#inicio"
          className="font-serif text-2xl font-semibold tracking-[0.35em] text-background"
          aria-label="Studio Aria — inicio"
        >
          ARIA
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm tracking-wide text-background/85 transition-colors hover:text-background"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="hidden rounded-full border border-gold/70 px-5 py-2 text-sm tracking-wide text-background transition-colors hover:bg-gold hover:text-foreground sm:inline-block"
          >
            Clase de prueba
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="text-background lg:hidden"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden bg-foreground/95 backdrop-blur-md transition-[max-height] duration-500 lg:hidden',
          open ? 'max-h-96' : 'max-h-0',
        )}
      >
        <nav
          className="flex flex-col gap-1 px-6 py-4"
          aria-label="Menú móvil"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-background/10 py-3 text-background/90 transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-3 rounded-full bg-gold py-3 text-center font-medium text-foreground"
          >
            Clase de prueba
          </a>
        </nav>
      </div>
    </header>
  )
}
