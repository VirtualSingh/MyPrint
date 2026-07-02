import { createClient } from '@/lib/supabase/server'
import NavbarClient from '@/components/landing/NavbarClient'

export default async function Navbar() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return <NavbarClient user={null} />
  }

  const { data: profile } = await supabase
    .from('users')
    .select('full_name, avatar_url')
    .eq('id', user.id)
    .single()

  return (
    <NavbarClient
      user={{
        name: profile?.full_name || user.email || 'Account',
        email: user.email ?? '',
        avatarUrl: profile?.avatar_url ?? null,
      }}
    />
  )
}
