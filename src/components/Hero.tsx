import { m } from 'framer-motion'
import type { Profile } from '../data/types'
import { ExternalLink } from './ExternalLink'

const primaryButton =
  'rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-contrast hover:opacity-90'
const secondaryButton =
  'rounded-md border border-border px-4 py-2.5 text-sm font-semibold hover:bg-surface'

export function Hero({ profile }: { profile: Profile }) {
  return (
    <section id="top" aria-labelledby="hero-title" className="pt-16 pb-14 sm:pt-28 sm:pb-20">
      <m.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <p className="font-mono text-sm text-accent">{profile.role}</p>
        <h1 id="hero-title" className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">{profile.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className={primaryButton}>
            View projects
          </a>
          <a
            href={`${import.meta.env.BASE_URL}${profile.resumePath}`}
            download
            className={secondaryButton}
          >
            Download resume
          </a>
          <ExternalLink href={profile.githubUrl} className={secondaryButton}>
            GitHub
          </ExternalLink>
          <ExternalLink href={profile.linkedinUrl} className={secondaryButton}>
            LinkedIn
          </ExternalLink>
        </div>
      </m.div>
    </section>
  )
}
