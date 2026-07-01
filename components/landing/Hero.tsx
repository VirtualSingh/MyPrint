import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

interface HeroProps {}

export default function Hero({}: HeroProps) {
  return (
    <section className="bg-white pt-16 pb-20 md:pt-16 md:pb-20">
      <div className="max-w-container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-8">
          {/* Left column — text */}
          <div className="flex-1 md:max-w-[52%]">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-1.5 bg-brand-light text-brand text-xs font-medium px-3 py-1 rounded-full mb-5">
              <span>🖨️</span>
              <span>Print marketplace for Delhi NCR</span>
            </div>

            {/* Headline */}
            <h1 className="text-[28px] md:text-[40px] font-bold text-text-primary leading-[1.2] mb-4">
              Get anything printed, without the back-and-forth
            </h1>

            {/* Subheadline */}
            <p className="text-base text-text-secondary leading-relaxed mb-8">
              Upload your file, get instant pricing from verified local printers,
              and track your order until it&apos;s delivered.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-4 mb-7">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-brand text-white text-sm font-semibold px-6 py-[11px] rounded-sm hover:bg-brand-dark transition-colors"
                style={{ minHeight: '44px' }}
              >
                Place an Order
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="#"
                className="text-brand text-sm hover:underline transition-colors"
              >
                Are you a printer? Register your shop
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-5">
              {[
                'Secure escrow payment',
                'Verified vendors only',
                'Real-time tracking',
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-success flex-shrink-0" />
                  <span className="text-xs text-text-secondary">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — hero image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div
              className="relative w-full max-w-[480px] mx-auto md:mx-0"
              style={{ filter: 'drop-shadow(0px 16px 48px rgba(26, 115, 232, 0.12))' }}
            >
              <Image
                src="/images/hero-image.png"
                alt="MyPrint order tracking dashboard preview"
                width={520}
                height={420}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
