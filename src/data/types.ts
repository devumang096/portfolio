export interface Profile {
  name: string
  role: string
  tagline: string
  email: string
  githubUrl: string
  linkedinUrl: string
  resumePath: string
  siteUrl: string
}

export interface ExperienceEntry {
  organisation: string
  role: string
  period: string
  summary?: string
  highlights: string[]
}

export interface Project {
  title: string
  description: string
  tags: string[]
  repoUrl: string
  demoUrl?: string
}

export interface SkillGroup {
  label: string
  items: string[]
}

export interface EducationEntry {
  degree: string
  institution: string
  period: string
  grade: string
}
