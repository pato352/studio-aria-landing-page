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

const NAV = [
  { label: 'Estudio', href: '#estudio' },
  { label: 'Disciplinas', href: '#disciplinas' },
  { label: 'Horarios', href: '#horarios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
]

export function SiteFooter() {
  return (
    <footer className="bg-foreground py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-10 border-b border-background/10 pb-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-serif text-3xl font-semibold tracking-[0.35em] text-background">
              ARIA
            </p>
            <p className="mt-4 leading-relaxed text-background/55">
              Academia de danza para todas las edades. Formación, técnica y
              escenario en el corazón de la ciudad.
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-8 gap-y-3"
            aria-label="Navegación del pie de página"
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm tracking-wide text-background/70 transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {[
              { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
              { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
            ].map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-background/20 text-background/80 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-background/45">
          © Studio Aria. Academia de Danza.
        </p>
      </div>
    </footer>
  )
}
