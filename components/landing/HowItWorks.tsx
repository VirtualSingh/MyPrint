import { Upload, IndianRupee, MapPin } from 'lucide-react'

interface HowItWorksProps {}

const steps = [
  {
    number: '1',
    Icon: Upload,
    title: 'Upload your file',
    body: 'PDF, PNG or JPG. Max 50MB. We check it\'s print-ready and flag any issues before a vendor sees it.',
  },
  {
    number: '2',
    Icon: IndianRupee,
    title: 'Get matched & confirm price',
    body: 'A verified local vendor reviews your order and confirms the exact price — usually within 1 hour of payment.',
  },
  {
    number: '3',
    Icon: MapPin,
    title: 'Track until delivered',
    body: 'Watch your order move from printing to your doorstep. Every status update in real time — no wondering, no calls.',
  },
]

export default function HowItWorks({}: HowItWorksProps) {
  return (
    <section id="how-it-works" className="bg-white py-20">
      <div className="max-w-container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-brand text-[11px] font-semibold tracking-[1px] uppercase mb-3">
            Simple Process
          </p>
          <h2 className="text-[28px] font-bold text-text-primary mb-3">
            How MyPrint works
          </h2>
          <p className="text-base text-text-secondary">
            Three steps from file to your door — usually within a day.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white border border-border-default rounded-card p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                {/* Step number badge */}
                <div className="w-7 h-7 bg-brand rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {step.number}
                </div>
                {/* Icon */}
                <step.Icon size={20} className="text-text-secondary" />
              </div>
              <h3 className="text-[15px] font-semibold text-text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
