export type UserRole = 'customer' | 'vendor' | 'admin'

export interface UserProfile {
  id: string
  email: string
  full_name: string | null
  phone: string | null
  role: UserRole
  avatar_url: string | null
  city: string
  created_at: string
  updated_at: string
}

export type AuthError = {
  error: string
} | null
