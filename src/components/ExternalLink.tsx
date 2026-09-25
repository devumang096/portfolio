import type { AnchorHTMLAttributes } from 'react'

export function ExternalLink({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  )
}
