import type { Profile } from '../data/types'
import { ExternalLink } from './ExternalLink'
import { Section } from './Section'

export function Contact({ profile }: { profile: Profile }) {
  return (
    <Section id="contact" title="Contact">
      <p>
        <a
          href={`mailto:${profile.email}`}
          className="text-xl font-semibold text-accent hover:underline"
        >
          {profile.email}
        </a>
      </p>
      <p className="mt-4 flex gap-5">
        <ExternalLink href={profile.githubUrl} className="font-semibold hover:underline">
          GitHub
        </ExternalLink>
        <ExternalLink href={profile.linkedinUrl} className="font-semibold hover:underline">
          LinkedIn
        </ExternalLink>
      </p>
    </Section>
  )
}
