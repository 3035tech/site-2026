import { splitTextWithClientLinks } from '@/lib/client-links'

type LinkedCompanyTextProps = {
  text: string
  linkClassName?: string
}

export function LinkedCompanyText({
  text,
  linkClassName = 'text-brand-purple hover:text-brand-purple-hover underline underline-offset-2 transition-colors',
}: LinkedCompanyTextProps) {
  const segments = splitTextWithClientLinks(text)

  return (
    <>
      {segments.map((segment, index) =>
        segment.type === 'link' ? (
          <a
            key={index}
            href={segment.href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            {segment.value}
          </a>
        ) : (
          <span key={index}>{segment.value}</span>
        )
      )}
    </>
  )
}
