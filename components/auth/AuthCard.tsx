import Link from 'next/link'

interface AuthCardProps {
  heading: string
  subheading: string
  children: React.ReactNode
}

export function AuthCard({ heading, subheading, children }: AuthCardProps) {
  return (
    <div className="min-h-screen bg-bg-section flex flex-col items-center justify-center px-4 py-10">
      <Link href="/" className="flex items-center gap-2 text-brand font-semibold text-base mb-6">
        <span className="text-xl">🖨️</span>
        <span>MyPrint</span>
      </Link>

      <div className="w-full max-w-[400px] bg-white rounded-card border border-border-default p-8">
        <h1 className="text-[20px] font-semibold text-text-primary text-center">{heading}</h1>
        <p className="text-sm text-text-secondary text-center mt-1 mb-6">{subheading}</p>
        {children}
      </div>
    </div>
  )
}
