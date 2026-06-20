'use client'

import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const WHATSAPP = 'https://wa.me/524792677777'

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.43-4.92 8.43-9.94Z" />
    </svg>
  )
}

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.4c-1.2.1-2.4-.2-3.5-.8v5.9c0 3.3-2.4 5.6-5.5 5.6S5.5 17.7 5.5 14.6c0-3 2.2-5.3 5.3-5.4v2.5c-.3.1-.6.2-.9.3-1.1.5-1.7 1.4-1.5 2.6.2 1.1 1.1 1.8 2.3 1.7 1.3-.1 2-1 2-2.5V3h2.8z" />
    </svg>
  )
}

const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'TikTok', href: 'https://tiktok.com', Icon: TikTokIcon },
]

export function Contacto() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contacto" className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
            <span className="h-px w-10 bg-primary" />
            Contacto
          </span>
          <h2 className="mt-6 text-balance font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            Reserva tu clase de prueba
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Escríbenos y con gusto te asesoramos para encontrar la disciplina y
            el horario ideal para ti o tu familia.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Info + map */}
          <Reveal className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-sm border border-border">
              <iframe
                title="Ubicación de Studio Aria"
                src="https://www.google.com/maps?q=Centro,Ciudad+de+Mexico&output=embed"
                className="h-64 w-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 shrink-0 text-primary" size={20} />
                <span className="leading-relaxed text-foreground">
                  Av. Reforma 248, Col. Centro, 06000, Ciudad de México
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-primary" size={20} />
                <a
                  href="tel:+524792677777"
                  className="text-foreground transition-colors hover:text-primary"
                >
                  +52 479 267 7777
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 font-medium text-white transition-opacity hover:opacity-90"
            >
              <WhatsAppGlyph size={20} />
              Escríbenos por WhatsApp
            </a>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <form
              onSubmit={onSubmit}
              className="rounded-sm border border-border bg-background p-7 sm:p-9"
            >
              <div className="flex flex-col gap-5">
                <Field label="Nombre" htmlFor="nombre">
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    placeholder="Tu nombre completo"
                    className="w-full rounded-sm border border-border bg-secondary/40 px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                  />
                </Field>
                <Field label="Teléfono" htmlFor="telefono">
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    required
                    placeholder="Tu número de contacto"
                    className="w-full rounded-sm border border-border bg-secondary/40 px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                  />
                </Field>
                <Field label="Mensaje" htmlFor="mensaje">
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    required
                    placeholder="Cuéntanos qué disciplina te interesa"
                    className="w-full resize-none rounded-sm border border-border bg-secondary/40 px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                  />
                </Field>

                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition-colors hover:bg-foreground"
                >
                  {sent ? (
                    <>
                      <Check size={18} /> ¡Mensaje enviado!
                    </>
                  ) : (
                    'Enviar'
                  )}
                </button>
                {sent && (
                  <p className="text-center text-sm text-primary">
                    Gracias, te contactaremos muy pronto.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  )
}

function WhatsAppGlyph({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.23 8.23 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42l-.48-.01c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  )
}
