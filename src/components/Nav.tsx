import { useState } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'
import { ThemeToggle } from './ThemeToggle'

export const NAV_SECTIONS = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const SECTION_IDS = NAV_SECTIONS.map((section) => section.id)

export function Nav({ name }: { name: string }) {
  const activeId = useActiveSection(SECTION_IDS)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const linkClass = (sectionId: string) =>
    `block rounded-md px-3 py-2 text-sm ${
      activeId === sectionId ? 'font-semibold text-accent' : 'text-muted hover:text-text'
    }`

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-bg/95 backdrop-blur-sm">
      <nav aria-label="Primary" className="mx-auto max-w-5xl px-4">
        <div className="flex h-14 items-center justify-between">
          <a href="#top" className="font-mono text-sm font-semibold">
            {name}
          </a>
          <div className="flex items-center gap-2">
            <ul className="hidden items-center sm:flex">
              {NAV_SECTIONS.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={linkClass(section.id)}
                    aria-current={activeId === section.id ? 'true' : undefined}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
            <button
              type="button"
              className="rounded-md border border-border px-3 py-1.5 text-sm text-muted sm:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              Menu
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <ul id="mobile-menu" className="pb-3 sm:hidden">
            {NAV_SECTIONS.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={linkClass(section.id)}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
