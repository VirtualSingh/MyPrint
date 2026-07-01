import { CheckCircle2, TrendingUp, MessageCircle } from 'lucide-react'

interface ForVendorsProps {}

const benefits = [
  {
    text: 'More customers — reach digital-first buyers who don\'t know where to find a good print shop',
  },
  {
    text: 'No upfront cost — register for free, pay only a small commission on completed orders',
  },
  {
    text: 'Get paid on time — every order is prepaid via escrow, so you always get your money',
  },
]

const stats = [
  { value: '₹0', label: 'Upfront registration cost' },
  { value: '24h', label: 'Shop verification time' },
  { value: '100%', label: 'Orders pre-paid in escrow' },
  { value: 'Delhi NCR', label: 'Current service area' },
]

export default function ForVendors({}: ForVendorsProps) {
  return (
    <section id="for-vendors" className="py-20" style={{ backgroundColor: '#EEF4FD' }}>
      <div className="max-w-container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left — text */}
          <div className="flex-[1.2]">
            <p className="text-brand text-[11px] font-semibold tracking-[1px] uppercase mb-4">
              For Print Shops
            </p>
            <h2 className="text-[28px] font-bold text-text-primary mb-4 leading-tight">
              Grow your print shop with MyPrint
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-8">
              Stop waiting for walk-ins. Get a steady stream of verified, pre-paid orders delivered
              directly to your WhatsApp — no upfront investment required.
            </p>

            {/* Benefit bullets */}
            <ul className="flex flex-col gap-4 mb-8">
              {benefits.map((b) => (
                <li key={b.text} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-text-secondary leading-relaxed">{b.text}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="inline-flex items-center bg-brand text-white text-sm font-semibold px-6 py-3 rounded-sm hover:bg-brand-dark transition-colors"
              style={{ minHeight: '44px' }}
            >
              Register your shop
            </a>
          </div>

          {/* Right — stats card */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="bg-white rounded-lg p-6 shadow-card-hover">
              {/* Card header */}
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp size={16} className="text-brand" />
                <span className="text-[13px] font-semibold text-text-primary">
                  Why vendors love MyPrint
                </span>
              </div>

              {/* 2×2 stats grid */}
              <div className="grid grid-cols-2 gap-5 mb-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-brand leading-none mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-text-secondary">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* WhatsApp note */}
              <div className="border-t border-border-subtle pt-4 flex items-start gap-2">
                <MessageCircle size={15} className="text-brand flex-shrink-0 mt-0.5" />
                <p className="text-[12px] text-text-secondary leading-relaxed">
                  All order notifications and customer communication happen on{' '}
                  <strong className="font-semibold text-text-primary">WhatsApp</strong> — no new
                  app to learn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
