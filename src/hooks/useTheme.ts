import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'
const DARK_QUERY = '(prefers-color-scheme: dark)'

function readStoredTheme(): Theme | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored === 'light' || stored === 'dark' ? stored : null
  } catch (error) {
    console.error('Could not read stored theme', error)
    return null
  }
}

function readSystemTheme(): Theme {
  return window.matchMedia(DARK_QUERY).matches ? 'dark' : 'light'
}

export function useTheme() {
  const [storedTheme, setStoredTheme] = useState<Theme | null>(readStoredTheme)
  const [systemTheme, setSystemTheme] = useState<Theme>(readSystemTheme)

  useEffect(() => {
    const query = window.matchMedia(DARK_QUERY)
    const handleChange = () => setSystemTheme(query.matches ? 'dark' : 'light')
    query.addEventListener('change', handleChange)
    return () => query.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (storedTheme) document.documentElement.dataset.theme = storedTheme
    else delete document.documentElement.dataset.theme
  }, [storedTheme])

  const theme = storedTheme ?? systemTheme

  function toggleTheme() {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark'
    setStoredTheme(nextTheme)
    try {
      window.localStorage.setItem(STORAGE_KEY, nextTheme)
    } catch (error) {
      console.error('Could not store theme', error)
    }
  }

  return { theme, toggleTheme }
}
