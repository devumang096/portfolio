import { domAnimation, LazyMotion, MotionConfig } from 'framer-motion'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { education } from './data/education'
import { experience } from './data/experience'
import { profile } from './data/profile'
import { projects } from './data/projects'
import { skills } from './data/skills'

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <Nav name={profile.name} />
        <main className="mx-auto max-w-5xl px-4">
          <Hero profile={profile} />
          <Experience entries={experience} />
          <Projects projects={projects} />
          <Skills groups={skills} />
          <Education entries={education} />
          <Contact profile={profile} />
        </main>
        <footer className="border-t border-border py-8 text-center text-sm text-muted">
          <p>
            {profile.name}, {new Date().getFullYear()}
          </p>
        </footer>
      </MotionConfig>
    </LazyMotion>
  )
}
