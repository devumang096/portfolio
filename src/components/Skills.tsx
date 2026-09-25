import type { SkillGroup } from '../data/types'
import { Section } from './Section'

export function Skills({ groups }: { groups: SkillGroup[] }) {
  return (
    <Section id="skills" title="Skills">
      <dl className="space-y-5">
        {groups.map((group) => (
          <div key={group.label} className="sm:flex sm:gap-6">
            <dt className="w-28 shrink-0 pt-1 font-mono text-sm text-muted">{group.label}</dt>
            <dd className="mt-2 sm:mt-0">
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-surface px-3 py-1 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
