import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sectionIds.forEach((sectionId) => {
      const section = document.getElementById(sectionId)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
