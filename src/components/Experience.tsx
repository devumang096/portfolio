import type { ExperienceEntry } from '../data/types'
import { Section } from './Section'

export function Experience({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <Section id="experience" title="Experience">
      <ol className="ml-2 border-l border-border">
        {entries.map((entry) => (
          <li
            key={`${entry.organisation}-${entry.period}`}
            className="relative pb-10 pl-6 last:pb-0"
          >
            <span
              aria-hidden="true"
              className="absolute top-2 -left-[5px] size-2.5 rounded-full bg-accent"
            />
            <h3 className="text-lg font-semibold">
              {entry.role}, {entry.organisation}
            </h3>
            <p className="mt-1 font-mono text-sm text-muted">{entry.period}</p>
            {entry.summary && <p className="mt-3 text-muted">{entry.summary}</p>}
            <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-muted">
              {entry.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
