import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionProps {
  id: string
  title: string
  children: ReactNode
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-14 sm:py-20">
      <Reveal>
        <h2 id={`${id}-title`} className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        {children}
      </Reveal>
    </section>
  )
}
