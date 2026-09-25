import type { Project } from '../data/types'
import { ExternalLink } from './ExternalLink'
import { Section } from './Section'

const linkClass = 'text-sm font-semibold text-accent hover:underline'

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <Section id="projects" title="Projects">
      <ul className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.title}
            className="flex flex-col rounded-lg border border-border bg-surface p-5"
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 flex-1 text-muted">{project.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded border border-border px-2 py-0.5 font-mono text-xs text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-4">
              <ExternalLink
                href={project.repoUrl}
                className={linkClass}
                aria-label={`${project.title} on GitHub`}
              >
                GitHub
              </ExternalLink>
              {project.demoUrl && (
                <ExternalLink
                  href={project.demoUrl}
                  className={linkClass}
                  aria-label={`${project.title} live demo`}
                >
                  Live demo
                </ExternalLink>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
