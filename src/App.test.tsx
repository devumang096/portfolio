import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'
import { education } from './data/education'
import { experience } from './data/experience'
import { profile } from './data/profile'
import { projects } from './data/projects'
import { skills } from './data/skills'

describe('sections render from data files', () => {
  it('renders the hero from the profile', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: profile.name })).toBeTruthy()
    expect(screen.getByText(profile.tagline)).toBeTruthy()
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
  })

  it('renders every experience entry', () => {
    render(<App />)
    const section = screen.getByRole('region', { name: 'Experience' })
    for (const entry of experience) {
      expect(
        within(section).getByText(`${entry.role}, ${entry.organisation}`, { exact: false }),
      ).toBeTruthy()
      for (const highlight of entry.highlights)
        expect(within(section).getByText(highlight)).toBeTruthy()
    }
  })

  it('renders every project with a GitHub link', () => {
    render(<App />)
    const section = screen.getByRole('region', { name: 'Projects' })
    for (const project of projects) {
      expect(within(section).getByRole('heading', { name: project.title })).toBeTruthy()
      const link = within(section).getByRole('link', { name: `${project.title} on GitHub` })
      expect(link.getAttribute('href')).toBe(project.repoUrl)
    }
  })

  it('renders every skill group, education entry and the mailto contact', () => {
    render(<App />)
    const skillsSection = screen.getByRole('region', { name: 'Skills' })
    for (const group of skills) {
      expect(within(skillsSection).getByText(group.label)).toBeTruthy()
      for (const item of group.items) expect(within(skillsSection).getByText(item)).toBeTruthy()
    }
    const educationSection = screen.getByRole('region', { name: 'Education' })
    for (const entry of education)
      expect(within(educationSection).getByText(entry.institution)).toBeTruthy()
    const mail = screen.getByRole('link', { name: profile.email })
    expect(mail.getAttribute('href')).toBe(`mailto:${profile.email}`)
  })
})

describe('theme toggle', () => {
  it('switches the theme and stores the choice', async () => {
    render(<App />)
    await userEvent.click(screen.getByRole('button', { name: 'Switch to dark theme' }))
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(window.localStorage.getItem('theme')).toBe('dark')
    await userEvent.click(screen.getByRole('button', { name: 'Switch to light theme' }))
    expect(document.documentElement.dataset.theme).toBe('light')
  })
})

describe('external links', () => {
  it('open safely in a new tab', () => {
    const { container } = render(<App />)
    const externalLinks = container.querySelectorAll<HTMLAnchorElement>('a[href^="http"]')
    expect(externalLinks.length).toBeGreaterThan(0)
    for (const link of externalLinks) {
      expect(link.getAttribute('rel')).toBe('noopener noreferrer')
      expect(link.getAttribute('target')).toBe('_blank')
    }
  })
})
