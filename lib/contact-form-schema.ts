import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  company: z.string().trim().max(120).optional().or(z.literal('')),
  message: z.string().trim().min(10).max(5000),
  website: z.string().optional().default(''),
  locale: z.enum(['en', 'es', 'pt', 'de']).optional(),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
