import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
})

export const signupSchema = z
  .object({
    fullName: z
      .string()
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name must be under 50 characters'),
    email: z.string().email('Please enter a valid email address'),
    phone: z
      .string()
      .min(10, 'Please enter a valid phone number')
      .max(15, 'Please enter a valid phone number')
      .regex(/^[+]?[0-9\s\-()]+$/, 'Please enter a valid phone number'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[0-9]/, 'Password must contain at least one number')
      .regex(/[^a-zA-Z0-9]/, 'Password must contain at least one special character'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

export type LoginFormData = z.infer<typeof loginSchema>
export type SignupFormData = z.infer<typeof signupSchema>

export function getPasswordStrength(password: string): 'weak' | 'medium' | 'strong' | null {
  if (!password) return null

  const hasLength = password.length >= 8
  const hasNumber = /[0-9]/.test(password)
  const hasSpecial = /[^a-zA-Z0-9]/.test(password)
  const hasUpperAndLower = /[a-z]/.test(password) && /[A-Z]/.test(password)

  const score = [hasLength, hasNumber, hasSpecial, hasUpperAndLower].filter(Boolean).length

  if (score <= 2) return 'weak'
  if (score === 3) return 'medium'
  return 'strong'
}
