interface CategoriesProps {}

const categories = [
  { emoji: '🪪', label: 'Visiting Cards', popular: true },
  { emoji: '🖼️', label: 'Flex & Banners', popular: true },
  { emoji: '📋', label: 'Brochures', popular: false },
  { emoji: '📦', label: 'Packaging Boxes', popular: false },
  { emoji: '💌', label: 'Wedding Cards', popular: false },
  { emoji: '📌', label: 'Stickers & Labels', popular: false },
  { emoji: '👕', label: 'T-Shirts', popular: false },
  { emoji: '📚', label: 'Books & Booklets', popular: false },
]

export default function Categories({}: CategoriesProps) {
  return (
    <section className="bg-white py-20">
      <div className="max-w-container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-brand text-[11px] font-semibold tracking-[1px] uppercase mb-3">
            What We Print
          </p>
          <h2 className="text-[28px] font-bold text-text-primary mb-3">
            Browse by category
          </h2>
          <p className="text-base text-text-secondary max-w-md mx-auto">
            Select a category to start your order — we&apos;ll show you exact pricing and turnaround times.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-10">
          {categories.map((cat) => (
            <a
              key={cat.label}
              href="#"
              className="group flex flex-col items-center justify-center gap-2 bg-white border border-border-default rounded-card p-4 cursor-pointer hover:border-brand hover:shadow-card transition-all duration-150 min-h-[100px]"
            >
              <span className="text-2xl">{cat.emoji}</span>
              <span className="text-sm font-medium text-text-primary text-center leading-tight">
                {cat.label}
              </span>
              {cat.popular && (
                <span className="inline-flex items-center bg-success-bg text-success text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  Most popular
                </span>
              )}
            </a>
          ))}
        </div>

        {/* CTA button */}
        <div className="flex justify-center">
          <a
            href="#"
            className="bg-brand text-white text-sm font-semibold px-8 py-3 rounded-sm hover:bg-brand-dark transition-colors"
            style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
          >
            Place an Order
          </a>
        </div>
      </div>
    </section>
  )
}
