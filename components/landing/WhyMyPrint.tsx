import { ShieldCheck, BadgeCheck, Activity } from 'lucide-react'

interface WhyMyPrintProps {}

const features = [
  {
    Icon: ShieldCheck,
    title: 'Escrow-protected payment',
    body: 'Your payment is held securely and only released to the vendor after you confirm delivery. Your money is never at risk.',
  },
  {
    Icon: BadgeCheck,
    title: 'Verified vendors only',
    body: 'Every print shop on MyPrint is personally vetted before they can accept orders. No random strangers — only professionals.',
  },
  {
    Icon: Activity,
    title: 'Live order tracking',
    body: 'No more wondering if your order is ready. See every status update — from printing to dispatch to delivery — in real time.',
  },
]

export default function WhyMyPrint({}: WhyMyPrintProps) {
  return (
    <section className="bg-bg-section py-20">
      <div className="max-w-container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-brand text-[11px] font-semibold tracking-[1px] uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="text-[28px] font-bold text-text-primary mb-3">
            Built around trust
          </h2>
          <p className="text-base text-text-secondary max-w-md mx-auto">
            MyPrint is designed for customers who&apos;ve been burned by unclear pricing and missing orders before.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white border border-border-default rounded-card p-6"
            >
              <feature.Icon size={22} className="text-brand mb-4" />
              <h3 className="text-[15px] font-semibold text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
