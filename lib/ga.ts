export const GA_MEASUREMENT_ID = "G-7N9DHND8F6"

type GAEventParams = {
  action: string
  category?: string
  label?: string
  value?: number
}

export function trackEvent({ action, category, label, value }: GAEventParams) {
  if (typeof window === "undefined") return

  const w = window as typeof window & {
    gtag?: (...args: unknown[]) => void
  }

  if (!w.gtag) return

  const params: Record<string, unknown> = {}

  if (category) params.event_category = category
  if (label) params.event_label = label
  if (typeof value === "number") params.value = value

  w.gtag("event", action, params)
}

