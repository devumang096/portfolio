import { m } from 'framer-motion'
import type { ReactNode } from 'react'

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </m.div>
  )
}
