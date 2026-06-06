import type { MouseEvent } from 'react'
import { getClientUrl } from '@/lib/client-links'
import { cn } from '@/lib/utils'

type LinkedClientNameProps = {
  name: string
  className?: string
  linkClassName?: string
  onLinkClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}

export function LinkedClientName({
  name,
  className,
  linkClassName,
  onLinkClick,
}: LinkedClientNameProps) {
  const url = getClientUrl(name)

  if (!url) {
    return <span className={className}>{name}</span>
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        className,
        linkClassName,
        'underline-offset-2 hover:underline transition-colors',
      )}
      onClick={onLinkClick}
    >
      {name}
    </a>
  )
}
