import type { EducationEntry } from '../data/types'
import { Section } from './Section'

export function Education({ entries }: { entries: EducationEntry[] }) {
  return (
    <Section id="education" title="Education">
      <ul className="space-y-4">
        {entries.map((entry) => (
          <li key={entry.degree}>
            <h3 className="text-lg font-semibold">{entry.degree}</h3>
            <p className="text-muted">{entry.institution}</p>
            <p className="mt-1 font-mono text-sm text-muted">
              {entry.period} · {entry.grade}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
