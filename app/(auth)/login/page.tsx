'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { AuthCard } from '@/components/auth/AuthCard'
import { GoogleButton } from '@/components/auth/GoogleButton'
import { PasswordInput } from '@/components/auth/PasswordInput'
import { signIn } from '@/actions/auth'
import { loginSchema, type LoginFormData } from '@/lib/validations/auth'

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) })

  const onSubmit = async (data: LoginFormData) => {
    setServerError(null)
    setIsLoading(true)

    const formData = new FormData()
    formData.append('email', data.email)
    formData.append('password', data.password)

    const result = await signIn(formData)

    if (result?.error) {
      setServerError(result.error)
      setIsLoading(false)
    }
  }

  return (
    <AuthCard heading="Welcome back" subheading="Log in to your MyPrint account">
      {serverError && (
        <div className="mb-4 rounded-sm bg-danger-bg border border-danger/20 px-3 py-2 text-sm text-danger">
          {serverError}
        </div>
      )}

      <GoogleButton />

      <div className="flex items-center gap-3 my-5">
        <div className="h-px flex-1 bg-border-default" />
        <span className="text-xs text-text-tertiary">or continue with email</span>
        <div className="h-px flex-1 bg-border-default" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <label htmlFor="email" className="block text-[13px] font-medium text-text-primary mb-1.5">
            Email address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className="w-full h-11 px-3 rounded-sm border border-border-default bg-bg-input text-sm
                       text-text-primary placeholder:text-text-tertiary
                       focus:outline-none focus:border-2 focus:border-brand focus:bg-white"
            {...register('email')}
          />
          {errors.email && <p className="text-xs text-danger mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="password" className="block text-[13px] font-medium text-text-primary">
              Password
            </label>
            <a href="#" className="text-xs text-brand hover:underline">
              Forgot password?
            </a>
          </div>
          <PasswordInput id="password" autoComplete="current-password" {...register('password')} />
          {errors.password && <p className="text-xs text-danger mt-1">{errors.password.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full h-11 rounded-sm bg-brand text-white text-sm font-semibold
                     hover:bg-brand-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed
                     flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Logging in...
            </>
          ) : (
            'Log in'
          )}
        </button>
      </form>

      <p className="text-center text-sm text-text-secondary mt-6">
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="text-brand font-medium hover:underline">
          Sign up
        </Link>
      </p>
    </AuthCard>
  )
}
