'use client'

import Link from 'next/link'
import type { ComponentProps } from 'react'
import { useLocalizedPath } from '@/lib/i18n/navigation'

type LocaleLinkProps = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string
}

export function LocaleLink({ href, ...props }: LocaleLinkProps) {
  const localizedHref = useLocalizedPath(href)
  return <Link href={localizedHref} {...props} />
}
