import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { signOut } from '@/actions/auth'

export default async function CustomerDashboard() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  return (
    <div className="min-h-screen bg-bg-section flex items-center justify-center px-4">
      <div className="bg-white rounded-card border border-border-default p-8 max-w-md w-full text-center">
        <div className="text-4xl mb-4">🖨️</div>
        <h1 className="text-xl font-semibold text-text-primary mb-2">Welcome to MyPrint</h1>
        <p className="text-text-secondary text-sm mb-2">
          Logged in as: <span className="font-medium">{user.email}</span>
        </p>
        <p className="text-text-secondary text-sm mb-6">
          Your dashboard is being built. Check back tomorrow!
        </p>
        <form action={signOut}>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-border-default rounded-sm
                       text-text-primary text-sm font-medium hover:bg-bg-section
                       transition-colors"
          >
            Log out
          </button>
        </form>
      </div>
    </div>
  )
}
