import Link from 'next/link'
import { Mail } from 'lucide-react'
import { AuthCard } from '@/components/auth/AuthCard'

export default function VerifyEmailPage() {
  return (
    <AuthCard heading="Check your email" subheading="">
      <div className="flex flex-col items-center text-center -mt-4">
        <Mail size={40} className="text-brand mb-4" />
        <p className="text-sm text-text-secondary">
          We&apos;ve sent a verification link to your email address. Click the link in the email to
          activate your account.
        </p>
        <p className="text-xs text-text-tertiary mt-4">
          Didn&apos;t receive it? Check your spam folder, or{' '}
          <a href="#" className="text-brand hover:underline">
            resend the email
          </a>
        </p>
        <Link href="/" className="text-sm text-brand font-medium hover:underline mt-6">
          Back to home
        </Link>
      </div>
    </AuthCard>
  )
}
