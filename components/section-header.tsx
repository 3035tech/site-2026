import { cn } from '@/lib/utils'

type SectionHeaderProps = {
  label: string
  title?: React.ReactNode
  description?: string
  theme?: 'light' | 'dark'
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  label,
  title,
  description,
  theme = 'light',
  align = 'left',
  className,
}: SectionHeaderProps) {
  const isDark = theme === 'dark'

  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      <span
        className={cn(
          'text-sm font-bold uppercase tracking-[0.15em]',
          isDark ? 'text-brand-purple-light' : 'text-brand-purple'
        )}
      >
        {label}
      </span>
      {title && (
        <h2
          className={cn(
            'mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight text-balance',
            isDark ? 'text-white' : 'text-navy-dark'
          )}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={cn(
            'mt-4 text-base sm:text-lg leading-relaxed',
            isDark ? 'text-white/55' : 'text-text-body-light'
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
