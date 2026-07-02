'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, Check, X } from 'lucide-react'
import { AuthCard } from '@/components/auth/AuthCard'
import { GoogleButton } from '@/components/auth/GoogleButton'
import { PasswordInput } from '@/components/auth/PasswordInput'
import { signUp } from '@/actions/auth'
import { signupSchema, getPasswordStrength, type SignupFormData } from '@/lib/validations/auth'

const STRENGTH_STYLES = {
  weak: { label: 'Weak', className: 'text-danger' },
  medium: { label: 'Medium', className: 'text-warning' },
  strong: { label: 'Strong', className: 'text-success' },
}

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormData>({ resolver: zodResolver(signupSchema) })

  const password = watch('password') ?? ''
  const confirmPassword = watch('confirmPassword') ?? ''
  const strength = getPasswordStrength(password)

  const onSubmit = async (data: SignupFormData) => {
    setServerError(null)
    setIsLoading(true)

    const formData = new FormData()
    formData.append('fullName', data.fullName)
    formData.append('email', data.email)
    formData.append('phone', data.phone)
    formData.append('password', data.password)

    const result = await signUp(formData)

    if (result?.error) {
      setServerError(result.error)
      setIsLoading(false)
    }
  }

  return (
    <AuthCard heading="Create your account" subheading="Join MyPrint to place print orders online">
      {serverError && (
        <div className="mb-4 rounded-sm bg-danger-bg border border-danger/20 px-3 py-2 text-sm text-danger">
          {serverError}
        </div>
      )}

      <GoogleButton />

      <div className="flex items-center gap-3 my-5">
        <div className="h-px flex-1 bg-border-default" />
        <span className="text-xs text-text-tertiary">or sign up with email</span>
        <div className="h-px flex-1 bg-border-default" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <label htmlFor="fullName" className="block text-[13px] font-medium text-text-primary mb-1.5">
            Full name
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            className="w-full h-11 px-3 rounded-sm border border-border-default bg-bg-input text-sm
                       text-text-primary placeholder:text-text-tertiary
                       focus:outline-none focus:border-2 focus:border-brand focus:bg-white"
            {...register('fullName')}
          />
          {errors.fullName && <p className="text-xs text-danger mt-1">{errors.fullName.message}</p>}
        </div>

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
          <label htmlFor="phone" className="block text-[13px] font-medium text-text-primary mb-1.5">
            WhatsApp number
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            className="w-full h-11 px-3 rounded-sm border border-border-default bg-bg-input text-sm
                       text-text-primary placeholder:text-text-tertiary
                       focus:outline-none focus:border-2 focus:border-brand focus:bg-white"
            {...register('phone')}
          />
          {errors.phone ? (
            <p className="text-xs text-danger mt-1">{errors.phone.message}</p>
          ) : (
            <p className="text-xs text-text-tertiary mt-1">We&apos;ll send order updates to this number</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-[13px] font-medium text-text-primary mb-1.5">
            Password
          </label>
          <PasswordInput id="password" autoComplete="new-password" {...register('password')} />
          {errors.password ? (
            <p className="text-xs text-danger mt-1">{errors.password.message}</p>
          ) : (
            strength && (
              <p className={`text-xs mt-1 font-medium ${STRENGTH_STYLES[strength].className}`}>
                Password strength: {STRENGTH_STYLES[strength].label}
              </p>
            )
          )}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-[13px] font-medium text-text-primary mb-1.5">
            Confirm password
          </label>
          <div className="relative">
            <PasswordInput id="confirmPassword" autoComplete="new-password" {...register('confirmPassword')} />
            {confirmPassword && (
              <span className="absolute right-10 top-1/2 -translate-y-1/2">
                {password === confirmPassword ? (
                  <Check size={16} className="text-success" />
                ) : (
                  <X size={16} className="text-danger" />
                )}
              </span>
            )}
          </div>
          {errors.confirmPassword && (
            <p className="text-xs text-danger mt-1">{errors.confirmPassword.message}</p>
          )}
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
              <Loader2 size={16} className="animate-spin" /> Creating account...
            </>
          ) : (
            'Create account'
          )}
        </button>

        <p className="text-xs text-text-tertiary text-center">
          By signing up, you agree to our{' '}
          <a href="#" className="text-brand hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-brand hover:underline">
            Privacy Policy
          </a>
        </p>
      </form>

      <p className="text-center text-sm text-text-secondary mt-6">
        Already have an account?{' '}
        <Link href="/login" className="text-brand font-medium hover:underline">
          Log in
        </Link>
      </p>
    </AuthCard>
  )
}
