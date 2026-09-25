import type { ExperienceEntry } from './types'

export const experience: ExperienceEntry[] = [
  {
    organisation: 'INTEGRTR',
    role: 'Software Development Engineer',
    period: 'Jul 2024 – Present',
    summary:
      'INTEGRTR builds SAP SuccessFactors software used by customers including Bosch and Merck.',
    highlights: [
      'Built INTEGRTR.HRDG 3.0, a SuccessFactors test data generator that clones employee and organisational data into test systems, from scratch in SAPUI5. It replaced the legacy v2 app within 4 months across 76 merged PRs.',
      "Designed HRDG's workflows: reusable templates, filter variants with scheduled runs, a 4-stage run pipeline with run history and reports, and anonymised copies within and across systems.",
      'Built System Comparison for 7 SuccessFactors configuration areas with match percentages and Excel exports.',
      'Backend in Node.js, Express, Sequelize and PostgreSQL: a bulk tenant-usage billing API and billing feature flags with data backfill.',
      "Internal developer tooling: UI5 rules for the team's AI coding assistant (Claude Code) plugin, a pre-commit XML binding formatter, and CodeRabbit review rules. 530+ merged PRs since 2023.",
    ],
  },
  {
    organisation: 'INTEGRTR',
    role: 'Software Development Intern',
    period: 'Jul 2023 – Jun 2024',
    highlights: [
      'Built the Tenant Admin Portal in SAPUI5, XML and LESS, added entity caching in the Systems app, and shipped MDGen features: Diversity Package, Custom Help Page, CSV upload and run queueing.',
    ],
  },
  {
    organisation: 'Coding Ninjas LPU',
    role: 'Technical Lead',
    period: 'May 2022 – Feb 2023',
    highlights: ['Led the tech team, organised 10+ events and mentored students.'],
  },
]
