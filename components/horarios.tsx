import { Reveal } from '@/components/reveal'

const DIAS = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']

type Slot = { hora: string; clases: Record<string, string> }

const HORARIOS: Slot[] = [
  {
    hora: '09:00 — 10:30',
    clases: { Lun: 'Adultos', Mié: 'Adultos', Vie: 'Adultos', Sáb: 'Ballet' },
  },
  {
    hora: '11:00 — 12:00',
    clases: { Sáb: 'Baby class' },
  },
  {
    hora: '16:00 — 17:30',
    clases: {
      Lun: 'Ballet',
      Mar: 'Jazz',
      Mié: 'Ballet',
      Jue: 'Jazz',
      Vie: 'Ballet',
    },
  },
  {
    hora: '17:30 — 19:00',
    clases: {
      Lun: 'Contemporáneo',
      Mar: 'Hip hop',
      Mié: 'Contemporáneo',
      Jue: 'Hip hop',
      Vie: 'Contemporáneo',
    },
  },
  {
    hora: '19:00 — 20:30',
    clases: {
      Lun: 'Hip hop',
      Mar: 'Adultos',
      Mié: 'Jazz',
      Jue: 'Adultos',
      Vie: 'Hip hop',
    },
  },
]

export function Horarios() {
  return (
    <section id="horarios" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
            <span className="h-px w-10 bg-primary" />
            Horarios
          </span>
          <h2 className="mt-6 text-balance font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            Clases de lunes a sábado
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Consulta los bloques disponibles por disciplina. Los cupos son
            limitados para cuidar la atención de cada grupo.
          </p>
        </Reveal>

        <Reveal className="mt-12 overflow-x-auto" delay={100}>
          <table className="w-full min-w-[680px] border-collapse text-left">
            <thead>
              <tr className="border-b border-foreground/15">
                <th className="py-4 pr-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Horario
                </th>
                {DIAS.map((dia) => (
                  <th
                    key={dia}
                    className="px-3 py-4 font-serif text-lg font-medium text-foreground"
                  >
                    {dia}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {HORARIOS.map((slot) => (
                <tr
                  key={slot.hora}
                  className="border-b border-border transition-colors hover:bg-secondary/60"
                >
                  <td className="py-4 pr-4 align-middle text-sm font-medium tracking-wide text-foreground">
                    {slot.hora}
                  </td>
                  {DIAS.map((dia) => (
                    <td key={dia} className="px-3 py-4 align-middle">
                      {slot.clases[dia] ? (
                        <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                          {slot.clases[dia]}
                        </span>
                      ) : (
                        <span className="text-border" aria-hidden="true">
                          —
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  )
}
