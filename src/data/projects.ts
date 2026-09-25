import type { Project } from './types'

export const projects: Project[] = [
  {
    title: 'Claude Viewer',
    description:
      'Local web viewer for Claude Code sessions, memory, plans and estimated cost from ~/.claude.',
    tags: ['Node.js', 'Express'],
    repoUrl: 'https://github.com/devumang096/claude-viewer',
  },
  {
    title: 'Terminal Viewer',
    description:
      'Local dashboard of every terminal open on your Mac, with git branch, running command, preview and Jump-to.',
    tags: ['Node.js', 'AppleScript', 'macOS'],
    repoUrl: 'https://github.com/devumang096/terminal-viewer',
  },
  {
    title: 'SAPUI5 XML Formatter',
    description:
      'VS Code extension that formats SAPUI5 and OpenUI5 XML views, including binding expressions.',
    tags: ['TypeScript', 'VS Code extension'],
    repoUrl: 'https://github.com/devumang096/-sapui5-xml-formatter',
  },
  {
    title: 'This portfolio',
    description: 'Static, data-driven portfolio site. Content is edited in typed data files.',
    tags: ['React', 'TypeScript', 'Vite'],
    repoUrl: 'https://github.com/devumang096/portfolio',
  },
]
